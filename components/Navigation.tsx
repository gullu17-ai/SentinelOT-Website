'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { Brand } from './SiteBrand';
const links = [['Home', '/'], ['Product', '/product/'], ['Research', '/research/'], ['About', '/about/']];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }}><div className="nav-shell shell">
    <Link className="brand" href="/" aria-label="SentinelOT home" onClick={() => setOpen(false)}><Brand /></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
      {links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link href="/about/#contact" className="button small" onClick={() => setOpen(false)}>Get in touch <span aria-hidden="true">↗</span></Link>
    </nav>
  </div></header>;
}
