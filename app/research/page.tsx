import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Research & Evidence Boundaries | SentinelOT',
  description: 'Academic provenance from FAST NUCES Islamabad, public dataset validation, detection boundaries, and offline vulnerability matching prerequisites.',
};

export default function ResearchPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Page Hero */}
        <section className="subpage-hero" aria-labelledby="research-page-title">
          <div className="shell">
            <span className="eyebrow">Academic Research & Validation</span>
            <h1 id="research-page-title" className="subpage-heading">
              Trust begins with<br />knowing the limits.
            </h1>
            <p className="subpage-lead">
              SentinelOT is an applied cybersecurity research project from FAST NUCES Islamabad. We believe transparency about what a system cannot do is as vital as demonstrating its capabilities.
            </p>
          </div>
        </section>

        {/* Prototype Status & Dataset Validation */}
        <section className="section shell research" aria-labelledby="validation-heading">
          <div className="research-intro">
            <span className="eyebrow">Evidence foundation</span>
            <h2 id="validation-heading">Calibrated against public benchmarks.</h2>
            <p>
              Rather than making sweeping unverified claims about detection accuracy in operating utility plants, SentinelOT evaluates rules against established benchmark captures.
            </p>
            <div className="research-status">
              <strong>Current</strong>
              <span>Passive capture, device discovery, configurable stateful rules, and local vulnerability matching with explicit uncertainty.</span>
              <strong>Roadmap</strong>
              <span>Machine-learning anomaly baselines, embedded ARM deployment, expanded benign baseline datasets, and live substation pilot validation.</span>
            </div>
          </div>

          <div className="research-details">
            <details open>
              <summary>Protocol semantics before labels</summary>
              <p>
                Detection uses decoded operations, request direction, and configured thresholds. An authorized source IP address does not prove operator intent; an alert needs operational process context.
              </p>
            </details>
            <details open>
              <summary>Configurable, traceable rules</summary>
              <p>
                Rules express operations, allowlists, and stateful conditions such as write bursts or communication gaps. The rule identifier connects an alert to its detection logic. Thresholds need tuning to the site's operating cycle.
              </p>
            </details>
            <details open>
              <summary>Independent dataset validation</summary>
              <p>
                Project records document selected public captures from the Lemay Modbus dataset, QUT S7comm dataset, UOWM DNP3 dataset, and NPS ControlLogix corpus. These exercise specific parser and rule paths; they are not comprehensive industrial validation.
              </p>
              <p>
                DNP3 enumeration and information gathering remain documented gaps. Public captures do not calibrate every rule or every operating condition.
              </p>
            </details>
            <details open>
              <summary>Test coverage is not detection effectiveness</summary>
              <p>
                Automated tests check implementation behaviour against defined inputs and rule boundaries. They cannot establish a plant-wide false-positive rate, safety, throughput, or detection accuracy. Those require representative benign operation and independent field evaluation.
              </p>
              <p>No rule-count, accuracy, or performance claim is published here without empirical field data.</p>
            </details>
            <details open>
              <summary>Offline matching has prerequisites</summary>
              <p>
                The implemented matcher uses approved identities, product mappings, and imported CVE intelligence. It reports missing identity, firmware, and CPE mapping explicitly. A device with no known match is not certified safe.
              </p>
              <p>Intelligence needs controlled updates. Documented offline bundle tooling does not verify a completed Raspberry Pi deployment.</p>
            </details>
          </div>
        </section>

        {/* Dataset Reference Cards */}
        <section className="use-cases section" aria-labelledby="benchmarks-heading">
          <div className="shell">
            <div className="section-heading">
              <div>
                <span className="eyebrow">Corpus Sources</span>
                <h2 id="benchmarks-heading">Evaluated Public Datasets</h2>
              </div>
              <p>Selected industrial datasets referenced during parser development and rule verification.</p>
            </div>
            <div className="use-case-grid">
              <article>
                <span className="use-number">01</span>
                <h3>Lemay Modbus</h3>
                <p>Modbus TCP traffic captures featuring benign baseline polling and controlled command injection attacks.</p>
              </article>
              <article>
                <span className="use-number">02</span>
                <h3>QUT S7comm</h3>
                <p>Siemens S7comm traffic captures containing PLC read/write jobs, stop/start transitions, and write floods.</p>
              </article>
              <article>
                <span className="use-number">03</span>
                <h3>UOWM DNP3</h3>
                <p>Electric utility SCADA traces with outstation command polling, restart sequences, and communication timeouts.</p>
              </article>
              <article>
                <span className="use-number">04</span>
                <h3>NPS ControlLogix</h3>
                <p>EtherNet/IP and CIP traffic exercising session establishment, identity requests, and controller tag reads.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Bottom CTA to About */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
              <span className="eyebrow">The Research Team</span>
              <h2>Meet the researchers behind SentinelOT</h2>
              <p>Developed at the Department of Computer Science, FAST NUCES Islamabad.</p>
            </div>
            <Link href="/about" className="button">
              Meet the Team →
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
          <span>Academic methodology and verification boundaries.</span>
        </div>
      </footer>
    </>
  );
}
