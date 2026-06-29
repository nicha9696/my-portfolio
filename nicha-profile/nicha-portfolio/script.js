/* ═══════════════════════════════════════════════════
   Natnicha Portfolio — script.js
═══════════════════════════════════════════════════ */

// ── DARK MODE ─────────────────────────────────────
let isDark = localStorage.getItem('theme') === 'dark' ||
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme:dark)').matches);

function applyDark() {
  document.documentElement.classList.toggle('dk', isDark);
  const btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  document.querySelectorAll('.gold-card').forEach(c => {
    c.style.background   = isDark ? 'rgba(18,12,8,0.80)'       : 'rgba(255,255,255,0.75)';
    c.style.borderColor  = isDark ? 'rgba(212,168,67,0.25)'     : 'rgba(200,134,10,0.30)';
  });
}
function toggleDark() {
  isDark = !isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyDark();
}
applyDark();

// ── SCROLL PROGRESS ───────────────────────────────
const scrollBar = document.getElementById('scroll-bar');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (scrollBar) scrollBar.style.transform = `scaleX(${Math.min(pct,1)})`;
}, { passive: true });

// ── GOLD CURSOR SPARKLE ───────────────────────────
const ring = document.getElementById('cursor-ring');
const sparkleColors = ['#C8860A','#E4C06E','#D4A843','#FFD700','#FFF5C0'];

document.addEventListener('mousemove', e => {
  if (ring) { ring.style.left = e.clientX + 'px'; ring.style.top = e.clientY + 'px'; }
  if (Math.random() < 0.18) createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const el = document.createElement('div');
  el.className = 'sparkle';
  const size = 2 + Math.random() * 5;
  el.style.cssText = `
    left: ${x + (-10 + Math.random()*20)}px;
    top:  ${y + (-10 + Math.random()*20)}px;
    width: ${size}px; height: ${size}px;
    background: ${sparkleColors[~~(Math.random()*sparkleColors.length)]};`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// ── INTERSECTION: FADE IN + SKILL BARS ───────────
const fadeIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(b => b.classList.add('animate'));
    }
  });
}, { rootMargin: '-50px' });
document.querySelectorAll('.fade-in').forEach(el => fadeIO.observe(el));

// ── ACTIVE NAV HIGHLIGHT ──────────────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sectionIds = ['hero','about','skills','projects','goals','contact'];

new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' }).observe(
  ...sectionIds.map(id => document.getElementById(id)).filter(Boolean)
);

// ── SPLASH ANIMATION ──────────────────────────────
const SPLASH_NAME = 'Nicha';
const SPLASH_SUB  = 'Welcome to my profile';

function typeText(el, text, speed, done) {
  el.textContent = "";
  let i = 0;
  const t = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    if (i >= text.length) { clearInterval(t); if (done) done(); }
  }, speed);
}

// แก้จากบรรทัดที่ 107 เป็น:
// เราจะไม่เช็ค splash แล้ว แต่จะสั่งให้ mainSite โชว์ทันทีครับ
window.addEventListener('load', () => {
    const mainSite = document.getElementById('main-site');
    if (mainSite) {
        mainSite.style.opacity = '1';
        mainSite.style.display = 'block';
    }
});