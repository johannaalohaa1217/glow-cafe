import { useState } from "react";
import faqs from "../data/faqs";
import Reveal from "./Reveal";
import "./FAQ.css";

export default function FAQ() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <section id="faq" className="section faq">
      <div className="container faq-grid">
        <Reveal as="div" className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Good to know before you come in</h2>
          <p>Can't find your question here? The contact form below reaches us directly.</p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = openId === f.id;
            return (
              <Reveal as="div" className="faq-item" delay={i * 60} key={f.id}>
                <button
                  className="faq-question"
                  onClick={() => setOpenId(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                >
                  <span>{f.question}</span>
                  <span className={`faq-icon ${isOpen ? "open" : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                  <p>{f.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
