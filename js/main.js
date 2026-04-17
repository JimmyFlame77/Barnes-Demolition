(function() {
  'use strict';

  // Hamburger
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      var isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Mobile link close
  document.querySelectorAll('.mobile-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (mobileNav) mobileNav.classList.remove('open');
      if (hamburger) {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Smooth scroll with header offset
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Header shadow on scroll
  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (header) {
      header.style.boxShadow = window.scrollY > 60
        ? '0 3px 28px rgba(0,0,0,0.75)' : '0 2px 20px rgba(0,0,0,0.6)';
    }
  }, { passive: true });

  // Fade-in on scroll
  var fadeTargets = document.querySelectorAll('section, .service-card, .why-card, .hero-stat, .service-row, .contact-detail, .about-checklist li');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeTargets.forEach(function(el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // Contact form — Web3Forms submission with 1-second Transmitting animation
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function(field) {
        if (!field.value.trim()) { field.style.borderColor = '#c0392b'; valid = false; }
        else { field.style.borderColor = ''; }
      });
      if (!valid) return;

      // Inject spinner keyframe once
      if (!document.getElementById('bd-transmit-style')) {
        var style = document.createElement('style');
        style.id = 'bd-transmit-style';
        style.textContent = '@keyframes bd-spin{to{transform:rotate(360deg)}}.bd-spinner{display:inline-block;width:13px;height:13px;border:2px solid rgba(34,35,29,0.2);border-top-color:#22231D;border-radius:50%;animation:bd-spin .65s linear infinite;vertical-align:middle;margin-right:8px}';
        document.head.appendChild(style);
      }

      var btn = form.querySelector('.btn-submit');
      btn.innerHTML = '<span class="bd-spinner"></span>Transmitting…';
      btn.disabled = true;

      setTimeout(function() { form.submit(); }, 1000);
    });
  }
})();
