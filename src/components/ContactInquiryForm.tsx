"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "923097429289";

type ContactInquiryFormProps = {
  services: readonly string[];
  courses: readonly string[];
};

export default function ContactInquiryForm({ services, courses }: ContactInquiryFormProps) {
  const [type, setType] = useState<"" | "service" | "training">("");
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  function handleTypeChange(value: string) {
    setType(value === "service" || value === "training" ? value : "");
    setFallbackUrl(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const typeLabel = values.get("inquiryType") === "training" ? "Training" : "Service";
    const message = [
      `Assalam o Alaikum AS Digital, I have a ${typeLabel.toLowerCase()} inquiry.`,
      `Name: ${values.get("name")}`,
      `Phone: ${values.get("phone")}`,
      `${typeLabel}: ${values.get("interest")}`,
      values.get("businessName") ? `Business: ${values.get("businessName")}` : "",
      values.get("message") ? `Message: ${values.get("message")}` : "",
      typeLabel === "Training" ? "Please share the course fees, upcoming batch timings, and enrollment details." : "Please contact me to discuss the next steps.",
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const openedWindow = window.open(url, "_blank");
    if (openedWindow) openedWindow.opener = null;
    setFallbackUrl(openedWindow ? null : url);
  }

  const interests = type === "service" ? services : type === "training" ? courses : [];

  return (
    <form className="inquiry-card contact-inquiry-form" onSubmit={handleSubmit}>
      <div className="form-card-heading">
        <span className="form-step">LET’S GET STARTED</span>
        <h3>Tell us how we can help</h3>
        <p>Choose an option and send your question directly to our team.</p>
      </div>

      <label>
        I’m interested in <span aria-hidden="true">*</span>
        <select name="inquiryType" value={type} onChange={(event) => handleTypeChange(event.target.value)} required>
          <option value="" disabled>Choose service or training</option>
          <option value="service">A service</option>
          <option value="training">A training course</option>
        </select>
      </label>

      <label>
        Choose {type === "training" ? "a course" : "a service"} <span aria-hidden="true">*</span>
        <select name="interest" defaultValue="" required disabled={!type} key={type}>
          <option value="" disabled>{type ? `Select ${type === "training" ? "a course" : "a service"}` : "Select service or training first"}</option>
          {interests.map((interest) => <option value={interest} key={interest}>{interest}</option>)}
        </select>
      </label>

      <div className="contact-form-row">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+92 3XX XXXXXXX" pattern="[0-9+() -]{7,20}" title="Enter a phone number using digits, spaces, +, parentheses, or hyphens." required />
        </label>
      </div>

      {type === "service" && (
        <label>
          Business name <span className="optional-label">(optional)</span>
          <input name="businessName" type="text" autoComplete="organization" placeholder="Your business name" />
        </label>
      )}

      <label>
        Message <span className="optional-label">(optional)</span>
        <textarea name="message" rows={4} placeholder={type === "training" ? "Ask about course content, format, or your learning goals" : "Tell us a little about what you need"} />
      </label>

      <button className="button button-red form-submit" type="submit">Send</button>
      {fallbackUrl && <p className="form-fallback" role="status">WhatsApp did not open. <a href={fallbackUrl} target="_blank" rel="noreferrer">Open your message here</a>.</p>}
    </form>
  );
}
