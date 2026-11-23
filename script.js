/* ==========================================================================
   Ashok Mahato — portfolio interactions
   Progressive enhancement: content stays fully readable without this file.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- reveal on scroll ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- nav scroll-spy, progress bar, back-to-top ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('nav a[href^="#"]'));
  var sections = navLinks
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);
  var toTop = document.querySelector('.to-top');
  var progress = document.querySelector('.scroll-progress');

  function updateOnScroll() {
    var marker = window.scrollY + window.innerHeight * 0.3;
    var activeId = null;

    sections.forEach(function (section) {
      if (section.offsetTop <= marker) activeId = section.id;
    });

    navLinks.forEach(function (link) {
      if (link.getAttribute('href') === '#' + activeId) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (toTop) toTop.classList.toggle('is-shown', window.scrollY > 520);

    if (progress) {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progress.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateOnScroll, { passive: true });
  window.addEventListener('load', updateOnScroll);
  updateOnScroll();

  /* ---------- back to top ---------- */
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---------- current year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
