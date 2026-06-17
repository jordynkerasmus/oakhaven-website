// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Hero Ken Burns
const heroBg = document.querySelector('.hero-bg');
if (heroBg) setTimeout(() => heroBg.classList.add('loaded'), 80);

// Scroll hint
document.querySelector('.hero-scroll')?.addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');

document.querySelectorAll('[data-lightbox]').forEach(el => {
  el.addEventListener('click', () => {
    lbImg.src = el.dataset.lightbox;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox?.classList.remove('active');
  document.body.style.overflow = '';
}

lightbox?.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
