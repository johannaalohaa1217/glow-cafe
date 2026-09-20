const menuItems = [
  { name: "Amber Pour-Over", category: "Filter", description: "Single-origin Ethiopian beans, poured slow to bring out notes of stone fruit and honey.", price: 4.5, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" },
  { name: "Glow Latte", category: "Espresso", description: "Double espresso, steamed oat milk, and a whisper of toasted honey on top.", price: 5.25, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80" },
  { name: "Salted Caramel Cortado", category: "Espresso", description: "Equal parts espresso and warm milk, finished with a thread of salted caramel.", price: 4.95, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80" },
  { name: "Cold Brew Ember", category: "Cold", description: "Steeped for eighteen hours, served over one big cube with a splash of vanilla cream.", price: 4.75, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80" },
  { name: "Matcha Sunrise", category: "Tea", description: "Ceremonial-grade matcha whisked with oat milk and a swirl of blood-orange syrup.", price: 5.5, image: "https://tse2.mm.bing.net/th/id/OIP.jmKjo6dEFwnpGtzQdZkgywHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Spiced Chai Cloud", category: "Tea", description: "House-steeped chai, cardamom-forward, topped with a thick pillow of foam.", price: 4.65, image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80" },
  { name: "Brown Butter Croissant", category: "Bakery", description: "Laminated in-house daily, brushed with brown butter and a dusting of raw sugar.", price: 3.95, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { name: "Cardamom Cinnamon Bun", category: "Bakery", description: "Slow-proofed dough, cardamom sugar, and a warm glaze finished tableside.", price: 4.25, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80" }
];

const testimonials = [
  { name: "Maribel Cruz", role: "Regular, since 2022", rating: 5, review: "The pour-over here ruined every other coffee shop for me. Warm room, warmer staff — I get more done in a corner booth at Glow than I ever did at my desk.", avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "Daniel Ortiz", role: "Local designer", rating: 5, review: "I bring every client meeting here now. The cortado is consistent, the playlist never overstays its welcome, and somehow there's always a seat by the window.", avatar: "https://i.pravatar.cc/150?img=12" },
  { name: "Priya Nandan", role: "Weekend regular", rating: 4, review: "Cardamom bun is worth the Saturday queue on its own. Ordering ahead through the app saves me every time — ready right as I walk in.", avatar: "https://i.pravatar.cc/150?img=32" },
  { name: "Owen Baptiste", role: "First-time visitor", rating: 5, review: "Walked in for a quick espresso and stayed two hours. The lighting in the evening genuinely lives up to the name — it glows.", avatar: "https://i.pravatar.cc/150?img=68" }
];

const faqs = [
  ["Can I order ahead and skip the line?", "Yes — tap “Order Now” to place your order for pickup. It's usually ready within 10–12 minutes, and you'll get a text when it's on the counter."],
  ["Do you offer dairy-free milk options?", "Every drink on the menu can be made with oat, almond, or soy milk at no extra charge. Just note it in the order comments."],
  ["Is there space to work or take meetings?", "The back room has communal tables, plenty of outlets, and steady wifi. We just ask that groups of four or more give us a quick heads-up."],
  ["Do you roast your own beans?", "We roast in small batches twice a week with a local roaster partner, and rotate one single-origin filter option every month."],
  ["Are you open on public holidays?", "We're open every day but Christmas and New Year's Day, usually on shortened hours — check the banner at the top of the site for that week's schedule."]
];

const gallery = [
  ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80", "Interior seating area with warm lighting", true],
  ["https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80", "Barista pulling an espresso shot"],
  ["https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80", "Latte art close up"],
  ["https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80", "Table with pastries and coffee", true],
  ["https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80", "Bag of roasted coffee beans"],
  ["https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80", "Guests chatting near the front window"]
];

const starSvg = '<svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8L10 1.5z" /></svg>';
const socialIcons = {
  Instagram: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>',
  Facebook: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 9h2.5V6H14c-2 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6H13v-6h2.2l.5-3H13V9.6c0-.4.3-.6.6-.6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  TikTok: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 4v9.6a3 3 0 1 1-2.4-2.94" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 4c.4 2 2 3.6 4 3.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
};
const reveal = (element, delay = 0) => { element.classList.add("reveal"); element.style.transitionDelay = `${delay}ms`; };

document.querySelectorAll(".social-icon").forEach((link) => {
  const icon = socialIcons[link.getAttribute("aria-label")];
  if (icon) link.innerHTML = icon;
});
const contactSections = document.querySelectorAll("section#contact");
contactSections.forEach((section, index) => {
  if (index < contactSections.length - 1) section.remove();
});

function renderMenu(filter = "All") {
  const filters = ["All", "Espresso", "Filter", "Cold", "Tea", "Bakery"];
  document.querySelector("#menu-filters").innerHTML = filters.map((item) => `<button class="filter-pill ${item === filter ? "active" : ""}" type="button" data-filter="${item}">${item}</button>`).join("");
  document.querySelector("#menu-grid").innerHTML = menuItems.filter((item) => filter === "All" || item.category === filter).map((item, index) => `<article class="reveal menu-card" style="transition-delay:${(index % 4) * 70}ms"><div class="menu-card-media"><img src="${item.image}" alt="${item.name}" loading="lazy"><span class="menu-card-tag">${item.category}</span></div><div class="menu-card-body"><div class="menu-card-top"><h3>${item.name}</h3><span class="menu-card-price mono">$${item.price.toFixed(2)}</span></div><p>${item.description}</p><button class="btn btn-ghost btn-sm menu-order-btn" type="button">Order</button></div></article>`).join("");
  document.querySelectorAll(".menu-card").forEach((item) => reveal(item));
}

function renderGallery() {
  document.querySelector("#gallery-grid").innerHTML = gallery.map(([src, alt, tall], index) => `<button class="reveal gallery-item ${tall ? "tall" : ""}" type="button" style="transition-delay:${(index % 3) * 80}ms" aria-label="View larger image: ${alt}"><img src="${src}" alt="${alt}" loading="lazy"></button>`).join("");
  document.querySelectorAll(".gallery-item").forEach((item) => reveal(item));
}

function renderTestimonials() {
  document.querySelector("#testimonial-grid").innerHTML = testimonials.map((item, index) => `<figure class="reveal testimonial-card" style="transition-delay:${index * 90}ms"><div class="stars" aria-label="${item.rating} out of 5 stars">${starSvg.repeat(item.rating)}</div><blockquote>“${item.review}”</blockquote><figcaption><img src="${item.avatar}" alt="" aria-hidden="true"><div><span class="t-name">${item.name}</span><span class="t-role">${item.role}</span></div></figcaption></figure>`).join("");
  document.querySelectorAll(".testimonial-card").forEach((item) => reveal(item));
}

function renderFaq() {
  document.querySelector("#faq-list").innerHTML = faqs.map(([question, answer], index) => `<div class="reveal faq-item" style="transition-delay:${index * 60}ms"><button class="faq-question" type="button" aria-expanded="${index === 0}"><span>${question}</span><span class="faq-icon ${index === 0 ? "open" : ""}" aria-hidden="true">+</span></button><div class="faq-answer ${index === 0 ? "open" : ""}"><p>${answer}</p></div></div>`).join("");
  document.querySelectorAll(".faq-item").forEach((item) => reveal(item));
}

renderMenu();
renderGallery();
renderTestimonials();
renderFaq();
document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.addEventListener("click", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (filter) { renderMenu(filter.dataset.filter); document.querySelectorAll("#menu-grid .reveal").forEach((element) => observer.observe(element)); }
  const faqButton = event.target.closest(".faq-question");
  if (faqButton) { const answer = faqButton.nextElementSibling; const open = answer.classList.toggle("open"); faqButton.setAttribute("aria-expanded", open); faqButton.querySelector(".faq-icon").classList.toggle("open", open); }
  const galleryItem = event.target.closest(".gallery-item");
  if (galleryItem) { const image = galleryItem.querySelector("img"); document.querySelector("#lightbox-image").src = image.src; document.querySelector("#lightbox-image").alt = image.alt; document.querySelector("#lightbox").hidden = false; }
  if (event.target.closest(".lightbox-close") || event.target.id === "lightbox") document.querySelector("#lightbox").hidden = true;
  const mobileLink = event.target.closest("#mobile-menu a");
  if (mobileLink) closeMobileMenu();
});

const navbar = document.querySelector("#navbar");
const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", () => { navbar.classList.toggle("scrolled", window.scrollY > 24); backToTop.classList.toggle("visible", window.scrollY > 700); }, { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const mobileMenu = document.querySelector("#mobile-menu");
const hamburger = document.querySelector("#hamburger");
function closeMobileMenu() { mobileMenu.classList.remove("open"); hamburger.classList.remove("is-open"); hamburger.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
hamburger.addEventListener("click", () => { const open = mobileMenu.classList.toggle("open"); hamburger.classList.toggle("is-open", open); hamburger.setAttribute("aria-expanded", open); document.body.style.overflow = open ? "hidden" : ""; });

const themeToggle = document.querySelector("#theme-toggle");
const storedTheme = localStorage.getItem("glow-theme");
if (storedTheme === "dark") document.documentElement.classList.add("dark");
function syncThemeButton() { const dark = document.documentElement.classList.contains("dark"); themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode"); themeToggle.setAttribute("aria-pressed", dark); themeToggle.textContent = dark ? "☼" : "◐"; }
themeToggle.addEventListener("click", () => { document.documentElement.classList.toggle("dark"); localStorage.setItem("glow-theme", document.documentElement.classList.contains("dark") ? "dark" : "light"); syncThemeButton(); });
syncThemeButton();

document.querySelector("#contact-form").addEventListener("submit", (event) => { event.preventDefault(); const button = event.currentTarget.querySelector("button[type=submit]"); button.textContent = "Message sent ✓"; button.insertAdjacentHTML("afterend", '<p class="form-note">Thanks — we\'ll get back to you within a day.</p>'); event.currentTarget.reset(); });
document.querySelector("#loading-screen").classList.add("fade-out");
setTimeout(() => document.querySelector("#loading-screen")?.remove(), 500);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") document.querySelector("#lightbox").hidden = true; });
