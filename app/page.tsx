import Link from 'next/link';
import ProductGallery from '@/components/ProductGallery';
import NetworkAnimation from '@/components/NetworkAnimation';
import HeroHeadline from '@/components/HeroHeadline';
import HeroParticles from '@/components/HeroParticles';
import PageSchema from '@/components/PageSchema';
import { Arrow, BriefLink, ContactBand } from '@/components/Site';
import { capabilities, applications } from '@/lib/content';

export default function Home() {
  return <>
    <PageSchema name="SentinelOT — Offline-first OT/ICS Security" path="/" description="Offline-first industrial network monitoring research prototype developed at FAST NUCES Islamabad." />
    <section className="home-hero shell" aria-labelledby="hero-title">
      <div className="hero-intro">
      <HeroParticles />
      <p className="eyebrow hero-eyebrow">Industrial networks. Clearer perspective.</p>
      <HeroHeadline />
      <p className="hero-subtitle">Offline-first OT monitoring. Local data. Explainable alerts.</p>
      <div className="hero-actions"><Link className="button" href="/product/">Explore the Platform <Arrow /></Link><BriefLink /></div>
      <p className="hero-note">Research prototype · Developed at FAST NUCES Islamabad</p>
      </div>
      <NetworkAnimation />
      <div className="product-stage"><div className="stage-label"><span>Inside SentinelOT</span><span>Current interface / 15 Nov 2026</span></div><ProductGallery compact /></div>
    </section>
    <div className="protocol-strip shell" aria-label="In-scope industrial protocols"><span>Built around OT protocols</span><ul><li>Modbus TCP</li><li>Siemens S7comm</li><li>DNP3</li><li>EtherNet/IP / CIP</li></ul><Link href="/product/#protocols">View scope <Arrow /></Link></div>
    <section className="statement-band"><div className="shell statement-layout"><p className="eyebrow">Local by design</p><h2>Your network.<br />Your evidence.<br /><span>Kept local.</span></h2><div><p>SentinelOT is an offline-first OT/ICS security research prototype developed at FAST NUCES Islamabad. It turns copied industrial network traffic into assets, events and explainable alerts, with evidence you can examine locally.</p><Link href="/product/#how-it-works" className="light-link">See how it works <Arrow /></Link></div></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">A practical starting point</p><h2>Know the network.<br />Understand the change.</h2></div><p>Move from an unfamiliar endpoint to the industrial operation behind an alert.</p></div><div className="benefit-grid">{capabilities.slice(0, 3).map((item, i) => <article key={item.title}><span className="index">0{i + 1}</span><h3>{item.benefit}</h3><p>{item.summary}</p><Link className="text-link" href={`/product/#${item.id}`}>{item.title} <Arrow /></Link></article>)}</div></section>
    <section className="application-section section"><div className="shell applications-layout"><div><p className="eyebrow">Intended applications</p><h2>Built with industrial<br />environments in mind.</h2><p className="section-description">We’re exploring visibility for process environments where operational context matters. These are intended applications; field deployments are still ahead.</p><Link href="/product/#use-cases" className="text-link">Explore the use cases <Arrow /></Link></div><div className="application-list">{applications.map(([name, description], i) => <article key={name}><span className="index">0{i + 1}</span><div><h3>{name}</h3><p>{description}</p></div></article>)}</div></div></section>
    <section className="section shell research-teaser"><div><p className="eyebrow">From research to real-world evaluation</p><h2>Trust starts<br />with evidence.</h2></div><div><p className="lead">A working research prototype. A clear path to what comes next.</p><p>Developed at FAST NUCES Islamabad, SentinelOT combines protocol-aware rules with public dataset validation. We make the tested scope, open questions and hardware roadmap visible.</p><Link className="text-link" href="/research/">Read the research <Arrow /></Link></div></section>
    <ContactBand />
  </>;
}
