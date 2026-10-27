import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "@/components/SiteFrame";
import { courses } from "@/lib/siteContent";
import styles from "../../inner-pages.module.css";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  return { title: course ? `${course.title} Course | AS Digital` : "Training Course | AS Digital" };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  const message = encodeURIComponent(`Assalam o Alaikum! I am interested in the ${course.title} course. Please share the fee, upcoming batch timings, and enrollment details. Preferred format: in-person or live online.`);

  return <>
    <SiteHeader />
    <main className={styles.page}>
      <section className={styles.hero}><div className={styles.shell}>
        <Link className={styles.cardLink} href="/trainings">← All courses</Link>
        <p className={styles.eyebrow} style={{marginTop:24}}>Professional training · {course.duration}</p>
        <h1>{course.title} <span>course.</span></h1>
        <p className={styles.intro}>{course.description}</p>
        <p className={styles.courseMeta}>Next batch: {course.nextBatchDate ?? "Ask us for current dates and available formats."}</p>
        <a className={styles.button} href={`https://wa.me/923097429289?text=${message}`} target="_blank" rel="noreferrer">Ask about fees & next batch <span aria-hidden="true">↗</span></a>
      </div></section>
      <section className={styles.section}><div className={styles.shell}><p className={styles.eyebrow}>Course overview</p><h2>What you’ll explore.</h2><div className={styles.grid} style={{marginTop:32}}>{course.topics.map((topic,index)=><article className={styles.card} key={topic}><span className={styles.cardIndex}>0{index+1} / TOPIC</span><h3>{topic}</h3><p>Build your understanding step by step through focused course learning.</p></article>)}</div></div></section>
      <section className={styles.section + " " + styles.soft}><div className={styles.shell}><p className={styles.eyebrow}>Choose your format</p><h2>Learn in Lahore or join live online.</h2><p className={styles.sectionIntro}>In-person classes are held at the Lahore campus. Live online classes are also available. Message us to confirm the format for your preferred batch.</p><div className={styles.details}><details><summary>How long is this course?</summary><p>The {course.title} course runs for {course.duration}.</p></details><details><summary>Where can I get current fees and timings?</summary><p>Message AS Digital on WhatsApp for current course fees, batch timings, and enrollment details.</p></details></div></div></section>
      <section className={styles.cta}><div className={styles.shell}><p className={styles.eyebrow}>Your next step</p><h2>Want to join the next {course.title} batch?</h2><p>Ask the team about fees, schedule, format, and how to enroll.</p><a className={styles.button} href={`https://wa.me/923097429289?text=${message}`} target="_blank" rel="noreferrer">Continue on WhatsApp <span aria-hidden="true">↗</span></a><br /><Link className={styles.cardLink} href="/trainings">Back to all courses →</Link></div></section>
    </main>
    <SiteFooter />
  </>;
}
