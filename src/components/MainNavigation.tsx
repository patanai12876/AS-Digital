import Link from "next/link";
import { courses, serviceCards } from "@/lib/siteContent";
import { siteNavigation } from "@/components/siteNavigation";
import styles from "@/app/page.module.css";

function DropdownArrow() {
  return <span className={styles.navArrow} aria-hidden="true">⌄</span>;
}

function DesktopDropdown({ kind }: { kind: "services" | "trainings" }) {
  const isServices = kind === "services";
  const title = isServices ? "Services" : "Trainings";
  const href = isServices ? "/services" : "/trainings";

  return (
    <div className={styles.navDropdown}>
      <Link href={href} aria-haspopup="true">{title}<DropdownArrow /></Link>
      <div className={`${styles.navDropdownMenu} ${isServices ? styles.serviceDropdown : styles.trainingDropdown}`}>
        <p className={styles.dropdownHeading}>{isServices ? "EXPLORE OUR SERVICES" : "CHOOSE A COURSE"}</p>
        <div className={styles.dropdownItems}>
          {isServices
            ? serviceCards.map((service) => <Link href={`/services?service=${service.slug}`} key={service.slug}>{service.title}<span aria-hidden="true">→</span></Link>)
            : courses.map((course) => <Link href={`/trainings?course=${course.slug}`} key={course.slug}><span>{course.title}</span><small>{course.duration}</small></Link>)}
        </div>
        <Link className={styles.dropdownAll} href={href}>{isServices ? "View all services" : "View all trainings"}<span aria-hidden="true">→</span></Link>
      </div>
    </div>
  );
}

export function DesktopNavigation() {
  return (
    <nav className={styles.desktopNav} aria-label="Main navigation">
      {siteNavigation.map((item) => item.label === "Services"
        ? <DesktopDropdown kind="services" key={item.label} />
        : item.label === "Trainings"
          ? <DesktopDropdown kind="trainings" key={item.label} />
          : <Link href={item.href} key={item.label}>{item.label}</Link>)}
    </nav>
  );
}

export function MobileNavigation() {
  return (
    <>
      {siteNavigation.map((item) => {
        if (item.label === "Services" || item.label === "Trainings") {
          const isServices = item.label === "Services";
          return (
            <details className={styles.mobileNavDropdown} key={item.label}>
              <summary>{item.label}<DropdownArrow /></summary>
              <div className={styles.mobileDropdownItems}>
                {isServices
                  ? serviceCards.map((service) => <Link href={`/services?service=${service.slug}`} key={service.slug}>{service.title}</Link>)
                  : courses.map((course) => <Link href={`/trainings?course=${course.slug}`} key={course.slug}><span>{course.title}</span><small>{course.duration}</small></Link>)}
                <Link className={styles.mobileViewAll} href={item.href}>View all {isServices ? "services" : "trainings"} →</Link>
              </div>
            </details>
          );
        }
        return <Link href={item.href} key={item.label}>{item.label}</Link>;
      })}
    </>
  );
}
