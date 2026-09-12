import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <span>💬</span>
      <span className="floating-wa-tooltip">Online Now • Chat on WhatsApp</span>
    </a>
  );
}
