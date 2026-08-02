import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import "./Gallery.css";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    alt: "Interior seating area with warm lighting",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    alt: "Barista pulling an espresso shot",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    alt: "Latte art close up",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    alt: "Table with pastries and coffee",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80",
    alt: "Bag of roasted coffee beans",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
    alt: "Guests chatting near the front window",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <Reveal as="div" className="section-head center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Gallery
          </p>
          <h2>A look inside</h2>
          <p>Come see it for yourself, or take a lap around the room from here first.</p>
        </Reveal>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <Reveal
              as="button"
              className={`gallery-item ${img.tall ? "tall" : ""}`}
              delay={(i % 3) * 80}
              key={img.src}
              type="button"
              onClick={() => setActive(img)}
              aria-label={`View larger image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox-close" aria-label="Close image">
            &times;
          </button>
          <img src={active.src} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
