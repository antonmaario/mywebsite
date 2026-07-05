const root = document.documentElement;
const header = document.querySelector('[data-header]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('[data-nav-links]');
const year = document.querySelector('[data-year]');

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

root.dataset.theme = initialTheme;
if (year) year.textContent = new Date().getFullYear();

function updateThemeButton() {
  if (!themeToggle) return;
  themeToggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

function closeMenu() {
  document.body.classList.remove('menu-open');
  navLinks?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

function updateHeader() {
  header?.classList.toggle('is-scrolled', window.scrollY > 10);
}

updateThemeButton();
updateHeader();

window.addEventListener('scroll', updateHeader, { passive: true });

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeButton();
});

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks?.classList.toggle('is-open');
  document.body.classList.toggle('menu-open', Boolean(isOpen));
  menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
