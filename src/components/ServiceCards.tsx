import type { ServiceCard, ServiceGroup } from "@/lib/siteContent";
import AutoOpenPopover from "@/components/AutoOpenPopover";
import styles from "@/app/services/services.module.css";

const whatsappNumber = "923097429289";

type ServiceInfo = ServiceCard | ServiceGroup;

function ServiceModal({ service, idPrefix = "service-info" }: { service: ServiceInfo; idPrefix?: string }) {
  const popoverId = `${idPrefix}-${service.slug}`;
  const message = encodeURIComponent(`Assalam o Alaikum! I would like to discuss ${service.title} for my business. Please share the details and next steps.`);

  return (
    <div className={styles.modal} id={popoverId} popover="auto" role="dialog" aria-modal="true" aria-labelledby={`${popoverId}-title`}>
      <button className={styles.modalBackdrop} popoverTarget={popoverId} popoverTargetAction="hide" aria-label={`Close ${service.title} details`} type="button" />
      <div className={styles.modalContent}>
        <button className={styles.modalClose} popoverTarget={popoverId} popoverTargetAction="hide" type="button" aria-label="Close service details">×</button>
        <p className={styles.modalEyebrow}>SERVICE {service.number} · AS DIGITAL</p>
        <h2 id={`${popoverId}-title`}>{service.title}</h2>
        <p className={styles.modalIntro}>{service.detail}</p>

        <h3>What you’ll get</h3>
        <ul className={styles.modalDeliverables}>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>

        <h3>Services we provide</h3>
        <ul className={styles.modalServices}>{service.services.map((item) => <li key={item}>{item}</li>)}</ul>

        <h3>How we get started</h3>
        <ol className={styles.modalSteps}>{service.steps.map((step) => <li key={step}>{step}</li>)}</ol>

        <div className={styles.modalActions}>
          <a className={styles.modalCta} href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer">
            Discuss this service on WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <button className={styles.closeText} popoverTarget={popoverId} popoverTargetAction="hide" type="button">Close details</button>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards({
  services,
  groups = [],
  initialOpen,
}: {
  services: readonly ServiceCard[];
  groups?: readonly ServiceGroup[];
  initialOpen?: string;
}) {
  const selectedGroup = groups.find((group) => group.slug === initialOpen);
  const selectedService = selectedGroup ?? services.find((service) => service.slug === initialOpen);

  return (
    <>
      <div className={styles.serviceGrid}>
        {services.map((service) => {
          const popoverId = `service-info-${service.slug}`;

          return (
            <article className={styles.serviceCard} key={service.slug}>
              <button className={styles.cardTrigger} popoverTarget={popoverId} popoverTargetAction="show" type="button">
                <span className={styles.cardTopline}>
                  <span className={styles.cardNumber}><strong>{service.number}</strong><span>SERVICE</span></span>
                  <span className={styles.cardLabel}>{service.slug === "marketing-automation" || service.slug === "ai-ad-creative-copywriting" ? "AI & TECH" : "BUSINESS"}</span>
                </span>
                <span className={styles.cardTitle} role="heading" aria-level={2}>{service.title}</span>
                <span className={styles.cardDescription}>{service.description}</span>
                <span className={styles.cardHighlights}>
                  {service.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
                </span>
                <span className={styles.cardCta}>Learn more <span aria-hidden="true">→</span></span>
              </button>

              <ServiceModal service={service} />
            </article>
          );
        })}
      </div>
      {groups.map((group) => <ServiceModal key={group.slug} service={group} idPrefix="service-group-info" />)}
      <AutoOpenPopover id={selectedService ? `${selectedGroup ? "service-group-info" : "service-info"}-${selectedService.slug}` : undefined} />
    </>
  );
}
