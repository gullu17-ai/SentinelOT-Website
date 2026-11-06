import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Industrial Cybersecurity Resources & Datasheets | SentinelOT',
  description: 'Access public datasheets, technical briefs, solution papers, and research on passive industrial network visibility and air-gapped monitoring.',
};

const publicAssets = [
  {
    type: 'PUBLIC DATASHEET (PDF)',
    title: 'SentinelOT Sensor Appliance Solution Overview (Rev 1.2)',
    desc: 'High-level architectural summary covering hardware form factors (DIN-rail and 1U rack-mount), passive deployment models, supported industrial protocol families, and core detection capabilities.',
    action: 'Download Public Datasheet (PDF)',
    href: '/contact?request=datasheet',
    badge: 'MARKETING DATASHEET',
  },
  {
    type: 'TECHNICAL BRIEF',
    title: 'Optical TAP vs. Switch Mirroring in Safety-Critical OT Networks',
    desc: 'An engineering comparison detailing packet timing, buffer overflow risks, and physical fault-isolation characteristics between passive optical splitters and managed switch SPAN ports.',
    action: 'Read Technical Brief →',
    href: '/how-it-works',
    badge: 'WHITE PAPER',
  },
  {
    type: 'RESEARCH ABSTRACT',
    title: 'On-Device Protocol Parsing in Constrained Air-Gapped Appliances',
    desc: 'An exploration of deep packet inspection methodologies designed for industrial Ethernet environments with zero reliance on cloud computation or external signature feeds.',
    action: 'Review Research Context →',
    href: '/how-it-works',
    badge: 'ACADEMIC ABSTRACT',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">Technical Briefs, Datasheets & Research.</h1>
            <p className="subpage-lead">
              Explore our public technical publications, protocol analysis benchmarks, and operational briefs 
              detailing passive monitoring strategies for critical operational environments.
            </p>
          </div>
        </section>

        {/* Public Documents Grid */}
        <section className="section shell" aria-labelledby="public-docs-heading">
          <div className="section-heading">
            <div>
<h2 id="public-docs-heading">Available Technical Publications.</h2>
            </div>
            <p>
              Download sanitized solution overviews and architecture summaries approved for public distribution.
            </p>
          </div>

          <div className="doc-grid">
            {publicAssets.map(asset => (
              <article key={asset.title} className="doc-card">
                <div>
                  <span className="doc-badge">{asset.badge}</span>
                  <h3>{asset.title}</h3>
                  <p>{asset.desc}</p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--line)' }}>
                  <Link href={asset.href} className="text-link">
                    {asset.action}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Restricted Documents Portal Banner */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box" style={{ background: 'var(--dark-bg)', color: 'var(--dark-text)', borderColor: 'var(--dark-border)' }}>
            <div>
<h2 style={{ color: '#fff' }}>Detailed Hardware Specs & Hardening Guides</h2>
              <p style={{ color: 'var(--dark-muted)', maxWidth: '38rem' }}>
                Are you an active system integrator, certified engineering partner, or prospective pilot customer? 
                Access to detailed pinouts, environmental thermal ratings, API schemas, and deployment manuals is controlled under our Responsible Information Disclosure policy.
              </p>
            </div>
            <div>
              <Link href="/technical-docs" className="button">
                Request Portal Access
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>Technical publications and defensible research for industrial security teams.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Resources</span>
          <span>
            <Link href="/technical-docs" style={{ marginRight: '1rem' }}>Gated Portal</Link>
            <Link href="/trust">Security & Trust</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
