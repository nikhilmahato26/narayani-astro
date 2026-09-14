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
          <span>Meet Sanjeev Naryani</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Meet Sanjeev Naryani</div>
          <h1 className="page-hero-title">
            Jyotish Acharya &amp; <span className="gold-gradient-text">Astrology Consultant</span>
          </h1>
          <p className="page-hero-desc">
            42 Years of Corporate Leadership Experience + Deep Astrological Practice | Clarity for Career, Business, Relationships, Family &amp; Vastu.
          </p>
        </div>
      </section>

      {/* Main Profile & Biography Section */}
      <section className="section">
        <div className="container">
          <div className="meet-sanjeev-card">
            <div className="about-grid" style={{ alignItems: 'flex-start' }}>
              <div className="profile-photo-container">
                <img
                  src="/assets/images/sanjeev_naryani_portrait.jpg"
                  alt="Astrologer Sanjeev Naryani - Naryani Astro"
                  className="profile-photo-img"
                />
                <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', fontSize: '1.4rem', marginBottom: '0.2rem' }}>
                    Sanjeev Naryani
                  </h3>
                  <p style={{ color: 'var(--text-gold)', fontSize: '0.85rem', letterSpacing: '0.08em', fontWeight: '600', textTransform: 'uppercase' }}>
                    Jyotish Acharya (Bharatiya Vidya Bhavan)
                  </p>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', fontWeight: 600, marginTop: '0.35rem' }}>
                    42 Years Banking &amp; Executive Leadership
                  </p>
                </div>
              </div>

              <div className="about-content-block">
                <div className="gold-badge">About Sanjeev Naryani</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', color: 'var(--gold-light)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  Bridging Ancient Astrological Wisdom with <br />
                  <span className="gold-gradient-text">Real-World Leadership Experience</span>
                </h2>

                <div className="profile-quote-box">
                  “My approach combines traditional astrological wisdom with practical understanding of people, careers, businesses and relationships.”
                </div>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Sanjeev Naryani is a distinguished professional who rose steadily through the ranks to reach the highest levels of corporate leadership, serving as Managing Director &amp; CEO in a company counted among the best in India. Alongside his corporate journey, he nurtured a deep passion for astrology from childhood, which eventually led him to formally pursue a two-year Jyotish Acharya programme in Vedic Astrology from Bharatiya Vidya Bhavan.
                </p>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  His learning and practice continued thereafter across Vedic Astrology, Lal Kitab, Numerology, BNN and Vastu, allowing him to develop a distinctive, practical and holistic approach to astrological guidance. Over the years, his understanding of astrological principles and remedies has helped hundreds of families and individuals navigate periods of relationship distress, personal challenges and life uncertainty, bringing greater peace, harmony and prosperity into their lives.
                </p>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  His Astro-Remedies are a perfect blend of Vedic, Lal Kitab and Numerology. He has also guided clients in India and across the world in making informed choices regarding names and numerological alignment, with an approach that combines traditional wisdom with practical understanding of modern life.
                </p>

                <div className="leadership-callout-box">
                  <div className="leadership-callout-title">ASTROLOGY + REAL-WORLD LEADERSHIP EXPERIENCE</div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    With 42 years of experience in the banking and leadership environment, including senior executive leadership, Sanjeev Naryani brings a practical understanding of people, organisations, careers and difficult decisions to his astrological consultations.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-shimmer"
                    onClick={() => openBookingModal('Consultation with Sanjeev Naryani')}
                  >
                    <span>🗓️</span> <span>Book Consultation with Sanjeev Naryani</span>
                  </button>
                  <a
                    href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
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
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="section" style={{ background: 'rgba(6,13,33,0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Core Disciplines</div>
            <h2 className="section-title">Our Unified Astrological Framework</h2>
            <p className="section-subtitle">
              Sanjeev Naryani integrates six complementary disciplines to ensure thorough accuracy and practical clarity.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🕉️</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>1. Vedic Astrology (Jyotish)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Certified Jyotish Acharya from Bharatiya Vidya Bhavan. In-depth Janma Kundli analysis, examining planetary dashas, transits (Gochar), and nakshatra yogas for deep life trajectory.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔴</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>2. Lal Kitab</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Celebrated for its fast-acting, non-ritualistic remedies. Lal Kitab analyzes karmic planetary combinations and prescribes customized upaye that balance planetary influences naturally.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔢</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>3. Numerology</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Decoding the vibrational frequencies of your birth date, name spelling, mobile number, and business entity to align with auspicious planetary vibrations.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💎</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>4. Vedic Gemology &amp; BNN</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Prescribing natural planetary gemstones with strict ethical scrutiny, combined with Bhrigu Nandi Nadi precision techniques.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏡</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>5. Vastu Shastra</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Harmonizing the spatial and directional energy flow of your home, office, or commercial workspace without requiring structural modifications or demolition.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌟</div>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>6. Holistic Astro-Remedies</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                A perfect blend of Vedic, Lal Kitab, and Numerology. Actionable, ethical solutions including everyday habits, color coordination, and positive charitable actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section">
        <div className="container">
          <div className="lal-kitab-highlight-box" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <div className="gold-badge">🌍 CONSULT FROM ANYWHERE</div>
            <h2 className="section-title">Online Consultations Across India &amp; Worldwide</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Connect with Sanjeev Naryani through WhatsApp, voice or video consultation — from wherever you are. Whether you reside in Mumbai, Delhi, London, New York, Dubai, Toronto, or Sydney, Naryani Astro provides seamless guidance tailored to your schedule.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20book%20an%20online%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg btn-shimmer"
              >
                <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
              </a>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => openBookingModal('About Page Consultation')}
              >
                <span>🗓️</span> <span>Book Online Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
