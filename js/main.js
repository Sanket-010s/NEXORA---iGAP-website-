/* ============================================================
   MAIN.JS
   All interactive behaviour for the site.
   Sections:
     1. Custom Cursor
     2. Navbar scroll effect
     3. Mobile menu toggle
     4. Cart panel toggle
     5. Scroll reveal (IntersectionObserver)
     6. Back-to-top button
     7. Bar chart heights (hero dashboard)
   ============================================================ */


/* ════════════════════════════════
   1. CUSTOM CURSOR
   A small red dot + lagging ring that follows the mouse.
   Hidden automatically on touch devices via CSS.
   ════════════════════════════════ */

(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');

  if (!cursor || !ring) return; // safety check

  let mouseX = 0, mouseY = 0; // actual mouse position
  let ringX  = 0, ringY  = 0; // lagging ring position

  // Track real mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Animate ring to lag behind cursor
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Expand ring when hovering interactive elements
  const hoverTargets = document.querySelectorAll(
    'a, button, .feature-card, .blog-card, .pricing-card'
  );

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      ring.style.width   = '56px';
      ring.style.height  = '56px';
      ring.style.opacity = '0.6';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.width   = '36px';
      ring.style.height  = '36px';
      ring.style.opacity = '1';
    });
  });
})();


/* ════════════════════════════════
   1B. TYPING ANIMATION
   Types out text in the hero heading.
   ════════════════════════════════ */

(function initTypingAnimation() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const words = ['iGAP.', 'AI.', 'Innovation.', 'Technology.'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 100;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at end of word
      typingSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  // Start typing after a short delay
  setTimeout(type, 1000);
})();


/* ════════════════════════════════
   2. NAVBAR SCROLL EFFECT
   Hides navbar when scrolling down, shows when scrolling up.
   ════════════════════════════════ */

(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
      nav.classList.add('nav-hidden');
    } else {
      nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
  });
})();


/* ════════════════════════════════
   3. MOBILE MENU TOGGLE
   Opens/closes the mobile nav drawer.
   Called from onclick="toggleMenu()" in HTML.
   ════════════════════════════════ */

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu when a link inside it is clicked
(function closeMobileMenuOnLink() {
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
})();


/* ════════════════════════════════
   4. CART PANEL TOGGLE
   Opens/closes the slide-in cart panel.
   Called from onclick="toggleCart()" in HTML.
   ════════════════════════════════ */

function toggleCart() {
  document.getElementById('cartOverlay')?.classList.toggle('open');
  document.getElementById('cartPanel')?.classList.toggle('open');
}


/* ════════════════════════════════
   5. SCROLL REVEAL
   Any element with class="reveal" fades in
   when it enters the viewport.
   ════════════════════════════════ */

(function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.12 // trigger when 12% of element is visible
  });

  revealElements.forEach((el) => observer.observe(el));
})();


/* ════════════════════════════════
   5B. ANIMATE SERVICE ITEMS ON SCROLL
   Each service animates when it enters viewport.
   ════════════════════════════════ */

(function initServiceItemsAnimation() {
  const serviceItems = document.querySelectorAll('.service-item');
  
  if (serviceItems.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  serviceItems.forEach((item) => observer.observe(item));
})();


/* ════════════════════════════════
   6. BACK TO TOP BUTTON
   Shows after scrolling 400px down.
   The onclick is set directly in HTML.
   ════════════════════════════════ */

(function initBackToTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  });
})();


/* ════════════════════════════════
   7. HERO BAR CHART HEIGHTS
   Sets bar heights from data-h attributes
   on the fake dashboard chart in the hero.
   ════════════════════════════════ */

(function initBarChart() {
  document.querySelectorAll('.bar[data-h]').forEach((bar) => {
    bar.style.height = bar.dataset.h + '%';
  });
})();


/* ════════════════════════════════
   8. PROJECTS DOT PAGINATION
   Syncs dot indicators with horizontal scroll position
   and allows clicking dots to scroll to specific cards.
   ════════════════════════════════ */

(function initProjectsDots() {
  const scrollContainer = document.getElementById('projectsScroll');
  const dots = document.querySelectorAll('.projects-dots .dot');
  const cards = document.querySelectorAll('.project-card');

  if (!scrollContainer || dots.length === 0 || cards.length === 0) return;

  // Update active dot based on scroll position
  function updateActiveDot() {
    const scrollLeft = scrollContainer.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 24; // card width + gap
    const activeIndex = Math.round(scrollLeft / cardWidth);

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
    });
  }

  // Scroll to specific card when dot is clicked
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const cardWidth = cards[0].offsetWidth + 24; // card width + gap
      scrollContainer.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
    });
  });

  // Listen to scroll events
  scrollContainer.addEventListener('scroll', updateActiveDot);
  
  // Initial update
  updateActiveDot();
})();


/* ════════════════════════════════
   9. ANIMATED STAT COUNTERS
   Animates numbers from 0 to target value when visible.
   ════════════════════════════════ */

(function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    updateCounter();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach((stat, index) => {
          setTimeout(() => {
            animateCounter(stat);
          }, index * 100);
        });
      }
    });
  }, {
    threshold: 0.5
  });

  const statsContainer = document.querySelector('.hero-stats');
  if (statsContainer) {
    observer.observe(statsContainer);
  }
})();


/* ════════════════════════════════
   11. TOGGLE INDUSTRY SOLUTIONS
   Expands/collapses industry solutions list.
   ════════════════════════════════ */

function toggleIndustry() {
  const list = document.getElementById('industryList');
  const btn = document.getElementById('industryToggle');
  const text = btn.querySelector('.see-more-text');
  
  if (list && btn) {
    list.classList.toggle('expanded');
    btn.classList.toggle('expanded');
    
    if (list.classList.contains('expanded')) {
      text.textContent = 'See Less';
    } else {
      text.textContent = 'See More Industries';
    }
  }
}
