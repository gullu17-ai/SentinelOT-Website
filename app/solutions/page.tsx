import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'OT Security Solutions | Utilities, Energy & Advanced Manufacturing',
  description: 'Tailored passive network monitoring and protocol visibility for municipal water, electric utilities, oil and gas, and discrete manufacturing.',
};

const sectors = [
  {
    num: '01',
    name: 'Water & Wastewater Treatment',
    challenge: 'Broad geographic footprints, unmonitored remote pumping stations connected via cellular/radio links, and aging telemetry PLCs vulnerable to unauthorized setpoint manipulation or valve overrides.',
    observes: 'Real-time visibility into Modbus TCP and DNP3 communications between central SCADA and remote outstations. Audits pump runtime commands, chemical dosing setpoints, and uncataloged maintenance laptops.',
    outcome: 'Plant operators detect unauthorized setpoint modifications before physical tank overflows or chemical compliance breaches occur, with zero risk of disrupting remote telemetry links.',
  },
  {
    num: '02',
    name: 'Power Generation & Electric Utilities',
    challenge: 'Strict compliance requirements (NERC CIP alignment), high-voltage substation networks, and the coexistence of legacy serial-over-Ethernet equipment with modern IEC 61850 substation automation architectures.',
    observes: 'Decodes DNP3 and supervisory exchanges between control center master stations and substation Remote Terminal Units (RTUs). Audits breaker trip signals, transformer telemetry, and communication timeouts.',
    outcome: 'Complete audit trails for supervisory switching actions, automated identification of rogue devices across substation rings, and non-intrusive logging for critical compliance audits.',
  },
  {
    num: '03',
    name: 'Oil & Gas / Petrochemicals',
    challenge: 'Continuous 24/7 refining and pipeline operations where false positives or inline sensor hiccups can trip emergency shutdown (ESD) systems, resulting in catastrophic operational losses.',
    observes: 'Passive monitoring across Safety Instrumented Systems (SIS) and Distributed Control System (DCS) conduits. Flags engineering workstation login sessions, controller logic downloads, and modifications to safety setpoints.',
    outcome: 'Visibility into safety-critical zones without introducing electrical or computational interference to high-hazard petrochemical processes.',
  },
  {
    num: '04',
    name: 'Advanced Discrete Manufacturing',
    challenge: 'High-speed assembly lines running multi-vendor PLCs, industrial robotics, and frequent engineering adjustments during tooling changeovers, where uncataloged contractor devices introduce severe risk.',
    observes: 'Tracks Siemens S7comm and Ethernet/IP exchanges. Alerts on unauthorized PLC firmware modifications, controller-to-controller sync breaks, and uncataloged contractor laptops connected to plant switches.',
    outcome: 'Rapid root-cause analysis during unexpected production halts, complete visibility into contractor changes, and protection of proprietary machine programs.',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">Built for how industrial networks actually work.</h1>
            <p className="subpage-lead">
              Every industrial sector presents unique physical consequences, legacy constraints, and proprietary communication loops. 
              SentinelOT provides tailored operational visibility built around the protocols and failure modes of your industry.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button">
                Apply for Sector Pilot
              </Link>
              <Link href="/product" className="button outline">
                Inspect Hardware Sensor
              </Link>
            </div>
          </div>
        </section>

        {/* Sector Deep Dives */}
        <section className="section shell" aria-labelledby="sector-heading">
          <div className="section-heading">
            <div>
<h2 id="sector-heading">Visibility by sector.</h2>
            </div>
            <p>
              Explore how SentinelOT addresses the unique network architectures, protocol mixes, and safety constraints of core critical sectors.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {sectors.map(sector => (
              <article key={sector.num} className="solution-card">
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--ink)' }}>{sector.name}</h3>

                <div className="solution-columns">
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', marginBottom: '0.5rem' }}>
                      Operational Challenge
                    </strong>
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>{sector.challenge}</p>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal)', marginBottom: '0.5rem' }}>
                      Observed Activity
                    </strong>
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>{sector.observes}</p>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--lime-ink)', marginBottom: '0.5rem' }}>
                      Operational Outcome
                    </strong>
                    <p style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>{sector.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
<h2>Discuss your facility's operational network profile</h2>
              <p>
                Schedule a confidential conversation with an industrial cybersecurity engineer to evaluate how SentinelOT integrates into your specific facility's network topology.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button">
                Apply for Sector Pilot Access
              </Link>
              <Link href="/technical-docs" className="button outline" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}>
                Request Technical Portal Access
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
          <p>Protecting critical physical processes across utilities, energy, and advanced manufacturing.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Sector Solutions</span>
          <span>
            <Link href="/how-it-works" style={{ marginRight: '1rem' }}>Architecture</Link>
            <Link href="/contact">Apply for Pilot</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
