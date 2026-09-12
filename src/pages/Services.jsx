import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Services() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Astrology Services</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Worldwide Online Consultation</div>
          <h1 className="page-hero-title">Our Sacred Astrology <span className="gold-gradient-text">Services</span></h1>
          <p className="page-hero-desc">
            Explore our complete catalog of personalized online consultations. Every session is conducted one-on-one with customized upaye tailored strictly to your birth chart.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">

            {/* Lal Kitab */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🔴</div>
                  <span className="service-badge-tag">Lal Kitab Special</span>
                </div>
                <h3 className="service-title">Lal Kitab Consultation</h3>
                <p className="service-desc">
                  Traditional Lal Kitab reading addressing complex planetary afflictions (Grah Dosh) through non-superstitious, easy-to-perform daily remedies.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Lal Kitab Kundli Assessment</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Dharmi & Andha Tewa Verification</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Personalized Everyday Upaye</span></div>
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
                <Link to="/lal-kitab" className="btn btn-outline btn-sm">Full Lal Kitab Guide →</Link>
              </div>
            </div>

            {/* Vedic Astrology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🕉️</div>
                  <span className="service-badge-tag">Classical Jyotish</span>
                </div>
                <h3 className="service-title">Vedic Astrology (Janma Kundli)</h3>
                <p className="service-desc">
                  Comprehensive birth chart analysis exploring the 12 houses, 9 planets, current Mahadasha/Antardasha cycles, and major planetary transits (Gochar).
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Lagna, Chandra & Navamsha (D9) Chart</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Career, Business & Financial Timing</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Marriage, Relationship & Kundli Milan</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Health Tendencies & Peace of Mind</span></div>
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
                  Book Online Session →
                </button>
              </div>
            </div>

            {/* Numerology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🔢</div>
                  <span className="service-badge-tag">Frequency Alignment</span>
                </div>
                <h3 className="service-title">Numerology Consultation</h3>
                <p className="service-desc">
                  Align your personal and business frequencies through deep analysis of birth date, name spelling corrections, mobile number, and auspicious dates.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Life Path & Destiny Number Matrix</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Name Spelling Correction (Nameology)</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Mobile Number Numerology</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Business & Brand Name Vibrations</span></div>
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
                <Link to="/numerology" className="btn btn-outline btn-sm">Try Free Calculator →</Link>
              </div>
            </div>

            {/* Gemology */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">💎</div>
                  <span className="service-badge-tag">Planetary Crystals</span>
                </div>
                <h3 className="service-title">Gemology Consultation</h3>
                <p className="service-desc">
                  Gemstone recommendations based on strict astrological analysis. We never recommend generic stones without studying your ascendant and yogakaraka planets.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Personalized Gemstone Recommendation</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Carat Weight, Metal & Finger Protocols</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Wearing Day, Tithi & Mantras</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Identification of Incompatible Gems</span></div>
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
                <Link to="/gemology" className="btn btn-outline btn-sm">Read Gemstone Protocols →</Link>
              </div>
            </div>

            {/* Vastu */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🏡</div>
                  <span className="service-badge-tag">Vastu Shastra</span>
                </div>
                <h3 className="service-title">Home & Business Vastu</h3>
                <p className="service-desc">
                  Online Vastu consultation assessing directional floor plans for homes, corporate offices, retail shops, and commercial spaces with zero structural demolition.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Residential Vastu (Living, Bed, Kitchen)</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Corporate Office & Executive Cabins</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Shop, Showroom & Cash Counter Vastu</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Non-Destructive Directional Upaye</span></div>
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
                <Link to="/vastu" className="btn btn-outline btn-sm">Explore Vastu Insights →</Link>
              </div>
            </div>

            {/* Astro Remedies */}
            <div className="glass-card service-card">
              <div>
                <div className="service-card-top">
                  <div className="service-icon-wrap">🌟</div>
                  <span className="service-badge-tag">Life Solutions</span>
                </div>
                <h3 className="service-title">Astro Remedies & Upaye</h3>
                <p className="service-desc">
                  Personalized spiritual and astrological remedies designed to pacify malefic planetary influences and activate auspicious karmic momentum.
                </p>
                <div className="service-bullets">
                  <div className="service-bullet-item"><span>✦</span> <span>Planetary Imbalance Remedies</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Relationship & Marriage Delays</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Career Growth & Financial Blocks</span></div>
                  <div className="service-bullet-item"><span>✦</span> <span>Pitra & Kaal Sarp Dosh Pacification</span></div>
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
                <Link to="/remedies" className="btn btn-outline btn-sm">Browse Remedies by Issue →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.5)' }}>
        <div className="container text-center">
          <div className="gold-badge">Global Online Availability</div>
          <h2 className="section-title">Ready to Receive Personalized <span className="gold-gradient-text">Astrology Guidance?</span></h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
            Connect directly on WhatsApp at <strong>+91 9619885158</strong> with your birth date, time, and birthplace for immediate consultation scheduling.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Chat on WhatsApp</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => openBookingModal('Services Catalog Booking')}
            >
              <span>📅</span> <span>Book Online Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
