import styles from "./social-links.module.css";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/asdigitalss/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/Asdigitalss/", icon: "facebook" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/asdigitals/", icon: "linkedin" },
  { label: "TikTok", href: "https://www.tiktok.com/@asdigitalss", icon: "tiktok" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["icon"] }) {
  if (name === "instagram") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.8" cy="6.5" r="1.15" fill="currentColor" /></svg>;
  if (name === "facebook") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.2h2.9l.4-3h-3.3V8.9c0-.9.3-1.5 1.6-1.5H17V4.7c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2H7.5v3h2.8V21h3.2Z" /></svg>;
  if (name === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.5 8.4a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM4.9 9.8h3.2V20H4.9V9.8Zm5.2 0h3.1v1.4h.1a3.4 3.4 0 0 1 3.1-1.7c3.3 0 3.9 2.1 3.9 4.9V20H17v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7V20h-3.1V9.8Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.7 8.7a5.4 5.4 0 0 1-3.3-1.1v7.1a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v3.2a2.5 2.5 0 1 0 1.3 2.2V3h3.2c0 .3 0 .5.1.8.2 1.3 1.2 2.4 2.5 2.7.2.1.5.1.7.1v2.1Z" /></svg>;
}

export default function SocialLinks() {
  return (
    <nav className={styles.socialLinks} aria-label="AS Digital social media">
      {socialLinks.map((social) => (
        <a className={styles.socialLink} href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
          <SocialIcon name={social.icon} />
        </a>
      ))}
    </nav>
  );
}
