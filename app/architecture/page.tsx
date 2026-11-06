import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Passive Architecture & Pipeline | SentinelOT',
  description: 'Understand the out-of-band passive capture model, Deep Packet Inspection Engine protocol log generation, and air-gapped local management in SentinelOT.',
};

export default function ArchitecturePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Page Hero */}
        <section className="subpage-hero" aria-labelledby="architecture-title">
          <div className="shell">
            <span className="eyebrow">System Architecture</span>
            <h1 id="architecture-title" className="subpage-heading">
              A copy of the traffic.<br />A trail of evidence.
            </h1>
            <p className="subpage-lead">
              Engineered for operational safety. SentinelOT monitors through network taps and mirror ports so process control commands are never delayed or interrupted.
            </p>
          </div>
        </section>

        {/* Blueprint Flow Diagram */}
        <section className="architecture section" aria-labelledby="flow-heading">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Topology & Dataflow</span>
                <h2 id="flow-heading">End-to-end evidence pipeline.</h2>
              </div>
              <p>
                The planned physical installation relies on an out-of-band sensor. The current proof of concept operates in a validated virtual testbed.
              </p>
            </div>

            <div className="flow" aria-label="Architecture Diagram: Mirrored traffic feeds Deep Packet Inspection Engine and the evidence pipeline. Operator access is on an isolated management plane.">
              <div className="flow-zone">
                <div className="zone-tag"><span>ZONE 01</span> // OPERATIONAL PROCESS NETWORK</div>
                <div className="network-pair">
                  <div className="flow-node">
                    HMI
                    <span>Operator workstation</span>
                  </div>
                  <span className="connector bidirectional" aria-hidden="true">↔</span>
                  <div className="flow-node">
                    Managed switch
                    <span>or network TAP</span>
                  </div>
                  <span className="connector bidirectional" aria-hidden="true">↔</span>
                  <div className="flow-node">
                    PLC / RTU
                    <span>Process controller</span>
                  </div>
                </div>
              </div>

              <div className="capture-line">
                <span className="capture-arrow" aria-hidden="true">↓</span>
                <p>
                  Mirrored traffic only <strong>Passive capture connection (Zero inline risk)</strong>
                </p>
              </div>

              <div className="processing">
                <div className="flow-node">
                  <strong>SentinelOT sensor</strong>
                  <span>Capture interface</span>
                </div>
                <span className="connector" aria-hidden="true">→</span>
                <div className="flow-node">
                  <strong>Protocol Analysis Engine</strong>
                  <span>Protocol decoding & logs</span>
                </div>
                <span className="connector" aria-hidden="true">→</span>
                <div className="flow-node">
                  <strong>Evidence pipeline</strong>
                  <span>Normalize · Discover · Detect</span>
                </div>
              </div>

              <div className="management-line">
                <div className="zone-tag"><span>ZONE 02</span> // DEDICATED MANAGEMENT PLANE</div>
                <div>
                  <p>
                    <strong>Separate management connection</strong>
                    <span>Local operator access to dashboard evidence</span>
                  </p>
                  <div className="flow-node">
                    SentinelOT dashboard
                    <span>Assets · Events · Alerts</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="architecture-notes">
              <p>
                <strong>Capture is 100% passive:</strong> A mirrored packet copy feeds the sensor's capture NIC. The sensor has no routing capability into the control subnet and cannot inject packets or trip safety interlocks.
              </p>
              <p>
                <strong>Air-gapped management:</strong> Operator and analyst access belongs on an isolated management VLAN or direct interface. The sensor never requires public Internet access to function.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Principles */}
        <section className="section shell" aria-labelledby="principles-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Engineering principles</span>
              <h2 id="principles-heading">Why out-of-band monitoring<br />matters in OT.</h2>
            </div>
            <p>
              Traditional IT security tools that block inline or perform active port scanning can disrupt sensitive industrial control systems.
            </p>
          </div>

          <div className="capability-list">
            <article>
              <span className="feature-number">01</span>
              <div>
                <h3>Zero Latency Injection</h3>
                <p className="benefit">Protecting real-time scan cycles.</p>
                <p>PLCs operate on deterministic scan loops measured in milliseconds. Because SentinelOT monitors an optical TAP or SPAN port, it introduces 0.00ms latency to the control loop.</p>
              </div>
            </article>
            <article>
              <span className="feature-number">02</span>
              <div>
                <h3>Protocol-Aware Log Normalization</h3>
                <p className="benefit">Beyond raw PCAP hex dumps.</p>
                <p>protocol parsing routines dissect Modbus function codes, S7comm job headers, and DNP3 objects into structured event streams with human-readable parameters.</p>
              </div>
            </article>
            <article>
              <span className="feature-number">03</span>
              <div>
                <h3>Explainable Rule Engine</h3>
                <p className="benefit">No black-box false alarms.</p>
                <p>Every alert references the triggering rule ID, source/dest addresses, function code, and packet timestamp so plant engineers can immediately investigate.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Bottom CTA to Hardware */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
              <span className="eyebrow">Physical implementation</span>
              <h2>Explore the compact 3D sensor hardware</h2>
              <p>Turn the board over and inspect the planned physical interface separation.</p>
            </div>
            <Link href="/hardware" className="button">
              Inspect 3D Hardware →
            </Link>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <div className="footer-top">
          <Link className="brand" href="/" aria-label="Back to SentinelOT home">
            <img src="/media/sentinelot-logo.png" alt="SentinelOT" width="700" height="115" loading="lazy" />
          </Link>
          <p>Offline-first visibility for industrial networks.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Research prototype · FAST NUCES Islamabad</span>
          <span>Passive monitoring architecture documentation.</span>
        </div>
      </footer>
    </>
  );
}
