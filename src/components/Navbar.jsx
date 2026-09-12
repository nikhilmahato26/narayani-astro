import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Navbar() {
  const { openBookingModal } = useBooking();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-notice-bar">
        <div className="top-notice-container">
          <div className="top-notice-left">
            <span>✨ <strong>Ancient Wisdom • Modern Solutions • Worldwide Online Astrology</strong></span>
            <span>|</span>
            <span>🌍 Serving Clients Across India, USA, UK, UAE, Canada & Worldwide</span>
          </div>
          <div className="top-notice-right">
            <a href="tel:+919619885158" className="top-notice-link">📞 +91 9619885158</a>
            <a href="mailto:goldenastro121@gmail.com" className="top-notice-link">📧 goldenastro121@gmail.com</a>
            <a href="https://instagram.com/naryani_astro" target="_blank" rel="noopener noreferrer" className="top-notice-link">📸 @naryani_astro</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="brand-logo-wrap" title="Naryani Astro - Sanjeev Naryani">
            <img src="/assets/images/logo.jpg" alt="Naryani Astro Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-name">Naryani Astro</span>
              <span className="brand-tagline">Ancient Wisdom • Modern Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="nav-menu" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>

            {/* Services Dropdown */}
            <div className="nav-item-dropdown">
              <NavLink to="/services" className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`}>
                <span>Services</span>
                <span className="dropdown-arrow">▾</span>
              </NavLink>
              <div className="nav-dropdown-menu">
                <Link to="/services" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">🔮</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">All Services</span>
                    <span className="nav-dropdown-desc">Complete overview of astrological offerings</span>
                  </div>
                </Link>
                <Link to="/lal-kitab" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">📕</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Lal Kitab Guidance</span>
                    <span className="nav-dropdown-desc">Karmic debt analysis & effortless upaye</span>
                  </div>
                </Link>
                <Link to="/remedies" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">🌿</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Astro Remedies</span>
                    <span className="nav-dropdown-desc">Vedic pooja, planetary cures & mantras</span>
                  </div>
                </Link>
                <Link to="/numerology" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">🔢</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Numerology</span>
                    <span className="nav-dropdown-desc">Name correction, life path & lucky numbers</span>
                  </div>
                </Link>
                <Link to="/gemology" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">💎</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Gemology</span>
                    <span className="nav-dropdown-desc">Natural energised gemstones & rings</span>
                  </div>
                </Link>
                <Link to="/vastu" className="nav-dropdown-item">
                  <span className="nav-dropdown-icon">🧭</span>
                  <div className="nav-dropdown-text">
                    <span className="nav-dropdown-title">Vastu Shastra</span>
                    <span className="nav-dropdown-desc">Harmonizing energies for home & office</span>
                  </div>
                </Link>
              </div>
            </div>

            <NavLink to="/lal-kitab" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Lal Kitab</NavLink>
            <NavLink to="/remedies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Remedies</NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Testimonials</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </nav>

          {/* Header Action Buttons */}
          <div className="nav-cta-wrap">
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm btn-shimmer"
              title="Chat on WhatsApp"
            >
              <span className="btn-icon">💬</span> <span className="btn-text">WhatsApp</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-sm btn-shimmer"
              onClick={() => openBookingModal('General Consultation')}
            >
              <span className="btn-icon">📅</span> <span className="btn-text">Book Now</span>
            </button>
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={openDrawer}
              aria-label="Open Mobile Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer-overlay ${isDrawerOpen ? 'active' : ''}`}
        onClick={closeDrawer}
      ></div>

      <aside className={`mobile-nav-drawer ${isDrawerOpen ? 'open' : ''}`} aria-label="Mobile Drawer">
        <div className="mobile-drawer-header">
          <div className="brand-logo-wrap">
            <img src="/assets/images/logo.jpg" alt="Naryani Astro Logo" className="brand-logo-img" />
            <div className="brand-text-block">
              <span className="brand-name">Naryani Astro</span>
              <span className="brand-tagline">Worldwide Online Astrology</span>
            </div>
          </div>
          <button
            type="button"
            className="mobile-drawer-close-btn"
            onClick={closeDrawer}
            style={{ background: 'none', border: 'none', color: 'var(--gold-light)', fontSize: '1.8rem', cursor: 'pointer' }}
          >
            &times;
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink to="/" className="mobile-nav-link" onClick={closeDrawer} end>
            <span>Home</span> <span>→</span>
          </NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={closeDrawer}>
            <span>About Astrologer</span> <span>→</span>
          </NavLink>
          <NavLink to="/services" className="mobile-nav-link" onClick={closeDrawer}>
            <span>All Services</span> <span>→</span>
          </NavLink>
          <NavLink to="/lal-kitab" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Lal Kitab Guidance</span> <span>→</span>
          </NavLink>
          <NavLink to="/remedies" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Astro Remedies</span> <span>→</span>
          </NavLink>
          <NavLink to="/numerology" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Numerology & Calculator</span> <span>→</span>
          </NavLink>
          <NavLink to="/gemology" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Gemology Consultation</span> <span>→</span>
          </NavLink>
          <NavLink to="/vastu" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Vastu Shastra</span> <span>→</span>
          </NavLink>
          <NavLink to="/testimonials" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Testimonials</span> <span>→</span>
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={closeDrawer}>
            <span>Book Consultation</span> <span>→</span>
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={closeDrawer}
          >
            <span>💬</span> <span>WhatsApp Consultation</span>
          </a>
          <a href="tel:+919619885158" className="btn btn-call" onClick={closeDrawer}>
            <span>📞</span> <span>Call +91 9619885158</span>
          </a>
        </div>
      </aside>
    </>
  );
}
