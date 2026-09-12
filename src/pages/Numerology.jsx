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

export default function Numerology() {
  const { openBookingModal, showToast } = useBooking();

  const [name, setName] = useState('');
  const [dob, setDob] = useState('1995-08-15');
  const [calcResult, setCalcResult] = useState(() => {
    const defaultNum = calculateLifePath('1995-08-15');
    return { number: defaultNum, ...NUMEROLOGY_DATA[defaultNum] };
  });

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!dob) {
      showToast('Please select your date of birth.');
      return;
    }
    const num = calculateLifePath(dob);
    const data = NUMEROLOGY_DATA[num] || NUMEROLOGY_DATA[1];
    setCalcResult({ number: num, ...data });
    showToast(`Life Path Number ${num} calculated!`);
  };

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Numerology Consultation</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">The Cosmic Science of Numbers</div>
          <h1 className="page-hero-title">Numerology Consultation & <span className="gold-gradient-text">Life Path Calculator</span></h1>
          <p className="page-hero-desc">
            Decode the hidden numerical vibrations in your date of birth, name spelling, mobile number, and business identity. Unlock personal growth and auspicious harmony.
          </p>
        </div>
      </section>

      {/* LIVE CALCULATOR */}
      <section className="section">
        <div className="container">
          <div className="numerology-tool-card">
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="gold-badge">Interactive Life Path Engine</div>
              <h2 className="section-title">Discover Your Core <span className="gold-gradient-text">Life Path Vibration</span></h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto' }}>
                Enter your birth date below. Our engine calculates your foundational Life Path Number and Master Numbers (11, 22, 33) to provide immediate astrological guidance.
              </p>
            </div>

            <div className="num-calc-grid">
              <form onSubmit={handleCalculate} className="num-input-group">
                <div>
                  <label htmlFor="num-name-input" className="form-label">Full Name (Optional)</label>
                  <input
                    type="text"
                    id="num-name-input"
                    className="form-input"
                    placeholder="e.g. Rohini Gupta"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="num-dob-input" className="form-label">Date of Birth *</label>
                  <input
                    type="date"
                    id="num-dob-input"
                    className="form-input"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
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
                  href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Naryani Astro, I calculated my Numerology Life Path Number as ${calcResult.number} for ${name || 'Seeker'} (DOB: ${dob}). I would like to book a detailed consultation.`)}`}
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

      {/* Overview with Image */}
      <section className="section" style={{ background: 'rgba(6,13,33,0.5)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img src="/assets/images/numerology_sacred.jpg" alt="Sacred Numerology Sri Yantra Matrix" />
            </div>

            <div className="about-content-block">
              <div className="gold-badge">Harmonizing Frequencies</div>
              <h2 className="section-title">How Numerology Affects <span className="gold-gradient-text">Your Daily Success</span></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                In the cosmos, every number corresponds to a specific planetary frequency. While your birth date remains unalterable, the vibrational names and numbers you interact with daily — your name spelling, business brand, and telephone number — can be consciously calibrated to eliminate friction and attract prosperity.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                At Naryani Astro, our numerology consultations evaluate your complete profile: Driver / Mulank (birth day), Conductor / Bhagyank (life path), and Name / Namank. We suggest subtle letter modifications (Name Corrections) that produce immediate energetic harmonization without necessitating official legal name changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Consultation Inclusions</div>
            <h2 className="section-title">What Our Numerology <span className="gold-gradient-text">Consultation Covers</span></h2>
            <p className="section-subtitle">
              A comprehensive, personalized evaluation of your personal and commercial numbers.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📅</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Birth Date Numerology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Analysis of your Mulank (Psychic Number) and Bhagyank (Destiny Number) revealing innate psychological drives, relationship compatibility, and auspicious life milestones.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>✍️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Name Numerology & Correction</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Calculates your current name frequency against your planetary chart. When clashes exist, we suggest harmonious spelling modifications that elevate your personal aura and career reach.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📱</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Mobile Number Numerology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Your mobile phone is your primary communication conduit. We analyze the total sum and sequence of your phone digits to eliminate conflict vibrations and attract auspicious calls.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Business Name Numerology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Choosing or optimizing the spelling of your commercial company, brand name, or product title to ensure high market resonance, investor goodwill, and steady cash flow.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🍀</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Lucky Number & Color Guidance</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Identification of your most favorable calendar dates for signing agreements, launching enterprises, purchasing property, and planetary colors that enhance your vibrational magnetic field.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌱</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Personal Growth Guidance</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Actionable behavioral insights highlighting subconscious repeating patterns, emotional traps, and the optimal spiritual practices for your specific Life Path frequency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ background: 'rgba(6,13,33,0.5)' }}>
        <div className="container text-center">
          <div className="gold-badge">Worldwide Availability</div>
          <h2 className="section-title">Schedule Your <span className="gold-gradient-text">Numerology Consultation</span></h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
            Ready to align your name, mobile, and business numbers for maximum success? Message us directly on WhatsApp.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Numerology%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => openBookingModal('Numerology Consultation')}
            >
              <span>📅</span> <span>Fill Booking Form</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
