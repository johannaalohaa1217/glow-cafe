import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1800&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-scrim" />
        <div className="hero-glow" />
      </div>

      <div className="container hero-content">
        <p className="eyebrow eyebrow-light">Small-batch · Downtown Roastery</p>
        <h1>
          Coffee roasted warm,
          <br />
          poured <em>slow</em>.
        </h1>
        <p className="hero-sub">
          Glow Café is a corner of downtown built around one habit: a really good cup,
          made by people who remember your order. Sit in, or order ahead — either way,
          it's ready when you are.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">
            Order Now
          </a>
          <a href="#menu" className="btn btn-ghost btn-outline-light">
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
