import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Request a Private Pilot | SentinelOT Evaluation Program',
  description: 'Apply for the SentinelOT Private Pilot Program. Non-intrusive hardware evaluation for qualified critical infrastructure operators.',
};

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">Apply for the SentinelOT Private Pilot.</h1>
            <p className="subpage-lead">
              We are currently deploying pre-launch hardware sensor appliances to select critical infrastructure operators, 
              municipal utilities, and industrial enterprises across the Middle East, Europe, and North America.
            </p>
          </div>
        </section>

        {/* Pilot Criteria & Application Grid */}
        <section className="section shell" aria-labelledby="criteria-heading">
          <div className="section-heading">
            <div>
<h2 id="criteria-heading">Pilot requirements.</h2>
            </div>
            <p>
              To ensure rigorous technical validation, our private pilot evaluations are structured around clear operational boundaries.
            </p>
          </div>

          <div className="stat-grid" style={{ marginBlock: '1.5rem' }}>
            <article className="stat-card">
<h3 className="stat-title" style={{ marginTop: '0.75rem' }}>Field Network Profile</h3>
              <p className="stat-desc">Target network utilizes standard industrial Ethernet protocols: Modbus TCP, DNP3, Siemens S7comm, or Ethernet/IP.</p>
            </article>

            <article className="stat-card">
<h3 className="stat-title" style={{ marginTop: '0.75rem' }}>Passive Capture Point</h3>
              <p className="stat-desc">Availability of an optical network TAP or managed switch SPAN/mirror port across Purdue Levels 1, 2, or 3.</p>
            </article>

            <article className="stat-card">
<h3 className="stat-title" style={{ marginTop: '0.75rem' }}>Evaluation Window</h3>
              <p className="stat-desc">Standard hardware evaluations span 30 to 60 days, supported directly by our systems engineering team.</p>
            </article>

            <article className="stat-card">
<h3 className="stat-title" style={{ marginTop: '0.75rem' }}>Zero Cloud Requirement</h3>
              <p className="stat-desc">100% on-premises deployment: no outbound internet connections or cloud sync required for operation.</p>
            </article>
          </div>
        </section>

        {/* Application Form */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="pilot-form-heading">
          <div className="secure-form-container">
            <div className="secure-form-header">
<h3 id="pilot-form-heading">Submit Hardware Pilot Application</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                All submissions are encrypted and reviewed under strict non-disclosure. We never disclose participant names or operational specifics.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Direct Channels */}
        <section className="section shell" style={{ paddingTop: '0' }}>
          <div className="section-heading">
            <div>
<h2>Contact us.</h2>
            </div>
            <p>
              Direct contact addresses for specific operational inquiries.
            </p>
          </div>

          <div className="responsive-card-grid" style={{ marginBlock: '1.5rem' }}>
            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', display: 'block', marginBottom: '0.35rem' }}>Pilot Applications & Hardware Inquiries</span>
              <a href="mailto:i232064@isb.nu.edu.pk" className="text-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}>i232064@isb.nu.edu.pk</a>
            </div>

            <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', padding: '1.75rem', borderRadius: '2px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', display: 'block', marginBottom: '0.35rem' }}>Security Research & Technical Inquiries</span>
              <a href="mailto:i232069@isb.nu.edu.pk" className="text-link" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9375rem' }}>i232069@isb.nu.edu.pk</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT: Passive, out-of-band network visibility for critical infrastructure.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Private Pilot Program</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Trust & Compliance</Link>
            <Link href="/technical-docs">Gated Portal</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
