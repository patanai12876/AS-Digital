import type { Metadata } from "next";
import Link from "next/link";
import ServiceCards from "@/components/ServiceCards";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { serviceCards, serviceGroups } from "@/lib/siteContent";
import styles from "../inner-pages.module.css";

type ServicesPageProps = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export const metadata: Metadata = {
  title: "Digital Marketing Services | AS Digital Lahore",
  description: "Explore SEO, paid advertising, social media, website development, and marketing automation services from AS Digital.",
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const params = await searchParams;
  const initialService = typeof params.service === "string" ? params.service : undefined;

  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.serviceHero}`}><div className={styles.shell}><div className={styles.heroGrid}>
        <div><p className={styles.eyebrow}>Digital services for businesses</p><h1>Make your next digital move <span>count.</span></h1><p className={styles.intro}>From getting found online to building a more useful website, explore services shaped around your business needs.</p><a className={styles.button} href="https://wa.me/923097429289?text=Assalam%20o%20Alaikum!%20I%20would%20like%20to%20discuss%20digital%20services%20for%20my%20business." target="_blank" rel="noreferrer">Discuss your goals on WhatsApp <span aria-hidden="true">↗</span></a></div>
      </div></div></section>
      <section className={styles.section}><div className={styles.shell}><p className={styles.eyebrow}>What we can help with</p><h2>Digital support for each stage of growth.</h2><p className={styles.sectionIntro}>Choose a service to explore what it includes and how to get started.</p><ServiceCards services={serviceCards} groups={serviceGroups} initialOpen={initialService} /></div></section>
      <section className={`${styles.cta} ${styles.servicesCta}`}><div className={styles.shell}><p className={styles.eyebrow}>Have a project in mind?</p><h2>Let’s work out a practical next step.</h2><p>Share a little about your business and what you want to accomplish. We’ll take it from there.</p><Link className={styles.button} href="/contact">Contact AS Digital <span aria-hidden="true">→</span></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
