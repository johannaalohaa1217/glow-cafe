import Reveal from "./Reveal";
import "./About.css";

const STATS = [
  { value: "5+", label: "Years pouring" },
  { value: "10K+", label: "Customers served" },
  { value: "20+", label: "Drinks on the menu" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal as="div" className="about-media">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80"
            alt="Barista preparing a latte at the Glow Café counter"
            className="about-img-main"
          />
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80"
            alt="Latte art in a warm ceramic cup"
            className="about-img-accent"
          />
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2>Started with one espresso machine and a stubborn opinion.</h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="about-text">
              Glow Café opened in 2019 in a narrow space that used to be a print shop —
              you can still see the old shelving in the back wall. We started roasting
              in small batches because we couldn't find a blend downtown that tasted
              the way we remembered coffee tasting at home. Five years on, the machine
              has changed twice, but the habit hasn't: taste everything before it goes
              on the menu, and never rush the pour.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mission-vision">
              <div>
                <h3>Mission</h3>
                <p>Serve coffee worth slowing down for, made by people who know your name.</p>
              </div>
              <div>
                <h3>Vision</h3>
                <p>Become the room this neighborhood starts its mornings and finishes its meetings in.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal as="div" delay={100}>
        <div className="stats-row reveal-stagger">
          {STATS.map((s, i) => (
            <div className="stat-card" key={s.label} style={{ "--stagger-index": i }}>
              <span className="stat-value mono">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
