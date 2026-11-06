import Link from 'next/link';
import Navigation from '@/components/Navigation';
import PartnerForm from '@/components/PartnerForm';

export const metadata = {
  title: 'Partner Program | Systems Integrators & OT MSSPs',
  description: 'Join the SentinelOT partner network. Connecting OT systems integrators, EPC contractors, and industrial MSSPs with offline visibility.',
};

export default function PartnersPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">The SentinelOT Partner Program.</h1>
            <p className="subpage-lead">
              Securing critical operational networks requires close collaboration between industrial automation specialists, 
              field engineers, and experienced cybersecurity practitioners. The SentinelOT Partner Program provides 
              the technology, technical training, and priority hardware allocation required to deliver passive operational visibility.
            </p>
          </div>
        </section>

        {/* Dual-Track Partner Model */}
        <section className="section shell" aria-labelledby="tracks-heading">
          <div className="section-heading">
            <div>
<h2 id="tracks-heading">Two Specialized Partner Tracks.</h2>
            </div>
            <p>
              Training and tools for systems integrators commissioning physical control systems and MSSPs delivering ongoing operational defense.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Certified OT Systems Integrators & EPCs</h3>
              <p>
                For industrial engineering firms, automation contractors, and control system integrators delivering turnkey SCADA, DCS, and PLC deployments.
              </p>
              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--line)', paddingTop: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', marginBottom: '0.5rem' }}>
                  Program Capabilities:
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
                  <li>Offer clients built-in, non-intrusive network baseline audits during facility commissioning.</li>
                  <li>Verify zone & conduit segmentation without modifying existing PLC control ladder logic.</li>
                  <li>Priority allocation of hardware evaluation sensors for integration testbeds.</li>
                </ul>
              </div>
            </article>

            <article className="pillar-card">
              <h3>Industrial MSSPs & Managed Defense Providers</h3>
              <p>
                For cybersecurity service providers delivering remote or on-premises threat monitoring and incident response to OT asset owners.
              </p>
              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--line)', paddingTop: '1rem' }}>
                <strong style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', marginBottom: '0.5rem' }}>
                  Program Capabilities:
                </strong>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
                  <li>Ingest rich, normalized industrial protocol event streams into existing SIEM/SOAR platforms.</li>
                  <li>Standardized Syslog/CEF event dictionaries for Modbus, DNP3, and S7comm telemetry.</li>
                  <li>Joint go-to-market and co-branded pilot evaluation opportunities for utility accounts.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="partner-form-heading">
          <div className="secure-form-container">
            <div className="secure-form-header">
<h3 id="partner-form-heading">Apply for Partner Program Membership</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
                Join our certified partner network to access evaluation hardware and technical training.
              </p>
            </div>

            <PartnerForm />
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT Partner Program: Non-intrusive visibility for systems integrators and industrial MSSPs.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Partner Network</span>
          <span>
            <Link href="/technical-docs" style={{ marginRight: '1rem' }}>Gated Portal</Link>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
