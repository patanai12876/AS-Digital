import { courses } from "@/lib/siteContent";
import styles from "@/app/trainings/training.module.css";

const whatsappNumber = "923097429289";

export default function TrainingCards() {
  return (
    <>
      <div className={styles.courseGrid}>
        {courses.map((course, index) => {
        const popoverId = `course-info-${course.slug}`;
        const message = encodeURIComponent(`Assalam o Alaikum! I am interested in the ${course.title} course at AS Digital. Please share the course fee, upcoming batch timings, and enrollment details. Preferred format: in-person or live online.`);

          return (
          <article className={styles.courseCard} key={course.slug}>
            <button className={styles.courseTrigger} popoverTarget={popoverId} popoverTargetAction="show" type="button">
              <span className={styles.courseTopline}>
                <span className={styles.courseNumber}><strong>0{index + 1}</strong><span>COURSE</span></span>
                <span className={styles.courseDuration}>{course.duration}</span>
              </span>
              <span className={`${styles.courseBadge} ${course.slug !== "advanced-seo-geo" ? styles.courseBadgeHidden : ""}`}>
                {course.slug === "advanced-seo-geo" ? "IN DEMAND" : "COURSE"}
              </span>
              <span className={styles.courseTitle} role="heading" aria-level={3}>{course.title}</span>
              <span className={styles.courseDescription}>{course.description}</span>
              <span className={styles.batchStatus}>
                Next batch: {course.nextBatchDate ?? "Ask for current dates"}
              </span>
              <span className={styles.courseTopics}>
                {course.topics.slice(0, 2).map((topic) => <span key={topic}>{topic}</span>)}
              </span>
              <span className={styles.courseCta}>View course details <span aria-hidden="true">→</span></span>
            </button>

            <div className={styles.modal} id={popoverId} popover="auto" role="dialog" aria-modal="true" aria-labelledby={`${popoverId}-title`}>
              <button className={styles.modalBackdrop} popoverTarget={popoverId} popoverTargetAction="hide" aria-label={`Close ${course.title} details`} type="button" />
              <div className={styles.modalContent}>
                <button className={styles.modalClose} popoverTarget={popoverId} popoverTargetAction="hide" type="button" aria-label="Close course details">×</button>
                <p className={styles.modalEyebrow}>COURSE {index + 1} · {course.duration.toUpperCase()}</p>
                <h2 id={`${popoverId}-title`}>{course.title}</h2>
                <p className={styles.modalIntro}>{course.description}</p>
                <p className={styles.modalNote}>
                  <strong>Next batch:</strong> {course.nextBatchDate ?? "Ask us for current dates and available formats."}
                </p>

                <h3>What you’ll learn</h3>
                <ul className={styles.modalTopics}>{course.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>

                <h3>How it can help your career</h3>
                <ul className={styles.modalBenefits}>{course.careerBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>

                <h3>Choose your class format</h3>
                <div className={styles.modalFormats}>
                  <span><strong>In-person classes</strong><small>Lahore campus</small></span>
                  <span><strong>Live online classes</strong><small>Learn from where you are</small></span>
                </div>

                <p className={styles.modalNote}>Message us for current course fees, upcoming batch timings, and enrollment details.</p>
                <a className={styles.modalCta} href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer">
                  Enroll in Next Batch <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </>
  );
}
