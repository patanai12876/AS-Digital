import Link from "next/link";
import { siteNavigation } from "@/components/siteNavigation";
import { DesktopNavigation, MobileNavigation } from "@/components/MainNavigation";
import SocialLinks from "@/components/SocialLinks";
import styles from "@/app/page.module.css";

const whatsapp = "https://wa.me/923097429289";

export function SiteHeader() {
  return (
    <header className={styles.header} id="home">
      <div className={styles.headerInner}>
        <Link className={styles.wordmark} href="/#home" aria-label="AS Digital home"><span>AS</span> DIGITAL</Link>
        <DesktopNavigation />
        <Link className={`${styles.button} ${styles.buttonRed} ${styles.headerCta}`} href="/contact">Get in Touch <span aria-hidden="true">→</span></Link>
        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation menu"><span /><span /><span className={styles.srOnly}>Menu</span></summary>
            <nav aria-label="Mobile navigation">
              <MobileNavigation />
              <Link className={`${styles.button} ${styles.buttonRed}`} href="/contact">Get in Touch <span aria-hidden="true">→</span></Link>
            </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.sectionShell} ${styles.footerMain}`}>
        <div className={styles.footerBrand}>
          <Link className={styles.wordmark} href="/#home"><span>AS</span> DIGITAL</Link>
          <p>Digital services for businesses. Practical training for people ready to grow.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer">+92 309 7429289</a>
        </div>
        <div className={styles.footerColumn}><span>EXPLORE</span>{siteNavigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}</div>
        <div className={styles.footerColumn}><span>TRAININGS</span><Link href="/trainings">Digital Marketing</Link><Link href="/trainings">Advanced SEO and GEO</Link><Link href="/trainings">Social Media</Link></div>
        <div className={styles.footerColumn}><span>LAHORE CAMPUS</span><p>Multan Road / Hassan Town / Eden Villas<br />Lahore, Pakistan</p><a href="https://www.google.com/maps/dir/?api=1&destination=Multan%20Road%2C%20Hassan%20Town%2C%20Eden%20Villas%2C%20Lahore%2C%20Pakistan" target="_blank" rel="noreferrer">Get directions ↗</a></div>
        <div className={styles.footerColumn}><span>FOLLOW AS DIGITAL</span><SocialLinks /></div>
      </div>
      <div className={`${styles.sectionShell} ${styles.footerBottom}`}><span>© AS Digital. All rights reserved.</span><span>Services and training, made clear.</span><span className={styles.poweredBy}>Powered by <a href="https://ignisissolutions.com" target="_blank" rel="noreferrer">Ignisis Solutions</a></span></div>
    </footer>
  );
}
