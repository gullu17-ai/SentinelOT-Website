'use client';
import { useRef, useState } from 'react';
import { views } from '@/lib/content';
export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [retry, setRetry] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const view = views[active];
  function select(index: number, focus = false) { if (index !== active) { setActive(index); setLoaded(false); setError(false); } if (focus) document.getElementById(`tab-${views[index].id}`)?.focus(); }
  return <div className="gallery">
    <div className="tabs" role="tablist" aria-label="Dashboard views" onKeyDown={e => {
      let next = active;
      if (e.key === 'ArrowRight') next = (active + 1) % views.length;
      else if (e.key === 'ArrowLeft') next = (active + views.length - 1) % views.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = views.length - 1;
      else return;
      e.preventDefault(); select(next, true);
    }}>
      {views.map((v, i) => <button key={v.id} id={`tab-${v.id}`} role="tab" aria-selected={i === active} aria-controls={`panel-${v.id}`} tabIndex={i === active ? 0 : -1} onClick={() => select(i)}>{v.name}</button>)}
    </div>
    <div role="tabpanel" id={`panel-${view.id}`} aria-labelledby={`tab-${view.id}`} tabIndex={0}>
      <div className="gallery-toolbar"><p>{view.description}</p>{view.image && !error && <button className="text-button" onClick={() => dialog.current?.showModal()}>Expand screenshot <span aria-hidden="true">⤢</span></button>}</div>
      {view.image ? <div className="screenshot-frame" aria-busy={!loaded && !error}>
        {!loaded && !error && <p className="image-message" role="status">Loading lab screenshot…</p>}
        {error ? <p className="image-message" role="alert">This screenshot could not load. <button onClick={() => { setError(false); setLoaded(false); setRetry(retry + 1); }}>Try again</button></p> : <img key={`${view.image}-${retry}`} src={view.image} alt={view.alt} width="1548" height="684" onLoad={() => setLoaded(true)} onError={() => setError(true)} />}
      </div> : <div className="missing-view"><span className="eyebrow">Evidence pending</span><h3>Local matching. Explicit uncertainty.</h3><p>The prototype includes offline vulnerability matching. A verified screenshot of this view has not yet been supplied.</p><p>Results distinguish known matches from missing identity, firmware or CPE mapping. No known match is not proof that a device is safe.</p><a href="#research" className="text-link">Read the evidence and limitations</a></div>}
    </div>
    <div className="gallery-caption"><span>Research lab captures · October 2026</span><span>Static evidence. No live network connection.</span></div>
    <dialog ref={dialog} className="image-dialog" onClick={e => { if (e.target === dialog.current) dialog.current?.close(); }}>
      <div className="dialog-bar"><strong>{view.name}</strong><button className="button small" onClick={() => dialog.current?.close()}>Close</button></div>
      <p>Scroll horizontally on small screens to inspect the original capture.</p>
      <div className="full-image">{view.image && <img src={view.image} alt={view.alt} />}</div>
    </dialog>
  </div>;
}
