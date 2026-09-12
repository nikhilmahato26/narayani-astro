import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function LalKitab() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Lal Kitab Consultation</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Specialized Astrological Science</div>
          <h1 className="page-hero-title">Lal Kitab Consultation & <span className="gold-gradient-text">Practical Upaye</span></h1>
          <p className="page-hero-desc">
            Discover the profound wisdom of Lal Kitab. Renowned for its swift, safe, and practical everyday remedies that balance malefic planetary influences and unlock stagnant karma.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="lal-kitab-highlight-box">
            <div className="lal-kitab-grid">
              <div>
                <div className="gold-badge">Why Lal Kitab is Unique</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '1.25rem' }}>
                  A Pragmatic Approach to <br />
                  <span className="gold-gradient-text">Karmic Planetary Remedies</span>
                </h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Lal Kitab differs fundamentally from conventional ritual systems. It operates on the premise that planets occupy symbolic "houses" in your physical environment and behavioral habits. By making conscious adjustments in your surroundings, donations, and daily conduct, you can pacify agitated planetary energies without expensive or complicated yagyas.
                </p>
                <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-gold)', marginBottom: '1.75rem' }}>
                  ⚠️ <strong>Important Principle:</strong> Lal Kitab remedies are deeply personal. Performing arbitrary upaye found on the internet without chart verification can aggravate adverse planetary houses. Every remedy from Naryani Astro is custom-tailored after thorough horoscope examination.
                </p>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20a%20personalized%20Lal%20Kitab%20Horoscope%20Reading%20and%20Upaye."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg btn-shimmer"
                  >
                    <span>💬</span> <span>Consult on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => openBookingModal('Lal Kitab Consultation')}
                  >
                    <span>📅</span> <span>Book Consultation</span>
                  </button>
                </div>
              </div>

              <div className="lal-kitab-img-wrap">
                <img src="/assets/images/lal_kitab_mystic.jpg" alt="Sacred Lal Kitab Scripture and Altar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">What is Included</div>
            <h2 className="section-title">Core Elements of Our <span className="gold-gradient-text">Lal Kitab Reading</span></h2>
            <p className="section-subtitle">
              Every Lal Kitab session offers complete transparency and actionable clarity.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📜</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Lal Kitab Horoscope Reading</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                A meticulous reading of your Kundli through the lens of Lal Kitab houses. We identify "Sleeping Houses" (Soya Hua Ghar), "Dharmi Tewa" (benevolent horoscopes), and "Andha Tewa" (blind horoscopes) that explain persistent life patterns.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📿</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Personalized Remedies (Upaye)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Prescription of customized remedies involving natural elements (flowing water, sacred trees, brass/copper metals, non-violent charitable offerings). All upaye are safe, ethical, and easy to perform anywhere in the world.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🪐</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Grah Dosh Remedies</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Neutralize negative afflictions created by Rahu, Ketu, Saturn, and afflicted Mars (Mangal). We provide precise counter-measures that redirect hostile planetary rays into harmless channels.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💡</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Life Problem Solutions</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Direct, targeted upaye for specific crises: chronic financial debt (Karz Mukti), lingering marital misunderstandings, delay in offspring, child behavioral focus, and sudden professional roadblocks.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>⏳</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Varshphal (Annual Reading)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Lal Kitab generates a dynamic annual chart (Varshphal) for each solar return year. This highlights which houses are activated for the upcoming 12 months, allowing proactive remedies before challenges arise.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌿</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Ethical & Harmless Practice</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                We strictly adhere to ethical upaye that harm no living beings and involve no superstitious manipulation. Our counsel is grounded in compassion, dharmic values, and pragmatic wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="gold-badge">Worldwide Availability</div>
          <h2 className="section-title">Schedule Your <span className="gold-gradient-text">Lal Kitab Consultation</span></h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
            Share your birth date, time, and birthplace via WhatsApp for a personalized Lal Kitab analysis and customized upaye list.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Lal%20Kitab%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => openBookingModal('Lal Kitab Consultation')}
            >
              <span>📅</span> <span>Fill Booking Form</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
