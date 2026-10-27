import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { serviceGroups } from "@/lib/siteContent";
import styles from "../../inner-pages.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceGroups.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceGroups.find((group) => group.slug === slug);
  return { title: service ? `${service.title} | AS Digital` : "Service | AS Digital" };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceGroups.find((group) => group.slug === slug);
  if (!service) notFound();

  const message = encodeURIComponent(`Assalam o Alaikum! I would like to discuss ${service.title} for my business. Please share the details and next steps.`);

  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero}><div className={styles.shell}>
        <Link className={styles.cardLink} href="/services">← All services</Link>
        <p className={styles.eyebrow} style={{marginTop:24}}>Service {service.number}</p>
        <h1>{service.title} for your <span>business.</span></h1>
        <p className={styles.intro}>{service.detail}</p>
        <a className={styles.button} href={`https://wa.me/923097429289?text=${message}`} target="_blank" rel="noreferrer">Ask about this service <span aria-hidden="true">↗</span></a>
      </div></section>
      <section className={styles.section}><div className={styles.shell}>
        <p className={styles.eyebrow}>Services in this area</p><h2>What this can include.</h2>
        <div className={styles.grid} style={{marginTop:32}}>{service.services.map((item,index)=><article className={styles.card} key={item}><span className={styles.cardIndex}>0{index+1}</span><h3>{item}</h3><p>Talk through your goals and find out how this service could fit your business.</p><a className={styles.cardLink} href={`https://wa.me/923097429289?text=${encodeURIComponent(`Assalam o Alaikum! I would like more information about ${item}.`)}`} target="_blank" rel="noreferrer">Ask a question ↗</a></article>)}</div>
      </div></section>
      <section className={styles.section + " " + styles.soft}><div className={styles.shell}><p className={styles.eyebrow}>How to get started</p><h2>A straightforward first conversation.</h2><div className={styles.details}>{service.steps.map((step,index)=><details key={step} open><summary>Step {index+1}: {step}</summary><p>We’ll learn about your requirements and discuss a practical next step with you.</p></details>)}</div></div></section>
      <section className={styles.cta}><div className={styles.shell}><p className={styles.eyebrow}>Talk to AS Digital</p><h2>Let’s see if this service fits your goals.</h2><p>Send a WhatsApp message with your question. The team will help you understand the next step.</p><a className={styles.button} href={`https://wa.me/923097429289?text=${message}`} target="_blank" rel="noreferrer">Continue on WhatsApp <span aria-hidden="true">↗</span></a><br /><Link className={styles.cardLink} href="/services">Back to all services →</Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
