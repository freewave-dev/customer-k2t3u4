// Mobile navigation: hamburger toggle for the header menu.
(function () {
  var header = document.querySelector('.site-header');
  var toggle = header && header.querySelector('.nav-toggle');
  var menu = document.getElementById('primary-nav');
  if (!header || !toggle || !menu) return;

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!header.classList.contains('menu-open'));
  });

  // Close after tapping a link
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Close when tapping outside the header
  document.addEventListener('click', function (e) {
    if (header.classList.contains('menu-open') && !header.contains(e.target)) setOpen(false);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  // Reset state when resizing back up to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 960) setOpen(false);
  });
})();
