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

  // Contact form validation (only on pages with the form)
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
      if (valid) {
        var btn = form.querySelector('.btn-submit');
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#4a7a2a';
        btn.style.color = '#fff';
        btn.disabled = true;
        setTimeout(function() {
          btn.innerHTML = 'Send Request <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#22231D"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
          form.reset();
        }, 4000);
      }
    });
  }
})();
