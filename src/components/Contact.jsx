import { useState } from "react";
import Reveal from "./Reveal";
import "./Contact.css";

const INFO = [
  {
    label: "Address",
    value: "128 Amber Lane, Riverside District",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "(555) 214-8890",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <path d="M6 3h3l2 5-2.5 1.6a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@glowcafe.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: "Mon–Sun · 7:00am – 7:00pm",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal as="div" className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2>Come say hello</h2>
          <p>Questions, catering, or just want to know if we have a table free — reach out.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="div" className="contact-info">
            <ul className="info-list">
              {INFO.map((item) => (
                <li key={item.label}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="social-icon">
                  {s.label[0]}
                </a>
              ))}
            </div>

            <div className="map-embed">
              <iframe
                title="Glow Café location"
                src="https://www.google.com/maps?q=coffee+shop+riverside+district&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal as="div" className="contact-form-wrap" delay={80}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" required />
                </label>
                <label>
                  Email
                  <input type="email" name="email" placeholder="you@email.com" required />
                </label>
              </div>
              <label>
                Subject
                <input type="text" name="subject" placeholder="What's this about?" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us a bit more..." required />
              </label>
              <button type="submit" className="btn btn-primary">
                {status === "sent" ? "Message sent ✓" : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="form-note">Thanks — we'll get back to you within a day.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
