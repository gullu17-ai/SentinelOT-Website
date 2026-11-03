'use client';
import { useState } from 'react';
const links = [['Product', 'product'], ['How It Works', 'how-it-works'], ['Use Cases', 'use-cases'], ['Research', 'research'], ['About', 'about']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
    <div className="nav-shell">
      <a className="brand" href="#top" aria-label="SentinelOT home" onClick={() => setOpen(false)}><img src="/media/sentinelot-logo.png" alt="SentinelOT: Operational Technology Security" width="700" height="115" /></a>
      <button id="menu-toggle" className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '×' : '☰'}</span></button>
      <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
        {links.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{name}</a>)}
        <a href="#demo" className="button small" onClick={() => setOpen(false)}>Watch Demo</a>
      </nav>
    </div>
  </header>;
}
