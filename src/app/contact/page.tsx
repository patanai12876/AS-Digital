import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import { courses, serviceCards } from "@/lib/siteContent";
import styles from "../inner-pages.module.css";

export const metadata: Metadata = {
  title: "Contact AS Digital | Lahore & Online",
  description: "Ask AS Digital about business services, training courses, fees, and upcoming batches through WhatsApp.",
};

export default function ContactPage() {
  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero}><div className={styles.shell}><p className={styles.eyebrow}>Contact AS Digital</p><h1>Let’s talk about what you want to <span>build.</span></h1><p className={styles.intro}>Share your business or learning goals. Choose an inquiry form and we’ll prepare a message for WhatsApp.</p></div></section>
      <section className={styles.section}><div className={styles.shell}><div className={styles.contactGrid}>
        <aside className={styles.contactInfo}>
          <p className={`${styles.eyebrow} ${styles.contactEyebrow}`}>Talk to our team</p>
          <h2>Have a question?</h2>
          <p className={styles.contactSummary}>Ask us about services, courses, or enrollment.</p>
          <a className={styles.contactPhone} href="https://wa.me/923097429289" target="_blank" rel="noreferrer">+92 309 7429289 <span aria-hidden="true">↗</span></a>
          <div className={styles.contactLocation}><strong>Lahore campus</strong><span>Multan Road · Hassan Town / Eden Villas</span></div>
          <a className={styles.directionsLink} href="https://www.google.com/maps/dir/?api=1&destination=Multan%20Road%2C%20Hassan%20Town%2C%20Eden%20Villas%2C%20Lahore%2C%20Pakistan" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          <p className={styles.contactFormats}>In-person classes · Live online</p>
          <nav className={styles.contactSocials} aria-label="AS Digital social media">
            <a href="https://www.instagram.com/asdigitalss/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/Asdigitalss/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/company/asdigitals/" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </aside>
        <div><ContactInquiryForm services={serviceCards.map(({ title }) => title)} courses={courses.map(({ title }) => title)} /></div>
      </div></div></section>
    </main>
    <SiteFooter />
  </>;
}
