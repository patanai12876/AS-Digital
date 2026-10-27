import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import TrainingCards from "@/components/TrainingCards";
import styles from "../inner-pages.module.css";
import trainingStyles from "./training.module.css";

export const metadata: Metadata = {
  title: "Digital Marketing Courses in Lahore & Online | AS Digital",
  description: "Learn digital marketing, Advanced SEO and GEO, or social media through practical in-person and live online classes.",
};

type TrainingsPageProps = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

const whatsappNumber = "923097429289";

function courseWhatsAppLink(course: string) {
  const message = `Assalam o Alaikum! I am interested in the ${course} course at AS Digital. Please share the course fee, upcoming batch timings, and enrollment details. Preferred format: [in-person / live online].`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default async function TrainingsPage({ searchParams }: TrainingsPageProps) {
  const params = await searchParams;
  const initialCourse = typeof params.course === "string" ? params.course : undefined;

  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.serviceHero}`}><div className={styles.shell}><div className={styles.heroGrid}>
        <div><p className={styles.eyebrow}>Practical digital skills</p><h1>Learn skills you can put to <span>work.</span></h1><p className={styles.intro}>Build your digital marketing knowledge through focused courses, practical learning, and trainer guidance.</p><a className={styles.button} href="https://wa.me/923097429289?text=Assalam%20o%20Alaikum!%20Please%20share%20the%20course%20fees%2C%20upcoming%20batch%20timings%2C%20and%20enrollment%20details." target="_blank" rel="noreferrer">Ask about the next batch <span aria-hidden="true">↗</span></a></div>
      </div></div></section>
      <section className={styles.section}><div className={styles.shell}><p className={styles.eyebrow}>Choose a course</p><h2>Start with what you want to learn.</h2><p className={styles.sectionIntro}>Course fees, upcoming batch timings, and enrollment details are shared through WhatsApp.</p>
        <TrainingCards initialCourse={initialCourse} />
        <div className={trainingStyles.formatGrid}>
          <article className={trainingStyles.formatCard}><span className={trainingStyles.formatIcon} aria-hidden="true">⌖</span><div><h3>In-person classes</h3><p>Lahore campus</p></div></article>
          <article className={trainingStyles.formatCard}><span className={trainingStyles.formatIcon} aria-hidden="true">↗</span><div><h3>Live online classes</h3><p>Learn from where you are</p></div></article>
        </div>
        <section className={trainingStyles.faqSection} aria-labelledby="training-faq-title">
          <p className={`${styles.eyebrow} ${trainingStyles.faqEyebrow}`}>FAQs</p>
          <h2 className={trainingStyles.faqHeading} id="training-faq-title">A few things you might want to know.</h2>
          <p className={trainingStyles.faqIntro}>Quick answers about courses and getting started.</p>
          <div className={trainingStyles.faqGrid}>
            <details className={trainingStyles.faqItem}><summary>How do I get course fees and batch timings?</summary><p>Message AS Digital on WhatsApp. The team will share current fees, upcoming timings, and enrollment details.</p></details>
            <details className={trainingStyles.faqItem}><summary>Which courses can I join?</summary><p>AS Digital offers Digital Marketing, Advanced SEO and GEO, and Social Media training.</p></details>
            <details className={trainingStyles.faqItem}><summary>Are classes available online?</summary><p>Yes. You can join live online classes or attend in person at the Lahore campus.</p></details>
            <details className={trainingStyles.faqItem}><summary>Where are the in-person classes held?</summary><p>The Lahore campus is in the Multan Road / Hassan Town / Eden Villas area. Message the team for directions and current campus details.</p></details>
            <details className={trainingStyles.faqItem}><summary>How do I enroll in a course?</summary><p>Choose a course and message AS Digital on WhatsApp to get the current fee, batch schedule, format, and enrollment steps.</p></details>
          </div>
        </section>
      </div></section>
      <section className={`${styles.cta} ${styles.servicesCta}`}><div className={styles.shell}><p className={styles.eyebrow}>Ready to learn?</p><h2>Ask about the course that fits your goals.</h2><p>We’ll share the current schedule and explain how to enroll.</p><a className={styles.button} href={courseWhatsAppLink("a training course")} target="_blank" rel="noreferrer">Message on WhatsApp <span aria-hidden="true">↗</span></a></div></section>
    </main>
    <SiteFooter />
  </>;
}
