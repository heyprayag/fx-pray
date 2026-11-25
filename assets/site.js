(() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.links');
  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    };
    menu.setAttribute('aria-controls', 'primary-navigation');
    nav.id = 'primary-navigation';
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
  }
  document.querySelectorAll('.faq button').forEach((button, index) => {
    const answer = button.nextElementSibling;
    if (!answer) return;
    const id = answer.id || 'faq-answer-' + (index + 1);
    answer.id = id;
    button.setAttribute('aria-controls', id);
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const item = button.closest('.faq');
      const expanded = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(expanded));
      const indicator = button.querySelector('span');
      if (indicator) indicator.textContent = expanded ? '−' : '+';
    });
  });
})();