import { pageMetadata } from '@/lib/metadata';
import ProductGallery from '@/components/ProductGallery';
import Hardware from '@/components/Hardware';
import Architecture from '@/components/Architecture';
import Demo from '@/components/Demo';
import { ContactBand } from '@/components/Site';
import { applications, capabilities, protocols } from '@/lib/content';
import PageSchema from '@/components/PageSchema';
import StructuredData from '@/components/StructuredData';
import { productFaqs } from '@/lib/faqs';
export const metadata = pageMetadata('OT/ICS Monitoring Platform', 'Explore SentinelOT passive asset discovery, Modbus TCP, S7comm, DNP3 and EtherNet/IP evidence, explainable alerts and offline vulnerability matching.', '/product/');
export default function Product() {
  return <>
    <PageSchema name="OT/ICS Monitoring Platform" path="/product/" description="SentinelOT capabilities, industrial protocol scope, dashboard evidence and proposed physical architecture." />
    <StructuredData data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: productFaqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) }} />
    <section className="page-intro shell"><p className="eyebrow">The SentinelOT platform</p><h1>From network traffic<br />to a clearer picture.</h1><p>Discover observed assets, inspect industrial operations and investigate alerts. Keep the evidence close to your process.</p><nav className="page-jumps" aria-label="Product sections"><a href="#platform">Dashboard</a><a href="#protocols">Protocols</a><a href="#how-it-works">How it works</a><a href="#hardware">Hardware concept</a><a href="#use-cases">Use cases</a></nav></section>
    <section className="shell product-gallery-section" id="platform"><div className="stage-label"><span>Explore the dashboard</span><span>Static research lab evidence</span></div><ProductGallery /></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Core capabilities</p><h2>Visibility with context.</h2></div><p>Four complementary capabilities, designed to support an operator’s investigation.</p></div><div className="capability-list">{capabilities.map((item,i) => <article key={item.id} id={item.id}><span className="index">0{i+1}</span><h3>{item.title}</h3><div><p className="benefit">{item.benefit}</p><p>{item.detail}</p></div></article>)}</div></section>
    <section className="section scope-section" id="protocols"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Protocol coverage</p><h2>Industrial protocols.<br />Defined boundaries.</h2></div><p>Tested scope depends on installed analyzers, decoded fields and configured rules. Protocol support does not mean every operation is covered.</p></div><div className="protocol-table"><div className="protocol-header"><span>Protocol</span><span>Evidence scope</span><span>Limitations</span></div>{protocols.map(item => <article className="protocol-row" key={item.name}><h3>{item.name}</h3><p><span className="mobile-label">Evidence scope</span>{item.scope}</p><p><span className="mobile-label">Limitations</span>{item.limit}</p></article>)}</div></div></section>
    <Architecture /><Hardware />
    <section className="section shell" id="demo"><div className="section-heading"><div><p className="eyebrow">Inside the lab</p><h2>A process change.<br />An explainable alert.</h2></div><p>A FUXA tank process provides a setting for investigating controlled writes. The demonstration recording will be added after capture and review.</p></div><Demo /></section>
    <section className="application-section section" id="use-cases"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Intended applications</p><h2>Where visibility matters.</h2></div><p>These are environments we intend to explore, rather than verified customer deployments.</p></div><div className="use-case-grid">{applications.map(([name, description],i) => <article key={name}><span className="index">0{i+1}</span><h3>{name}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="section shell" id="questions"><div className="section-heading"><div><p className="eyebrow">Questions about SentinelOT</p><h2>Common questions.</h2></div><p>What the prototype does, how it observes traffic and where further validation is needed.</p></div><div className="research-details">{productFaqs.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
    <ContactBand />
  </>;
}
