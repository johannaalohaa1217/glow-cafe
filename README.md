# Glow Café

A modern, elegant one-page site for a coffee shop, built with React + Vite (no CSS framework).

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # Navbar, Hero, About, Menu, Gallery, Testimonials, FAQ, Contact, Footer, ...
  data/         # menuItems.js, testimonials.js, faqs.js
  hooks/        # useReveal (scroll animations), useDarkMode
  App.jsx
  main.jsx
  index.css     # design tokens + shared utility classes
```

## Features

- Sticky, blurred navbar with mobile menu
- Hero with background image, drifting glow accent, and dual CTAs
- About section with story, mission/vision, and 3 animated stats
- Menu grid (8 items) with category filters and per-item Order buttons
- Testimonials (star ratings, avatars, reviews)
- Image gallery with lightbox
- FAQ accordion
- Contact section: address / phone / email, social links, embedded map, working form UI
- Footer with quick links + social icons
- Dark mode toggle (persisted), scroll-reveal animations, back-to-top button, loading screen
- Fully responsive down to small mobile screens
