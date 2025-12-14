// nav behavior: active switching + mobile toggle
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-link');
  const toggleBtn = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // click on links: toggle active + gradient-text class
  links.forEach(a => {
    a.addEventListener('click', function (e) {
      // prevent default for demo; remove in production to allow navigation
      // e.preventDefault();

      links.forEach(x => x.classList.remove('active', 'gradient-text'));
      this.classList.add('active', 'gradient-text');

      // if mobile open, close it after click
      if (toggleBtn && toggleBtn.getAttribute('aria-expanded') === 'true') {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('show');
      }
    });
  });

  // mobile toggle
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('show');
    });

    // close mobile menu when clicking outside
    document.addEventListener('click', (ev) => {
      if (!toggleBtn.contains(ev.target) && !navLinks.contains(ev.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('show');
      }
    });
  }
});
