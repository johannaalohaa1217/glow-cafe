import { useEffect, useState } from "react";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="M5 10h12v5.2A5.8 5.8 0 0 1 11.2 21 5.8 5.8 0 0 1 5 15.2V10z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M17 11.2h1.6a2.7 2.7 0 0 1 0 5.4H17" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          Glow Café
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark((d) => !d)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" /><path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M20 14.2A8.5 8.5 0 1 1 9.8 4a6.8 6.8 0 0 0 10.2 10.2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
            )}
          </button>

          <a href="#menu" className="btn btn-primary btn-sm nav-cta">
            Order Now
          </a>

          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#menu" className="btn btn-primary" onClick={() => setOpen(false)}>
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}
