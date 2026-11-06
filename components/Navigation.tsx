'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['Home', '/'],
  ['Product', '/product'],
  ['Architecture', '/how-it-works'],
  ['Solutions', '/solutions'],
  ['Trust', '/trust'],
  ['Resources', '/resources'],
  ['Partners', '/partners'],
  ['Company', '/company'],
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="SentinelOT home" onClick={() => setOpen(false)}>
          <img src="/media/sentinelot-logo.png" alt="SentinelOT: Operational Technology Security" width="700" height="115" />
        </Link>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
          {links.map(([name, href]) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? 'nav-link is-active' : 'nav-link'}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            );
          })}
          <Link href="/contact" className="button small" onClick={() => setOpen(false)}>
            Apply for Pilot
          </Link>
        </nav>
      </div>
    </header>
  );
}
