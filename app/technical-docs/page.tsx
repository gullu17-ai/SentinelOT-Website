import Link from 'next/link';
import Navigation from '@/components/Navigation';
import TechnicalDocsForm from '@/components/TechnicalDocsForm';

export const metadata = {
  title: 'Hardware & Deployment Documentation | SentinelOT',
  description: 'Hardware specifications, optical TAP deployment manuals, and SIEM integration documentation for engineers and operators.',
};

const technicalDocuments = [
  {
    title: 'Mechanical & Power Specifications',
    category: 'Hardware',
    scope: 'Enclosure dimensions for DIN-rail and 1U rack configurations, operating temperatures (-20°C to +70°C), power draw, and redundant feed wiring.',
  },
  {
    title: 'TAP Installation & Network Commissioning',
    category: 'Deployment',
    scope: 'Optical split ratio selection (80/20, 70/30), switch mirror port configuration, and physical receive-only cable verification.',
  },
  {
    title: 'Event Normalization & SIEM Schema',
    category: 'Integration',
    scope: 'Field definitions for normalized Modbus, DNP3, and S7comm events, CEF and Syslog mappings, and local database export format.',
  },
  {
    title: 'Sensor Appliance Hardening Guide',
    category: 'Security',
    scope: 'Secure boot verification, read-only root partition maintenance, and offline signed firmware update installation.',
  },
];

export default function TechnicalDocsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
            <h1 className="subpage-heading">Hardware & Deployment Documentation.</h1>
            <p className="subpage-lead">
              Hardware schematics, optical TAP installation guides, and integration specifications for engineers, 
              facility operators, and integration partners.
            </p>
          </div>
        </section>

        {/* Document List */}
        <section className="section shell" aria-labelledby="docs-list-heading">
          <div className="section-heading">
            <div>
              <h2 id="docs-list-heading">Available Documentation Packages.</h2>
            </div>
            <p>
              Detailed technical packages shared with operators and pilot participants.
            </p>
          </div>

          <div className="responsive-card-grid" style={{ marginBottom: '3rem' }}>
            {technicalDocuments.map(doc => (
              <article key={doc.title} style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', display: 'block', marginBottom: '0.5rem' }}>
                  {doc.category}
                </span>
                <h3 style={{ fontSize: '1.1875rem', marginBottom: '0.75rem', color: 'var(--ink)' }}>{doc.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--muted)' }}>{doc.scope}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Request Form Container */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="form-heading">
          <div className="secure-form-container">
            <div className="secure-form-header">
              <h2 id="form-heading" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Request Engineering Documentation</h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
                Detailed pinouts, mounting dimensions, and firmware guides are provided to verified facility operators, system integrators, and pilot evaluators under mutual NDA.
              </p>
            </div>

            <TechnicalDocsForm />
          </div>
        </section>

        {/* How Access Works */}
        <section className="section shell" style={{ paddingTop: '0' }}>
          <div className="section-heading">
            <div>
              <h2>How Documentation Requests Work.</h2>
            </div>
            <p>
              Direct delivery from our engineering team to your facility.
            </p>
          </div>

          <div className="steps-grid-3">
            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>1. Submit Work Details</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--muted)' }}>
                Tell us your organization and which document packages you need for your facility review or pilot planning.
              </p>
            </div>

            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>2. Engineering Review</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--muted)' }}>
                Our team confirms the request and verifies the facility requirements within one business day.
              </p>
            </div>

            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
              <h3 style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>3. Secure Delivery</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--muted)' }}>
                We send the requested PDF engineering packages directly to your corporate work email.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT Technical Documentation: Deployment and engineering specifications.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Engineering Documentation</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Security Policy</Link>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
