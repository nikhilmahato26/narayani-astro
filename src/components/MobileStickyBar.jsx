import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function MobileStickyBar() {
  const { openBookingModal } = useBooking();

  return (
    <nav className="mobile-sticky-cta-bar" aria-label="Mobile Quick Actions">
      <a href="tel:+919619885158" className="btn btn-call mobile-cta-action-btn">
        <span>📞</span> <span>Call</span>
      </a>
      <a
        href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp mobile-cta-action-btn"
      >
        <span>💬</span> <span>WhatsApp</span>
      </a>
      <button
        type="button"
        className="btn btn-primary mobile-cta-action-btn"
        onClick={() => openBookingModal('Quick Mobile Booking')}
      >
        <span>📅</span> <span>Book Now</span>
      </button>
    </nav>
  );
}
