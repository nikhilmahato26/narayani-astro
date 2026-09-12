/**
 * Naryani Astro — Core Interactive Engine
 * Ancient Wisdom • Modern Solutions • Worldwide Online Astrology
 * Phone / WhatsApp: +91 9619885158 | Email: goldenastro121@gmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initFAQAccordion();
  initRemediesFilter();
  initNumerologyCalculator();
  initBookingForms();
  initBookingModal();
});

/* ==========================================================================
   NAVBAR & SCROLL BEHAVIOR
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close-btn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   REMEDIES CATEGORY FILTER TABS
   ========================================================================== */
function initRemediesFilter() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  const remedyCards = document.querySelectorAll('.remedy-issue-card');

  if (!filterBtns.length || !remedyCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      remedyCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.35s ease';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   INTERACTIVE NUMEROLOGY LIFE PATH CALCULATOR
   ========================================================================== */
const NUMEROLOGY_DATA = {
  1: {
    title: "Number 1: The Pioneer & Natural Leader",
    ruler: "Sun (Surya)",
    traits: "Independent, visionary, ambitious, and self-motivated. You possess raw leadership power, originality of thought, and the drive to pioneer breakthrough paths.",
    advice: "Harness your natural confidence while practicing patience and collaborative empathy in relationships."
  },
  2: {
    title: "Number 2: The Diplomat & Intuitive Harmonizer",
    ruler: "Moon (Chandra)",
    traits: "Deeply empathetic, peace-seeking, gentle, and intuitively attuned to subtle energies. You bring balance, diplomacy, and emotional depth into every environment.",
    advice: "Protect your emotional boundaries and trust your profound inner instincts when making crucial decisions."
  },
  3: {
    title: "Number 3: The Creative Visionary & Joyous Communicator",
    ruler: "Jupiter (Brihaspati / Guru)",
    traits: "Expressive, radiant, artistic, and spiritually optimistic. You possess the gift of uplifting others through words, creative arts, and contagious enthusiasm.",
    advice: "Channel your multifaceted creative talents into disciplined goals to materialize substantial achievements."
  },
  4: {
    title: "Number 4: The Master Architect & Pillar of Stability",
    ruler: "Rahu / Uranus",
    traits: "Methodical, deeply dependable, hardworking, and grounded in pragmatism. You excel at turning chaotic concepts into structured, lasting realities.",
    advice: "Cultivate flexibility in the face of sudden changes and welcome innovative viewpoints without fear."
  },
  5: {
    title: "Number 5: The Dynamic Catalyst & Free Spirit",
    ruler: "Mercury (Budha)",
    traits: "Versatile, curious, adventurous, and magnetic. You thrive amidst transformation, progressive movement, global travel, and spontaneous exploration.",
    advice: "Anchor your restless energy with grounding spiritual rituals and mindful routines for enduring success."
  },
  6: {
    title: "Number 6: The Nurturer & Cosmic Harmonizer",
    ruler: "Venus (Shukra)",
    traits: "Loving, responsible, aesthetically attuned, and deeply protective of loved ones. You are born with a heart centered on family, harmony, and healing.",
    advice: "Give yourself the unconditional kindness and rest you so generously bestow upon everyone else."
  },
  7: {
    title: "Number 7: The Mystical Truth Seeker & Philosopher",
    ruler: "Ketu / Neptune",
    traits: "Introspective, analytical, deeply spiritual, and drawn to occult mysteries. You seek the foundational truth behind existence and possess penetrating intuition.",
    advice: "Balance solitary reflection with open emotional connection to grounded companions in your journey."
  },
  8: {
    title: "Number 8: The Powerful Manifestor & Karmic Executive",
    ruler: "Saturn (Shani)",
    traits: "Authoritative, resilient, mastery over material and spiritual realms, and karmically driven. You understand perseverance, discipline, and building generational legacy.",
    advice: "Maintain absolute ethical integrity in all pursuits to receive the bountiful blessings of karmic equilibrium."
  },
  9: {
    title: "Number 9: The Universal Humanitarian & Soul Healer",
    ruler: "Mars (Mangal)",
    traits: "Compassionate, selfless, globally conscious, and spiritually evolved. You carry wisdom from all past life cycles with profound generosity and wisdom.",
    advice: "Release attachments to past disappointments gracefully and focus on uplifting collective consciousness."
  },
  11: {
    title: "Master Number 11: The Cosmic Illuminator & Seer",
    ruler: "High Octane Moon / Neptune",
    traits: "Extraordinary intuitive gifts, spiritual conduit, visionary ideals, and deep empathy. You bridge high cosmic dimensions with earthly wisdom.",
    advice: "Ground your intense nervous energy with meditation and express your divine revelations through guidance."
  },
  22: {
    title: "Master Number 22: The Master Builder of Empires",
    ruler: "High Octane Rahu / Uranus",
    traits: "The power to materialize grand humanitarian visions into tangible world-changing institutions, infrastructure, and enduring frameworks.",
    advice: "Stay steadfast in faith even when challenges appear monumental; your destiny carries vast responsibilities."
  },
  33: {
    title: "Master Number 33: The Master Spiritual Guide & Avatar",
    ruler: "High Octane Jupiter / Venus",
    traits: "The highest octave of selfless devotion, unconditional love, and spiritual enlightenment for humanity's collective healing.",
    advice: "Maintain sacred self-care while serving as a compassionate lighthouse for seeking souls across the globe."
  }
};

function calculateLifePath(dateString) {
  if (!dateString) return null;
  const parts = dateString.split('-'); // format YYYY-MM-DD
  if (parts.length !== 3) return null;

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  function reduceNum(val) {
    let sum = 0;
    for (let char of String(val)) {
      sum += parseInt(char, 10);
    }
    // Check master numbers first before reducing
    if (sum === 11 || sum === 22 || sum === 33) return sum;
    if (sum > 9) return reduceNum(sum);
    return sum;
  }

  const redDay = reduceNum(day);
  const redMonth = reduceNum(month);
  const redYear = reduceNum(year);

  const totalSum = redDay + redMonth + redYear;
  if (totalSum === 11 || totalSum === 22 || totalSum === 33) {
    return totalSum;
  }
  return reduceNum(totalSum);
}

function initNumerologyCalculator() {
  const calcForm = document.getElementById('numerology-calculator-form');
  const resultCard = document.getElementById('numerology-result');
  const numDisplay = document.getElementById('num-calc-number');
  const titleDisplay = document.getElementById('num-calc-title');
  const rulerDisplay = document.getElementById('num-calc-ruler');
  const traitsDisplay = document.getElementById('num-calc-traits');
  const adviceDisplay = document.getElementById('num-calc-advice');
  const consultWaBtn = document.getElementById('num-calc-wa-btn');

  if (!calcForm || !resultCard) return;

  calcForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const dobInput = document.getElementById('num-dob-input');
    const nameInput = document.getElementById('num-name-input');
    if (!dobInput || !dobInput.value) {
      showToast("Please select your date of birth.");
      return;
    }

    const lifePath = calculateLifePath(dobInput.value);
    const data = NUMEROLOGY_DATA[lifePath] || NUMEROLOGY_DATA[1];
    const clientName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Seeker";

    if (numDisplay) numDisplay.textContent = lifePath;
    if (titleDisplay) titleDisplay.textContent = data.title;
    if (rulerDisplay) rulerDisplay.innerHTML = `<strong>Planetary Ruler:</strong> ${data.ruler}`;
    if (traitsDisplay) traitsDisplay.textContent = data.traits;
    if (adviceDisplay) adviceDisplay.innerHTML = `<strong>Spiritual Guidance:</strong> ${data.advice}`;

    if (consultWaBtn) {
      const msg = `Hello Naryani Astro, I calculated my Numerology Life Path Number as ${lifePath} for ${clientName} (DOB: ${dobInput.value}). I would like to book a detailed online Numerology and Astrology consultation.`;
      consultWaBtn.href = `https://wa.me/919619885158?text=${encodeURIComponent(msg)}`;
    }

    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`Life Path Number ${lifePath} calculated!`);
  });
}

/* ==========================================================================
   BOOKING FORMS (WHATSAPP & EMAIL REDIRECTION)
   ========================================================================== */
function initBookingForms() {
  const forms = document.querySelectorAll('.astrology-booking-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="client_name"]')?.value.trim() || 'Not Provided';
      const phone = form.querySelector('[name="client_phone"]')?.value.trim() || 'Not Provided';
      const email = form.querySelector('[name="client_email"]')?.value.trim() || 'Not Provided';
      const country = form.querySelector('[name="client_country"]')?.value.trim() || 'India / Worldwide';
      const service = form.querySelector('[name="service_type"]')?.value || 'Online Astrology Consultation';
      const dob = form.querySelector('[name="birth_date"]')?.value || 'Not Provided';
      const time = form.querySelector('[name="birth_time"]')?.value || 'Not Provided';
      const place = form.querySelector('[name="birth_place"]')?.value.trim() || 'Not Provided';
      const message = form.querySelector('[name="client_message"]')?.value.trim() || 'General Consultation';

      const waMessage = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Name:* ${name}
• *Phone:* ${phone}
• *Email:* ${email}
• *Country:* ${country}
• *Consultation Type:* ${service}
• *Date of Birth:* ${dob}
• *Birth Time:* ${time}
• *Birth Place:* ${place}
• *Specific Questions / Concerns:* ${message}

_I would like to confirm my worldwide online consultation slot._`;

      const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waMessage)}`;

      showToast("Redirecting to WhatsApp with your consultation details...");
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);

      // Close modal if submitted inside modal
      const modal = document.querySelector('.modal-overlay.active');
      if (modal) {
        setTimeout(() => {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }, 1200);
      }
    });
  });
}

/* ==========================================================================
   UNIVERSAL QUICK BOOKING MODAL
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  const openTriggers = document.querySelectorAll('[data-open-modal="booking"], .open-booking-modal');
  const closeBtn = modal.querySelector('.modal-close-btn');

  function openModal(servicePreselect = '') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (servicePreselect) {
      const selectElem = modal.querySelector('[name="service_type"]');
      if (selectElem) {
        selectElem.value = servicePreselect;
      }
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const service = trigger.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(msg) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>✨</span> <span>${msg}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Global expose for inline triggers if needed
window.openBookingWithService = function(serviceName) {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const selectElem = modal.querySelector('[name="service_type"]');
    if (selectElem && serviceName) {
      selectElem.value = serviceName;
    }
  }
};
