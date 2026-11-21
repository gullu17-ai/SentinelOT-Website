'use client';

import { useEffect, useRef, useState } from 'react';

type Particle = { homeX: number; homeY: number; x: number; y: number; seed: number; lime: boolean };

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
    const shimmer = Array.from({ length: 360 }, (_, hue) => `hsl(${hue}, 72%, 42%)`);
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
      center.x += (target.x - center.x) * Math.min(.075 * step, 1);
      center.y += (target.y - center.y) * Math.min(.075 * step, 1);
      const radius = Math.min(width * .22, height * .39, 195) + Math.sin(time * 1.25) * 9;
      context!.lineCap = 'round';
      particles.forEach(particle => {
        const dx = particle.homeX - center.x;
        const dy = particle.homeY - center.y;
        const distance = Math.hypot(dx, dy) || 1;
        const radialX = dx / distance;
        const radialY = dy / distance;
        const band = Math.exp(-Math.pow((distance - radius) / 32, 2));
        const inner = Math.max(0, 1 - distance / radius);
        const scatter = band * 55 + inner * 38;
        const curl = Math.sin(time * .8 + particle.seed * 6) * band * 13;
        const targetX = particle.homeX + radialX * scatter - radialY * curl;
        const targetY = particle.homeY + radialY * scatter + radialX * curl;
        particle.x += (targetX - particle.x) * Math.min(.13 * step, 1);
        particle.y += (targetY - particle.y) * Math.min(.13 * step, 1);
        const angle = Math.atan2(dy, dx) + Math.sin(time + particle.seed * 10) * .28;
        const length = 1.4 + band * (4 + particle.seed * 3);
        const halfX = Math.cos(angle) * length / 2;
        const halfY = Math.sin(angle) * length / 2;
        context!.globalAlpha = .07 + band * .76 + inner * .07;
        const hue = Math.floor((110 + time * 24 + Math.atan2(dy, dx) * 180 / Math.PI + particle.seed * 35 + 360) % 360);
        context!.strokeStyle = particle.lime || band > .16 ? shimmer[hue] : '#397c79';
        context!.lineWidth = .9 + band * .65;
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
      const count = Math.min(900, Math.max(200, Math.round(width * height / 480)));
      const columns = Math.ceil(Math.sqrt(count * width / Math.max(height, 1)));
      const rows = Math.ceil(count / columns);
      let seed = 19;
      function random() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
      for (let index = 0; index < count; index++) {
        const homeX = ((index % columns) + .15 + random() * .7) * width / columns;
        const homeY = (Math.floor(index / columns) + .15 + random() * .7) * height / rows;
        particles.push({ homeX, homeY, x: homeX, y: homeY, seed: random(), lime: index % 5 === 0 });
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
