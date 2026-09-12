import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function About() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Astrologer</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">About Naryani Astro</div>
          <h1 className="page-hero-title">Ancient Wisdom for the <span className="gold-gradient-text">Modern Seeker</span></h1>
          <p className="page-hero-desc">
            A dedicated worldwide online astrology platform rooted in authentic Vedic principles, practical Lal Kitab remedies, and ethical spiritual guidance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap" style={{ textAlign: 'center' }}>
              <img
                src="/assets/images/logo.jpg"
                alt="Astrologer Sanjeev Naryani - Naryani Astro"
                style={{
                  borderRadius: '50%',
                  maxWidth: '340px',
                  width: '100%',
                  margin: '0 auto',
                  border: '3px solid var(--gold-primary)',
                  boxShadow: '0 0 40px rgba(212, 175, 55, 0.45)',
                  display: 'block',
                }}
              />
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', fontSize: '1.45rem', marginBottom: '0.25rem' }}>
                  Sanjeev Naryani
                </h3>
                <p style={{ color: 'var(--text-gold)', fontSize: '0.85rem', letterSpacing: '0.08em', fontWeight: '600', textTransform: 'uppercase' }}>
                  KNOW • ALIGN • TRANSFORM
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.35rem' }}>
                  Vedic Astrology • Lal Kitab • BNN • Numerology • Palmistry • Vastu
                </p>
              </div>
            </div>

            <div className="about-content-block">
              <div className="gold-badge">Our Mission & Approach</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', marginBottom: '1rem' }}>
                Personalized Consultation, <br />
                <span className="gold-gradient-text">Clear Solutions</span>
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Naryani Astro was founded to make classical astrological wisdom accessible, transparent, and genuinely beneficial to individuals around the world. In an era overwhelmed with conflicting advice and fear-based predictions, Naryani Astro stands for clarity, empathy, and practical solutions.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Astrology is not about resignation to an immutable fate; it is a sacred cosmic map that reveals planetary cycles, inherent strengths, blind spots, and auspicious timings. By understanding these rhythms and applying targeted upaye, you can make empowered decisions in love, career, finances, and personal well-being.
              </p>

              <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--gold-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Our Guiding Philosophy</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  <em>"Ancient Wisdom • Modern Solutions"</em> represents the seamless bridge between sacred Vedic sciences and contemporary urban life. Every remedy we recommend is practical, non-destructive, and can be easily performed without disrupting your daily routine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Core Disciplines</div>
            <h2 className="section-title">Our Unified Astrological Framework</h2>
            <p className="section-subtitle">
              Rather than relying on a single school of thought, Naryani Astro integrates six complementary disciplines to ensure thorough accuracy.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔴</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>1. Lal Kitab</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Celebrated for its fast-acting, non-ritualistic remedies. Lal Kitab analyzes karmic planetary combinations and prescribes customized upaye that balance planetary influences naturally.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🕉️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>2. Vedic Astrology (Jyotish)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                The timeless foundational system of birth chart analysis (Janma Kundli), examining planetary dashas, transits, and yogas to understand your life's deeper trajectory.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔢</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>3. Numerology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Decoding the vibrational frequencies of your birth date, name spelling, mobile number, and business entity to align with auspicious planetary vibrations.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💎</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>4. Vedic Gemology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Prescribing natural planetary gemstones with strict ethical scrutiny. Gemstones are recommended only after verifying ascendant strength and planetary beneficence.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏡</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>5. Vastu Shastra</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Harmonizing the spatial and directional energy flow of your home, office, or commercial workspace without requiring structural modifications or demolition.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌟</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>6. Planetary Remedies (Upaye)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Actionable, ethical solutions including planetary color coordination, water rituals, charitable donations, and mental clarity practices for sustained spiritual peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lal-kitab-highlight-box" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <div className="gold-badge">Online Worldwide Service</div>
            <h2 className="section-title">Consult from Anywhere in the World</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Whether you reside in Mumbai, Delhi, London, New York, Dubai, Toronto, or Sydney, Naryani Astro provides seamless one-on-one consultations via WhatsApp, voice call, or detailed audio reports tailored to your schedule.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg btn-shimmer"
              >
                <span>💬</span> <span>Book on WhatsApp: +91 9619885158</span>
              </a>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => openBookingModal('About Us Consultation')}
              >
                <span>📅</span> <span>Fill Booking Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
