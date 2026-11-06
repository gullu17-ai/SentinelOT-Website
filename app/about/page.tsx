import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'About the Project & Team | SentinelOT',
  description: 'Learn about the student researchers from FAST NUCES Islamabad building SentinelOT for offline industrial cybersecurity visibility.',
};

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        {/* Page Hero */}
        <section className="subpage-hero" aria-labelledby="about-page-title">
          <div className="shell">
            <span className="eyebrow">Project & Research Team</span>
            <h1 id="about-page-title" className="subpage-heading">
              Built from research.<br />Grounded in the lab.
            </h1>
            <p className="subpage-lead">
              SentinelOT was created to investigate practical, explainable network visibility for industrial operators without depending on external cloud infrastructure.
            </p>
          </div>
        </section>

        {/* About Details */}
        <section className="about section" aria-labelledby="institution-heading">
          <div className="shell about-layout">
            <div>
              <span className="eyebrow">Academic Institution</span>
              <h2 id="institution-heading">FAST NUCES<br />Islamabad</h2>
              <p className="mt-6">
                National University of Computer and Emerging Sciences (NUCES), Islamabad campus. Developed under the Department of Computer Science as an applied undergraduate capstone research initiative in Critical Infrastructure Security.
              </p>
            </div>
            <div>
              <p className="about-lead">
                Exploring how OT monitoring can remain <strong>local, understandable, and safe</strong> in constrained environments.
              </p>
              <p>
                Industrial facilities controlling water treatment, power distribution, and manufacturing lines often run under air-gapped constraints where commercial cloud telemetry is forbidden or physically impossible. SentinelOT demonstrates that local protocol parsing and explainable rules provide meaningful protection without operational disruption.
              </p>

              <span className="eyebrow mt-10">Research Contributors</span>
              <ul className="team">
                <li>Muhammad Abdullah</li>
                <li>Usman Khan</li>
                <li>Momin Amin</li>
              </ul>

              <div className="contact mt-10" id="contact">
                <h3>Contact & Academic Inquiries</h3>
                <p>
                  A public contact address has not yet been designated. Official contact and paper repository links will appear here once finalized by the project team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA to Home */}
        <section className="section shell subpage-cta">
          <div className="subpage-cta-box">
            <div>
              <span className="eyebrow">Start from the beginning</span>
              <h2>Ready to explore the platform?</h2>
              <p>Watch the interactive demonstration or examine genuine lab captures.</p>
            </div>
            <Link href="/" className="button">
              Return to Overview →
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
          <span>Applied ICS/OT security research initiative.</span>
        </div>
      </footer>
    </>
  );
}
