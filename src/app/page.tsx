import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { DesktopNavigation, MobileNavigation } from "@/components/MainNavigation";
import { siteNavigation } from "@/components/siteNavigation";
import { courses, serviceGroups } from "@/lib/siteContent";
import styles from "./page.module.css";

const whatsappNumber = "923097429289";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

function serviceWhatsAppLink(service: string) {
  const message = `Assalam o Alaikum! I am interested in ${service} services from AS Digital. Please share the details and explain how you can help my business.`;
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function courseWhatsAppLink(course: string) {
  const message = `Assalam o Alaikum! I am interested in the ${course} course at AS Digital. Please share the course fee, upcoming batch timings, and enrollment details. Preferred format: [in-person / live online].`;
  return `${whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <>
      <header className={styles.header} id="home">
        <div className={styles.headerInner}>
          <Link className={styles.wordmark} href="/#home" aria-label="AS Digital home">
            <span>AS</span> DIGITAL
          </Link>

          <DesktopNavigation />

          <Link
            className={`${styles.button} ${styles.buttonRed} ${styles.headerCta}`}
            href="/contact"
          >
            Get in Touch <span aria-hidden="true">→</span>
          </Link>

          <details className={styles.mobileMenu}>
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span className={styles.srOnly}>Menu</span>
            </summary>
            <nav aria-label="Mobile navigation">
              <MobileNavigation />
              <Link
                className={`${styles.button} ${styles.buttonRed}`}
                href="/contact"
              >
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Digital services & professional training</p>
              <h1 id="hero-title">
                Grow your business.
                <br />
                Build your <span>digital skills.</span>
              </h1>
              <p className={styles.heroDescription}>
                From websites and digital marketing to practical training, AS Digital
                helps businesses grow and people build skills for the digital world.
              </p>
              <div className={styles.heroActions}>
                <a
                  className={`${styles.button} ${styles.buttonRed}`}
                  href={serviceWhatsAppLink("a digital service")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss your business needs <span aria-hidden="true">↗</span>
                </a>
                <Link className={styles.textLink} href="/trainings">
                  Explore our courses <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className={styles.heroTrustLine}>
                <span className={styles.statusDot} />
                Serving businesses and learners in Lahore and online
              </div>
            </div>

            <div className={styles.heroVisual} role="group" aria-label="AS Digital services and growth overview">
              <div className={styles.visualHeader}><span className={styles.visualWordmark}><b>AS</b> DIGITAL</span><span className={styles.visualHeaderTag}>GROWTH PARTNER</span></div>
              <div className={styles.dashboardCard}>
                <div className={styles.dashboardIntro}>
                  <div><span>THE AS DIGITAL APPROACH</span><strong>Plan with purpose.<br />Grow with clarity.</strong></div>
                  <span className={styles.dashboardArrow} aria-hidden="true">↗</span>
                </div>
                <div className={styles.dashboardMetrics}>
                  <div><strong>17K+</strong><span>digital community</span></div>
                  <div><strong>1.5K+</strong><span>professionals trained</span></div>
                </div>
                <div className={styles.growthPath}>
                  <div className={styles.growthPathHeader}><strong>Digital growth path</strong><span>STRATEGY → ACTION</span></div>
                  <svg className={styles.growthChart} viewBox="0 0 420 100" fill="none" aria-hidden="true" preserveAspectRatio="none">
                    <defs><linearGradient id="growth-fill" x1="210" y1="10" x2="210" y2="100" gradientUnits="userSpaceOnUse"><stop stopColor="#bc0202" stopOpacity=".2" /><stop offset="1" stopColor="#bc0202" stopOpacity="0" /></linearGradient></defs>
                    <path className={styles.chartArea} d="M0 82 C50 78 58 63 104 67 S166 70 206 48 S265 55 302 35 S370 39 420 10 V100 H0 Z" />
                    <path className={styles.chartLine} d="M0 82 C50 78 58 63 104 67 S166 70 206 48 S265 55 302 35 S370 39 420 10" />
                    <circle cx="420" cy="10" r="5" />
                  </svg>
                  <div className={styles.growthPathLabels}><span>Discover</span><span>Connect</span><span>Grow</span></div>
                </div>
                <div className={styles.visualServices} aria-label="AS Digital services">
                  <span>SEO & GEO</span><span>Paid Ads</span><span>Websites</span><span>Training</span>
                </div>
              </div>
              <span className={styles.visualCaption}>STRATEGY · CREATIVE · GROWTH</span>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection} id="services" aria-labelledby="services-title">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>For businesses</p>
                <h2 id="services-title">Digital solutions to help your business grow.</h2>
              </div>
              <p>
                Tell us where you want to go. We’ll help you explore the digital
                services that fit your needs.
              </p>
            </div>

            <div className={styles.serviceGrid}>
              {serviceGroups.map((group) => (
                <article className={styles.serviceCard} key={group.number}>
                  <div className={styles.serviceTopline}>
                    <span className={styles.serviceNumber}><strong>{group.number}</strong><span>SERVICE</span></span>
                    <span className={styles.serviceLabel}>{group.slug === "marketing-automation" ? "AI & TECH" : "BUSINESS"}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul aria-label="Services included">
                    {group.highlights.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                  <Link className={styles.serviceCta} href={`/services?service=${group.slug}`}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.trainingSection} id="trainings" aria-labelledby="training-title">
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>For learners</p>
                <h2 id="training-title">Build skills for the digital world.</h2>
              </div>
              <p>Choose a course to see what you’ll learn, then message us for fees, batch timings, and enrollment.</p>
            </div>
            <div className={styles.courseGrid}>
              {courses.map((course, index) => (
                <article className={styles.courseCard} key={course.title}>
                  <div className={styles.courseTopline}>
                    <span className={styles.courseNumber}><strong>0{index + 1}</strong> <span>COURSE</span></span>
                    <span className={styles.courseDuration}>{course.duration}</span>
                  </div>
                  <span className={`${styles.courseBadge} ${course.slug !== "advanced-seo-geo" ? styles.courseBadgeHidden : ""}`}>
                    {course.slug === "advanced-seo-geo" ? "IN DEMAND" : "COURSE"}
                  </span>
                  <span className={styles.courseBatchStatus}>
                    Next batch: {course.nextBatchDate ?? "Ask for current dates"}
                  </span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <ul className={styles.courseTopics} aria-label={`Topics in ${course.title}`}>
                    {course.topics.slice(0, 2).map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                  <span className={styles.courseCta}>
                    View course details <span aria-hidden="true">→</span>
                  </span>
                  <Link className={styles.courseCardLink} href={`/trainings?course=${course.slug}`} aria-label={`View details for ${course.title}`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processSection} aria-labelledby="process-title">
          <div className={styles.sectionShell}>
            <div className={styles.processHeading}>
              <p className={styles.eyebrow}>A simple way to get started</p>
              <h2 id="process-title">From your idea to a clear next step.</h2>
            </div>
            <div className={styles.processGrid}>
              <article><span>1</span><h3>Choose a service or course</h3><p>Explore the options and decide what you’d like to know more about.</p></article>
              <article><span>2</span><h3>Tell us what you need</h3><p>Send a WhatsApp message with your goals or questions.</p></article>
              <article><span>3</span><h3>Plan your next step</h3><p>We’ll share the details and help you understand what happens next.</p></article>
            </div>
            <Link className={`${styles.button} ${styles.buttonRed}`} href="/contact">Start here <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className={styles.whySection} id="about" aria-labelledby="why-title">
          <div className={styles.sectionShell}>
            <div className={styles.whyIntro}>
              <p className={styles.eyebrow}>Why AS Digital</p>
              <h2 id="why-title">A clear next step for businesses and learners.</h2>
              <p>Get practical guidance for business services or build relevant digital skills through focused training.</p>
            </div>
            <div className={styles.principles}>
              <article><span>01</span><div><h3>Built around your goals</h3><p>Start with your business needs, audience, and priorities.</p></div></article>
              <article><span>02</span><div><h3>Clear, practical guidance</h3><p>Understand the options and what each step is for.</p></div></article>
              <article><span>03</span><div><h3>Useful skills for real work</h3><p>Explore training designed around relevant digital skills.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} aria-labelledby="faq-title">
          <div className={styles.sectionShell}>
            <div className={styles.faqHeading}>
              <p className={styles.eyebrow}>FAQs</p>
              <h2 id="faq-title">A few things you might want to know.</h2>
              <p>Quick answers about services, courses, and getting started.</p>
            </div>
            <div className={styles.faqGrid}>
              <details><summary>What services does AS Digital offer?</summary><p>SEO and search visibility, paid advertising, social media and creative, website development, and AI services such as ad creative, lead routing, and CRM automation.</p></details>
              <details><summary>Which courses can I join?</summary><p>Digital Marketing (8 weeks), Advanced SEO and GEO (6 weeks), and Social Media (4 weeks).</p></details>
              <details><summary>Are classes available online?</summary><p>Yes. You can ask about in-person classes at the Lahore campus or live online classes.</p></details>
              <details><summary>How do I find course fees and batch timings?</summary><p>Message us on WhatsApp and we’ll share the current fees, upcoming batch timings, and enrollment details.</p></details>
              <details><summary>How do I get started with a business service?</summary><p>Choose a service and use its “Learn more” link, or message us with your business goals.</p></details>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} id="contact" aria-labelledby="contact-title">
          <div className={styles.sectionShell}>
            <p className={styles.eyebrow}>Let’s take the next step</p>
            <h2 id="contact-title">Ready to grow your business or learn a new skill?</h2>
            <p>Tell us what you need, and we’ll help you explore the available options.</p>
            <div className={styles.heroActions}>
              <a className={`${styles.button} ${styles.buttonWhite}`} href={serviceWhatsAppLink("a digital service")} target="_blank" rel="noreferrer">
                Discuss a service <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.ctaTextLink} href={courseWhatsAppLink("a training course")} target="_blank" rel="noreferrer">
                Ask about a course <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.sectionShell} ${styles.footerMain}`}>
          <div className={styles.footerBrand}>
            <Link className={styles.wordmark} href="/#home"><span>AS</span> DIGITAL</Link>
            <p>Digital services for businesses. Practical training for people ready to grow.</p>
            <a href="https://wa.me/923097429289" target="_blank" rel="noreferrer">+92 309 7429289</a>
          </div>
          <div className={styles.footerColumn}>
            <span>EXPLORE</span>
            {siteNavigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
          </div>
          <div className={styles.footerColumn}>
            <span>TRAININGS</span>
            {courses.map((course) => <a href={courseWhatsAppLink(course.title)} key={course.title} target="_blank" rel="noreferrer">{course.title}</a>)}
          </div>
          <div className={styles.footerColumn}>
            <span>LAHORE CAMPUS</span>
            <p>Multan Road / Hassan Town / Eden Villas<br />Lahore, Pakistan</p>
          </div>
          <div className={styles.footerColumn}>
            <span>FOLLOW AS DIGITAL</span>
            <SocialLinks />
          </div>
        </div>
        <div className={`${styles.sectionShell} ${styles.footerBottom}`}>
          <span>© AS Digital. All rights reserved.</span>
          <span>Services and training, made clear.</span>
          <span className={styles.poweredBy}>Powered by <a href="https://ignisissolutions.com" target="_blank" rel="noreferrer">Ignisis Solutions</a></span>
        </div>
      </footer>
    </>
  );
}
