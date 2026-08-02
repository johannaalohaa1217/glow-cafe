import testimonials from "../data/testimonials";
import Reveal from "./Reveal";
import StarRating from "./StarRating";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal as="div" className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Reviews
          </p>
          <h2>What the regulars say</h2>
          <p>We didn't write these. Pulled straight from our review page and the odd napkin note.</p>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="testimonial-card" delay={i * 90} key={t.id}>
              <StarRating rating={t.rating} />
              <blockquote>&ldquo;{t.review}&rdquo;</blockquote>
              <figcaption>
                <img src={t.avatar} alt="" aria-hidden="true" />
                <div>
                  <span className="t-name">{t.name}</span>
                  <span className="t-role">{t.role}</span>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
