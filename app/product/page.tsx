import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Hardware from '@/components/Hardware';
import ProductGallery from '@/components/ProductGallery';

export const metadata = {
  title: 'SentinelOT Sensor Appliance | Industrial OT Security Hardware',
  description: 'Dedicated rack-mount and DIN-rail industrial sensor appliances providing air-gapped packet decoding, asset discovery, and anomaly detection.',
};

export default function ProductPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">The SentinelOT Industrial Sensor.</h1>
            <p className="subpage-lead">
              A hardware appliance that captures and analyzes industrial network traffic at wire speed, without adding a point of failure to production lines.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/resources" className="button">
                Download Public Datasheet (PDF)
              </Link>
              <Link href="/contact" className="button outline">
                Apply for Private Pilot
              </Link>
            </div>
          </div>
        </section>

        {/* Telemetry Stat Strip */}
        <section className="shell" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
          <div className="telemetry-strip">
            <div className="telemetry-item">
              <span className="telemetry-val">0 μs</span>
              <span className="telemetry-lbl">Added Inline Latency</span>
              <span className="telemetry-sub">Optical TAP capture operates 100% out-of-band; zero delay to PLC scanning.</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-val">100%</span>
              <span className="telemetry-lbl">Hardware-Enforced Unidirectional Rx</span>
              <span className="telemetry-sub">Transmit circuitry physically uncoupled on capture port to eliminate reflection.</span>
            </div>
            <div className="telemetry-item">
              <span className="telemetry-val">&lt; 10 ms</span>
              <span className="telemetry-lbl">Event Normalization Window</span>
              <span className="telemetry-sub">Deep packet dissector extracts register-level payload values at wire speed.</span>
            </div>
          </div>
        </section>

        {/* 3D Hardware Sensor Appliance Viewer */}
        <section className="section shell" aria-labelledby="hardware-viewer-heading">
          <div className="section-heading">
            <div>
<h2 id="hardware-viewer-heading">Physical hardware layout.</h2>
            </div>
            <p>
              Inspect the physical hardware model featuring dual segregated interfaces, dedicated security processing, and passive DIN-rail / rack-mount form factors.
            </p>
          </div>
          <Hardware />
        </section>

        {/* Key Appliance Capabilities */}
        <section className="section shell" style={{ paddingTop: '1rem' }} aria-labelledby="capabilities-heading">
          <div className="section-heading">
            <div>
<h2 id="capabilities-heading">Protocol decoding at the register level.</h2>
            </div>
            <p>
              How the sensor turns raw Ethernet frames into readable protocol events with full command-level context.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Continuous Passive Asset Profiling</h3>
              <p>
                Construct an accurate, self-updating inventory of industrial endpoints strictly from observed traffic. 
                Identify PLCs, RTUs, HMIs, and engineering workstations by observed protocol behavior, MAC vendor prefixes, and communication pathways.
              </p>
            </article>

            <article className="pillar-card">
<h3>Deep Industrial Protocol Parsing</h3>
              <p>
                Decode high-value operational parameters across industrial Ethernet communications: Read/Write command differentiation, 
                diagnostic and reset command identification, unauthorized programming attempts, and abnormal function code sequences.
              </p>
            </article>

            <article className="pillar-card">
<h3>Operational Event Normalization</h3>
              <p>
                The sensor translates raw industrial frames into structured, time-synchronized security events. Every alert includes complete 
                transaction context, source/destination identities, and exact register values, allowing operators to distinguish maintenance from threats.
              </p>
            </article>

            <article className="pillar-card">
<h3>Localized Vulnerability Corroboration</h3>
              <p>
                Cross-reference observed device profiles and firmware revisions against locally maintained industrial vulnerability databases. 
                Security teams evaluate exposure without ever transmitting network maps or asset identities to an external cloud service.
              </p>
            </article>
          </div>
        </section>

        {/* Physical Interface Segregation */}
        <section className="section shell" style={{ paddingTop: '2rem' }}>
          <div className="subpage-cta-box" style={{ background: 'var(--dark-bg)', color: 'var(--dark-text)', borderColor: 'var(--dark-border)' }}>
            <div>
<h2 style={{ color: '#fff' }}>Physical Dual-NIC Segregation</h2>
              <p style={{ color: 'var(--dark-muted)', maxWidth: '42rem' }}>
                <strong>Capture Port (Eth0):</strong> Dedicated to optical TAP / mirror port connection. Configured in listen-only promiscuous mode with physical transmit lines uncoupled, guaranteeing zero packet injection into control loops.<br /><br />
                <strong>Management Port (Eth1):</strong> Logically and physically segregated interface reserved for local engineering access, isolated management VLAN connection, or forward-only syslog output.
              </p>
            </div>
            <div>
              <Link href="/how-it-works" className="button">
                Inspect Signal Flow →
              </Link>
            </div>
          </div>
        </section>

        {/* Evidence Gallery */}
        <section className="section shell" aria-labelledby="gallery-heading">
          <div className="section-heading">
            <div>
<h2 id="gallery-heading">Genuine Operational Captures.</h2>
            </div>
            <p>
              Inspect verified captures from SentinelOT testbeds: asset discovery, network topology mapping, protocol event logs, and operational alerts.
            </p>
          </div>
          <ProductGallery />
        </section>

        {/* Gated Technical Specs Trigger */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
<h2>Detailed hardware specifications & pinouts</h2>
              <p>
                Detailed mechanical dimensions, thermal operating curves, power consumption, MTBF figures, and rack-mounting schematics are available in our verified portal.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/technical-docs" className="button">
                Request Technical Documentation
              </Link>
              <Link href="/contact" className="button outline" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}>
                Apply for Private Pilot
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
          <p>SentinelOT Sensor Appliance: Ruggedized, air-gapped, 100% passive monitoring.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Industrial Hardware Appliance</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Trust & Compliance</Link>
            <Link href="/technical-docs">Gated Portal</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
