'use client';

import { useEffect, useRef, useState } from 'react';

export default function NetworkAnimation() {
  const frame = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let onScreen = false;
    const syncVisibility = () => setVisible(onScreen && !document.hidden);
    const syncMotion = () => setReduced(motion.matches);
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      syncVisibility();
    });
    if (frame.current) observer.observe(frame.current);
    syncMotion();
    motion.addEventListener('change', syncMotion);
    document.addEventListener('visibilitychange', syncVisibility);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', syncMotion);
      document.removeEventListener('visibilitychange', syncVisibility);
    };
  }, []);

  return <figure ref={frame} className="network-animation" data-running={!paused && !reduced && visible} aria-label="Illustration of passive industrial network monitoring">
    <div className="network-animation-bar"><span>One network. A separate view.</span><button type="button" disabled={reduced} aria-pressed={paused || reduced} onClick={() => setPaused(value => !value)}>{reduced ? 'Reduced motion' : paused ? 'Play animation' : 'Pause animation'}<span aria-hidden="true">{reduced || paused ? '▷' : 'Ⅱ'}</span></button></div>
    <div className="network-animation-top">
      <div className="network-animation-device"><div className="network-animation-photo network-animation-hmi"><img src="/media/architecture/hmi-panel.jpg" alt="" width="640" height="359" /></div><strong>HMI / SCADA</strong></div>
      <div className="network-animation-wire" aria-hidden="true"><span /><span /></div>
      <div className="network-animation-device"><div className="network-animation-photo network-animation-switch"><img src="/media/architecture/managed-switch.jpg" alt="" width="456" height="456" /></div><strong>Managed switch</strong></div>
      <div className="network-animation-wire" aria-hidden="true"><span /><span /></div>
      <div className="network-animation-device"><div className="network-animation-photo"><img src="/media/architecture/plc-controller.png" alt="" width="1000" height="891" /></div><strong>PLC / RTU</strong></div>
    </div>
    <div className="network-animation-copy"><div className="network-animation-branch" aria-hidden="true"><span /></div><p>Mirrored traffic <span>Capture only</span></p></div>
    <div className="network-animation-sensor"><img src="/media/sentinelot-mark.svg" alt="" width="60" height="44" /><div><strong>SentinelOT</strong><span>Passive monitoring</span></div></div>
    <figcaption>Illustrative traffic flow · Not live monitoring<a href="/product/#how-it-works">See how it works <span aria-hidden="true">↗</span></a></figcaption>
  </figure>;
}
