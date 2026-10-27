"use client";

import { FormEvent, useState } from "react";

const WHATSAPP_NUMBER = "923097429289";

type InquiryFormsProps = {
  courses: string[];
  services: string[];
};

function openWhatsApp(message: string): string | null {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const openedWindow = window.open(url, "_blank");

  if (openedWindow) openedWindow.opener = null;
  return openedWindow ? null : url;
}

export default function InquiryForms({ courses, services }: InquiryFormsProps) {
  const [enrollmentFallback, setEnrollmentFallback] = useState<string | null>(null);
  const [serviceFallback, setServiceFallback] = useState<string | null>(null);

  function submitEnrollment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const message = [
      "Assalam o Alaikum ASDIGITAL, I would like to inquire about enrollment.",
      `Name: ${values.get("studentName")}`,
      `Phone: ${values.get("studentPhone")}`,
      `Course: ${values.get("course")}`,
      values.get("studentMessage") ? `Message: ${values.get("studentMessage")}` : "",
      "Please share the course details and next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    setEnrollmentFallback(openWhatsApp(message));
  }

  function submitService(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const message = [
      "Assalam o Alaikum ASDIGITAL, I would like to inquire about your services.",
      `Name: ${values.get("contactName")}`,
      values.get("businessName") ? `Business: ${values.get("businessName")}` : "",
      `Phone: ${values.get("contactPhone")}`,
      `Required Service: ${values.get("service")}`,
      `Project Details: ${values.get("projectDetails")}`,
      values.get("budget") ? `Budget: ${values.get("budget")}` : "",
      "Please contact me to discuss the next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    setServiceFallback(openWhatsApp(message));
  }

  return (
    <div className="forms-grid">
      <form className="inquiry-card" id="enrollment" onSubmit={submitEnrollment}>
        <div className="form-card-heading">
          <span className="form-step">01 / LEARN</span>
          <h3>Course enquiry</h3>
          <p>Tell us what you&apos;d like to learn.</p>
        </div>
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="studentName" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input
            name="studentPhone"
            type="tel"
            autoComplete="tel"
            placeholder="+92"
            pattern="[0-9+() -]{7,20}"
            title="Enter a phone number using digits, spaces, +, parentheses, or hyphens."
            required
          />
        </label>
        <label>
          Course <span aria-hidden="true">*</span>
          <select name="course" defaultValue="" required>
            <option value="" disabled>Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </label>
        <label>
          Message <span className="optional-label">(optional)</span>
          <textarea name="studentMessage" rows={3} placeholder="What would you like to know?" />
        </label>
        <button className="button button-red form-submit" type="submit">
          Continue to WhatsApp <span aria-hidden="true">↗</span>
        </button>
        {enrollmentFallback && (
          <p className="form-fallback" role="status">
            WhatsApp did not open.{" "}
            <a href={enrollmentFallback} target="_blank" rel="noreferrer">
              Open your message here
            </a>
            .
          </p>
        )}
        <p className="form-privacy">
          Your details are added to a WhatsApp message. Review it and press Send
          in WhatsApp. This website does not save your submission.
        </p>
      </form>

      <form className="inquiry-card" id="service-inquiry" onSubmit={submitService}>
        <div className="form-card-heading">
          <span className="form-step">02 / BUILD</span>
          <h3>Service enquiry</h3>
          <p>Share a little about your project.</p>
        </div>
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="contactName" type="text" autoComplete="name" required />
        </label>
        <label>
          Phone number <span aria-hidden="true">*</span>
          <input
            name="contactPhone"
            type="tel"
            autoComplete="tel"
            placeholder="+92"
            pattern="[0-9+() -]{7,20}"
            title="Enter a phone number using digits, spaces, +, parentheses, or hyphens."
            required
          />
        </label>
        <label>
          Service <span aria-hidden="true">*</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </label>
        <label>
          Project details <span aria-hidden="true">*</span>
          <textarea
            name="projectDetails"
            rows={3}
            placeholder="What are you looking to achieve?"
            required
          />
        </label>
        <label>
          Business name <span className="optional-label">(optional)</span>
          <input name="businessName" type="text" autoComplete="organization" />
        </label>
        <label>
          Budget range <span className="optional-label">(optional)</span>
          <input name="budget" type="text" placeholder="e.g. PKR 50,000–100,000" />
        </label>
        <button className="button button-dark form-submit" type="submit">
          Continue to WhatsApp <span aria-hidden="true">↗</span>
        </button>
        {serviceFallback && (
          <p className="form-fallback" role="status">
            WhatsApp did not open.{" "}
            <a href={serviceFallback} target="_blank" rel="noreferrer">
              Open your message here
            </a>
            .
          </p>
        )}
        <p className="form-privacy">
          Your details are added to a WhatsApp message. Review it and press Send
          in WhatsApp. This website does not save your submission.
        </p>
      </form>
    </div>
  );
}
