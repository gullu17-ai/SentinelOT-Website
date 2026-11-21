import PageSchema from '@/components/PageSchema';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { Arrow, BriefLink, ContactBand } from '@/components/Site';
export const metadata = pageMetadata('OT/ICS Security Research & Evidence', 'The research behind SentinelOT: protocol semantics, configurable rules, dataset validation and transparent limitations.', '/research/');
const evidence = [
  ['Protocol semantics before labels', 'Detection uses decoded operations, request direction and configured thresholds. The goal is to connect an alert to the industrial action behind it. An authorized source does not prove operator intent; investigation still needs process context.'],
  ['Configurable, traceable rules', 'Rules express operations, allowlists and stateful conditions such as write bursts and communication gaps. Each rule identifier connects an alert to its logic. Thresholds require tuning to the site’s normal operating cycle.'],
  ['Public dataset validation', 'Project records document selected public captures from the Lemay Modbus dataset, QUT S7comm dataset, UOWM DNP3 dataset and NPS ControlLogix corpus. They exercise specific parser and rule paths, rather than establish comprehensive industrial validation.'],
  ['Tests and field effectiveness', 'Automated tests check implementation behaviour against defined inputs. They cannot establish a plant-wide false-positive rate, throughput, safety or detection accuracy. Those need representative benign operation and independent field evaluation.'],
];
export default function Research() {
  return <>
    <PageSchema name="OT/ICS Security Research & Evidence" path="/research/" description="SentinelOT research methodology, protocol scope, evidence limitations and development roadmap." />
    <section className="page-intro shell"><p className="eyebrow">Research & evidence</p><h1>Show the evidence.<br />Make the limits clear.</h1><p>SentinelOT began at FAST NUCES Islamabad. We’re building toward practical industrial monitoring through transparent implementation and bounded validation.</p><div className="intro-actions"><BriefLink /><Link href="/about/" className="text-link">Meet the team <Arrow /></Link></div></section>
    <section className="research-status-section"><div className="shell status-layout"><p className="eyebrow">Development status</p><div><h2>A working prototype.<br />Further validation ahead.</h2><p>The end-to-end lab path connects passive capture, discovery, configurable detection rules, local vulnerability matching and dashboard evidence.</p><p className="small-copy">This is a research prototype. No production readiness, customer deployments or independent performance certification is claimed.</p></div></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">The approach</p><h2>Built to be examined.</h2></div><p>Explainability means an operator can follow the evidence, question a match and understand the boundaries.</p></div><div className="evidence-list">{evidence.map(([title,body],i) => <article key={title}><span className="index">0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
    <section className="section limitations-section" id="limitations"><div className="shell research-teaser"><div><p className="eyebrow">Known limitations</p><h2>Context matters.<br />So do the gaps.</h2></div><div className="research-details">
      <details open><summary>Capture and protocol coverage</summary><p>Visibility depends on what crosses the monitored link, capture quality and the installed analyzers. Silent devices may remain unseen. S7comm coverage does not imply S7comm Plus support. DNP3 enumeration and information gathering remain documented gaps.</p></details>
      <details open><summary>Vulnerability matching needs identity</summary><p>Results depend on approved device identity, firmware and CPE mappings, plus controlled intelligence updates. Missing inputs stay unknown. No known vulnerability match is not a safety assurance.</p></details>
      <details><summary>Independent datasets have boundaries</summary><p>Selected public captures support individual parser and rule paths. They do not calibrate every rule, establish field accuracy or reproduce the operating cycle of a customer environment.</p></details>
      <details><summary>Hardware and deployment remain to be validated</summary><p>Raspberry Pi deployment, real SPAN/TAP capture, long-duration threshold calibration and deployment authentication/TLS remain work ahead. Local dashboard hardening does not by itself establish production readiness.</p></details>
    </div></div></section>
    <section className="section shell" id="roadmap"><div className="section-heading"><div><p className="eyebrow">The next steps</p><h2>A deliberate path forward.</h2></div><p>These are development goals, with no delivery dates or completion claims attached.</p></div><div className="roadmap-list">{[
      ['Physical capture validation', 'Validate managed-switch SPAN or network TAP capture and separate management access on real hardware.'],
      ['Compact sensor deployment', 'Evaluate Raspberry Pi deployment, interfaces, cooling and capture performance. The model on this website is a concept.'],
      ['Longer operational baselines', 'Calibrate thresholds against representative benign operation and expand independent field evaluation.'],
      ['Deployment controls & ML research', 'Validate deployment authentication and TLS, then explore machine-learning anomaly detection as a separate research layer.'],
    ].map(([title,body],i) => <article key={title}><span className="index">0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div><span className="roadmap-state">Planned</span></article>)}</div></section>
    <ContactBand />
  </>;
}
