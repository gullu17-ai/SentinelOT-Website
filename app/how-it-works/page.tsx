import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'How It Works | Sanitized Architecture & Out-of-Band Capture',
  description: 'Learn how SentinelOT captures OT traffic out-of-band via TAPs, analyzes industrial protocols locally, and delivers explainable operational alerts.',
};

export default function HowItWorksPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Header */}
        <section className="subpage-hero">
          <div className="shell">
<h1 className="subpage-heading">Architected for Zero Disruption.</h1>
            <p className="subpage-lead">
              Critical industrial control systems cannot tolerate packet latency, jitter, or unexpected connection resets. 
              SentinelOT adheres to strict out-of-band operational architecture: we monitor passive copies of traffic 
              and deliver explainable telemetry without ever sitting inline.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/resources" className="button">
                Download Architecture Brief (PDF)
              </Link>
              <Link href="/contact" className="button outline">
                Apply for Private Pilot
              </Link>
            </div>
          </div>
        </section>

        {/* Conceptual Sanitized Architecture Diagram */}
        <section className="section shell" aria-labelledby="architecture-diagram-heading">
          <div className="section-heading">
            <div>
<h2 id="architecture-diagram-heading">Conceptual Deployment Topology.</h2>
            </div>
            <p>
              Hardware-enforced unidirectional tap ingress across Level 1–3 control zones, completely isolated from control loops.
            </p>
          </div>

          {/* Sanitized Architecture Graphic Card */}
          <div className="flow" style={{ marginBlock: '1.5rem', background: 'var(--dark-bg)', color: '#fff', borderRadius: '4px' }}>
            {/* Level 4: Enterprise & SOC */}
            <div className="flow-zone" style={{ borderColor: 'var(--dark-border)', background: 'rgba(20, 53, 54, 0.4)' }}>
              <div className="zone-tag">Purdue Level 4 · <span>Enterprise & Security Operations (IT/SOC)</span></div>
              <div className="flow-grid-2">
                <div className="flow-node">Enterprise SIEM / SOC <span>Standardized Syslog / CEF Feeds</span></div>
                <div className="flow-node">Asset Management <span>Inventory Baseline Reconciliation</span></div>
              </div>
            </div>

            {/* Unidirectional Management Conduit */}
            <div className="flow-banner-text" style={{ color: 'var(--dark-muted)' }}>
              <span>▲ Standardized Alert & Inventory Forwarding (Management Port Eth1 Over Isolated VLAN) ▲</span>
            </div>

            {/* Level 3: Site Operations & Sensor Tap */}
            <div className="flow-zone" style={{ borderColor: 'var(--lime-border)', background: 'rgba(20, 53, 54, 0.7)' }}>
              <div className="zone-tag" style={{ color: 'var(--lime)' }}>Purdue Level 3 · <span>Site Operations & Passive Capture Point</span></div>
              <div className="flow-grid-2" style={{ marginBottom: '1.5rem' }}>
                <div className="flow-node">Supervisory SCADA / HMI <span>Central Process Visualization</span></div>
                <div className="flow-node">Engineering Workstations <span>Program Download & Diagnostic Loops</span></div>
              </div>

              {/* Optical TAP & Sensor Appliance Box */}
              <div style={{ border: '2px dashed var(--lime)', padding: '1.5rem', borderRadius: '2px', background: 'rgba(13, 36, 37, 0.95)', marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--lime)', fontWeight: 600 }}>
                    OPTICAL NETWORK TAP / SPAN MIRROR
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dark-muted)', overflowWrap: 'anywhere' }}>
                    100% Listen-Only Raw Frame Replica · Zero Microsecond Delay
                  </span>
                </div>
                <div style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)', padding: '1.25rem', textAlign: 'center', borderRadius: '2px' }}>
                  <strong style={{ display: 'block', fontSize: '1.125rem', color: '#fff', marginBottom: '0.5rem' }}>
                    SENTINELOT SENSOR APPLIANCE
                  </strong>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--dark-muted)', overflowWrap: 'anywhere', display: 'block' }}>
                    Capture Port (Eth0: Rx Only) ➔ Wire-Speed Demux ➔ Deep Protocol Decoders ➔ Local Anomaly Engine
                  </span>
                </div>
              </div>
            </div>

            {/* Tap Ingress Line */}
            <div className="flow-banner-text" style={{ color: 'var(--lime)' }}>
              <span>▼ Passive Tap Ingress from Control Conduits (Receive Line Only · Zero Packet Egress) ▼</span>
            </div>

            {/* Levels 1-2: Field Control & Process Bus */}
            <div className="flow-zone" style={{ borderColor: 'var(--dark-border)', background: 'rgba(20, 53, 54, 0.4)' }}>
              <div className="zone-tag">Purdue Levels 1 & 2 · <span>Field Control & Process Bus</span></div>
              <div className="flow-grid-4">
                <div className="flow-node">PLCs <span>Modbus / S7comm</span></div>
                <div className="flow-node">RTUs <span>DNP3 Outstations</span></div>
                <div className="flow-node">Smart Actuators <span>Valves & Pumps</span></div>
                <div className="flow-node">Field Instruments <span>Flow & Pressure</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Pipeline Breakdown */}
        <section className="section shell" aria-labelledby="pipeline-heading">
          <div className="section-heading">
            <div>
              <h2 id="pipeline-heading">How passive capture becomes an alert.</h2>
            </div>
            <p>
              Four steps from raw packet copy to a normalized, explainable security event log.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
              <h3>Optical TAP or SPAN Mirroring</h3>
              <p>
                Optical network TAPs or switch SPAN ports copy frames passing between field controllers and supervisory servers. 
                Because the splitter is passive, production traffic continues uninterrupted even if the sensor appliance loses power.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Local Protocol Dissection</h3>
              <p>
                The sensor filters non-industrial traffic and parses control protocols at wire speed down to register addresses, 
                diagnostic flags, and coil values.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Anomaly Evaluation</h3>
              <p>
                When an unexpected command occurs—such as a setpoint write from an uncataloged workstation—the engine logs 
                the function code, affected register, and surrounding frame context to local tamper-evident storage.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Syslog & SIEM Export</h3>
              <p>
                Alert summaries and asset changes forward over the isolated management port (Eth1) to your enterprise SIEM or SOC 
                via standardized Syslog and CEF streams, without bridging enterprise IT to control networks.
              </p>
            </article>
          </div>
        </section>

        {/* Operational Boundary Guarantee */}
        <section className="section shell" aria-labelledby="boundary-heading">
          <div className="section-heading">
            <div>
<h2 id="boundary-heading">What the sensor does and does not do.</h2>
            </div>
            <p>
              Strict architectural limits ensuring complete physical safety across critical infrastructure deployments.
            </p>
          </div>

          <div className="protocol-table">
            <div className="protocol-header">
              <span>Operational Dimension</span>
              <span>What SentinelOT Does</span>
              <span>What SentinelOT Never Does</span>
            </div>
            <article className="protocol-row">
              <h3>Network Coupling</h3>
              <p>Operates 100% out-of-band via optical TAPs or SPAN mirror ports.</p>
              <p><strong>Never</strong> sits inline or breaks physical control cabling.</p>
            </article>
            <article className="protocol-row">
              <h3>Packet Transmission</h3>
              <p>Passively demultiplexes and inspects received frame copies.</p>
              <p><strong>Never</strong> transmits, injects, or reflects packets into fieldbus networks.</p>
            </article>
            <article className="protocol-row">
              <h3>Cloud Connectivity</h3>
              <p>Functions 100% on-premises in fully air-gapped installations.</p>
              <p><strong>Never</strong> requires outbound internet routes, cloud licensing, or external telemetry.</p>
            </article>
            <article className="protocol-row">
              <h3>Detection Reasoning</h3>
              <p>Delivers rule-based, register-level explainability.</p>
              <p><strong>Never</strong> takes unverified black-box actions or automatic inline blocking.</p>
            </article>
          </div>
        </section>

        {/* Callout */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
<h2>Review our complete deployment engineering brief</h2>
              <p>
                Download our technical whitepaper on optical TAP selection, SPAN buffer sizing, and dual-NIC isolation in critical infrastructure.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/resources" className="button">
                Download Technical Brief (PDF)
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
          <p>SentinelOT Out-of-Band Architecture: Guaranteed zero inline latency or operational interference.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Sanitized Architecture</span>
          <span>
            <Link href="/product" style={{ marginRight: '1rem' }}>Sensor Hardware</Link>
            <Link href="/technical-docs">Gated Portal</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
