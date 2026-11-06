// HI-Tech Dental — small page behaviours. No libraries.

// 1. Header gets a soft shadow once the page is scrolled
const header = document.querySelector('.site-header');
function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// 2. Mobile menu open / close
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('nav-menu');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
  menu.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

// Close the menu after tapping a link, or pressing Escape
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// 3. Gentle fade-up as sections scroll into view
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      // small stagger for items that appear together
      const siblings = [...entry.target.parentElement.children].filter((el) => el.classList.contains('reveal'));
      const index = Math.max(0, siblings.indexOf(entry.target));
      entry.target.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0 });

  revealItems.forEach((el) => observer.observe(el));
} else {
  revealItems.forEach((el) => el.classList.add('is-visible'));
}

// 4. FAQ: keep only one answer open at a time
const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => { if (other !== item) other.open = false; });
  });
});

// 5. Keep the footer year current
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
