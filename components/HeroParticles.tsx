'use client';

import { useEffect, useRef, useState } from 'react';

type Particle = { homeX: number; homeY: number; x: number; y: number; seed: number; lime: boolean; vx: number; vy: number; activity: number };

export default function HeroParticles() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const control = useRef<((paused: boolean) => void) | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const surface = canvas.current;
    const host = surface?.parentElement;
    if (!surface || !host) return;
    const context = surface.getContext('2d');
    if (!context) return;
    const preference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const shimmer = Array.from({ length: 360 }, (_, hue) => `hsl(${hue}, 76%, 38%)`);
    let particles: Particle[] = [];
    let frame = 0;
    let width = 0;
    let height = 0;
    let inView = false;
    let stopped = false;
    let lastFrame = 0;
    let elapsed = 0;
    let center = { x: 0, y: 0 };
    let pointer: { x: number; y: number } | null = null;

    function paint(step = 1) {
      context!.clearRect(0, 0, width, height);
      if (!preference.matches) return;
      const time = elapsed / 1000;
      const target = pointer || { x: width * .5 + Math.sin(time * .36) * width * .055, y: height * .49 + Math.cos(time * .42) * 18 };
      const follow = 1 - Math.pow(.95, step);
      center.x += (target.x - center.x) * follow;
      center.y += (target.y - center.y) * follow;
      const radius = Math.min(width * .18, height * .37, 165) + Math.sin(time * .8) * 15 + Math.cos(time * 1.7) * 7;
      const damping = Math.pow(.82, step);
      context!.lineCap = 'round';
      particles.forEach(particle => {
        const dx = particle.homeX - center.x;
        const dy = particle.homeY - center.y;
        const distance = Math.hypot(dx, dy) || 1;
        const angle = Math.atan2(dy, dx);
        const edge = radius + Math.sin(angle * 3 + time * .55) * 13 + Math.cos(angle * 5 - time * .35) * 6;
        const band = Math.exp(-Math.pow((distance - edge) / 30, 2));
        const inner = Math.max(0, 1 - distance / Math.max(edge, 1));
        const flowX = Math.sin(particle.homeY * .014 + time * .35) + Math.cos(particle.homeX * .009 + time * .21 + particle.seed);
        const flowY = Math.cos(particle.homeX * .012 - time * .29) + Math.sin(particle.homeY * .008 + time * .26 + particle.seed);
        const scatter = band * (25 + flowX * 8) + inner * 18;
        const curl = band * flowY * 14 + inner * flowX * 6;
        const targetX = particle.homeX + dx / distance * scatter - dy / distance * curl + flowX * 6;
        const targetY = particle.homeY + dy / distance * scatter + dx / distance * curl + flowY * 6;
        particle.vx = (particle.vx + (targetX - particle.x) * .022 * step) * damping;
        particle.vy = (particle.vy + (targetY - particle.y) * .022 * step) * damping;
        particle.x += particle.vx * step;
        particle.y += particle.vy * step;
        particle.activity += (Math.min(1, band + inner * .18) - particle.activity) * Math.min(.1 * step, 1);
        const heading = angle + flowX * .6 + Math.atan2(particle.vy, particle.vx) * .2;
        const speed = Math.min(Math.hypot(particle.vx, particle.vy), 3);
        const length = 1.7 + particle.seed + particle.activity * (2.5 + speed * .9);
        const halfX = Math.cos(heading) * length / 2;
        const halfY = Math.sin(heading) * length / 2;
        context!.globalAlpha = .24 + particle.activity * .7;
        const hue = Math.floor(((110 + time * 12 + angle * 180 / Math.PI + flowX * 30 + particle.seed * 50) % 360 + 360) % 360);
        context!.strokeStyle = particle.lime || particle.activity > .12 ? shimmer[hue] : '#397c79';
        context!.lineWidth = 1.1 + particle.activity * .65;
        context!.beginPath();
        context!.moveTo(particle.x - halfX, particle.y - halfY);
        context!.lineTo(particle.x + halfX, particle.y + halfY);
        context!.stroke();
      });
      context!.globalAlpha = 1;
    }
    function animate(time: number) {
      frame = 0;
      if (!preference.matches || !inView || document.hidden || stopped) return;
      const delta = time - lastFrame;
      if (delta >= 1000 / 30) {
        const step = Math.min(delta / 16.67, 3);
        elapsed += Math.min(delta, 50);
        lastFrame = time;
        paint(step);
      }
      frame = requestAnimationFrame(animate);
    }
    function schedule() {
      if (!frame && preference.matches && inView && !document.hidden && !stopped) {
        lastFrame = performance.now();
        frame = requestAnimationFrame(animate);
      }
    }
    function reset() {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      particles = [];
      if (!preference.matches) { surface!.width = 1; surface!.height = 1; return; }
      width = host!.clientWidth;
      height = host!.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      surface!.width = Math.round(width * ratio);
      surface!.height = Math.round(height * ratio);
      context!.setTransform(ratio, 0, 0, ratio, 0, 0);
      center = { x: width / 2, y: height / 2 };
      const count = Math.min(1800, Math.max(240, Math.round(width * height / 300)));
      const columns = Math.ceil(Math.sqrt(count * width / Math.max(height, 1)));
      const rows = Math.ceil(count / columns);
      let seed = 19;
      function random() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
      for (let index = 0; index < count; index++) {
        const homeX = ((index % columns) + .15 + random() * .7) * width / columns;
        const homeY = (Math.floor(index / columns) + .15 + random() * .7) * height / rows;
        particles.push({ homeX, homeY, x: homeX, y: homeY, seed: random(), lime: index % 5 === 0, vx: 0, vy: 0, activity: 0 });
      }
      paint();
      schedule();
    }
    function move(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || !preference.matches || stopped) return;
      const bounds = host!.getBoundingClientRect();
      pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    }
    function leave() { pointer = null; }
    function visibility() {
      cancelAnimationFrame(frame);
      frame = 0;
      pointer = null;
      schedule();
    }
    control.current = value => {
      stopped = value;
      cancelAnimationFrame(frame);
      frame = 0;
      schedule();
    };
    const resize = new ResizeObserver(reset);
    const intersection = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      visibility();
    });
    reset();
    resize.observe(host);
    intersection.observe(host);
    host.addEventListener('pointermove', move);
    host.addEventListener('pointerleave', leave);
    preference.addEventListener('change', reset);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      cancelAnimationFrame(frame);
      control.current = null;
      resize.disconnect();
      intersection.disconnect();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
      preference.removeEventListener('change', reset);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  return <><canvas ref={canvas} className="hero-particles" aria-hidden="true" /><button type="button" className="hero-effects-toggle" aria-pressed={paused} onClick={() => { const next = !paused; control.current?.(next); setPaused(next); }}>{paused ? 'Play background' : 'Pause background'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button></>;
}
