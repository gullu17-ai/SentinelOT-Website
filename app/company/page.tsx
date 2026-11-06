import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'About SentinelOT | Mission, Engineering Team & Integrity',
  description: 'Built by dedicated industrial cybersecurity specialists to protect industrial control systems through passive network monitoring.',
};

export default function CompanyPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">A sensor built from ICS research, not IT security tools.</h1>
            <p className="subpage-lead">
              Modern society depends entirely on industrial control systems: clean water flowing to homes, stable electric grids, 
              and safe manufacturing plants. SentinelOT was founded on a singular engineering philosophy: 
              <strong> Operational technology security must never jeopardize the uptime or safety of the process it protects.</strong>
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button">
                Contact Technical Leadership
              </Link>
              <Link href="/trust" className="button outline">
                Security & Trust Standards
              </Link>
            </div>
          </div>
        </section>

        {/* 3 Core Engineering Principles */}
        <section className="section shell" aria-labelledby="principles-heading">
          <div className="section-heading">
            <div>
<h2 id="principles-heading">Core Engineering Principles.</h2>
            </div>
            <p>
              The technical values that govern every hardware schematic, decoder routine, and operational decision at SentinelOT.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Physical Safety Over Software Convenience</h3>
              <p>
                We never compromise air-gap integrity to enable easy cloud management. If an architectural feature introduces even a theoretical 
                vector for remote unauthorized access into a plant, we reject it.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Protocol-Specific Engineering</h3>
              <p>
                IT security tools cannot simply be re-badged with an industrial logo. Control networks require dedicated protocol decoders 
                that understand cyclic polling, deterministic execution times, and zero tolerance for latency.
              </p>
            </article>

            <article className="pillar-card">
<h3>Evidence-Based, Explainable Security</h3>
              <p>
                Alerts in critical control environments must be actionable immediately. We reject black-box statistical scores in favor of 
                deterministic, register-level explainability that a plant engineer can verify in minutes.
              </p>
            </article>

            <article className="pillar-card">
<h3>Zero-Disruption Deployment Guarantee</h3>
              <p>
                Our appliances operate 100% out-of-band via passive optical splitters with uncoupled transmit lines, ensuring that even under 
                sensor power loss, production traffic flows unimpeded.
              </p>
            </article>
          </div>
        </section>

        {/* Leadership & Heritage */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="heritage-heading">
          <div className="subpage-cta-box" style={{ background: 'var(--paper)', border: '1px solid var(--line)' }}>
            <div>
              <h2 id="heritage-heading">Origins in ICS Cybersecurity Research</h2>
              <p style={{ maxWidth: '42rem', marginTop: '1rem', lineHeight: '1.7' }}>
                SentinelOT emerged from specialized industrial control systems cybersecurity research conducted at FAST NUCES, 
                led by computer scientists and embedded systems engineers with direct experience in hardware signal acquisition, 
                real-time packet parsing, and critical infrastructure defense.<br /><br />
                Today, our engineering organization works with industrial automation practitioners, substation engineers, 
                and municipal utility operators across the Middle East, Europe, and North America.
              </p>
            </div>
            <div>
              <Link href="/contact" className="button">
                Connect with our Team →
              </Link>
            </div>
          </div>
        </section>

        {/* Careers & Inquiries */}
        <section className="section shell" style={{ paddingTop: '2rem' }}>
          <div className="section-heading">
            <div>
<h2>Careers & Direct Channels.</h2>
            </div>
            <p>
              We are constantly looking for embedded systems engineers, protocol dissection experts, and industrial cybersecurity researchers.
            </p>
          </div>

          <div className="doc-grid">
            <article className="doc-card">
              <div>
                <span className="doc-badge">ENGINEERING RESEARCH</span>
                <h3>Hardware & Signal Analysis</h3>
                <p>Embedded systems design, hardware signal capture, and passive optical tapping architectures.</p>
              </div>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', fontSize: '0.875rem' }}>
                Contact: <a href="mailto:i232064@isb.nu.edu.pk" className="text-link" style={{ fontFamily: 'var(--font-mono)' }}>i232064@isb.nu.edu.pk</a>
              </div>
            </article>

            <article className="doc-card">
              <div>
                <span className="doc-badge">PROTOCOL DECODING</span>
                <h3>Systems & Security Research</h3>
                <p>Industrial Ethernet protocol parsing, register-level event normalization, and offline rule engines.</p>
              </div>
              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--line)', fontSize: '0.875rem' }}>
                Contact: <a href="mailto:i232069@isb.nu.edu.pk" className="text-link" style={{ fontFamily: 'var(--font-mono)' }}>i232069@isb.nu.edu.pk</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT: Dedicated to safeguarding critical industrial infrastructure.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Company & Team</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Trust & Compliance</Link>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
