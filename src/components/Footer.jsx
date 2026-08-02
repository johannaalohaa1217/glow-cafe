import "./Footer.css";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <path d="M14 9h2.5V6H14c-2 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6H13v-6h2.2l.5-3H13V9.6c0-.4.3-.6.6-.6z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none">
        <path d="M14 4v9.6a3 3 0 1 1-2.4-2.94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 4c.4 2 2 3.6 4 3.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path d="M5 10h12v5.2A5.8 5.8 0 0 1 11.2 21 5.8 5.8 0 0 1 5 15.2V10z" stroke="currentColor" strokeWidth="1.6" />
                <path d="M17 11.2h1.6a2.7 2.7 0 0 1 0 5.4H17" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            Glow Café
          </a>
          <p>128 Amber Lane, Riverside District — open every day, 7am to 7pm.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Along</h4>
          <div className="social-row">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="social-icon">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Glow Café. All rights reserved.</span>
          <span className="footer-credit">Made with a lot of coffee.</span>
        </div>
      </div>
    </footer>
  );
}
