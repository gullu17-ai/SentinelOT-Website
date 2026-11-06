import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Security & Trust | IEC 62443 Alignment & Hardening',
  description: 'Review SentinelOT’s secure engineering practices, IEC 62443 alignment, vulnerability disclosure policy, and security.txt specifications.',
};

export default function TrustPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">How the sensor protects itself.</h1>
            <p className="subpage-lead">
              As an organization dedicated to protecting critical infrastructure, we hold our own hardware, firmware, 
              and development lifecycle to strict cybersecurity standards.
            </p>
          </div>
        </section>

        {/* Standards Alignment Grid */}
        <section className="section shell" aria-labelledby="standards-heading">
          <div className="section-heading">
            <div>
<h2 id="standards-heading">Industrial Standards Alignment.</h2>
            </div>
            <p>
              Architected to help industrial asset owners meet critical regulatory and compliance mandates.
            </p>
          </div>

          <div className="standards-grid">
            <article className="standard-card">
<h3>System Security Requirements & Levels</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                SentinelOT serves as a monitoring tool that supports compliance with core system requirements:
              </p>
              <ul>
                <li><strong>SR 6.1 (Continuous Monitoring):</strong> Collects, normalizes, and correlates protocol-level network activity across industrial conduits.</li>
                <li><strong>SR 6.2 (Timely Detection of Compromise):</strong> Surfaces unauthorized command writes, register modifications, and unexpected workstation sessions.</li>
                <li><strong>SR 5.2 (Zone Boundary Defense):</strong> Validates that communication conforms to configured zone and conduit rules without inline packet disruption.</li>
              </ul>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', borderTop: '1px solid var(--line)', paddingTop: '0.75rem' }}>
                Status: Architecture alignment verified; formal certification testing in progress with accredited laboratory.
              </div>
            </article>

            <article className="standard-card">
<h3>Guide to Operational Technology Security</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                Directly aligns with NIST OT security recommendations for defensible architectures:
              </p>
              <ul>
                <li><strong>Passive Network Observation:</strong> Fulfills mandates for comprehensive asset inventorying without active probing.</li>
                <li><strong>Log Integrity & Normalization:</strong> Generates tamper-resistant, time-synchronized local audit logs for supervisory commands.</li>
                <li><strong>Out-of-Band Resilience:</strong> Eliminates single-point-of-failure risks associated with inline inspection devices.</li>
              </ul>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', borderTop: '1px solid var(--line)', paddingTop: '0.75rem' }}>
                Status: Complete architectural and deployment alignment.
              </div>
            </article>
          </div>
        </section>

        {/* Appliance Hardening Controls */}
        <section className="section shell" style={{ paddingTop: '0' }} aria-labelledby="hardening-heading">
          <div className="section-heading">
            <div>
<h2 id="hardening-heading">Four-Tier Hardware Defense.</h2>
            </div>
            <p>
              How we eliminate potential attack surfaces from the physical sensor itself.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Zero Cloud Backdoors</h3>
              <p>
                The appliance contains zero remote support backdoors, no dynamic DNS clients, and no unmonitored cloud synchronization daemons.
              </p>
            </article>

            <article className="pillar-card">
<h3>Hardware-Segregated Capture</h3>
              <p>
                The promiscuous capture NIC is physically incapable of transmitting packets into the monitored network segment (Tx uncoupled).
              </p>
            </article>

            <article className="pillar-card">
<h3>Cryptographic System Integrity</h3>
              <p>
                Local storage utilizes authenticated partitions with secure boot verification, ensuring non-repudiation of event logs.
              </p>
            </article>

            <article className="pillar-card">
<h3>Air-Gapped Maintenance</h3>
              <p>
                Firmware upgrades are executed exclusively via cryptographically signed offline update packages verified with on-device public keys.
              </p>
            </article>
          </div>
        </section>

        {/* Responsible Vulnerability Disclosure & security.txt */}
        <section className="section shell" style={{ paddingTop: '1rem' }} aria-labelledby="disclosure-heading">
          <div className="subpage-cta-box" style={{ background: 'var(--dark-bg)', color: 'var(--dark-text)', borderColor: 'var(--dark-border)' }}>
            <div>
<h2 id="disclosure-heading" style={{ color: '#fff' }}>Responsible Vulnerability Disclosure Policy</h2>
              <p style={{ color: 'var(--dark-muted)', maxWidth: '42rem', marginTop: '0.75rem' }}>
                SentinelOT maintains an active vulnerability disclosure program. If you discover a potential vulnerability in our appliance or public web infrastructure, please report it immediately under our ethical disclosure policy.<br /><br />
                <strong>Security Contacts:</strong> <code>i232064@isb.nu.edu.pk</code>, <code>i232069@isb.nu.edu.pk</code><br />
                <strong>Acknowledgment Window:</strong> Within 24 hours.<br />
                <strong>Triage & Initial Remediation Assessment:</strong> Within 72 hours.
              </p>

              <div style={{ marginTop: '1.5rem', background: 'var(--dark-surface)', border: '1px solid var(--dark-border)', padding: '1.25rem', borderRadius: '2px' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--lime)', marginBottom: '0.5rem' }}>
                  /.well-known/security.txt (RFC 9116)
                </span>
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--dark-muted)', overflowX: 'auto' }}>
{`Contact: mailto:i232064@isb.nu.edu.pk
Contact: mailto:i232069@isb.nu.edu.pk
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://sentinelot.org/.well-known/security.txt
Policy: https://sentinelot.org/trust#disclosure`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>SentinelOT Trust & Compliance: Built around IEC 62443 and NIST SP 800-82 standards.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Security & Trust</span>
          <span>
            <a href="/.well-known/security.txt" style={{ marginRight: '1rem' }}>security.txt</a>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
