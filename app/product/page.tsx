import { pageMetadata } from '@/lib/metadata';
import ProductGallery from '@/components/ProductGallery';
import Hardware from '@/components/Hardware';
import Architecture from '@/components/Architecture';
import Demo from '@/components/Demo';
import { ContactBand } from '@/components/Site';
import { applications, capabilities, protocols } from '@/lib/content';
export const metadata = pageMetadata('Product', 'Explore SentinelOT asset inventory, industrial protocol evidence, explainable alerts and offline vulnerability matching.', '/product/');
export default function Product() {
  return <>
    <section className="page-intro shell"><p className="eyebrow">The SentinelOT platform</p><h1>From network traffic<br />to a clearer picture.</h1><p>Discover observed assets, inspect industrial operations and investigate alerts. Keep the evidence close to your process.</p><nav className="page-jumps" aria-label="Product sections"><a href="#platform">Dashboard</a><a href="#protocols">Protocols</a><a href="#how-it-works">How it works</a><a href="#hardware">Hardware concept</a><a href="#use-cases">Use cases</a></nav></section>
    <section className="shell product-gallery-section" id="platform"><div className="stage-label"><span>Explore the dashboard</span><span>Static research lab evidence</span></div><ProductGallery /></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Core capabilities</p><h2>Visibility with context.</h2></div><p>Four complementary capabilities, designed to support an operator’s investigation.</p></div><div className="capability-list">{capabilities.map((item,i) => <article key={item.id} id={item.id}><span className="index">0{i+1}</span><h3>{item.title}</h3><div><p className="benefit">{item.benefit}</p><p>{item.detail}</p></div></article>)}</div></section>
    <section className="section scope-section" id="protocols"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Protocol coverage</p><h2>Industrial protocols.<br />Defined boundaries.</h2></div><p>Tested scope depends on installed analyzers, decoded fields and configured rules. Protocol support does not mean every operation is covered.</p></div><div className="protocol-table"><div className="protocol-header"><span>Protocol</span><span>Evidence scope</span><span>Limitations</span></div>{protocols.map(item => <article className="protocol-row" key={item.name}><h3>{item.name}</h3><p><span className="mobile-label">Evidence scope</span>{item.scope}</p><p><span className="mobile-label">Limitations</span>{item.limit}</p></article>)}</div></div></section>
    <Architecture /><Hardware />
    <section className="section shell" id="demo"><div className="section-heading"><div><p className="eyebrow">Inside the lab</p><h2>A process change.<br />An explainable alert.</h2></div><p>A FUXA tank process provides a setting for investigating controlled writes. The demonstration recording will be added after capture and review.</p></div><Demo /></section>
    <section className="application-section section" id="use-cases"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Intended applications</p><h2>Where visibility matters.</h2></div><p>These are environments we intend to explore, rather than verified customer deployments.</p></div><div className="use-case-grid">{applications.map(([name, description],i) => <article key={name}><span className="index">0{i+1}</span><h3>{name}</h3><p>{description}</p></article>)}</div></div></section>
    <ContactBand />
  </>;
}
