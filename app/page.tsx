import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Hero Section */}
        <section className="hero" aria-labelledby="hero-title">
          <video
            className="hero-photo"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/industrial-water.jpg"
            aria-hidden="true"
          >
            <source src="/media/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content shell">
            <div className="hero-main">
              <div className="hero-status">
                <span className="pulse-dot" aria-hidden="true" />
                <span>PRE-LAUNCH EVALUATION · PRIVATE PILOT PROGRAM OPEN</span>
              </div>
              <h1 id="hero-title">Sentinel<span>OT</span></h1>
              <p className="hero-subtitle">
                Offline-first network visibility<br />for critical infrastructure.
              </p>
              <p className="hero-description">
                Understand every device, protocol exchange, and control operation across your industrial network. 
                100% passive by physical design. Zero packets injected. Zero inline operational risk.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/contact">
                  Apply for Private Pilot →
                </Link>
                <Link className="button outline" href="/how-it-works">
                  Inspect Architecture
                </Link>
              </div>
              <p className="hero-note">Engineered for air-gapped industrial control systems (ICS / SCADA)</p>
            </div>
          </div>
          <div className="hero-bottom shell">
            <span>Built around the physical realities of operational technology.</span>
            <Link href="/solutions" className="hero-link">
              Explore Industrial Sector Deployments <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Tactical Stat Cards Matrix */}
        <section className="section shell" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }} aria-labelledby="metrics-heading">
          <div className="section-heading">
            <div>
<h2 id="metrics-heading">Passive Visibility.<br />Zero Process Interference.</h2>
            </div>
            <p>
              Process availability comes first. The sensor watches traffic copies; it never touches live control data.
            </p>
          </div>

          <div className="stat-grid">
            <article className="stat-card">
              <div className="stat-num">0</div>
              <h3 className="stat-title">Packets Injected Into Loops</h3>
              <p className="stat-desc">
                100% out-of-band capture via optical TAPs or SPAN mirror ports guarantees zero microsecond latency or PLC cycle interference.
              </p>
            </article>

            <article className="stat-card">
              <div className="stat-num">100%</div>
              <h3 className="stat-title">Air-Gapped & Local Evidence</h3>
              <p className="stat-desc">
                Functions entirely on-premises without external telemetry, mandatory internet routes, or cloud licensing dependencies.
              </p>
            </article>

            <article className="stat-card">
              <div className="stat-num">4+</div>
              <h3 className="stat-title">Core Protocol Families Decoded</h3>
              <p className="stat-desc">
                Deep packet dissection across Modbus TCP, DNP3, Siemens S7comm, and Ethernet/IP down to register values.
              </p>
            </article>

            <article className="stat-card">
              <div className="stat-num">2x</div>
              <h3 className="stat-title">Physically Segregated NICs</h3>
              <p className="stat-desc">
                Hardware-enforced promiscuous listen-only capture interface paired with an isolated out-of-band management interface.
              </p>
            </article>
          </div>
        </section>

        {/* Principles Strip */}
        <div className="principles shell">
          <p>100% Passive by design</p>
          <p>Local evidence first</p>
          <p>Rule-based alert engine</p>
          <Link href="/product">
            Inspect Hardware Appliance <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* 4 Pillars of SentinelOT Visibility */}
        <section className="section shell" aria-labelledby="pillars-heading">
          <div className="section-heading">
            <div>
              <h2 id="pillars-heading">
                Core Visibility<br />Capabilities.
              </h2>
            </div>
            <p>
              Passive observability built for Purdue Model Levels 1, 2, and 3 control domains.
            </p>
          </div>

          <div className="pillar-grid">
            <article className="pillar-card">
<h3>Passive Discovery & Endpoint Profiling</h3>
              <p>
                Build and maintain an accurate inventory of PLCs, HMIs, RTUs, and smart field devices from ambient communications without active scanning risks.
              </p>
              <Link href="/product" className="text-link mt-4">
                Explore Product Capabilities →
              </Link>
            </article>

            <article className="pillar-card">
<h3>Out-of-Band Signal Pipeline</h3>
              <p>
                Optical TAPs copy raw Ethernet frames directly into wire-speed protocol decoders, physically isolated from control loops.
              </p>
              <Link href="/how-it-works" className="text-link mt-4">
                Inspect Sanitized Flow Diagram →
              </Link>
            </article>

            <article className="pillar-card">
<h3>Ruggedized Embedded Appliance</h3>
              <p>
                Dedicated physical appliance with decoupled transmit circuitry on the capture port, ensuring 100% unidirectional ingress.
              </p>
              <Link href="/product" className="text-link mt-4">
                Rotate 3D Sensor Console →
              </Link>
            </article>

            <article className="pillar-card">
<h3>IEC 62443 & NIST SP 800-82 Alignment</h3>
              <p>
                Helps asset owners meet requirements for continuous network monitoring (SR 6.2) and zone/conduit auditability.
              </p>
              <Link href="/trust" className="text-link mt-4">
                Review Trust & Hardening Controls →
              </Link>
            </article>
          </div>
        </section>

        {/* Sector Applications Carousel/Grid */}
        <section className="use-cases section" aria-labelledby="use-cases-heading">
          <div className="shell">
            <div className="section-heading">
              <div>
<h2 id="use-cases-heading">Where process uptime is mission-critical.</h2>
              </div>
              <p>
                Tailored passive monitoring built for the specific protocols and operational constraints of heavy industry.
              </p>
            </div>
            <div className="use-case-grid">
              <article>
<h3>Water & Wastewater</h3>
                <p>Monitor pump stations, valve positions, and chemical dosing setpoints across Modbus TCP and DNP3 outstations without fieldbus latency.</p>
              </article>
              <article>
<h3>Power & Electric Utilities</h3>
                <p>Audit RTU-to-master commands, protective relay communications, and substation ring health while fulfilling audit requirements.</p>
              </article>
              <article>
<h3>Oil & Gas / Petrochemicals</h3>
                <p>Passive visibility into Safety Instrumented Systems (SIS) and DCS engineering workstations with zero risk of tripping process trips.</p>
              </article>
              <article>
<h3>Advanced Manufacturing</h3>
                <p>Track Siemens S7comm and Ethernet/IP exchanges to alert on unauthorized controller logic uploads or uncataloged maintenance laptops.</p>
              </article>
            </div>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link href="/solutions" className="button outline" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}>
                View Full Sector Solutions & Use Cases →
              </Link>
            </div>
          </div>
        </section>

        {/* Private Pilot Onboarding Callout */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
<h2>Evaluate SentinelOT in your operational network</h2>
              <p>Join qualified municipal utilities, power generators, and industrial operators in our structured 30 to 60-day hardware Private Pilot Program.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button">
                Apply for Private Pilot
              </Link>
              <Link href="/technical-docs" className="button outline" style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}>
                Request Technical Documentation 🔒
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
          <p>Offline-first passive network visibility for industrial control systems.</p>
          <a className="text-link" href="#main">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>SentinelOT · Industrial Control Systems (ICS/OT) Security</span>
          <span>
            <Link href="/trust" style={{ marginRight: '1rem' }}>Security & Trust</Link>
            <Link href="/technical-docs" style={{ marginRight: '1rem' }}>Gated Portal</Link>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
