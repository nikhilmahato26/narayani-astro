import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

export default function BookingModal() {
  const { isModalOpen, modalService, closeBookingModal, showToast } = useBooking();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    service: modalService || 'Lal Kitab Consultation',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    message: ''
  });

  useEffect(() => {
    if (modalService) {
      setFormData(prev => ({ ...prev, service: modalService }));
    }
  }, [modalService]);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const waText = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Name:* ${formData.name || 'Not Provided'}
• *Phone:* ${formData.phone || 'Not Provided'}
• *Email:* ${formData.email || 'Not Provided'}
• *Country:* ${formData.country || 'India / Worldwide'}
• *Consultation Type:* ${formData.service || 'Online Astrology Consultation'}
• *Date of Birth:* ${formData.birthDate || 'Not Provided'}
• *Birth Time:* ${formData.birthTime || 'Not Provided'}
• *Birth Place:* ${formData.birthPlace || 'Not Provided'}
• *Specific Questions / Concerns:* ${formData.message || 'General Consultation'}

_I would like to confirm my worldwide online consultation slot._`;

    const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waText)}`;

    showToast('Redirecting to WhatsApp with your consultation details...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
      closeBookingModal();
    }, 600);
  };

  return (
    <div
      className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBookingModal();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-container">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeBookingModal}
          aria-label="Close Booking Form"
        >
          &times;
        </button>

        <div className="text-center" style={{ marginBottom: '1.75rem' }}>
          <div className="gold-badge">Instant Worldwide Booking</div>
          <h3 style={{ fontSize: '1.65rem', marginBottom: '0.4rem' }}>Book Online Astrology Consultation</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Fill in your birth details to generate your consultation booking on WhatsApp.
          </p>
        </div>

        <form className="astrology-booking-form" onSubmit={handleSubmit}>
          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / WhatsApp *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Country *</label>
              <input
                type="text"
                name="country"
                className="form-input"
                placeholder="India / USA / UK / UAE"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Consultation Service *</label>
            <select
              name="service"
              className="form-select"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Lal Kitab Consultation">Lal Kitab Consultation & Upaye</option>
              <option value="Vedic Astrology Consultation">Vedic Astrology Consultation</option>
              <option value="Numerology Consultation">Numerology Consultation</option>
              <option value="Gemology Consultation">Gemology Consultation</option>
              <option value="Vastu Consultation">Vastu Consultation</option>
              <option value="Astro Remedies & Solutions">Astro Remedies & Solutions</option>
              <option value="Comprehensive Life Reading">Comprehensive Multi-Discipline Reading</option>
            </select>
          </div>

          <div className="form-grid-2">
            <div className="form-group">
              <label className="form-label">Date of Birth *</label>
              <input
                type="date"
                name="birthDate"
                className="form-input"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Time of Birth *</label>
              <input
                type="time"
                name="birthTime"
                className="form-input"
                value={formData.birthTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Place of Birth *</label>
            <input
              type="text"
              name="birthPlace"
              className="form-input"
              placeholder="City, State, Country"
              value={formData.birthPlace}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Main Concerns / Questions</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Briefly state what you would like to ask..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-whatsapp btn-lg btn-shimmer" style={{ width: '100%', marginTop: '0.75rem' }}>
            <span>💬</span> <span>Confirm & Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
