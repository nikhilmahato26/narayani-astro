import React from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Vastu() {
  const { openBookingModal } = useBooking();

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Vastu Consultation</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Sacred Spatial Architecture</div>
          <h1 className="page-hero-title">Vastu Consultation & <span className="gold-gradient-text">Energy Balance Guidance</span></h1>
          <p className="page-hero-desc">
            Harmonize the directional energies of your living and working spaces. Expert online Vastu Shastra consultation for Home, Office, Shop, and Commercial facilities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img src="/assets/images/vastu_compass.jpg" alt="Vastu Purusha Mandala and Brass Compass" />
            </div>

            <div className="about-content-block">
              <div className="gold-badge">Harmonious Living</div>
              <h2 className="section-title">Energize Your Space <br /><span className="gold-gradient-text">Without Structural Demolition</span></h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Vastu Shastra is the ancient Vedic science of spatial architecture, balancing the five cosmic elements (Earth, Water, Fire, Air, and Space) with cardinal magnetic directions. In modern apartments and corporate offices, breaking walls or shifting bathrooms is rarely feasible.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                At Naryani Astro, our online Vastu consultation focuses on <strong>non-destructive remedies</strong>: elemental color coordination, mirror placements, copper/brass energy strips, lighting correction, and sacred geometric alignment. We analyze your floor plan online and provide clear, actionable instructions.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <a
                  href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20an%20Online%20Vastu%20Consultation%20for%20my%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg btn-shimmer"
                >
                  <span>💬</span> <span>Consult on WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => openBookingModal('Vastu Consultation')}
                >
                  <span>📅</span> <span>Book Vastu Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.6)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Areas of Practice</div>
            <h2 className="section-title">Vastu Solutions for <span className="gold-gradient-text">Every Environment</span></h2>
            <p className="section-subtitle">
              Tailored spatial guidance for residences, executive offices, retail stores, and commercial industries.
            </p>
          </div>

          <div className="services-grid">
            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏡</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Home Vastu (Residential)</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Analysis of your main entrance, kitchen (Southeast Agni zone), master bedroom (Southwest stability zone), prayer altar (Northeast Ishanya zone), and living areas to foster health, peace, and family bonding.
              </p>
              <div className="service-bullet-item"><span>✦</span> <span>Main Gate & Entrance Energy Flow</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Sleep Quality & Master Bed Direction</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Children's Study Table Orientation</span></div>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏢</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Office & Corporate Vastu</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Optimize executive desks, conference rooms, accounts cabins, and reception zones to eliminate employee churn, foster decisive management, and accelerate business growth.
              </p>
              <div className="service-bullet-item"><span>✦</span> <span>CEO & Director Desk Placement</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Accounts & Finance Section Vastu</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Client Meeting & Conference Dynamics</span></div>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🛍️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Shop & Showroom Vastu</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Maximize customer footfall and sales conversion in retail outlets. We assess entry thresholds, cash counter placement, merchandise display racks, and owner seating.
              </p>
              <div className="service-bullet-item"><span>✦</span> <span>Cash Drawer / Tijori Direction</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Customer Flow & Entrance Vibrations</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Inventory & Stock Storage Zones</span></div>
            </div>

            <div className="glass-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🏭</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Business & Factory Vastu</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Strategic placement of heavy industrial machinery, boiler/furnace rooms, raw material storage, and finished goods zones to reduce operational downtime and labor friction.
              </p>
              <div className="service-bullet-item"><span>✦</span> <span>Heavy Machinery & Transformer Alignment</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Loading / Unloading Dock Positioning</span></div>
              <div className="service-bullet-item"><span>✦</span> <span>Factory Gate & Administrative Block</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <div className="gold-badge">Convenient Process</div>
          <h2 className="section-title">How Online Vastu Works Without <span className="gold-gradient-text">Site Visits</span></h2>
          <p style={{ maxWidth: '680px', margin: '0 auto 2.5rem auto', color: 'var(--text-muted)' }}>
            You don't need expensive in-person travel. Our online process is fast, accurate, and practiced with clients across the globe.
          </p>

          <div className="process-grid">
            <div className="glass-card process-step-card">
              <div className="process-step-number">1</div>
              <div className="process-step-icon">📐</div>
              <h3 className="process-step-title">Share Floor Plan</h3>
              <p className="process-step-desc">Send your architectural blueprint, hand-drawn layout, or property layout on WhatsApp.</p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">2</div>
              <div className="process-step-icon">🧭</div>
              <h3 className="process-step-title">Verify Directions</h3>
              <p className="process-step-desc">Identify exact North degrees using a smartphone compass from your main doorway.</p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">3</div>
              <div className="process-step-icon">📸</div>
              <h3 className="process-step-title">Send Photos / Videos</h3>
              <p className="process-step-desc">Share a short walk-through video or key photos of main entrance, kitchen, and desks.</p>
            </div>

            <div className="glass-card process-step-card">
              <div className="process-step-number">4</div>
              <div className="process-step-icon">📋</div>
              <h3 className="process-step-title">Receive Vastu Report</h3>
              <p className="process-step-desc">Receive a personalized consultation and detailed remedy guide with non-destructive upaye.</p>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20share%20my%20floor%20plan%20for%20an%20Online%20Vastu%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Share Details on WhatsApp: +91 9619885158</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
