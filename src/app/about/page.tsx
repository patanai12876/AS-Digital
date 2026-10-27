import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import siteStyles from "../page.module.css";
import styles from "./about.module.css";

const whatsappLink = "https://wa.me/923097429289";

export const metadata: Metadata = {
  title: "About AS Digital | Digital Marketing and Training in Lahore",
  description:
    "Meet Dr. Muhammad Adnan Rafiq and learn about AS Digital’s digital marketing services, practical training, and journey in Lahore.",
  openGraph: {
    title: "About AS Digital",
    description:
      "Learn about AS Digital’s approach to business marketing and practical digital training in Lahore.",
    type: "website",
  },
};

const milestones = [
  {
    phase: "01",
    title: "Agency beginnings",
    description:
      "Started on Multan Road, Lahore, with direct-response campaigns for local retail and service businesses.",
  },
  {
    phase: "02",
    title: "Community meets practical training",
    description:
      "Built a 10,000+ member social community and launched practical cohorts using live accounts and real campaigns.",
  },
  {
    phase: "03",
    title: "Growing into modern search",
    description:
      "Grew to 17,000+ practitioners and expanded into Generative Engine Optimization (GEO).",
  },
];

const principles = [
  {
    number: "01",
    title: "Clear campaign work",
    text: "Businesses get transparent communication around campaign activity and performance.",
  },
  {
    number: "02",
    title: "Learning through practice",
    text: "Training connects digital concepts with practical work on live accounts and actual ad budgets.",
  },
  {
    number: "03",
    title: "Keep up with discovery",
    text: "The team works across digital marketing and newer search experiences, including GEO.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className={styles.aboutHero} aria-labelledby="about-title">
          <div className={styles.shell}>
            <div className={styles.aboutHeroCopy}>
              <p className={styles.eyebrow}>About AS Digital</p>
              <h1 id="about-title">Digital growth, grounded in <span>real practice.</span></h1>
              <p>
                AS Digital brings business marketing services and professional
                training together. Our work is built around clear campaigns for
                businesses and hands-on experience for aspiring practitioners.
              </p>
              <a className={`${siteStyles.button} ${siteStyles.buttonWhite}`} href={whatsappLink} target="_blank" rel="noreferrer">
                Discuss your goals <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.statsSection} aria-label="AS Digital at a glance">
          <div className={styles.shell}>
            <article className={styles.statCard}>
              <strong>17,000+</strong>
              <h2>Verified community</h2>
              <p>Active digital practitioners across social channels</p>
            </article>
            <article className={styles.statCard}>
              <strong>12+ yrs</strong>
              <h2>Industry leadership</h2>
              <p>Hands-on commercial campaign execution</p>
            </article>
            <article className={styles.statCard}>
              <strong>1,500+</strong>
              <h2>Professionals trained</h2>
              <p>Graduates working on live accounts</p>
            </article>
            <article className={styles.statCard}>
              <strong>98.4%</strong>
              <h2>Client retention rate</h2>
              <p>Performance-backed ROI delivery</p>
            </article>
          </div>
        </section>

        <section className={styles.trainerSection} id="trainer">
          <div className={styles.shell}>
            <div className={styles.trainerMark}>
              <span>LEARN · BUILD · GROW</span>
            </div>
            <div className={styles.trainerCopy}>
              <p className={styles.eyebrow}>Meet your trainer & founder</p>
              <h2>Dr. Muhammad Adnan Rafiq</h2>
              <p className={styles.trainerRole}>Digital Marketing Strategist</p>
              <p>Based near Multan Road in Lahore, Dr. Muhammad Adnan Rafiq is a digital marketing educator and growth strategist. He established AS Digital Marketing to bring greater transparency to business campaigns and practical experience to professional training.</p>
              <p>AS Digital supports businesses with search visibility, advertising, social media, websites, and marketing automation. Learners build their skills through practical training connected to live accounts and actual ad budgets.</p>
              <p>Training is available in person at the Lahore campus and through live online classes.</p>
              <a className={styles.inlineLink} href={`${whatsappLink}?text=${encodeURIComponent("Assalam o Alaikum! I would like to know more about AS Digital training courses and the upcoming batches.")}`} target="_blank" rel="noreferrer">
                Ask about training <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.approachSection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>How we work</p>
                <h2>Clear plans. Practical work.</h2>
              </div>
              <p>Whether you are building a business or developing your skills, start with useful work and a clear understanding of the next step.</p>
            </div>
            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article className={styles.principleCard} key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.journeySection}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>Our journey</p>
                <h2>A journey of steady growth.</h2>
              </div>
              <p>From client campaigns to practical training and modern search.</p>
            </div>
            <div className={styles.timeline}>
              {milestones.map((milestone) => (
                <article className={styles.milestone} key={milestone.phase}>
                  <div className={styles.phase}><span>PHASE</span><strong>{milestone.phase}</strong></div>
                  <div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutCta}>
          <div className={styles.shell}>
            <p className={styles.eyebrow}>Find your next step</p>
            <h2>Let’s talk about your business or training goals.</h2>
            <p>Message AS Digital to discuss a service, ask about a course, or learn about the Lahore campus.</p>
            <div className={styles.ctaActions}>
              <a className={`${siteStyles.button} ${siteStyles.buttonWhite}`} href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp AS Digital <span aria-hidden="true">↗</span>
              </a>
              <Link className={styles.homeLink} href="/#services">Explore services <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
