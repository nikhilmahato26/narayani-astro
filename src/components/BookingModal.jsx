import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

export default function BookingModal() {
  const { isModalOpen, modalService, closeBookingModal, showToast } = useBooking();

  const [step, setStep] = useState(1); // 1: Details & Selection, 2: Confirmation & Instructions
  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' | 'whatsapp'
  const [bookingRef, setBookingRef] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'India',
    service: modalService || 'Career',
    prefDate: '',
    prefTime: 'Morning (10 AM - 1 PM IST)',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    message: ''
  });

  useEffect(() => {
    if (modalService) {
      const genericTriggers = [
        'Worldwide Online Consultation',
        'Online Consultation Journey',
        'Consultation with Sanjeev Naryani',
        'About Page Consultation',
        'Testimonials Page Consultation',
        'General Consultation',
        'Quick Mobile Booking',
        'Services Catalog Booking'
      ];
      if (genericTriggers.includes(modalService)) {
        setFormData(prev => ({ ...prev, service: 'Career' }));
      } else {
        setFormData(prev => ({ ...prev, service: modalService }));
      }
    }
  }, [modalService]);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const generatedRef = 'NA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(generatedRef);

    const waText = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Booking Ref:* ${generatedRef}
• *Name:* ${formData.name || 'Not Provided'}
• *Phone:* ${formData.phone || 'Not Provided'}
• *Email:* ${formData.email || 'Not Provided'}
• *Country:* ${formData.country || 'India / Worldwide'}
• *Main Area of Concern:* ${formData.service || 'Career'}
• *Preferred Date:* ${formData.prefDate || 'Earliest Available'}
• *Preferred Slot:* ${formData.prefTime || 'Flexible'}
• *Date of Birth:* ${formData.birthDate || 'Not Provided'}
• *Birth Time:* ${formData.birthTime || 'Not Provided'}
• *Birth Place:* ${formData.birthPlace || 'Not Provided'}
• *Payment Channel:* ${paymentMethod === 'razorpay' ? 'Razorpay Secure Gateway' : 'WhatsApp Direct Pay'}
• *Specific Questions:* ${formData.message || 'General Consultation'}

_Please confirm my consultation session and dispatch instructions._`;

    if (paymentMethod === 'whatsapp') {
      const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waText)}`;
      showToast('Redirecting to WhatsApp to confirm your slot...');
      setTimeout(() => {
        window.open(waUrl, '_blank');
        setStep(2);
      }, 500);
    } else {
      // Razorpay checkout flow
      showToast('Initiating secure Razorpay checkout...');
      setTimeout(() => {
        window.open('https://razorpay.me/@sanjeevnaryani', '_blank');
        setStep(2);
        showToast('Payment initiated! Consultation instructions generated.');
      }, 1000);
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    closeBookingModal();
  };

  return (
    <div
      className={`modal-overlay ${isModalOpen ? 'active' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-container">
        <button
          type="button"
          className="modal-close-btn"
          onClick={handleResetAndClose}
          aria-label="Close Booking Form"
        >
          &times;
        </button>

        {/* 6-Step Consultation Journey Mini-Roadmap */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <div className="gold-badge" style={{ marginBottom: '0.35rem' }}>
            6-Step Consultation Journey
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', fontSize: '0.75rem', color: 'var(--text-gold)' }}>
            <span style={{ fontWeight: 600 }}>1. Select Concern</span> → 
            <span style={{ fontWeight: 600 }}>2. Date/Time</span> → 
            <span style={{ fontWeight: 600 }}>3. Birth Details</span> → 
            <span style={{ fontWeight: 600 }}>4. Razorpay Secure</span> → 
            <span style={{ fontWeight: 600 }}>5. Confirmation</span> → 
            <span style={{ fontWeight: 600 }}>6. Instructions</span>
          </div>
        </div>

        {step === 1 ? (
          <>
            <div className="text-center" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.55rem', color: 'var(--gold-light)', marginBottom: '0.25rem' }}>
                Book Consultation with Sanjeev Naryani
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                42 Years Corporate Leadership Experience + Jyotish Acharya (Bharatiya Vidya Bhavan)
              </p>
            </div>

            <form className="astrology-booking-form" onSubmit={handleSubmit}>
              {/* Step 1: Concern & Service */}
              <div className="form-group">
                <label className="form-label">1. Select Consultation (Your Main Area of Concern) *</label>
                <select
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <optgroup label="Your Main Area of Concern">
                    <option value="Career">Career</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Children">Children</option>
                    <option value="Disputes">Disputes</option>
                    <option value="Marital Harmony">Marital Harmony</option>
                    <option value="Work-Life Balance">Work-Life Balance</option>
                    <option value="Accidents">Accidents</option>
                    <option value="Losses">Losses</option>
                    <option value="Diseases">Diseases</option>
                  </optgroup>
                  <optgroup label="Specialized Astrological Disciplines">
                    <option value="Lal Kitab Consultation">Lal Kitab Consultation &amp; Upaye</option>
                    <option value="Vedic Astrology Consultation">Vedic Astrology Consultation</option>
                    <option value="Vastu Shastra Consultation">Vastu Shastra (Home &amp; Commercial)</option>
                    <option value="Numerology Consultation">Numerology &amp; Name Alignment</option>
                    <option value="Gemology Consultation">Gemology &amp; Gemstone Guidance</option>
                    <option value="Comprehensive Life Reading">Comprehensive Multi-System Life Reading</option>
                  </optgroup>
                </select>
              </div>

              {/* Step 2: Date & Slot */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">2. Preferred Date *</label>
                  <input
                    type="date"
                    name="prefDate"
                    className="form-input"
                    value={formData.prefDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Time Window *</label>
                  <select
                    name="prefTime"
                    className="form-select"
                    value={formData.prefTime}
                    onChange={handleChange}
                  >
                    <option value="Morning (10 AM - 1 PM IST)">Morning (10 AM - 1 PM IST)</option>
                    <option value="Afternoon (2 PM - 5 PM IST)">Afternoon (2 PM - 5 PM IST)</option>
                    <option value="Evening (6 PM - 9 PM IST)">Evening (6 PM - 9 PM IST)</option>
                    <option value="International Friendly (US/UK/Gulf Slot)">International Slot (US/UK/Gulf Time)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Client & Birth Details */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp / Phone *</label>
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
                  <label className="form-label">Country of Residence *</label>
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
                  <label className="form-label">Exact Time of Birth *</label>
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
                <label className="form-label">Place of Birth (City, State, Country) *</label>
                <input
                  type="text"
                  name="birthPlace"
                  className="form-input"
                  placeholder="e.g. Jaipur, Rajasthan, India"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Key Concerns or Questions</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Briefly state what key issues you'd like guidance on..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Step 4: Payment Selection */}
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label className="form-label">4. Select Payment &amp; Confirmation Method *</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                  <button
                    type="button"
                    className={`btn ${paymentMethod === 'razorpay' ? 'btn-primary' : 'btn-outline'}`}
                    onClick={() => setPaymentMethod('razorpay')}
                    style={{ fontSize: '0.85rem', padding: '0.75rem 0.5rem', justifyContent: 'center' }}
                  >
                    <span>💳</span> <span>Razorpay Secure (UPI/Cards)</span>
                  </button>
                  <button
                    type="button"
                    className={`btn ${paymentMethod === 'whatsapp' ? 'btn-whatsapp' : 'btn-outline'}`}
                    onClick={() => setPaymentMethod('whatsapp')}
                    style={{ fontSize: '0.85rem', padding: '0.75rem 0.5rem', justifyContent: 'center' }}
                  >
                    <span>💬</span> <span>WhatsApp Direct Confirmation</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-shimmer"
                style={{ width: '100%', marginTop: '1.25rem' }}
              >
                {paymentMethod === 'razorpay' ? (
                  <><span>🔒</span> <span>Proceed to Razorpay Secure Payment</span></>
                ) : (
                  <><span>💬</span> <span>Confirm &amp; Dispatch via WhatsApp</span></>
                )}
              </button>
            </form>
          </>
        ) : (
          /* Step 5 & 6: Automatic Confirmation & Instructions */
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.75rem' }}>✅</div>
            <div className="gold-badge" style={{ marginBottom: '0.5rem' }}>Step 5: Booking Confirmed</div>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>
              Consultation Slot Reserved
            </h3>
            <p style={{ color: 'var(--wa-green)', fontWeight: 600, fontSize: '0.95rem' }}>
              Reference ID: {bookingRef}
            </p>

            <div className="glass-card" style={{ textAlign: 'left', margin: '1.5rem 0', padding: '1.25rem' }}>
              <h4 style={{ color: 'var(--gold-light)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                Step 6: Consultation Instructions for Client
              </h4>
              <ul style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', paddingLeft: '1.2rem', margin: 0 }}>
                <li><strong>Session Details:</strong> 1-on-1 private consultation with Sanjeev Naryani.</li>
                <li><strong>Mode:</strong> WhatsApp Voice Call / Video Call according to your schedule.</li>
                <li><strong>Birth Verification:</strong> Sanjeev Ji will prepare your Vedic Janma Kundli and Lal Kitab charts prior to the call.</li>
                <li><strong>Preparation:</strong> Please keep a notepad and any specific dates/questions ready.</li>
                <li><strong>Support Contact:</strong> You may message or call us anytime at <strong>+91 9619885158</strong>.</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Sanjeev Ji, I have confirmed my booking (${bookingRef}) for ${formData.service}. Looking forward to the consultation instructions.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>💬</span> <span>Open WhatsApp Chat</span>
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={handleResetAndClose}
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
