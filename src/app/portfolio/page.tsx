import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import styles from "../inner-pages.module.css";
import portfolioStyles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Case Studies | AS Digital",
  description: "Explore AS Digital case studies across paid advertising, local SEO, technical SEO, GEO, WordPress, and Meta Ads.",
};

const caseStudies = [
  {
    number: "01",
    category: "Paid Advertising · Local SEO",
    industry: "Healthcare & specialist clinics",
    period: "2026",
    title: "Turning local search into more appointment inquiries",
    summary: "A coordinated Google Search and Google Business Profile strategy increased inbound appointment inquiries by 190%.",
    challenge: "Two specialist clinics in Lahore had low visibility in Google Maps and high costs from broad, low-intent medical searches.",
    approach: "We refined the Google Business Profile categories, excluded irrelevant searches with negative keywords, and built a fast mobile landing page with direct WhatsApp appointment booking.",
    services: ["Google Ads", "Local SEO", "Google Business Profile", "WhatsApp booking flow"],
    results: [
      { value: "+190%", label: "Direct phone inquiries" },
      { value: "Top 3", label: "Google Maps rankings across 14 core specialties" },
      { value: "−42%", label: "Cost per appointment" },
    ],
  },
  {
    number: "02",
    category: "Technical SEO · GEO",
    industry: "B2B professional services",
    period: "2026",
    title: "Building search authority for a B2B consultancy",
    summary: "A clearer site structure, technical SEO improvements, and entity signals helped the firm gain visibility in organic and generative search.",
    challenge: "The consultancy’s website had indexation issues and duplicate content, and was missing from AI-generated search answers.",
    approach: "We reorganized the site into six topic clusters, implemented nested JSON-LD structured data, and strengthened the company’s entity citations across relevant industry platforms.",
    services: ["Technical SEO", "GEO", "Structured data", "Topical clustering"],
    results: [
      { value: "84+", label: "Commercial keywords in Google’s Top 3" },
      { value: "+148%", label: "Organic search clicks" },
      { value: "#1 cited", label: "Answer-engine citations in Perplexity and Gemini" },
    ],
  },
  {
    number: "03",
    category: "WordPress · Meta Ads",
    industry: "E-commerce & retail products",
    period: "2025–2026",
    title: "A faster mobile journey from product to order",
    summary: "A streamlined WooCommerce experience paired with Meta Ads delivered a 0.8-second mobile page load and 6.2× return on ad spend.",
    challenge: "Mobile shoppers faced a 4.2-second load time and a complicated four-step checkout, contributing to abandoned orders.",
    approach: "We rebuilt the WordPress landing experience for a 0.8-second load, simplified checkout into a one-tap WhatsApp order flow, and paired it with Meta Advantage+ campaigns.",
    services: ["WordPress development", "Mobile performance", "Meta Ads", "Conversion optimization"],
    results: [
      { value: "0.8s", label: "Mobile load time · down from 4.2s" },
      { value: "7.6%", label: "Overall checkout conversion rate" },
      { value: "6.2×", label: "Return on ad spend (ROAS)" },
    ],
  },
];

export default function PortfolioPage() {
  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero}><div className={styles.shell}><p className={styles.eyebrow}>Selected case studies</p><h1>Strategy shaped around <span>real business goals.</span></h1><p className={styles.intro}>See how AS Digital brought search, advertising, and web improvements together to solve specific growth challenges.</p></div></section>
      <section className={portfolioStyles.caseSection}><div className={styles.shell}>
        <div className={portfolioStyles.caseList}>
          {caseStudies.map((study) => (
            <article className={portfolioStyles.caseStudy} key={study.number}>
              <div className={portfolioStyles.caseMain}>
                <div className={portfolioStyles.caseTopline}><span>CASE STUDY {study.number}</span><span>CAMPAIGN PERIOD · {study.period}</span></div>
                <p className={portfolioStyles.caseCategory}>{study.category}</p>
                <p className={portfolioStyles.caseIdentity}>Anonymized client · {study.industry}</p>
                <h2>{study.title}</h2>
                <p className={portfolioStyles.caseSummary}>{study.summary}</p>
                <div className={portfolioStyles.caseDetail}><h3>The challenge</h3><p>{study.challenge}</p></div>
                <div className={portfolioStyles.caseDetail}><h3>What we did</h3><p>{study.approach}</p></div>
                <ul className={portfolioStyles.serviceTags} aria-label="Services used">
                  {study.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
              </div>
              <aside className={portfolioStyles.results} aria-label={`Results for case study ${study.number}`}>
                <p className={portfolioStyles.resultsLabel}>Results at a glance</p>
                <div className={portfolioStyles.metrics}>
                  {study.results.map((result) => <div className={portfolioStyles.metric} key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
                </div>
              </aside>
            </article>
          ))}
        </div>
        <div className={portfolioStyles.projectLink}><p>Have a similar challenge?</p><Link href="/contact">Let’s talk about your goals <span aria-hidden="true">→</span></Link></div>
      </div></section>
      <section className={`${styles.cta} ${styles.servicesCta}`}><div className={styles.shell}><p className={styles.eyebrow}>Ready for your next growth move?</p><h2>Let’s build a plan around your business goals.</h2><p>Tell us what you’re working toward. We’ll help you explore the right digital next step.</p><Link className={styles.button} href="/contact">Discuss your project <span aria-hidden="true">→</span></Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
