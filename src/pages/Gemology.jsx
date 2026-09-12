import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Gemology() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gemology Consultation</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Vedic Gemstone Science</div>
          <h1 className="page-hero-title">Vedic Gemology & <span className="gold-gradient-text">Planetary Stone Selection</span></h1>
          <p className="page-hero-desc">
            Gemstones act as cosmic optical filters, channeling pure planetary rays directly into the human aura. Discover how to identify and wear authentic astrological gemstones safely.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img src="/assets/images/gemology_crystals.jpg" alt="Natural Vedic Gemstones on Silk" />
            </div>

            <div className="about-content-block">
              <div className="gold-badge">Ethical Astrological Standard</div>
              <h2 className="section-title">Never Wear a Gemstone <br /><span className="gold-gradient-text">Without Complete Chart Analysis</span></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                A popular myth suggests that anyone can wear a gemstone simply based on their sun sign or birth month. In authentic Vedic Jyotish, wearing a stone for a malefic or functional enemy planet can precipitate health distress, unexpected financial loss, or domestic turbulence.
              </p>

              <div className="glass-card" style={{ borderColor: 'rgba(212,175,55,0.5)', background: 'rgba(11,31,77,0.7)', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--gold-light)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>⚠️ Our Ethical Guarantee</h4>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  Naryani Astro <strong>never recommends specific gemstones without full astrological consultation</strong>. We meticulously evaluate your Lagna lord (Ascendant), Yogakaraka planets, 5th and 9th houses (Trikona lords), and planetary transit strength before recommending any gemstone.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20a%20Gemology%20Consultation%20to%20know%20my%20suitable%20gemstone."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg btn-shimmer"
                >
                  <span>💬</span> <span>Consult on WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => openBookingModal('Gemology Consultation')}
                >
                  <span>📅</span> <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">What is Covered</div>
            <h2 className="section-title">Comprehensive <span className="gold-gradient-text">Gemstone Guidance</span></h2>
            <p className="section-subtitle">
              Every gemstone consultation provides complete clarity on authenticity, carat weight, metal, and wearing rituals.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Personalized Recommendation</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Identifying your primary Life Stone (Jeevan Ratna), Lucky Stone (Bhagya Ratna), and Career Stone (Karaka Ratna) based strictly on your individual Vedic horoscope.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>⚖️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Exact Carat Weight & Metal</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Prescription of the appropriate ratti/carat weight according to body mass and chart strength, paired with the auspicious metal (Gold, Silver, Panchadhatu, or Ashtadhatu).
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🖐️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Finger & Hand Selection</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Different fingers channel specific planetary meridians. We specify precisely which finger (Ring, Middle, Index, Little) and which hand aligns with your cosmic flow.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🌅</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Muhurta & Wearing Ritual</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Identification of auspicious Shukla Paksha weekdays, sunrise hours (Hora), planetary mantras, and purification baths (Gangajal, raw milk, tulsi) for energizing your stone.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🚫</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Incompatible Stones Caution</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Critical review of gemstones you must strictly avoid. For instance, warning against wearing Ruby and Blue Sapphire together or Pearl with Emerald when planets clash.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💎</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Upratna (Substitute) Options</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Practical and affordable natural substitutes (e.g. Yellow Topaz for Yellow Sapphire, Peridot for Emerald) that deliver authentic astrological benefits within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="gold-badge">Worldwide Availability</div>
          <h2 className="section-title">Book Your Personalized <span className="gold-gradient-text">Gemstone Consultation</span></h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
            Gain clear, authentic clarity on whether a gemstone will help you before spending money on precious stones. Consult with Naryani Astro online.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20consult%20regarding%20my%20suitable%20Vedic%20Gemstone."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => openBookingModal('Gemology Consultation')}
            >
              <span>📅</span> <span>Fill Booking Form</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
