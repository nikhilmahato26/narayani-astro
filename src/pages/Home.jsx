import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

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
  const parts = dateString.split('-');
  if (parts.length !== 3) return null;

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  function reduceNum(val) {
    let sum = 0;
    for (let char of String(val)) {
      sum += parseInt(char, 10);
    }
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

export default function Home() {
  const { openBookingModal, showToast } = useBooking();

  // Remedies Tab State
  const [activeRemedyFilter, setActiveRemedyFilter] = useState('all');

  // Numerology Calculator State
  const [numName, setNumName] = useState('');
  const [numDob, setNumDob] = useState('1995-08-15');
  const [calcResult, setCalcResult] = useState(() => {
    const defaultNum = calculateLifePath('1995-08-15');
    return { number: defaultNum, ...NUMEROLOGY_DATA[defaultNum] };
  });

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(0);

  // Quick Home Form State
  const [homeForm, setHomeForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    service: 'Lal Kitab Consultation',
    dob: '',
    time: '',
    place: '',
    message: ''
  });

  const handleNumCalculate = (e) => {
    e.preventDefault();
    if (!numDob) {
      showToast('Please select your date of birth.');
      return;
    }
    const num = calculateLifePath(numDob);
    const data = NUMEROLOGY_DATA[num] || NUMEROLOGY_DATA[1];
    setCalcResult({ number: num, ...data });
    showToast(`Life Path Number ${num} calculated!`);
  };

  const handleHomeFormSubmit = (e) => {
    e.preventDefault();
    const waMessage = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Name:* ${homeForm.name || 'Not Provided'}
• *Phone:* ${homeForm.phone || 'Not Provided'}
• *Email:* ${homeForm.email || 'Not Provided'}
• *Country:* ${homeForm.country || 'India / Worldwide'}
• *Consultation Type:* ${homeForm.service}
• *Date of Birth:* ${homeForm.dob || 'Not Provided'}
• *Birth Time:* ${homeForm.time || 'Not Provided'}
• *Birth Place:* ${homeForm.place || 'Not Provided'}
• *Specific Questions / Concerns:* ${homeForm.message || 'General Consultation'}

_I would like to confirm my worldwide online consultation slot._`;

    const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waMessage)}`;
    showToast('Redirecting to WhatsApp with your consultation details...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  const remediesData = [
    { id: 'relationships', category: 'relationships', icon: '❤️', title: 'Relationships & Love', desc: 'Heal misunderstandings, emotional distance, and compatibility friction by balancing Venus (Shukra), Moon (Chandra), and 7th house planetary transits.', tag: 'Venus & Moon Remedies' },
    { id: 'career', category: 'career', icon: '💼', title: 'Career & Job Growth', desc: 'Overcome stagnation, lack of recognition, job insecurity, or uncertain career switches through targeted Sun, Saturn, and 10th house remedies.', tag: 'Sun & Saturn Alignment' },
    { id: 'marriage', category: 'marriage', icon: '💍', title: 'Marriage & Kundli Milan', desc: 'Remedies for delays in finding a suitable spouse, Manglik Dosh pacification, post-marital friction, and comprehensive 36-Guna Kundli matching.', tag: 'Jupiter & Mangal Upaye' },
    { id: 'children', category: 'children', icon: '👶', title: 'Children & Education', desc: 'Guidance for couples anticipating progeny (Santan Sukh), student concentration enhancements, and career stream selection using the 5th house and Jupiter.', tag: '5th House & Jupiter Upaye' },
    { id: 'disputes', category: 'disputes', icon: '⚖️', title: 'Legal & Personal Disputes', desc: 'Protective Lal Kitab and Mars remedies to alleviate chronic litigation, court battles, property conflicts, and unwanted rivalries.', tag: 'Mars & 6th House Neutralization' },
    { id: 'financial', category: 'financial', icon: '💰', title: 'Financial & Debt Relief', desc: 'Resolve persistent financial drain, unrecovered business funds, and debt traps by strengthening the 2nd and 11th houses with auspicious upaye.', tag: 'Dhan Bhava Alignment' },
    { id: 'family', category: 'family', icon: '🏠', title: 'Home & Family Harmony', desc: 'Dispel persistent discord, emotional tension, and negative domestic aura by combining Lal Kitab domestic remedies with subtle Vastu adjustments.', tag: '4th House & Moon Balancing' },
    { id: 'doshas', category: 'doshas', icon: '🪐', title: 'Planetary Doshas', desc: 'Dedicated, compassionate remedies for Kaal Sarp Dosh, Pitra Dosh, Sade Sati, Shani Dhaiya, and affliction caused by Rahu-Ketu axis.', tag: 'Safe Dosh Pacification' }
  ];

  const filteredRemedies = activeRemedyFilter === 'all'
    ? remediesData
    : remediesData.filter(r => r.category === activeRemedyFilter);

  const faqs = [
    {
      q: 'How do I book an online consultation?',
      a: 'Booking is very simple and instant. You can click the WhatsApp button anywhere on our website to message us directly at +91 9619885158, or submit the consultation booking form on this page. Our team will promptly confirm your appointment slot and share session details.'
    },
    {
      q: 'Do you provide worldwide consultations?',
      a: 'Yes, absolutely. Naryani Astro specializes in worldwide online astrology consultations. We regularly consult with clients across India, USA, UK, UAE, Canada, Australia, Singapore, and Europe via WhatsApp voice call, video call, or detailed audio reports according to your time zone.'
    },
    {
      q: 'What details are required for an accurate reading?',
      a: 'To generate an accurate Vedic Kundli and Lal Kitab horoscope, we require: (1) Full Name, (2) Date of Birth (DD/MM/YYYY), (3) Exact Time of Birth (with AM/PM), and (4) City & Country of Birth. If you are inquiring about numerology or Vastu, relevant details like full name spelling or floor plans will be requested.'
    },
    {
      q: 'Is WhatsApp consultation available?',
      a: 'Yes, WhatsApp is our primary communication channel. You can message, send your birth details, and conduct your consultation session conveniently via WhatsApp chat, voice note, or voice call at +91 9619885158.'
    },
    {
      q: 'Which astrology services do you provide?',
      a: 'We provide end-to-end guidance across six core disciplines: Lal Kitab Horoscope Reading & Upaye, Classical Vedic Astrology, Numerology Analysis, Gemology (Gemstone selection & wearing protocol), Vastu Shastra Consultation (Home & Business), and personalized Astro Remedies for life challenges.'
    },
    {
      q: 'How are remedies provided? Are they expensive or complicated?',
      a: 'All remedies are personalized and tailored strictly to your individual chart. We prioritize simple, practical, everyday upaye (such as planetary color harmony, dietary adjustments, specific non-harmful charity, and gentle water rituals) that anyone can perform without heavy expenditure or superstitious fear.'
    }
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-media">
          <img src="/assets/images/hero_galaxy_zodiac.jpg" alt="Mystical cosmic galaxy zodiac wheel" className="hero-bg-img" />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="gold-badge">
              <span>✨</span> <span>Ancient Wisdom • Modern Solutions • Worldwide Online Astrology</span>
            </div>
            <h1 className="hero-title">
              Worldwide Online <br />
              <span className="gold-gradient-text">Astrology Consultation</span>
            </h1>
            <p className="hero-subheading">
              Lal Kitab • Vedic Astrology • Numerology • Gemology • Vastu • Astro Remedies
            </p>
            <p className="hero-description">
              Get accurate astrological guidance, personalized remedies, and practical spiritual solutions for life’s important challenges from the comfort of your home. Consult live with trusted Vedic & Lal Kitab astrologer across India and globally.
            </p>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg btn-shimmer"
              >
                <span>💬</span> <span>WhatsApp Consultation</span>
              </a>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-shimmer"
                onClick={() => openBookingModal('Worldwide Online Consultation')}
              >
                <span>📅</span> <span>Book Online Consultation</span>
              </button>
              <a href="tel:+919619885158" className="btn btn-call btn-lg">
                <span>📞</span> <span>Call Now</span>
              </a>
            </div>

            <div className="hero-trust-indicators">
              <div className="trust-pill">
                <span>🌍</span>
                <span><strong>100% Online</strong> Worldwide Consultations</span>
              </div>
              <div className="trust-pill">
                <span>🔮</span>
                <span><strong>Personalized</strong> Chart Reading</span>
              </div>
              <div className="trust-pill">
                <span>📿</span>
                <span><strong>Practical</strong> Upaye & Remedies</span>
              </div>
              <div className="trust-pill">
                <span>🔒</span>
                <span><strong>Strictly</strong> Confidential</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Zodiac Wheel */}
          <div className="hero-visual-card">
            <div className="zodiac-wheel-wrapper">
              <img src="/assets/images/hero_galaxy_zodiac.jpg" alt="Astrological Zodiac Wheel" className="zodiac-wheel-img" />
              <div className="zodiac-center-badge">
                <span className="zodiac-om">ॐ</span>
                <span className="zodiac-badge-text">Naryani Astro</span>
              </div>
            </div>

            <div className="hero-floating-badge badge-top">
              <span>🔴</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Specialization</div>
                <div style={{ color: 'var(--gold-light)' }}>Lal Kitab Upaye</div>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom">
              <span>✨</span>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>Consultation Mode</div>
                <div style={{ color: 'var(--wa-green)' }}>WhatsApp & Audio/Video Call</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="trust-grid">
            <div className="glass-card trust-card">
              <div className="trust-icon-box">🌍</div>
              <h3 className="trust-card-title">Worldwide Online Consultation</h3>
              <p className="trust-card-desc">
                Consult from anywhere in the world. Seamless consultations across India, USA, UK, UAE, Canada, Australia, and beyond via WhatsApp, Voice, and Video.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">🔮</div>
              <h3 className="trust-card-title">Personalized Guidance</h3>
              <p className="trust-card-desc">
                Solutions deeply customized according to your exact birth date, birth time, planetary positions, and real-life circumstances.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">📿</div>
              <h3 className="trust-card-title">Traditional + Practical Remedies</h3>
              <p className="trust-card-desc">
                Ancient astrological knowledge translated into ethical, safe, and practical everyday remedies (upaye) that are easy to perform.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">⭐</div>
              <h3 className="trust-card-title">Relationship, Career & Marriage</h3>
              <p className="trust-card-desc">
                Holistic life guidance addressing marriage timing, kundli matching, business expansion, career transitions, and family harmony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img src="/assets/images/spiritual_remedies.jpg" alt="Spiritual Vedic Altar and Remedies" />
              <div className="about-floating-stat">
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">Personalized Guidance</div>
              </div>
            </div>

            <div className="about-content-block">
              <div className="gold-badge">About Us</div>
              <h2 className="section-title">
                Ancient Cosmic Wisdom for <br />
                <span className="gold-gradient-text">Modern Life Challenges</span>
              </h2>
              <p className="about-lead">
                Naryani Astro is a trusted online astrology consultation platform dedicated to helping individuals worldwide navigate life's pivotal moments through authentic astrological analysis and personalized remedies.
              </p>
              <p>
                Under the guiding banner of <em>"Ancient Wisdom • Modern Solutions"</em>, our mission is to deliver clear, ethical, and grounded guidance without fear-mongering or impractical rituals. We combine classical Vedic astrology principles with the fast-acting, practical remedies of Lal Kitab, accurate Numerology matrices, scientific Gemology, and harmonizing Vastu Shastra.
              </p>

              <div className="expertise-chips-grid">
                <div className="expertise-chip"><span>🔴</span> <span>Lal Kitab Horoscope & Upaye</span></div>
                <div className="expertise-chip"><span>🕉️</span> <span>Classical Vedic Birth Chart</span></div>
                <div className="expertise-chip"><span>🔢</span> <span>Name & Date Numerology</span></div>
                <div className="expertise-chip"><span>💎</span> <span>Vedic Gemology Consultation</span></div>
                <div className="expertise-chip"><span>🏡</span> <span>Home & Business Vastu</span></div>
                <div className="expertise-chip"><span>🌟</span> <span>Custom Planetary Remedies</span></div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <Link to="/about" className="btn btn-outline">Read Full Philosophy</Link>
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20know%20more%20about%20your%20online%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <span>💬</span> <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASTROLOGY SERVICES GRID */}
      <section className="section" id="services" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(11,31,77,0.4) 0%, transparent 80%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Our Astrology Services</div>
            <h2 className="section-title">Comprehensive Astrology Solutions for <span className="gold-gradient-text">Every Sphere of Life</span></h2>
            <p className="section-subtitle">
              Explore our specialized disciplines. Each consultation includes in-depth birth chart analysis, clear explanations, and customized practical remedies.
            </p>
          </div>

          <div className="services-grid">
            {/* Lal Kitab */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🔴</div>
                  <span className="service-badge-tag">Specialty</span>
                </div>
                <h3 className="service-title">Lal Kitab Consultation</h3>
                <p className="service-desc">
                  Traditional Lal Kitab horoscope reading and swift, practical remedies for complex planetary combinations and stubborn life roadblocks.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Lal Kitab Kundli Analysis</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Grah Dosh Identification</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Customized Everyday Upaye</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Debt & Obstacle Relief</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Lal%20Kitab%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <Link to="/lal-kitab" className="btn btn-outline btn-sm">Explore Lal Kitab →</Link>
              </div>
            </div>

            {/* Vedic Astrology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🕉️</div>
                  <span className="service-badge-tag">Foundational</span>
                </div>
                <h3 className="service-title">Vedic Astrology</h3>
                <p className="service-desc">
                  In-depth birth chart analysis examining planetary transits (Gochar), Dasha periods, Nakshatras, and destiny yogas for holistic life guidance.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Lagna & Navamsha Chart Reading</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Mahadasha & Antardasha Timing</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Kundli Milan (Marriage Match)</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Career & Wealth Potential</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Vedic%20Astrology%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => openBookingModal('Vedic Astrology Consultation')}
                >
                  Book Session →
                </button>
              </div>
            </div>

            {/* Numerology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🔢</div>
                  <span className="service-badge-tag">Vibrational</span>
                </div>
                <h3 className="service-title">Numerology Consultation</h3>
                <p className="service-desc">
                  Harmonize your core numerical frequencies through date of birth, name spelling analysis, mobile number, and business name alignment.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Life Path & Destiny Number Matrix</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Name Correction Suggestions</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Mobile Number Numerology</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Lucky Dates & Business Names</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Numerology%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <Link to="/numerology" className="btn btn-outline btn-sm">Try Calculator →</Link>
              </div>
            </div>

            {/* Gemology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">💎</div>
                  <span className="service-badge-tag">Energetic</span>
                </div>
                <h3 className="service-title">Gemology Consultation</h3>
                <p className="service-desc">
                  Precise gemstone recommendations based on your unique planetary strengths. We ensure safe, empowering stones and ethical wearing rituals.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Accurate Chart Verification</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Planetary Stone Selection</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Metal, Finger & Day Rituals</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Caution against Adverse Gems</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Gemology%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <Link to="/gemology" className="btn btn-outline btn-sm">Gemstone Guide →</Link>
              </div>
            </div>

            {/* Vastu */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🏡</div>
                  <span className="service-badge-tag">Spatial Harmony</span>
                </div>
                <h3 className="service-title">Vastu Consultation</h3>
                <p className="service-desc">
                  Align the five natural elements (Panchamahabhutas) in your residence, corporate office, shop, or commercial facility without structural breakdown.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Home & Apartment Energy Flow</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Office, Cabin & Desk Direction</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Shop Cash-Box & Entry Vastu</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Non-Destructive Vastu Upaye</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Vastu%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <Link to="/vastu" className="btn btn-outline btn-sm">Explore Vastu →</Link>
              </div>
            </div>

            {/* Astro Remedies */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🌟</div>
                  <span className="service-badge-tag">Holistic Upaye</span>
                </div>
                <h3 className="service-title">Astro Remedies & Solutions</h3>
                <p className="service-desc">
                  Practical, personalized remedies for planetary imbalances and ongoing life challenges. Designed for real life, peace of mind, and karmic balance.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Customized Upaye for Planetary Peace</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Navagraha Shanti Rituals</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Spiritual Mantras & Charity Advice</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Personalized Growth Blueprint</span></div>
                </div>
              </div>
              <div className="service-card-actions">
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20Astro%20Remedies%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-shimmer"
                >
                  <span>💬</span> <span>WhatsApp Consultation</span>
                </a>
                <Link to="/remedies" className="btn btn-outline btn-sm">View Life Remedies →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LAL KITAB SPOTLIGHT */}
      <section className="section" id="lal-kitab">
        <div className="container">
          <div className="lal-kitab-highlight-box">
            <div className="lal-kitab-grid">
              <div>
                <div className="gold-badge">Dedicated Specialization</div>
                <h2 className="section-title">
                  The Practical Power of <br />
                  <span className="gold-gradient-text">Lal Kitab Astrology</span>
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Lal Kitab is celebrated for its uncanny accuracy and remarkably pragmatic approach to astrology. Unlike traditional rituals that require complex, expensive ceremonies, Lal Kitab offers personalized, ethical, and simple upaye (remedies) that work harmoniously with planetary energies to neutralize negative karmic influences.
                </p>

                <div className="lal-kitab-features-list">
                  <div className="lal-kitab-feature-item">
                    <h4>📜 Lal Kitab Horoscope Reading</h4>
                    <p>In-depth house-by-house analysis uncovering hidden planetary clashes.</p>
                  </div>
                  <div className="lal-kitab-feature-item">
                    <h4>📿 Personalized Upaye</h4>
                    <p>Tailored everyday actions, water/earth rituals, and non-harmful donations.</p>
                  </div>
                  <div className="lal-kitab-feature-item">
                    <h4>🪐 Grah Dosh Remedies</h4>
                    <p>Specific remedies to pacify Rahu, Ketu, Shani (Saturn), and afflicted Mangal doshas.</p>
                  </div>
                  <div className="lal-kitab-feature-item">
                    <h4>💡 Life Problem Solutions</h4>
                    <p>Practical remedies addressing financial leaks, relationship stagnation, and career delays.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20am%20interested%20in%20a%20Lal%20Kitab%20Horoscope%20Reading%20and%20Upaye."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg btn-shimmer"
                  >
                    <span>💬</span> <span>Consult on WhatsApp</span>
                  </a>
                  <Link to="/lal-kitab" className="btn btn-outline btn-lg">Learn More About Lal Kitab</Link>
                </div>
              </div>

              <div className="lal-kitab-img-wrap">
                <img src="/assets/images/lal_kitab_mystic.jpg" alt="Sacred Lal Kitab Scripture and Diya Lamp" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASTRO REMEDIES & SOLUTIONS */}
      <section className="section" id="remedies">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Astro Remedies & Solutions</div>
            <h2 className="section-title">Practical Remedies for <span className="gold-gradient-text">Life's Important Challenges</span></h2>
            <p className="section-subtitle">
              Planetary imbalances manifest in recognizable life patterns. Filter through common concerns below to discover how astrology provides ethical, grounded pathways forward.
            </p>
          </div>

          <div className="remedies-filter-tabs">
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('all')}
            >
              All Challenges
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'relationships' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('relationships')}
            >
              ❤️ Relationships
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'career' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('career')}
            >
              💼 Career
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'marriage' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('marriage')}
            >
              💍 Marriage
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'children' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('children')}
            >
              👶 Children
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'disputes' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('disputes')}
            >
              ⚖️ Disputes
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('financial')}
            >
              💰 Financial
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'family' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('family')}
            >
              🏠 Family Harmony
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeRemedyFilter === 'doshas' ? 'active' : ''}`}
              onClick={() => setActiveRemedyFilter('doshas')}
            >
              🪐 Planetary Doshas
            </button>
          </div>

          <div className="remedies-grid">
            {filteredRemedies.map((item) => (
              <div key={item.id} className="glass-card remedy-issue-card">
                <div className="remedy-issue-icon">{item.icon}</div>
                <h3 className="remedy-issue-title">{item.title}</h3>
                <p className="remedy-issue-desc">{item.desc}</p>
                <div className="remedy-card-footer">
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-soft)' }}>{item.tag}</span>
                  <a
                    href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Naryani Astro, I would like remedies and guidance for ${item.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMEROLOGY LIVE CALCULATOR TEASER */}
      <section className="section" id="numerology">
        <div className="container">
          <div className="numerology-tool-card">
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="gold-badge">Interactive Tool</div>
              <h2 className="section-title">Calculate Your <span className="gold-gradient-text">Life Path Number</span></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto' }}>
                In Vedic & Pythagorean numerology, your date of birth holds the vibrational blueprint of your core mission, talents, and karmic destiny. Enter your details below for an instant reading.
              </p>
            </div>

            <div className="num-calc-grid">
              <form onSubmit={handleNumCalculate} className="num-input-group">
                <div>
                  <label htmlFor="num-name-input" className="form-label">Your Full Name (Optional)</label>
                  <input
                    type="text"
                    id="num-name-input"
                    className="form-input"
                    placeholder="e.g. Aarav Sharma"
                    value={numName}
                    onChange={(e) => setNumName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="num-dob-input" className="form-label">Your Date of Birth *</label>
                  <input
                    type="date"
                    id="num-dob-input"
                    className="form-input"
                    value={numDob}
                    onChange={(e) => setNumDob(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-shimmer" style={{ marginTop: '0.5rem' }}>
                  <span>🔢</span> <span>Calculate Life Path Number</span>
                </button>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', textAlign: 'center' }}>
                  Supports numbers 1-9 and Master Numbers 11, 22, 33
                </div>
              </form>

              <div id="numerology-result" className="num-result-box">
                <div className="num-circle-badge">{calcResult.number}</div>
                <h3 className="num-result-title">{calcResult.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--gold-soft)', marginBottom: '0.5rem' }}>
                  <strong>Planetary Ruler:</strong> {calcResult.ruler}
                </p>
                <p className="num-result-text">{calcResult.traits}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <strong>Spiritual Guidance:</strong> {calcResult.advice}
                </p>
                <a
                  href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Naryani Astro, I calculated my Numerology Life Path Number as ${calcResult.number} for ${numName || 'Seeker'} (DOB: ${numDob}). I would like to book a detailed consultation.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm btn-shimmer"
                >
                  <span>💬</span> <span>Consult on WhatsApp for Full Report</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEMOLOGY & VASTU SHOWCASE */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', maxHeight: '220px' }}>
                  <img src="/assets/images/gemology_crystals.jpg" alt="Vedic Astrological Gemstones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gold-badge">Gemstone Consultation</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>Ethical Gemology Guidance</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  Gemstones concentrate cosmic radiation. Wearing the incorrect stone can amplify hostile planetary vibrations. Naryani Astro provides rigorous chart verification before suggesting any natural planetary gemstone.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Lucky Gem Consultation & Carat Weight</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Right Metal, Finger & Muhurta for Wearing</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Vedic Prana Pratishtha Energization</span></div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20guidance%20on%20my%20suitable%20astrological%20gemstone."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <span>💬</span> <span>WhatsApp Gemology</span>
                </a>
                <Link to="/gemology" className="btn btn-outline btn-sm">Read Guidelines →</Link>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', maxHeight: '220px' }}>
                  <img src="/assets/images/vastu_compass.jpg" alt="Vastu Purusha Mandala and Brass Compass" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gold-badge">Energy Balance</div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>Home & Business Vastu Guidance</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  Harmonize the directional energies of your living and commercial spaces. Our online consultations assess floor plans, main entrances, kitchen (Agni zone), and master bedrooms without demanding structural demolition.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Home & Residential Vastu Analysis</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Office, Shop & Factory Productivity</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Color, Mirror & Element Vastu Upaye</span></div>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20an%20Online%20Vastu%20Consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <span>💬</span> <span>WhatsApp Vastu</span>
                </a>
                <Link to="/vastu" className="btn btn-outline btn-sm">Explore Vastu →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Simple & Seamless</div>
            <h2 className="section-title">How Online Consultation <span class="gold-gradient-text">Works Worldwide</span></h2>
            <p className="section-subtitle">
              Experience world-class astrological consultation from anywhere across the globe in 5 simple steps.
            </p>
          </div>

          <div className="process-grid">
            <div className="glass-card process-step-card">
              <div className="process-step-number">1</div>
              <div className="process-step-icon">💬</div>
              <h3 className="process-step-title">Contact on WhatsApp</h3>
              <p className="process-step-desc">
                Message +91 9619885158 or submit the booking form to initiate your worldwide consultation.
              </p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">2</div>
              <div className="process-step-icon">📜</div>
              <h3 className="process-step-title">Share Birth Details</h3>
              <p className="process-step-desc">
                Provide your Date of Birth, exact Time of Birth, and Place of Birth for accurate horoscope charting.
              </p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">3</div>
              <div className="process-step-icon">🔍</div>
              <h3 className="process-step-title">Choose Service</h3>
              <p className="process-step-desc">
                Select Lal Kitab, Vedic Astrology, Numerology, Gemology, Vastu, or comprehensive life guidance.
              </p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">4</div>
              <div className="process-step-icon">🎧</div>
              <h3 className="process-step-title">Receive Guidance</h3>
              <p className="process-step-desc">
                Engage in a dedicated online consultation session via WhatsApp voice call, video call, or detailed voice report.
              </p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">5</div>
              <div className="process-step-icon">📿</div>
              <h3 className="process-step-title">Get Remedies & Solutions</h3>
              <p className="process-step-desc">
                Receive your customized, practical upaye with clear instructions for daily life and spiritual peace.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Start Consultation on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'rgba(6,13,33,0.5)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Our Pillars of Trust</div>
            <h2 className="section-title">Why Choose <span className="gold-gradient-text">Naryani Astro</span></h2>
            <p className="section-subtitle">
              Committed to authenticity, compassionate listening, and practical astrological solutions.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="glass-card why-choose-card">
              <div className="why-icon">🔮</div>
              <h3 className="why-card-title">Personalized Consultation</h3>
              <p className="why-card-desc">Every reading is tailored specifically to your unique planetary combinations, life phase, and personal concerns.</p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">🌍</div>
              <h3 className="why-card-title">Online Worldwide Service</h3>
              <p className="why-card-desc">Flexible scheduling for clients in different time zones across India, USA, UK, UAE, Canada, and Europe.</p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">📚</div>
              <h3 className="why-card-title">Multiple Disciplines</h3>
              <p className="why-card-desc">Holistic synthesis of Lal Kitab, Vedic Astrology, Numerology, Gemology, and Vastu Shastra for complete clarity.</p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">📿</div>
              <h3 className="why-card-title">Practical Remedies</h3>
              <p className="why-card-desc">Non-superstitious upaye focused on realistic actions, ethical lifestyle alignments, and genuine peace of mind.</p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">⚡</div>
              <h3 className="why-card-title">Easy WhatsApp Booking</h3>
              <p className="why-card-desc">Instant booking with quick confirmation directly through WhatsApp with no complicated scheduling friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Client Experiences</div>
            <h2 className="section-title">Words of Trust from <span className="gold-gradient-text">Around the World</span></h2>
            <p className="section-subtitle">
              Feedback from seekers who consulted Naryani Astro online for relationship, career, and life remedies.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "The Lal Kitab remedies provided for my career stagnation were very simple and practical. Within weeks after doing the suggested upaye, unexpected new projects opened up. Truly grateful for the authentic guidance!"
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">R.K.</div>
                <div className="client-info-block">
                  <h4>R. K.</h4>
                  <p>Online Client • Mumbai, India</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Consulting from London via WhatsApp was completely smooth. The birth chart analysis was deeply accurate regarding my marriage timeline and past events. No fear-mongering, just calm and clear direction."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">S.M.</div>
                <div className="client-info-block">
                  <h4>S. M.</h4>
                  <p>Online Consultation • London, UK</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "The numerology and gemstone guidance for my business was an eye-opener. Changing my business card spelling and following the Vastu directions for my office brought immense peace and team harmony."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">A.P.</div>
                <div className="client-info-block">
                  <h4>A. P.</h4>
                  <p>Online Consultation • Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/testimonials" className="btn btn-outline">Read More Client Experiences →</Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions About <span className="gold-gradient-text">Our Consultations</span></h2>
            <p className="section-subtitle">
              Find answers to common questions about booking, birth details, worldwide consultations, and remedies.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-indicator">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING / CONTACT SECTION */}
      <section className="section" id="contact" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(11,31,77,0.6) 0%, #050a17 80%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Book Online Consultation</div>
            <h2 className="section-title">Schedule Your <span className="gold-gradient-text">Astrology Consultation</span></h2>
            <p className="section-subtitle">
              Fill in your birth details below to submit your consultation request directly via WhatsApp or email.
            </p>
          </div>

          <div className="booking-section-grid">
            {/* Contact Info Left Panel */}
            <div className="contact-info-panel">
              <div className="glass-card contact-info-card">
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>Naryani Astro</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-gold)', marginBottom: '1.5rem' }}>
                  Ancient Wisdom • Modern Solutions • Worldwide Online Astrology
                </p>

                <div className="contact-channels-list">
                  <a href="tel:+919619885158" className="contact-channel-item">
                    <div className="contact-channel-icon">📞</div>
                    <div className="channel-detail-text">
                      <h5>Mobile / Direct Call</h5>
                      <p>+91 9619885158</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item"
                  >
                    <div className="contact-channel-icon" style={{ background: 'rgba(37,211,102,0.2)', color: 'var(--wa-green)' }}>💬</div>
                    <div className="channel-detail-text">
                      <h5>WhatsApp Booking</h5>
                      <p>+91 9619885158</p>
                    </div>
                  </a>

                  <a href="mailto:goldenastro121@gmail.com" className="contact-channel-item">
                    <div className="contact-channel-icon">📧</div>
                    <div className="channel-detail-text">
                      <h5>Email Address</h5>
                      <p>goldenastro121@gmail.com</p>
                    </div>
                  </a>

                  <div className="contact-channel-item">
                    <div className="contact-channel-icon">🌍</div>
                    <div className="channel-detail-text">
                      <h5>Consultation Mode</h5>
                      <p>Worldwide Online (WhatsApp, Call, Zoom)</p>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)' }}>
                    🕒 Available for scheduled consultations across Indian Standard Time (IST), US Time Zones (EST/PST), UK (GMT), and Gulf Time (GST).
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form Box */}
            <div className="glass-card booking-form-box">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Enter Your Birth Details</h3>

              <form className="astrology-booking-form" onSubmit={handleHomeFormSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priya Sharma"
                      value={homeForm.name}
                      onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="e.g. +91 98765 43210"
                      value={homeForm.phone}
                      onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. priya@example.com"
                      value={homeForm.email}
                      onChange={(e) => setHomeForm({ ...homeForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country of Residence *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. India / USA / UAE"
                      value={homeForm.country}
                      onChange={(e) => setHomeForm({ ...homeForm, country: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Consultation Type *</label>
                  <select
                    className="form-select"
                    value={homeForm.service}
                    onChange={(e) => setHomeForm({ ...homeForm, service: e.target.value })}
                  >
                    <option value="Lal Kitab Consultation">Lal Kitab Consultation (Horoscope & Upaye)</option>
                    <option value="Vedic Astrology Consultation">Vedic Astrology Consultation (Chart Analysis)</option>
                    <option value="Numerology Consultation">Numerology Consultation (Name & Numbers)</option>
                    <option value="Gemology Consultation">Gemology Consultation (Gemstone Guidance)</option>
                    <option value="Vastu Consultation">Vastu Consultation (Home & Business)</option>
                    <option value="Astro Remedies & Solutions">Astro Remedies & Solutions (Life Challenges)</option>
                    <option value="Comprehensive Life Reading">Comprehensive Multi-Discipline Reading</option>
                  </select>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      type="date"
                      className="form-input"
                      value={homeForm.dob}
                      onChange={(e) => setHomeForm({ ...homeForm, dob: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Exact Time of Birth *</label>
                    <input
                      type="time"
                      className="form-input"
                      value={homeForm.time}
                      onChange={(e) => setHomeForm({ ...homeForm, time: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Place of Birth (City, State, Country) *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Jaipur, Rajasthan, India"
                    value={homeForm.place}
                    onChange={(e) => setHomeForm({ ...homeForm, place: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Key Concerns or Questions</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Describe your primary questions (e.g., career switch timing, marriage compatibility, financial remedies)..."
                    value={homeForm.message}
                    onChange={(e) => setHomeForm({ ...homeForm, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="btn btn-whatsapp btn-lg btn-shimmer">
                    <span>💬</span> <span>Book via WhatsApp Consultation</span>
                  </button>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                    <a href="tel:+919619885158" className="btn btn-call btn-sm">📞 Call +91 9619885158</a>
                    <a href="mailto:goldenastro121@gmail.com" className="btn btn-outline btn-sm">📧 Email Us</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="gold-badge">Follow & Connect</div>
            <h2 className="section-title">Join Our <span className="gold-gradient-text">Spiritual Community</span></h2>
            <p className="section-subtitle">Stay connected for daily astrological insights, Lal Kitab upaye, and celestial updates.</p>
          </div>

          <div className="social-grid">
            <a href="https://instagram.com/naryani_astro" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
              <div className="social-icon-circle instagram">📸</div>
              <div className="social-info-block">
                <h3>Instagram</h3>
                <p>@naryani_astro</p>
                <span className="btn btn-outline btn-sm">Follow on Instagram →</span>
              </div>
            </a>

            <a href="https://youtube.com/@naryaniastro" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
              <div className="social-icon-circle youtube">▶️</div>
              <div className="social-info-block">
                <h3>YouTube Channel</h3>
                <p>@naryaniastro</p>
                <span className="btn btn-outline btn-sm">Subscribe on YouTube →</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
