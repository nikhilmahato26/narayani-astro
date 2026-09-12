import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Testimonials() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Client Testimonials</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Client Experiences</div>
          <h1 className="page-hero-title">Trusted Worldwide by <span className="gold-gradient-text">Seekers of Truth</span></h1>
          <p className="page-hero-desc">
            Authentic consultation experiences from clients across India, North America, the UK, the Middle East, and Australia who found clarity through our guidance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                  <p>Online Client • Mumbai, India (Lal Kitab)</p>
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
                  <p>Online Client • London, UK (Vedic Kundli)</p>
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
                  <p>Online Client • Dubai, UAE (Numerology & Vastu)</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "I was struggling with chronic debt and financial delays for over two years. Naryani Astro identified a debilitated Venus and prescribed simple water and donation upaye. My cash flow has stabilized tremendously."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">V.S.</div>
                <div className="client-info-block">
                  <h4>V. S.</h4>
                  <p>Online Client • Delhi, India (Financial Remedies)</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Finding someone who gives honest astrological advice without selling exorbitant gemstone rings is rare. Naryani Astro actually advised me NOT to wear an Emerald that was clashing with my chart. Very high integrity."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">P.D.</div>
                <div className="client-info-block">
                  <h4>P. D.</h4>
                  <p>Online Client • Toronto, Canada (Gemology)</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "We consulted online from Sydney for our home's Vastu and relationship harmony. The non-destructive adjustments to our bedroom and entrance made an immediate difference in household peace."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">N.T.</div>
                <div className="client-info-block">
                  <h4>N. T.</h4>
                  <p>Online Client • Sydney, Australia (Vastu & Marriage)</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <div className="gold-badge">Experience the Difference</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Begin Your Online Consultation Journey</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto', color: 'var(--text-muted)' }}>
              Join hundreds of satisfied seekers worldwide who receive personalized guidance from Naryani Astro.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg btn-shimmer"
              >
                <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
              </a>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => openBookingModal('Testimonials Page Consultation')}
              >
                <span>📅</span> <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
