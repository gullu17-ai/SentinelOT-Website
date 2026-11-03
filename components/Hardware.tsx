'use client';
import { useEffect, useRef, useState } from 'react';
import type { HardwareController } from '@/lib/hardware-scene';
export default function Hardware() {
 const host = useRef<HTMLDivElement>(null);
 const controller = useRef<HardwareController | null>(null);
 const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
 const [playing, setPlaying] = useState(false);
 useEffect(() => {
  const element = host.current;
  if (!element) return;
  let disposed = false;
  const observer = new IntersectionObserver(async entries => {
   if (!entries[0].isIntersecting) return;
   observer.disconnect();
   try {
    const { createHardwareScene } = await import('@/lib/hardware-scene');
    if (disposed) return;
    controller.current = createHardwareScene(element, value => { if (!disposed) setPlaying(value); }, () => { if (!disposed) setStatus('error'); });
    setStatus('ready');
   } catch { if (!disposed) setStatus('error'); }
  }, { rootMargin: '300px' });
  observer.observe(element);
  return () => { disposed = true; observer.disconnect(); controller.current?.dispose(); controller.current = null; };
 }, []);
 function rotate(x: number, y: number) { controller.current?.rotate(x, y); }
 return <section id="hardware" className="hardware section" aria-labelledby="hardware-heading"><div className="shell hardware-layout">
  <div className="hardware-copy"><span className="eyebrow">Hardware exploration</span><h2 id="hardware-heading">Local intelligence.<br />A smaller footprint.</h2><p>A Raspberry Pi 5–inspired concept for a future SentinelOT sensor. Turn the board over, inspect its interfaces and explore the hardware direction.</p><span className="square-label">Interactive concept · Not a built appliance</span><div className="hardware-context"><h3>Designed around separation</h3><p>A future installation would receive copied OT traffic on a capture interface, with operator access on a separate management connection. Interface provisioning, cooling and capture performance still need hardware validation.</p></div><p className="small-copy">Illustrative geometry, not an exact engineering model or a claim of Raspberry Pi endorsement.</p><a href="#research" className="text-link">Review the hardware roadmap</a></div>
  <div className="hardware-viewer"><div className="hardware-topline"><span>Sensor concept / Raspberry Pi 5</span><span>Interactive 3D</span></div>
   <div ref={host} className="hardware-canvas" tabIndex={0} role="group" aria-label="Interactive hardware concept. Drag to rotate freely, pinch or scroll to zoom. Arrow keys rotate, plus and minus zoom, R resets." onKeyDown={event => {
    const actions: Record<string, () => void> = { ArrowLeft: () => rotate(0, -.2), ArrowRight: () => rotate(0, .2), ArrowUp: () => rotate(-.2, 0), ArrowDown: () => rotate(.2, 0), '+': () => controller.current?.zoom(.85), '=': () => controller.current?.zoom(.85), '-': () => controller.current?.zoom(1.15), r: () => controller.current?.reset(), R: () => controller.current?.reset() };
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
   }}>
    {status === 'loading' && <p className="hardware-message" role="status">Preparing interactive hardware…</p>}
    {status === 'error' && <div className="hardware-message" role="status"><strong>3D is unavailable in this browser.</strong><p>The concept is a compact single-board sensor. Its proposed capture and management paths are explained alongside this view.</p></div>}
   </div>
   {status === 'ready' && <><div className="hardware-controls" aria-label="Hardware controls"><button onClick={() => controller.current?.setPlaying(!playing)} aria-pressed={playing}>{playing ? 'Pause rotation' : 'Auto-rotate'}</button><button onClick={() => controller.current?.flip()}>Flip board</button><button onClick={() => controller.current?.reset()}>Reset view</button><button aria-label="Zoom in" onClick={() => controller.current?.zoom(.85)}>+</button><button aria-label="Zoom out" onClick={() => controller.current?.zoom(1.15)}>−</button></div><p className="hardware-hint">Drag to rotate · Scroll or pinch to zoom · Arrow keys to turn</p></>}
  </div>
 </div></section>;
}
