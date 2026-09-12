import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Col 1: Brand Info */}
        <div className="footer-about">
          <div className="brand-logo-wrap" style={{ marginBottom: '1rem' }}>
            <img src="/assets/images/logo.jpg" alt="Naryani Astro Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-name">Naryani Astro</span>
              <span className="brand-tagline">Ancient Wisdom • Modern Solutions</span>
            </div>
          </div>
          <p>
            Worldwide online astrology consultation platform offering personalized Lal Kitab horoscope readings, classical Vedic astrology, accurate numerology, gemstone guidance, Vastu Shastra, and practical spiritual remedies for life's challenges.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href="https://instagram.com/naryani_astro" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              📸 Instagram
            </a>
            <a href="https://youtube.com/@naryaniastro" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              ▶️ YouTube
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Astrologer</Link></li>
            <li><Link to="/services" className="footer-link">Astrology Services</Link></li>
            <li><Link to="/lal-kitab" className="footer-link">Lal Kitab Guidance</Link></li>
            <li><Link to="/remedies" className="footer-link">Astro Remedies</Link></li>
            <li><Link to="/testimonials" className="footer-link">Client Testimonials</Link></li>
            <li><Link to="/contact" className="footer-link">Contact & Booking</Link></li>
          </ul>
        </div>

        {/* Col 3: Specializations */}
        <div>
          <h4 className="footer-col-title">Specializations</h4>
          <ul className="footer-links-list">
            <li><Link to="/lal-kitab" className="footer-link">Lal Kitab Horoscope</Link></li>
            <li><Link to="/services" className="footer-link">Vedic Kundli Reading</Link></li>
            <li><Link to="/numerology" className="footer-link">Numerology Calculator</Link></li>
            <li><Link to="/gemology" className="footer-link">Gemstone Recommendations</Link></li>
            <li><Link to="/vastu" className="footer-link">Home & Business Vastu</Link></li>
            <li><Link to="/remedies" className="footer-link">Grah Dosh Upaye</Link></li>
          </ul>
        </div>

        {/* Col 4: Consultation Contact */}
        <div>
          <h4 className="footer-col-title">Consultation Contact</h4>
          <div className="footer-contact-item">
            <span>📞</span>
            <div>
              <strong>Phone / Call:</strong><br />
              <a href="tel:+919619885158" style={{ color: 'var(--gold-light)' }}>+91 9619885158</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span>💬</span>
            <div>
              <strong>WhatsApp Booking:</strong><br />
              <a href="https://wa.me/919619885158" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--wa-green)' }}>
                +91 9619885158
              </a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span>📧</span>
            <div>
              <strong>Email Address:</strong><br />
              <a href="mailto:goldenastro121@gmail.com" style={{ color: 'var(--text-muted)' }}>
                goldenastro121@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span>🌍</span>
            <div>
              <strong>Consultation Mode:</strong><br />
              Worldwide Online (India, USA, UK, UAE, Canada, Australia)
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="container footer-bottom-bar">
        <p className="footer-disclaimer">
          Disclaimer: Astrology, Numerology, Gemology, and Vastu Shastra are traditional advisory and spiritual disciplines. Guidance and remedies provided by Naryani Astro are intended for personal self-improvement, spiritual well-being, and counsel. They are not a substitute for qualified medical, legal, or financial professional services.
        </p>
        <div className="footer-copyright">
          © {currentYear} Naryani Astro. All Rights Reserved. Ancient Wisdom • Modern Solutions.
        </div>
      </div>
    </footer>
  );
}
