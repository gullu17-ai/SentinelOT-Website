import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import ProductGallery from '@/components/ProductGallery';
import { protocols } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Platform Evidence & Protocol Visibility | SentinelOT',
  description: 'Explore verified lab captures, asset inventory, protocol event decoding, and alert triage in the SentinelOT industrial monitoring prototype.',
};

const capabilities = [
  ['Passive traffic monitoring', 'Observe the network without sitting in its path.', 'Inspect a copy of HMI and PLC communications from a mirror port or network TAP. The sensor observes traffic; it does not block control commands.'],
  ['Asset discovery', 'Understand what is communicating.', 'Build an inventory from observed endpoints, ports and protocol behaviour. Inferred roles help an operator investigate, but silent devices may remain unseen.'],
  ['Protocol-aware rule detection', 'See why an operation was flagged.', 'Review decoded writes, control operations and configured behavioural thresholds. Each alert points to a matching rule and the supporting event context.'],
  ['Offline vulnerability matching', 'Keep vulnerability context close to the process.', 'Compare reviewed device identities with locally imported intelligence. Missing identity or firmware information stays explicitly unknown. Updates require a controlled import.'],
];

export default function PlatformPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Page Hero */}
        <section className="subpage-hero" aria-labelledby="platform-title">
          <div className="shell">
            <span className="eyebrow">The SentinelOT Platform</span>
            <h1 id="platform-title" className="subpage-heading">
              Operational visibility.<br />Verifiable evidence.
            </h1>
            <p className="subpage-lead">
              From observed endpoints to decoded writes and alert context. Explore authentic lab captures and protocol coverage boundaries.
            </p>
          </div>
        </section>

        {/* Interactive Gallery */}
        <section className="section shell" aria-labelledby="gallery-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Interactive evidence</span>
              <h2 id="gallery-heading">Dashboard views from<br />the research lab.</h2>
            </div>
            <p>
              Explore genuine captures of the asset inventory, protocol event streams, security alerts, and communication topology.
            </p>
          </div>
          <ProductGallery />
        </section>

        {/* Core Capabilities */}
        <section className="capabilities section" aria-labelledby="capabilities-heading">
          <div className="shell capability-layout">
            <div className="capability-intro">
              <span className="eyebrow">Core capabilities</span>
              <h2 id="capabilities-heading">Know what is there.<br />Understand what changed.</h2>
              <p>
                Transparent monitoring for environments where external cloud connectivity is restricted and operational context is paramount.
              </p>
              <span className="square-label">Research Prototype · FAST NUCES</span>
            </div>
            <div className="capability-list">
              {capabilities.map(([title, benefit, body], i) => (
                <article key={title}>
                  <span className="feature-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p className="benefit">{benefit}</p>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Protocol Coverage */}
        <section className="section shell protocols" aria-labelledby="protocol-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Protocol coverage</span>
              <h2 id="protocol-heading">Industrial protocols.<br />Defined boundaries.</h2>
            </div>
            <p>
              Tested against lab traffic and selected public captures. Coverage reflects installed Zeek analyzers, decoded fields, and configured rule thresholds.
            </p>
          </div>
          <div className="protocol-table">
            <div className="protocol-header">
              <span>Protocol</span>
              <span>Evidence scope</span>
              <span>What to keep in mind</span>
            </div>
            {protocols.map(p => (
              <article className="protocol-row" key={p.name}>
                <h3>{p.name}</h3>
                <p><span className="mobile-label">Evidence scope</span>{p.scope}</p>
                <p><span className="mobile-label">Limitations</span>{p.limit}</p>
              </article>
            ))}
          </div>
          <p className="small-copy mt-6">
            Protocol support does not guarantee detection of every possible malicious variant or zero-day command. Visibility is governed by mirror port quality and network TAP placement.
          </p>
        </section>

        {/* Bottom CTA to Architecture */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
              <span className="eyebrow">Next in system design</span>
              <h2>See how the passive TAP pipeline works</h2>
              <p>Learn how mirrored traffic is ingested, normalized via Zeek, and processed without inline risk.</p>
            </div>
            <Link href="/architecture" className="button">
              Explore Architecture →
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
          <span>Platform evidence captured from isolated laboratory network.</span>
        </div>
      </footer>
    </>
  );
}
