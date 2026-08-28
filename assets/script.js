(() => {
  const menu = document.querySelector('[data-menu]');
  const links = document.querySelector('[data-nav-links]');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const status = document.querySelector('[data-random-status]');
  if (status) {
    const lines = [
      'stock BRZ detected. restraint level: suspiciously high.',
      'sudo dnf upgrade && pretend this was always the plan',
      'progressive overload > random exercise roulette',
      'queueing Counter-Strike was a statistically questionable decision',
      'CTF flag located somewhere between skill issue and persistence',
      'touch grass? the BRZ is outside, so technically yes.'
    ];
    status.textContent = lines[Math.floor(Math.random() * lines.length)];
  }

  // Tiny easter egg: type "brz" anywhere.
  let typed = '';
  const egg = document.querySelector('[data-easter]');
  document.addEventListener('keydown', (event) => {
    if (event.key.length !== 1) return;
    typed = (typed + event.key.toLowerCase()).slice(-3);
    if (typed === 'brz' && egg) egg.classList.add('show');
  });
  document.querySelector('[data-close-easter]')?.addEventListener('click', () => egg?.classList.remove('show'));
  egg?.addEventListener('click', (event) => {
    if (event.target === egg) egg.classList.remove('show');
  });
})();
