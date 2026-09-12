import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Contact() {
  const { showToast } = useBooking();

  const [form, setForm] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Name:* ${form.name || 'Not Provided'}
• *Phone:* ${form.phone || 'Not Provided'}
• *Email:* ${form.email || 'Not Provided'}
• *Country:* ${form.country || 'India / Worldwide'}
• *Consultation Type:* ${form.service}
• *Date of Birth:* ${form.dob || 'Not Provided'}
• *Birth Time:* ${form.time || 'Not Provided'}
• *Birth Place:* ${form.place || 'Not Provided'}
• *Specific Questions / Concerns:* ${form.message || 'General Consultation'}

_I would like to confirm my worldwide online consultation slot._`;

    const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waMessage)}`;
    showToast('Redirecting to WhatsApp with your consultation details...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact / Book Consultation</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Worldwide Online Booking</div>
          <h1 className="page-hero-title">Book Your Online <span className="gold-gradient-text">Astrology Consultation</span></h1>
          <p className="page-hero-desc">
            Schedule your one-on-one session with Naryani Astro. Submit your birth details below to connect directly via WhatsApp, audio call, or email.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="booking-section-grid">

            {/* Left Info Column */}
            <div className="contact-info-panel">
              <div className="glass-card contact-info-card">
                <div className="gold-badge">Official Business Details</div>
                <h2 style={{ fontSize: '1.6rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>Naryani Astro</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-gold)', marginBottom: '1.5rem' }}>
                  Ancient Wisdom • Modern Solutions • Worldwide Online Astrology
                </p>

                <div className="contact-channels-list">
                  <a href="tel:+919619885158" className="contact-channel-item">
                    <div className="contact-channel-icon">📞</div>
                    <div className="channel-detail-text">
                      <h5>Mobile Number / Direct Call</h5>
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
                      <h5>WhatsApp Consultation</h5>
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
                      <p>Worldwide Online (WhatsApp Audio, Video & Call)</p>
                    </div>
                  </div>

                  <a href="https://instagram.com/naryani_astro" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                    <div className="contact-channel-icon" style={{ background: 'rgba(214,36,159,0.2)', color: '#fd5949' }}>📸</div>
                    <div className="channel-detail-text">
                      <h5>Instagram Profile</h5>
                      <p>@naryani_astro</p>
                    </div>
                  </a>

                  <a href="https://youtube.com/@naryaniastro" target="_blank" rel="noopener noreferrer" className="contact-channel-item">
                    <div className="contact-channel-icon" style={{ background: 'rgba(255,0,0,0.2)', color: '#ff4444' }}>▶️</div>
                    <div className="channel-detail-text">
                      <h5>YouTube Channel</h5>
                      <p>@naryaniastro</p>
                    </div>
                  </a>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', lineHeight: 1.6 }}>
                    🌍 <strong>Time-Zone Friendly:</strong> Scheduled appointments accommodate clients across all global time zones (IST, EST, PST, GMT, GST, AEST).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="glass-card booking-form-box">
              <div className="gold-badge">Direct Booking Form</div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Enter Your Birth Details</h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Providing accurate birth details enables us to generate your Vedic chart and Lal Kitab horoscope before the consultation.
              </p>

              <form className="astrology-booking-form" onSubmit={handleSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Ananya Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="e.g. +91 96198 85158"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                      placeholder="ananya@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country of Residence *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. India / USA / UAE / UK"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Consultation Type *</label>
                  <select
                    className="form-select"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="Lal Kitab Consultation">Lal Kitab Consultation (Horoscope & Upaye)</option>
                    <option value="Vedic Astrology Consultation">Vedic Astrology Consultation (Birth Chart)</option>
                    <option value="Numerology Consultation">Numerology Consultation (Name & Numbers)</option>
                    <option value="Gemology Consultation">Gemology Consultation (Gemstone Guidance)</option>
                    <option value="Vastu Consultation">Vastu Consultation (Home & Business)</option>
                    <option value="Astro Remedies & Solutions">Astro Remedies & Solutions (Life Challenges)</option>
                    <option value="Comprehensive Multi-Discipline Reading">Comprehensive Multi-Discipline Reading</option>
                  </select>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      type="date"
                      className="form-input"
                      value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Exact Time of Birth *</label>
                    <input
                      type="time"
                      className="form-input"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Place of Birth (City, State, Country) *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ahmedabad, Gujarat, India"
                    value={form.place}
                    onChange={(e) => setForm({ ...form, place: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Concerns, Questions, or Preferred Slot</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Please mention key life topics you want addressed (e.g. marriage timing, career path, financial debt, relationship healing)..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="btn btn-whatsapp btn-lg btn-shimmer">
                    <span>💬</span> <span>Confirm & Book Consultation on WhatsApp</span>
                  </button>
                  <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="tel:+919619885158" className="btn btn-call">📞 Call +91 9619885158</a>
                    <a href="mailto:goldenastro121@gmail.com" className="btn btn-outline">📧 Email Us Directly</a>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
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
