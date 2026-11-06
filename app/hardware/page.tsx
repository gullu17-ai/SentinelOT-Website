import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Hardware from '@/components/Hardware';

export const metadata: Metadata = {
  title: 'Hardware Concept & 3D Sensor | SentinelOT',
  description: 'Inspect the 3D Industrial Sensor Concept-inspired physical sensor concept, interface separation, and embedded OT deployment roadmap for SentinelOT.',
};

export default function HardwarePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Page Hero */}
        <section className="subpage-hero" aria-labelledby="hardware-page-title">
          <div className="shell">
            <span className="eyebrow">Embedded Hardware Concept</span>
            <h1 id="hardware-page-title" className="subpage-heading">
              Compact footprint.<br />Physical network isolation.
            </h1>
            <p className="subpage-lead">
              A single-board computer concept engineered to sit quietly inside an industrial control cabinet. Inspect the hardware layout and interface separation in 3D.
            </p>
          </div>
        </section>

        {/* 3D Hardware Viewer Component */}
        <Hardware />

        {/* Technical Specifications & Considerations */}
        <section className="section shell" aria-labelledby="specs-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Engineering specifications</span>
              <h2 id="specs-heading">Designed for constrained cabinets.</h2>
            </div>
            <p>
              Deploying intrusion detection into operational environments requires strict attention to physical form factor, power draw, and interface isolation.
            </p>
          </div>

          <div className="protocol-table">
            <div className="protocol-header">
              <span>Dimension</span>
              <span>Design Target</span>
              <span>Technical Notes</span>
            </div>
            <article className="protocol-row">
              <h3>Compute Platform</h3>
              <p><span className="mobile-label">Design Target</span>High-Performance Multi-Core Industrial ARM Processor</p>
              <p><span className="mobile-label">Technical Notes</span>Sufficient compute to run Zeek protocol parsing and local rule matching on small-to-medium OT segments without thermal throttling.</p>
            </article>
            <article className="protocol-row">
              <h3>Network Separation</h3>
              <p><span className="mobile-label">Design Target</span>Dual Independent Physical NICs</p>
              <p><span className="mobile-label">Technical Notes</span>NIC 0 is configured exclusively in promiscuous listen-only mode (no IP address assigned). NIC 1 connects to the isolated management VLAN.</p>
            </article>
            <article className="protocol-row">
              <h3>Storage & Resilience</h3>
              <p><span className="mobile-label">Design Target</span>Industrial High-Endurance NVMe via PCIe</p>
              <p><span className="mobile-label">Technical Notes</span>High-write-endurance solid state storage ensures structured protocol logs can be retained locally without SD-card corruption.</p>
            </article>
            <article className="protocol-row">
              <h3>Enclosure & Power</h3>
              <p><span className="mobile-label">Design Target</span>DIN-Rail Compatible, 5V / 5A DC</p>
              <p><span className="mobile-label">Technical Notes</span>Passive fluted aluminum chassis acts as a heatsink for fanless operation in dusty cabinet environments.</p>
            </article>
          </div>

          <div className="architecture-notes mt-8">
            <p>
              <strong>Illustrative Concept Notice:</strong> The 3D model is an original illustrative geometry representing the research vision. It does not imply official endorsement by Raspberry Pi Ltd.
            </p>
            <p>
              <strong>Validation Roadmap:</strong> Hardware deployment requires further real-world testing regarding packet drop rates under sustained line-rate industrial write bursts.
            </p>
          </div>
        </section>

        {/* Bottom CTA to Research */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
              <span className="eyebrow">Academic Foundation</span>
              <h2>Review dataset validation and research limits</h2>
              <p>Learn how SentinelOT was calibrated against public industrial benchmark datasets at FAST NUCES.</p>
            </div>
            <Link href="/research" className="button">
              Read Research & Limits →
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
          <span>Hardware deployment concept and 3D telemetry console.</span>
        </div>
      </footer>
    </>
  );
}
