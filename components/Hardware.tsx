'use client';
import { useEffect, useRef, useState } from 'react';
import type { HardwareController } from '@/lib/hardware-scene';

export default function Hardware() {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<HardwareController | null>(null);
  const mounted = useRef(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; controller.current?.dispose(); controller.current = null; };
  }, []);
  async function start() {
    if (!host.current || status !== 'idle') return;
    setStatus('loading');
    try {
      const { createHardwareScene } = await import('@/lib/hardware-scene');
      if (!mounted.current || !host.current) return;
      controller.current = createHardwareScene(host.current, value => {
        if (mounted.current) setPlaying(value);
      }, () => { if (mounted.current) setStatus('error'); });
      setStatus('ready');
    } catch { if (mounted.current) setStatus('error'); }
  }
  function useStatic() { controller.current?.dispose(); controller.current = null; setPlaying(false); setStatus('idle'); }
  return <section id="hardware" className="hardware section"><div className="shell hardware-layout">
    <div className="hardware-copy"><p className="eyebrow">The hardware direction</p><h2>Local intelligence.<br />A smaller footprint.</h2><p>A Raspberry Pi 5–inspired exploration for a future compact sensor. Inspect the concept in 3D, or keep the lightweight static view.</p><span className="square-label">Illustrative concept · Hardware deployment is planned</span><div className="hardware-context"><h3>Designed around separation</h3><p>Copied OT traffic would reach a capture interface, with operator access on a separate management connection. Interfaces, cooling and capture performance still need hardware validation.</p></div><p className="small-copy">Simplified geometry, not exact CAD or a completed appliance. No Raspberry Pi endorsement is implied.</p><a className="text-link" href="/research/#roadmap">See the hardware roadmap →</a></div>
    <div className="hardware-viewer"><div className="hardware-topline"><span>Sensor concept / Raspberry Pi 5</span><span>{status === 'ready' ? 'Interactive 3D' : 'Static concept'}</span></div>
      <div ref={host} className={`hardware-canvas${status === 'ready' ? ' is-interactive' : ''}`} tabIndex={status === 'ready' ? 0 : -1} role="group" aria-label="Hardware concept. When 3D is enabled: drag to rotate, pinch or scroll to zoom, arrow keys to turn, plus or minus to zoom, R to reset." onKeyDown={event => {
        if (status !== 'ready') return;
        const actions: Record<string, () => void> = {
          ArrowLeft: () => controller.current?.rotate(0, -.2), ArrowRight: () => controller.current?.rotate(0, .2),
          ArrowUp: () => controller.current?.rotate(-.2, 0), ArrowDown: () => controller.current?.rotate(.2, 0),
          '+': () => controller.current?.zoom(.85), '=': () => controller.current?.zoom(.85), '-': () => controller.current?.zoom(1.15),
          r: () => controller.current?.reset(), R: () => controller.current?.reset()
        };
        if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
      }}>
        {status !== 'ready' && <img className="hardware-static" src="/media/hardware-concept.svg" alt="Illustrative top view of a proposed compact sensor board. Not a photograph of built hardware." width="720" height="440" loading="lazy" />}
        {status === 'idle' && <div className="hardware-message"><button className="button" onClick={start}>Explore in 3D <span aria-hidden="true">↗</span></button><p>Optional interactive view. Drag, turn and inspect.</p></div>}
        {status === 'loading' && <div className="hardware-message" role="status"><strong>Loading the interactive model…</strong><p>The static illustration remains available.</p></div>}
        {status === 'error' && <div className="hardware-message" role="status"><strong>Showing the static concept.</strong><p>3D is unavailable in this browser. The proposed capture and management paths are described alongside.</p></div>}
      </div>
      {status === 'ready' && <><div className="hardware-controls" aria-label="Hardware controls"><button onClick={() => controller.current?.setPlaying(!playing)} aria-pressed={playing}>{playing ? 'Pause rotation' : 'Auto-rotate'}</button><button onClick={() => controller.current?.flip()}>Flip board</button><button onClick={() => controller.current?.reset()}>Reset</button><button aria-label="Zoom in" onClick={() => controller.current?.zoom(.85)}>+</button><button aria-label="Zoom out" onClick={() => controller.current?.zoom(1.15)}>−</button><button onClick={useStatic}>Static view</button></div><p className="hardware-hint">Drag to rotate · Pinch or scroll to zoom · Arrow keys to turn</p></>}
    </div>
  </div></section>;
}
