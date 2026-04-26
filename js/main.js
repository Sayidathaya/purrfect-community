/* =====================================================
   PURRFECT COMMUNITY — Global JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HAMBURGER MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      /* Animate hamburger lines into X */
      hamburger.classList.toggle('is-open');
    });

    /* Close nav when a link is clicked (mobile) */
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

  /* ── SCROLL REVEAL ANIMATION ── */
  const revealEls = document.querySelectorAll(
    '.card, .cat-card, .tip-card, .value-card, .team-card, ' +
    '.thread-card, .event-card, .info-card, .social-card, .tl-content'
  );

  const observerOpts = { threshold: 0.12 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOpts);

  revealEls.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
    revealObserver.observe(el);
  });

  /* Triggered by IntersectionObserver */
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .revealed { opacity: 1 !important; transform: translateY(0) !important; }
    </style>
  `);

  /* ── STAT COUNTER ANIMATION (index.html) ── */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const raw    = el.textContent.trim();           // e.g. "2.4K+" or "3 Tahun"
    const numMatch = raw.match(/[\d.]+/);
    if (!numMatch) return;

    const target = parseFloat(numMatch[0]);
    const suffix = raw.replace(numMatch[0], '');    // "+", "K+", " Tahun", etc.
    const isFloat = numMatch[0].includes('.');
    const duration = 1400;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);          // ease-out cubic
      const current  = eased * target;
      el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ── FILTER BUTTONS (galeri.html) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const catCards   = document.querySelectorAll('.cat-card');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.textContent.trim();

        catCards.forEach(card => {
          const badge = card.querySelector('.cat-badge')?.textContent.trim() || '';
          const bulu  = card.querySelector('.cat-name')?.textContent.trim() || '';

          let show = true;
          if (filter === 'Ras Lokal')          show = badge === 'Lokal';
          else if (filter === 'Ras Impor')     show = badge === 'Impor';
          else if (filter === 'Berbulu Panjang') {
            const traits = card.querySelectorAll('.trait');
            show = [...traits].some(t => /panjang|lebat/i.test(t.textContent));
          }
          else if (filter === 'Berbulu Pendek') {
            const traits = card.querySelectorAll('.trait');
            show = [...traits].some(t => /pendek/i.test(t.textContent));
          }

          card.style.transition = 'opacity .3s, transform .3s';
          if (show) {
            card.style.opacity   = '1';
            card.style.transform = '';
            card.style.display   = '';
          } else {
            card.style.opacity   = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { if (!show) card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ── FAQ ACCORDION (kontak.html) ── */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item   = q.parentElement;
      const isOpen = item.classList.contains('open');
      /* Close all */
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      /* Toggle clicked */
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── CONTACT FORM (kontak.html) ── */
  const submitBtn = document.querySelector('.btn-submit');
  const successMsg = document.getElementById('successMsg');

  if (submitBtn && successMsg) {
    submitBtn.addEventListener('click', () => {
      const nama  = document.getElementById('nama')?.value.trim();
      const email = document.getElementById('email')?.value.trim();
      const pesan = document.getElementById('pesan')?.value.trim();

      if (!nama || !email || !pesan) {
        shakeForm();
        showError('Harap isi semua field yang diperlukan!');
        return;
      }
      if (!isValidEmail(email)) {
        showError('Format email tidak valid!');
        return;
      }

      successMsg.style.display = 'block';
      successMsg.style.animation = 'fadeIn .4s ease';
      clearForm();

      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearForm() {
    ['nama', 'email', 'pesan', 'topik'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
  }

  function showError(msg) {
    /* Remove any old error */
    document.querySelectorAll('.form-error').forEach(e => e.remove());
    const err = document.createElement('p');
    err.className = 'form-error';
    err.textContent = '⚠️ ' + msg;
    err.style.cssText = 'color:#C0392B; font-size:.88rem; margin-top:10px; font-weight:700;';
    document.querySelector('.form-card')?.appendChild(err);
    setTimeout(() => err.remove(), 3500);
  }

  function shakeForm() {
    const formCard = document.querySelector('.form-card');
    if (!formCard) return;
    formCard.style.animation = 'shake .4s ease';
    formCard.addEventListener('animationend', () => formCard.style.animation = '', { once: true });
  }

  /* ── STICKY NAV SHADOW ON SCROLL ── */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (!nav) return;
    nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 20px rgba(61,44,44,.12)'
      : 'none';
  });

  /* ── SMOOTH BACK-TO-TOP (if element exists) ── */
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* Inject keyframe animations */
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20%       { transform: translateX(-6px); }
        40%       { transform: translateX(6px); }
        60%       { transform: translateX(-4px); }
        80%       { transform: translateX(4px); }
      }
      .hamburger.is-open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
      .hamburger.is-open span:nth-child(2) { opacity: 0; }
      .hamburger.is-open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
    </style>
  `);

});
