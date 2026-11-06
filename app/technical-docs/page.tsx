import Link from 'next/link';
import Navigation from '@/components/Navigation';
import TechnicalDocsForm from '@/components/TechnicalDocsForm';

export const metadata = {
  title: 'Gated Technical Documentation | Verified Portal Access',
  description: 'Request verified access to SentinelOT engineering schematics, hardware deployment guides, interface pinouts, and system hardening documentation.',
};

const restrictedDocs = [
  {
    id: 'DOC-HW-01',
    title: 'Appliance Mechanical & Environmental Specification',
    scope: 'Detailed physical dimensions, thermal dissipation curves (-20°C to +70°C), redundant power feed requirements, shock/vibration tolerance ratings, and MTBF documentation.',
    access: 'RESTRICTED / VERIFIED OPERATORS ONLY',
  },
  {
    id: 'DOC-DEP-02',
    title: 'Substation & Plant Network Deployment Guide',
    scope: 'Optical split ratio calculations (80/20 vs 70/30), multi-tier SPAN buffer sizing, dual-NIC physical segregation verification, and non-intrusive commissioning procedures.',
    access: 'RESTRICTED / VERIFIED OPERATORS ONLY',
  },
  {
    id: 'DOC-INT-03',
    title: 'Syslog Normalization & REST API Specification',
    scope: 'Complete data dictionary, JSON event schema mappings for Modbus/DNP3/S7comm alert structures, local SQLite/PostgreSQL schema export, and SIEM CEF field mapping.',
    access: 'RESTRICTED / INTEGRATION PARTNERS ONLY',
  },
  {
    id: 'DOC-SEC-04',
    title: 'System Appliance Hardening & Offline Key Management',
    scope: 'Secure boot configuration, read-only root filesystem architecture, offline GPG-signed firmware update procedures, and physical anti-tamper storage policies.',
    access: 'RESTRICTED / PILOT CUSTOMERS ONLY',
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
<h1 className="subpage-heading">Verified Technical Documentation.</h1>
            <p className="subpage-lead">
              To protect the intellectual property of SentinelOT and prevent competitive reverse-engineering of our pre-launch 
              hardware appliance, engineering manuals and hardware specifications are restricted to verified 
              operators, certified partners, and qualified pilot participants.
            </p>
          </div>
        </section>

        {/* Restricted Document Catalog */}
        <section className="section shell" aria-labelledby="catalog-heading">
          <div className="section-heading">
            <div>
<h2 id="catalog-heading">Restricted Technical Assets.</h2>
            </div>
            <p>
              Review the technical scopes of available engineering packages before submitting your verification request.
            </p>
          </div>

          <div className="doc-grid">
            {restrictedDocs.map(doc => (
              <article key={doc.id} className="doc-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="doc-badge">{doc.id}</span>
                    <span className="doc-lock">🔒 {doc.access}</span>
                  </div>
                  <h3>{doc.title}</h3>
                  <p>{doc.scope}</p>
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', fontSize: '0.75rem', color: 'var(--muted)' }}>
                  Availability: Dispatched via encrypted link upon domain verification.
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Request Form Container */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="form-heading">
          <div className="secure-form-container">
            <div className="secure-form-header">
<h3 id="form-heading">Request Verified Documentation Access</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Requests are reviewed by our engineering security team. Generic consumer emails (@gmail, @yahoo, @hotmail) are automatically rejected.
              </p>
            </div>

            <TechnicalDocsForm />
          </div>
        </section>

        {/* 3-Step Verification Process Explanation */}
        <section className="section shell" style={{ paddingTop: '0' }}>
          <div className="section-heading">
            <div>
<h2>Vetting & Delivery Workflow.</h2>
            </div>
            <p>
              How our engineering team protects proprietary hardware designs while supporting legitimate operators.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Domain & Role Verification</h3>
              <p>Your work email domain and operational role are validated against commercial enterprise registries within 1 business day.</p>
            </article>

            <article className="pillar-card">
<h3>Engineering Clearance</h3>
              <p>A member of our technical security team reviews the stated evaluation purpose to confirm legitimate operator or integrator affiliation.</p>
            </article>

            <article className="pillar-card">
<h3>Encrypted Secure Delivery</h3>
              <p>Upon approval, a time-limited (48-hour expiration), single-use encrypted delivery token is dispatched directly to your corporate inbox.</p>
            </article>

            <article className="pillar-card">
<h3>Dedicated Technical Session</h3>
              <p>An optional 30-minute technical session with a systems architect is scheduled to assist with optical TAP deployment planning.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT Gated Technical Documentation Portal: Secure corporate domain verification.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Responsible Information Disclosure</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Security Policy</Link>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
