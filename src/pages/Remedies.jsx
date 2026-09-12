import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Remedies() {
  const { openBookingModal } = useBooking();
  const [activeFilter, setActiveFilter] = useState('all');

  const remediesData = [
    { id: 'relationships', category: 'relationships', icon: '❤️', title: 'Relationships & Love', desc: 'Heal misunderstandings, emotional distance, and compatibility friction by balancing Venus (Shukra), Moon (Chandra), and 7th house planetary transits.', tag: 'Venus & Moon Remedies' },
    { id: 'career', category: 'career', icon: '💼', title: 'Career Stagnation & Job Success', desc: 'Overcome stagnation, lack of recognition, job insecurity, or uncertain career switches through targeted Sun, Saturn, and 10th house remedies.', tag: '10th House & Surya Upaye' },
    { id: 'marriage', category: 'marriage', icon: '💍', title: 'Marriage Delays & Kundli Milan', desc: 'Remedies for delays in finding a suitable spouse, Manglik Dosh pacification, post-marital friction, and comprehensive 36-Guna Kundli matching.', tag: 'Jupiter & Manglik Shanti' },
    { id: 'children', category: 'children', icon: '👶', title: 'Progeny (Santan) & Education', desc: 'Astrological guidance for couples anticipating progeny (Santan Sukh), student concentration enhancements, and career stream selection using the 5th house and Jupiter.', tag: '5th House & Guru Upaye' },
    { id: 'disputes', category: 'disputes', icon: '⚖️', title: 'Legal Disputes & Conflicts', desc: 'Protective Lal Kitab and Mars remedies to alleviate chronic litigation, court battles, property conflicts, and unwanted rivalries.', tag: '6th House & Mangal Upaye' },
    { id: 'financial', category: 'financial', icon: '💰', title: 'Financial Crises & Debt Relief', desc: 'Resolve persistent financial drain, unrecovered business funds, and debt traps by strengthening the 2nd and 11th houses with auspicious upaye.', tag: 'Dhan Bhava & Kuber Upaye' },
    { id: 'family', category: 'family', icon: '🏠', title: 'Home & Family Harmony', desc: 'Dispel persistent discord, emotional tension, and negative domestic aura by combining Lal Kitab domestic remedies with subtle Vastu adjustments.', tag: '4th House & Vastu Balancing' },
    { id: 'doshas', category: 'doshas', icon: '🪐', title: 'Planetary Doshas (Pitra, Kaal Sarp)', desc: 'Dedicated, compassionate remedies for Kaal Sarp Dosh, Pitra Dosh, Sade Sati, Shani Dhaiya, and affliction caused by Rahu-Ketu axis.', tag: 'Navagraha Shanti Protocol' }
  ];

  const filtered = activeFilter === 'all'
    ? remediesData
    : remediesData.filter(r => r.category === activeFilter);

  return (
    <main>
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <div className="container breadcrumb-list">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Astro Remedies & Solutions</span>
        </div>
      </nav>

      <section className="page-hero">
        <div className="container">
          <div className="gold-badge">Sacred Planetary Upaye</div>
          <h1 className="page-hero-title">Astro Remedies & <span className="gold-gradient-text">Practical Solutions</span></h1>
          <p className="page-hero-desc">
            Balancing celestial energies to resolve worldly blockages. Explore customized planetary remedies, spiritual solutions, and personalized upaye for all major life concerns.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid" style={{ marginBottom: '3.5rem' }}>
            <div className="glass-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🪐</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>Planetary Remedies</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Targeted guidance for neutralizing unfavorable transits (Gochar) and balancing planetary houses. Every planet responds to specific elemental vibrations, charitable acts, and colors.
              </p>
            </div>

            <div className="glass-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📿</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>Personalized Upaye</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Remedies curated solely after individual consultation. We examine your exact planetary degrees, ascendant traits, and running dashas to recommend precise, risk-free actions.
              </p>
            </div>

            <div className="glass-card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🕊️</div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>Spiritual Solutions</h3>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                Holistic inner alignment through authentic Vedic mantras, positive habit cultivation, and lifestyle alignments designed to bring mental tranquility and spiritual balance.
              </p>
            </div>
          </div>

          <div className="section-header">
            <div className="gold-badge">Explore by Life Domain</div>
            <h2 className="section-title">Remedies for Specific <span className="gold-gradient-text">Life Issues</span></h2>
            <p className="section-subtitle">
              Click any category below to filter our practical astrological remedies for personal and professional obstacles.
            </p>
          </div>

          <div className="remedies-filter-tabs">
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Issues (8)
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'relationships' ? 'active' : ''}`}
              onClick={() => setActiveFilter('relationships')}
            >
              ❤️ Relationships
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'career' ? 'active' : ''}`}
              onClick={() => setActiveFilter('career')}
            >
              💼 Career
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'marriage' ? 'active' : ''}`}
              onClick={() => setActiveFilter('marriage')}
            >
              💍 Marriage
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'children' ? 'active' : ''}`}
              onClick={() => setActiveFilter('children')}
            >
              👶 Children
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'disputes' ? 'active' : ''}`}
              onClick={() => setActiveFilter('disputes')}
            >
              ⚖️ Disputes
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'financial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('financial')}
            >
              💰 Financial
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'family' ? 'active' : ''}`}
              onClick={() => setActiveFilter('family')}
            >
              🏠 Home & Family
            </button>
            <button
              type="button"
              className={`filter-tab-btn ${activeFilter === 'doshas' ? 'active' : ''}`}
              onClick={() => setActiveFilter('doshas')}
            >
              🪐 Planetary Doshas
            </button>
          </div>

          <div className="remedies-grid">
            {filtered.map((item) => (
              <div key={item.id} className="glass-card remedy-issue-card">
                <div className="remedy-issue-icon">{item.icon}</div>
                <h3 className="remedy-issue-title">{item.title}</h3>
                <p className="remedy-issue-desc">{item.desc}</p>
                <div className="remedy-card-footer">
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-soft)' }}>{item.tag}</span>
                  <a
                    href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Naryani Astro, I would like to consult regarding remedies for ${item.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    WhatsApp Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(6,13,33,0.5)' }}>
        <div className="container text-center">
          <div className="gold-badge">Personalized Chart Reading Required</div>
          <h2 className="section-title">Get Remedies Customized to <span className="gold-gradient-text">Your Exact Chart</span></h2>
          <p style={{ maxWidth: '680px', margin: '0 auto 2rem auto', color: 'var(--text-muted)' }}>
            Every individual horoscope is unique. Avoid generic remedies that may cause conflicting energy. Book your personalized consultation with Naryani Astro today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919619885158?text=Hello%20Naryani%20Astro%2C%20I%20would%20like%20to%20book%20an%20Astro%20Remedies%20Consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg btn-shimmer"
            >
              <span>💬</span> <span>Consult on WhatsApp: +91 9619885158</span>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => openBookingModal('Astro Remedies & Solutions')}
            >
              <span>📅</span> <span>Fill Booking Form</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
