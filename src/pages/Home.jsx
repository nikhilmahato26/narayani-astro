import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

export default function Home() {
  const { openBookingModal, showToast } = useBooking();

  // Bio Modal State
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);

  // FAQ Accordion State (0 opens first FAQ by default)
  const [activeFaq, setActiveFaq] = useState(0);

  // Quick Home Form State
  const [homeForm, setHomeForm] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    service: 'Career',
    dob: '',
    time: '',
    place: '',
    message: ''
  });

  const handleHomeFormSubmit = (e) => {
    e.preventDefault();
    const waMessage = 
`*🌟 Online Astrology Consultation Booking — Naryani Astro 🌟*
• *Client Name:* ${homeForm.name || 'Not Provided'}
• *Phone / WhatsApp:* ${homeForm.phone || 'Not Provided'}
• *Email:* ${homeForm.email || 'Not Provided'}
• *Country of Residence:* ${homeForm.country || 'India / Worldwide'}
• *Main Area of Concern:* ${homeForm.service}
• *Date of Birth:* ${homeForm.dob || 'Not Provided'}
• *Exact Birth Time:* ${homeForm.time || 'Not Provided'}
• *Place of Birth:* ${homeForm.place || 'Not Provided'}
• *Core Questions / Concerns:* ${homeForm.message || 'General Guidance'}

_I would like to confirm my consultation slot with Sanjeev Naryani._`;

    const waUrl = `https://wa.me/919619885158?text=${encodeURIComponent(waMessage)}`;
    showToast('Redirecting to WhatsApp with your consultation details...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 500);
  };

  // 7 SMART FAQS AS SPECIFIED BY USER
  const faqs = [
    {
      q: 'What happens during a consultation?',
      a: 'In your dedicated one-on-one session, Sanjeev Naryani conducts an in-depth analysis of your Janma Kundli (birth chart), planetary dashas, and current transits. Combining traditional astrological wisdom with 42 years of executive corporate experience, he evaluates your real-world circumstances, listens to your specific concerns, and provides clear, pragmatic guidance alongside simple Vedic and Lal Kitab remedies.'
    },
    {
      q: 'What information do I need?',
      a: 'To generate an accurate astrological birth chart, you only need three core details: (1) Your Date of Birth, (2) Exact Time of Birth (with AM/PM), and (3) Place of Birth (City, State, Country). For Numerology consultations, your full name and date of birth are required. For Vastu inquiries, a simple layout or directional floor plan is helpful.'
    },
    {
      q: 'How long is the consultation?',
      a: 'Consultations are unhurried and comprehensive, typically lasting 30 to 45 minutes. This provides ample time to analyze your chart thoroughly, address your core questions across career, business, marriage, or family, and clearly explain all recommended remedies and timelines.'
    },
    {
      q: 'Is the consultation online?',
      a: 'Yes, 100% online across India and worldwide. Consultations are conducted seamlessly via WhatsApp voice call, video call, or phone according to your preferred schedule, accommodating time zones across India (IST), the US (EST/PST), UK (GMT), UAE (GST), Canada, and Australia.'
    },
    {
      q: 'What subjects can I discuss?',
      a: 'You have complete freedom to discuss any sphere of life: career growth, corporate transitions, executive decisions, business partnerships and investments, marriage timing, relationship compatibility (Kundli Milan), family disputes, financial stabilization, home/office Vastu, or personal decisions at major life crossroads.'
    },
    {
      q: 'Do you provide remedies?',
      a: 'Yes. Every consultation includes personalized Astro-Remedies that are a perfect blend of Vedic principles, Lal Kitab upaye, and Numerology. All remedies are ethical, practical, and non-ritualistic—focusing on everyday actions, color alignments, dietary adjustments, and positive habits rather than expensive ceremonies or superstition.'
    },
    {
      q: 'Can you help with career/business decisions?',
      a: 'Absolutely. This is a hallmark strength of Sanjeev Naryani. With 42 years of corporate banking and top executive leadership experience—including serving as Managing Director & CEO of a premier Indian company—he combines deep astrological insight with executive acumen. He understands organizational dynamics, executive career transitions, business risks, and strategic timing like few astrologers can.'
    }
  ];

  // 6 AREAS I HELP WITH
  const guidanceAreas = [
    {
      icon: '💼',
      title: 'Career & Executive Decisions',
      desc: 'Clarity on promotions, job switches, corporate dilemmas, industry pivots, and navigating complex organizational dynamics with planetary dasha alignment.',
      tag: 'Sun & Saturn Alignment'
    },
    {
      icon: '📈',
      title: 'Business Strategy & Timing',
      desc: 'Auspicious timing for new ventures, partner compatibility, cash flow recovery, scaling operations, and risk minimization through astrological insight.',
      tag: 'Mercury & 10th/11th House'
    },
    {
      icon: '💍',
      title: 'Marriage & Relationships',
      desc: 'Comprehensive 36-Guna Kundli Milan, marriage timing, resolving relationship friction, and gentle Manglik Dosh pacification for harmony.',
      tag: 'Venus & Jupiter Blessings'
    },
    {
      icon: '🏠',
      title: 'Family & Generational Well-Being',
      desc: 'Resolving family inheritance discord, progeny guidance (Santan Sukh), children’s education streams, and Pitra Dosh karmic healing.',
      tag: '4th & 5th House Harmony'
    },
    {
      icon: '🧭',
      title: 'Vastu Shastra for Home & Office',
      desc: 'Directional balance of the 5 elements in your home, commercial office, or shop to unlock prosperity, peace, and productivity without structural demolition.',
      tag: 'Panchamahabhuta Balance'
    },
    {
      icon: '⚖️',
      title: 'Personal Decisions & Crossroads',
      desc: 'Trusted counsel during periods of life uncertainty, chronic obstacles, legal disputes, name corrections, and reclaiming mental tranquility.',
      tag: 'Holistic Multi-System Upaye'
    }
  ];

  // ASTROLOGICAL SYSTEMS
  const astroSystems = [
    {
      icon: '🕉️',
      title: 'Vedic Astrology',
      badge: 'Bharatiya Vidya Bhavan Certified',
      desc: 'Classical Janma Kundli analysis, planetary dashas, transits (Gochar), and nakshatra yogas for deep foundational life trajectory.'
    },
    {
      icon: '📕',
      title: 'Lal Kitab',
      badge: 'Swift Everyday Upaye',
      desc: 'Karmic debt analysis and swift, practical remedies that work harmoniously with nature without cumbersome rituals.'
    },
    {
      icon: '🔢',
      title: 'Numerology',
      badge: 'Vibrational Harmony',
      desc: 'Life Path number matrix, name spelling correction, lucky dates, and brand name alignment for optimal energy resonance.'
    },
    {
      icon: '🧭',
      title: 'Vastu Shastra',
      badge: 'Non-Destructive Energy',
      desc: 'Balancing the 5 natural elements in residential and commercial premises without demolition or structural changes.'
    },
    {
      icon: '💎',
      title: 'Gemology & BNN',
      badge: 'Precise Recommendation',
      desc: 'Rigorous chart verification for natural gemstones combined with Bhrigu Nandi Nadi precision techniques.'
    }
  ];

  // 6-STEP CONSULTATION JOURNEY
  const journeySteps = [
    {
      step: '1',
      title: 'Select Consultation',
      desc: 'Your main area of Concern: Career, Relationship, Children, Disputes, Marital Harmony, Work-Life Balance, Accidents, Losses, Diseases, etc.'
    },
    {
      step: '2',
      title: 'Choose Date / Time',
      desc: 'Select a convenient time slot suited to your time zone across India, the US, UK, UAE, Canada, or Australia.'
    },
    {
      step: '3',
      title: 'Enter Basic Details',
      desc: 'Provide your Full Name, Date of Birth, exact Time of Birth, Place of Birth, and your primary questions.'
    },
    {
      step: '4',
      title: 'Pay Securely via Razorpay',
      desc: 'Complete your booking seamlessly via Razorpay supporting UPI, Cards, NetBanking, and International payments.'
    },
    {
      step: '5',
      title: 'Automatic Confirmation',
      desc: 'Receive immediate appointment confirmation on screen and an automated booking confirmation via WhatsApp.'
    },
    {
      step: '6',
      title: 'Instructions Sent to Client',
      desc: 'Session instructions, call details/meeting link, and preparation guidelines are delivered straight to your WhatsApp and email.'
    }
  ];

  return (
    <main>
      {/* =========================================================================
          1. HERO SECTION (DRAMATIC + PROMINENT FRONT PAGE CREDENTIALS)
          ========================================================================= */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-media">
          <img src="/assets/images/hero_galaxy_zodiac.jpg" alt="Mystical cosmic galaxy zodiac wheel" className="hero-bg-img" />
          <div className="hero-overlay-gradient"></div>
        </div>

        <div className="container hero-grid">
          <div className="hero-content">
            {/* Front Page Prominent Display Banner */}
            <div className="hero-credentials-banner">
              <div className="credentials-name-title">
                <span>🌟</span>
                <span>Sanjeev Naryani — Jyotish Acharya &amp; Astrology Consultant</span>
              </div>
              <div className="credentials-exp-tag">
                42 Years of Corporate Leadership Experience + Deep Astrological Practice
              </div>
              <div className="credentials-clarity-pills">
                Clarity for Career • Business • Relationships • Family • Vastu
              </div>
            </div>

            <h1 className="hero-title">
              Online Consultations <br />
              <span className="gold-gradient-text">Across India &amp; Worldwide</span>
            </h1>

            <p className="hero-subheading">
              Vedic Astrology • Lal Kitab • Numerology • Vastu • Astro Remedies
            </p>

            <p className="hero-description">
              Get accurate astrological guidance, personalized remedies, and practical spiritual solutions for life’s important challenges from the comfort of your home. Consult live with Sanjeev Naryani, blending ancient cosmic wisdom with top executive clarity.
            </p>

            <div className="hero-cta-group">
              <a
                href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg btn-shimmer"
              >
                <span>💬</span> <span>WhatsApp Consultation</span>
              </a>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-shimmer"
                onClick={() => openBookingModal('Worldwide Online Consultation')}
              >
                <span>🗓️</span> <span>Book Online Consultation</span>
              </button>
              <a href="tel:+919619885158" className="btn btn-call btn-lg">
                <span>📞</span> <span>Call Now</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-indicators">
              <div className="trust-pill">
                <span>🌍</span>
                <span><strong>Online Consultations</strong> — India &amp; Worldwide</span>
              </div>
              <div className="trust-pill">
                <span>🔮</span>
                <span><strong>Personalised</strong> Birth Chart Analysis</span>
              </div>
              <div className="trust-pill">
                <span>🪬</span>
                <span><strong>Practical</strong> Guidance &amp; Remedies</span>
              </div>
              <div className="trust-pill">
                <span>🔒</span>
                <span><strong>Private &amp; Strictly</strong> Confidential</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Zodiac Wheel (Scaled down by 25% for balanced aesthetics) */}
          <div className="hero-visual-card">
            <div className="zodiac-wheel-wrapper">
              <img src="/assets/images/hero_galaxy_zodiac.jpg" alt="Astrological Zodiac Wheel" className="zodiac-wheel-img" />
              <div className="zodiac-center-badge">
                <span className="zodiac-om">ॐ</span>
                <span className="zodiac-badge-text">Naryani Astro</span>
              </div>
            </div>

            <div className="hero-floating-badge badge-top">
              <span>🔴</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Multi-System Expertise</div>
                <div style={{ color: 'var(--gold-light)', fontWeight: 600 }}>Vedic &amp; Lal Kitab</div>
              </div>
            </div>

            <div className="hero-floating-badge badge-bottom">
              <span>✨</span>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Consultation Mode</div>
                <div style={{ color: 'var(--wa-green)', fontWeight: 600 }}>WhatsApp, Voice &amp; Video</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST POINTS (CLEAN / MINIMAL)
          ========================================================================= */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="trust-grid">
            <div className="glass-card trust-card">
              <div className="trust-icon-box">🌍</div>
              <h3 className="trust-card-title">CONSULT FROM ANYWHERE</h3>
              <p className="trust-card-desc">
                <strong>Online consultations across India &amp; worldwide.</strong> Connect with Sanjeev Naryani through WhatsApp, voice or video consultation — from wherever you are.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">🔮</div>
              <h3 className="trust-card-title">PERSONALIZED ASTROLOGICAL GUIDANCE</h3>
              <p className="trust-card-desc">
                Every consultation is based on your birth details, planetary influences and—most importantly—your real-life circumstances and concerns.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">🪬</div>
              <h3 className="trust-card-title">PRACTICAL GUIDANCE &amp; REMEDIES</h3>
              <p className="trust-card-desc">
                Ancient astrological knowledge translated into ethical, safe, and practical everyday remedies (upaye) that are easy to perform without fear or superstition.
              </p>
            </div>

            <div className="glass-card trust-card">
              <div className="trust-icon-box">🔒</div>
              <h3 className="trust-card-title">PRIVATE &amp; STRICTLY CONFIDENTIAL</h3>
              <p className="trust-card-desc">
                Your personal birth data, family discussions, and corporate career decisions are treated with absolute confidentiality and executive discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MEET SANJEEV NARYANI (PROFILE SECTION)
          ========================================================================= */}
      <section className="section" id="meet-sanjeev" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className="meet-sanjeev-card">
            <div className="about-grid" style={{ alignItems: 'center' }}>
              {/* Professional Photograph */}
              <div className="profile-photo-container">
                <img
                  src="/assets/images/sanjeev_naryani_portrait.jpg"
                  alt="Sanjeev Naryani - Jyotish Acharya & Astrology Consultant"
                  className="profile-photo-img"
                />
                <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                  <span className="discipline-pill-badge" style={{ fontSize: '0.85rem' }}>
                    🌟 42 Years Corporate Leadership
                  </span>
                </div>
              </div>

              {/* Profile Text & Credentials */}
              <div className="about-content-block">
                <div className="gold-badge" style={{ marginBottom: '0.5rem' }}>Meet Sanjeev Naryani</div>
                <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)', color: 'var(--gold-light)', marginBottom: '0.35rem', lineHeight: 1.2 }}>
                  SANJEEV NARYANI
                </h2>
                <h4 style={{ color: 'var(--text-gold)', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                  Jyotish Acharya | Astrology Consultant
                </h4>
                <div style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem' }}>
                  42 Years of Banking &amp; Top Leadership Experience
                </div>

                <div className="profile-quote-box">
                  “My approach combines traditional astrological wisdom with practical understanding of people, careers, businesses and relationships.”
                </div>

                <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Sanjeev Naryani brings together traditional astrological knowledge and decades of experience in leadership, people and business decision-making. His approach is focused on understanding the individual, identifying the underlying astrological influences and providing practical guidance and remedies relevant to real-life circumstances.
                </p>

                <div className="leadership-callout-box">
                  <div className="leadership-callout-title">ASTROLOGY + REAL-WORLD LEADERSHIP EXPERIENCE</div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                    With 42 years of experience in the banking and leadership environment, including senior executive leadership, Sanjeev Naryani brings a practical understanding of people, organisations, careers and difficult decisions to his astrological consultations.
                  </p>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--gold-soft)', fontWeight: 600, marginTop: '1rem' }}>
                  Areas of Guidance: Career • Business • Marriage &amp; Relationships • Family • Vastu • Personal Decisions
                </div>

                <div className="disciplines-pills-row">
                  <span className="discipline-pill-badge">Vedic Astrology</span>
                  <span className="discipline-pill-badge">Lal Kitab</span>
                  <span className="discipline-pill-badge">Numerology</span>
                  <span className="discipline-pill-badge">Vastu</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button
                    type="button"
                    className="btn btn-primary btn-shimmer"
                    onClick={() => setIsBioModalOpen(true)}
                  >
                    <span>📜</span> <span>Know More About Sanjeev Naryani</span>
                  </button>
                  <a
                    href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <span>💬</span> <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY NARYANI ASTRO? (PILLARS OF DISTINCTION)
          ========================================================================= */}
      <section className="section" id="why-choose" style={{ background: 'rgba(6, 13, 33, 0.45)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Our Pillars of Distinction</div>
            <h2 className="section-title">Why Choose <span className="gold-gradient-text">Naryani Astro</span></h2>
            <p className="section-subtitle">
              A rare synthesis of executive corporate wisdom, multi-system astrological expertise, and grounded, ethical remedies.
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="glass-card why-choose-card">
              <div className="why-icon">👔</div>
              <h3 className="why-card-title">Corporate Executive Insight</h3>
              <p className="why-card-desc">
                42 years of banking leadership and former MD &amp; CEO background brings unparalleled understanding of workplace dynamics, organizational politics, and business risks.
              </p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">🎓</div>
              <h3 className="why-card-title">Certified Jyotish Acharya</h3>
              <p className="why-card-desc">
                Formal 2-year Jyotish Acharya credential from Bharatiya Vidya Bhavan, ensuring authentic classical Vedic methodology and rigorous astrological calculation.
              </p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">📚</div>
              <h3 className="why-card-title">Integrated Multi-System Analysis</h3>
              <p className="why-card-desc">
                Cross-referencing Vedic Astrology, Lal Kitab, Numerology, Vastu Shastra, and BNN to ensure holistic accuracy across all dimensions of your life.
              </p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">🪬</div>
              <h3 className="why-card-title">Practical, Ethical Upaye</h3>
              <p className="why-card-desc">
                Zero fear-mongering and no exorbitant rituals. Simple everyday actions, color alignments, charity, and water rituals that easily fit modern routines.
              </p>
            </div>

            <div className="glass-card why-choose-card">
              <div className="why-icon">🌍</div>
              <h3 className="why-card-title">Worldwide Online Convenience</h3>
              <p className="why-card-desc">
                Tailored one-on-one sessions via WhatsApp voice/video call across India, North America, UK, Middle East, Europe, and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. AREAS I HELP WITH (AREAS OF GUIDANCE — 6 CARDS)
          ========================================================================= */}
      <section className="section" id="areas-help">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Areas of Guidance</div>
            <h2 className="section-title">Areas I <span className="gold-gradient-text">Help With</span></h2>
            <p className="section-subtitle">
              Clear astrological counsel tailored to your life stage and critical decision points.
            </p>
          </div>

          <div className="areas-help-grid">
            {guidanceAreas.map((area, idx) => (
              <div key={idx} className="glass-card area-card">
                <div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '0.85rem' }}>{area.icon}</div>
                  <h3 style={{ fontSize: '1.28rem', color: 'var(--gold-light)', marginBottom: '0.65rem' }}>{area.title}</h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                    {area.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(212,175,55,0.15)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-soft)', fontWeight: 600 }}>{area.tag}</span>
                  <a
                    href={`https://wa.me/919619885158?text=${encodeURIComponent(`Hello Sanjeev Ji, I would like astrological guidance regarding: ${area.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    Consult
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. ASTROLOGICAL SYSTEMS (ELEGANT HORIZONTAL SECTION)
          ========================================================================= */}
      <section className="section" id="astrological-systems" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(11,31,77,0.45) 0%, #050a17 80%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Approach &amp; Methodology</div>
            <h2 className="section-title">Integrated <span className="gold-gradient-text">Astrological Systems</span></h2>
            <p className="section-subtitle">
              Sanjeev Naryani utilizes a multidisciplinary approach, blending time-tested disciplines for balanced and comprehensive answers.
            </p>
          </div>

          <div className="systems-horizontal-grid">
            {astroSystems.map((sys, idx) => (
              <div key={idx} className="system-card">
                <span className="system-icon">{sys.icon}</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '0.35rem' }}>{sys.title}</h3>
                <span style={{ display: 'inline-block', fontSize: '0.76rem', color: 'var(--text-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {sys.badge}
                </span>
                <p style={{ fontSize: '0.86rem', lineHeight: 1.55, color: 'var(--text-muted)', margin: 0 }}>
                  {sys.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline">
              <span>🔮</span> <span>Explore All Services &amp; Methodologies →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CONSULTATION PROCESS (THE 6-STEP CONSULTATION JOURNEY)
          ========================================================================= */}
      <section className="section" id="consultation-process">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Simple &amp; Transparent</div>
            <h2 className="section-title">Your 6-Step <span className="gold-gradient-text">Consultation Journey</span></h2>
            <p className="section-subtitle">
              Experience seamless, secure online astrological guidance in six clear steps.
            </p>
          </div>

          <div className="journey-steps-grid">
            {journeySteps.map((stepItem, idx) => (
              <div key={idx} className="glass-card journey-step-card">
                <div className="journey-step-number-badge">{stepItem.step}</div>
                <h3 style={{ fontSize: '1.18rem', color: 'var(--gold-light)', marginBottom: '0.5rem' }}>
                  {stepItem.title}
                </h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg btn-shimmer"
              onClick={() => openBookingModal('Online Consultation Journey')}
            >
              <span>🗓️</span> <span>Start Your Consultation Journey Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. TESTIMONIALS (CLIENT-FOCUSED + PROVISION TO ADD MORE LATER)
          ========================================================================= */}
      <section className="section" id="testimonials" style={{ background: 'rgba(6, 13, 33, 0.5)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Client Trust &amp; Reviews</div>
            <h2 className="section-title">Client Experiences from <span className="gold-gradient-text">India &amp; Worldwide</span></h2>
            <p className="section-subtitle">
              Real feedback from individuals and families who consulted Sanjeev Naryani for career, business, and personal remedies.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Sanjeev Ji’s corporate leadership background makes all the difference. He understood my senior executive career crossroads immediately. The Lal Kitab remedies were practical and completely changed my trajectory within three months."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">R.K.</div>
                <div className="client-info-block">
                  <h4>R. K.</h4>
                  <p>Senior VP • Mumbai, India (Career Consultation)</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "Consulting online from London via WhatsApp was clear and unhurried. The birth chart reading on marriage timing and relationship dynamics was spot on, without any fear-mongering or costly rituals."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">S.M.</div>
                <div className="client-info-block">
                  <h4>S. M.</h4>
                  <p>Online Client • London, UK (Marriage &amp; Kundli)</p>
                </div>
              </div>
            </div>

            <div className="glass-card testimonial-card">
              <div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">
                  "The business numerology and office Vastu recommendations brought immediate harmony to my partnership in Dubai. His pragmatic advice helped us avoid a major contractual conflict."
                </p>
              </div>
              <div className="testimonial-client">
                <div className="client-avatar">A.P.</div>
                <div className="client-info-block">
                  <h4>A. P.</h4>
                  <p>Business Owner • Dubai, UAE (Business &amp; Vastu)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dedicated Testimonial Provision Slots (Ready for adding customer reviews later) */}
          <div className="testimonial-provision-box">
            <div className="gold-badge" style={{ marginBottom: '0.4rem' }}>Testimonials Space</div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--gold-light)', margin: '0.4rem 0' }}>
              Testimonials
            </h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '650px', margin: '0 auto' }}>
              Additional client testimonials are being curated from recent consultation sessions and will be featured here:
            </div>

            <div className="testimonial-provision-slots">
              <div className="provision-slot-card">
                <span style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>💬</span>
                <strong style={{ color: 'var(--gold-light)' }}>- Client Feedback Slot 1 -</strong>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem' }}>Verified online consultation review</p>
              </div>
              <div className="provision-slot-card">
                <span style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>💬</span>
                <strong style={{ color: 'var(--gold-light)' }}>- Client Feedback Slot 2 -</strong>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem' }}>Verified online consultation review</p>
              </div>
              <div className="provision-slot-card">
                <span style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>💬</span>
                <strong style={{ color: 'var(--gold-light)' }}>- Client Feedback Slot 3 -</strong>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem' }}>Verified online consultation review</p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20submit%20my%20consultation%20feedback."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <span>✍️</span> <span>Share Your Consultation Feedback</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. YOUTUBE & COMMUNITY
          ========================================================================= */}
      <section className="section" id="community" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div className="gold-badge">Spiritual Wisdom &amp; Community</div>
            <h2 className="section-title">Connect with <span className="gold-gradient-text">Naryani Astro</span></h2>
            <p className="section-subtitle">
              Subscribe to our YouTube channel and follow our social handles for regular insights on astrology, planetary shifts, and practical upaye.
            </p>
          </div>

          <div className="social-grid">
            <a href="https://youtube.com/@naryaniastro" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
              <div className="social-icon-circle youtube">▶️</div>
              <div className="social-info-block">
                <h3>YouTube Channel</h3>
                <p>@naryaniastro</p>
                <span className="btn btn-outline btn-sm">Subscribe on YouTube →</span>
              </div>
            </a>

            <a href="https://instagram.com/naryani_astro" target="_blank" rel="noopener noreferrer" className="glass-card social-card">
              <div className="social-icon-circle instagram">📸</div>
              <div className="social-info-block">
                <h3>Instagram Updates</h3>
                <p>@naryani_astro</p>
                <span className="btn btn-outline btn-sm">Follow on Instagram →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. FREQUENTLY ASKED QUESTIONS (SMART REPLIES TO 7 QUESTIONS)
          ========================================================================= */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Frequently Asked Questions</div>
            <h2 className="section-title">Common Questions About <span className="gold-gradient-text">Our Consultations</span></h2>
            <p className="section-subtitle">
              Clear answers regarding our consultation process, birth details, online sessions, and remedies.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => {
              const isActive = activeFaq === index;
              return (
                <div key={index} className={`faq-item ${isActive ? 'active' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setActiveFaq(isActive ? -1 : index)}
                    aria-expanded={isActive}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-indicator">{isActive ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. FINAL BOOKING CTA & CONTACT
          ========================================================================= */}
      <section className="section" id="contact" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(11,31,77,0.65) 0%, #050a17 80%)' }}>
        <div className="container">
          <div className="section-header">
            <div className="gold-badge">Book Online Consultation</div>
            <h2 className="section-title">Schedule Your <span className="gold-gradient-text">Consultation with Sanjeev Naryani</span></h2>
            <p className="section-subtitle">
              Fill in your birth details below to submit your consultation request securely via WhatsApp, Razorpay, or phone.
            </p>
          </div>

          <div className="booking-section-grid">
            {/* Contact Information Panel */}
            <div className="contact-info-panel">
              <div className="glass-card contact-info-card">
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.4rem', color: 'var(--gold-light)' }}>
                  Naryani Astro
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-gold)', marginBottom: '1.5rem' }}>
                  Ancient Wisdom • Modern Solutions • Worldwide Online Astrology
                </p>

                <div className="contact-channels-list">
                  <a href="tel:+919619885158" className="contact-channel-item">
                    <div className="contact-channel-icon">📞</div>
                    <div className="channel-detail-text">
                      <h5>Mobile / Direct Call</h5>
                      <p>+91 9619885158</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20book%20an%20online%20astrology%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-item"
                  >
                    <div className="contact-channel-icon" style={{ background: 'rgba(37,211,102,0.2)', color: 'var(--wa-green)' }}>💬</div>
                    <div className="channel-detail-text">
                      <h5>WhatsApp Booking</h5>
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
                      <p>Worldwide Online (WhatsApp, Voice, Video)</p>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', margin: 0 }}>
                    🕒 Flexible appointments available across IST, US (EST/PST), UK (GMT), UAE (GST), and Australian time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Booking Form */}
            <div className="glass-card booking-form-box">
              <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', color: 'var(--gold-light)' }}>
                Enter Your Consultation Details
              </h3>

              <form className="astrology-booking-form" onSubmit={handleHomeFormSubmit}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Priya Sharma"
                      value={homeForm.name}
                      onChange={(e) => setHomeForm({ ...homeForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="e.g. +91 98765 43210"
                      value={homeForm.phone}
                      onChange={(e) => setHomeForm({ ...homeForm, phone: e.target.value })}
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
                      placeholder="e.g. priya@example.com"
                      value={homeForm.email}
                      onChange={(e) => setHomeForm({ ...homeForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country of Residence *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. India / USA / UAE"
                      value={homeForm.country}
                      onChange={(e) => setHomeForm({ ...homeForm, country: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Main Area of Concern *</label>
                  <select
                    className="form-select"
                    value={homeForm.service}
                    onChange={(e) => setHomeForm({ ...homeForm, service: e.target.value })}
                  >
                    <option value="Career">Career</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Children">Children</option>
                    <option value="Disputes">Disputes</option>
                    <option value="Marital Harmony">Marital Harmony</option>
                    <option value="Work-Life Balance">Work-Life Balance</option>
                    <option value="Accidents">Accidents</option>
                    <option value="Losses">Losses</option>
                    <option value="Diseases">Diseases</option>
                    <option value="Comprehensive Multi-System Reading">Comprehensive Life Reading (All Concerns)</option>
                  </select>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      type="date"
                      className="form-input"
                      value={homeForm.dob}
                      onChange={(e) => setHomeForm({ ...homeForm, dob: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Exact Time of Birth *</label>
                    <input
                      type="time"
                      className="form-input"
                      value={homeForm.time}
                      onChange={(e) => setHomeForm({ ...homeForm, time: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Place of Birth (City, State, Country) *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Mumbai, Maharashtra, India"
                    value={homeForm.place}
                    onChange={(e) => setHomeForm({ ...homeForm, place: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Key Concerns or Questions</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Briefly state your primary concerns or questions (e.g., career switch timing, business partnership, marriage, family peace)..."
                    value={homeForm.message}
                    onChange={(e) => setHomeForm({ ...homeForm, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-actions-row">
                  <button type="submit" className="btn btn-whatsapp btn-lg btn-shimmer">
                    <span>💬</span> <span>Book via WhatsApp Consultation</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => openBookingModal(homeForm.service)}
                  >
                    <span>💳</span> <span>Pay &amp; Book via Razorpay</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. DETAILED BIOGRAPHY MODAL (KNOW MORE ABOUT SANJEEV NARYANI)
          ========================================================================= */}
      {isBioModalOpen && (
        <div className="bio-modal-overlay active" onClick={() => setIsBioModalOpen(false)}>
          <div className="bio-modal-container" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setIsBioModalOpen(false)}
              aria-label="Close Bio Modal"
            >
              &times;
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <img
                src="/assets/images/sanjeev_naryani_portrait.jpg"
                alt="Sanjeev Naryani"
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  border: '2px solid var(--gold-primary)',
                  objectFit: 'cover'
                }}
              />
              <div>
                <div className="gold-badge" style={{ marginBottom: '0.25rem' }}>
                  Distinguished Astrologer &amp; Corporate Leader
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--gold-light)', margin: 0 }}>
                  About Sanjeev Naryani
                </h3>
                <p style={{ color: 'var(--text-gold)', fontSize: '0.88rem', margin: '2px 0 0 0' }}>
                  Jyotish Acharya (Bharatiya Vidya Bhavan) | 42 Years Corporate Leadership
                </p>
              </div>
            </div>

            <div style={{ fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1.1rem' }}>
                Sanjeev Naryani is a distinguished professional who rose steadily through the ranks to reach the highest levels of corporate leadership, serving as Managing Director &amp; CEO in a company counted among the best in India. Alongside his corporate journey, he nurtured a deep passion for astrology from childhood, which eventually led him to formally pursue a two-year Jyotish Acharya programme in Vedic Astrology from Bharatiya Vidya Bhavan.
              </p>
              <p style={{ marginBottom: '1.1rem' }}>
                His learning and practice continued thereafter across Vedic Astrology, Lal Kitab, Numerology, BNN and Vastu, allowing him to develop a distinctive, practical and holistic approach to astrological guidance. Over the years, his understanding of astrological principles and remedies has helped hundreds of families and individuals navigate periods of relationship distress, personal challenges and life uncertainty, bringing greater peace, harmony and prosperity into their lives.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                His Astro-Remedies are a perfect blend of Vedic, Lal Kitab and Numerology. He has also guided clients in India and across the world in making informed choices regarding names and numerological alignment, with an approach that combines traditional wisdom with practical understanding of modern life.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem', borderTop: '1px solid var(--gold-border)', paddingTop: '1.25rem' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setIsBioModalOpen(false);
                  openBookingModal('Consultation with Sanjeev Naryani');
                }}
              >
                <span>🗓️</span> <span>Book Consultation</span>
              </button>
              <a
                href="https://wa.me/919619885158?text=Hello%20Sanjeev%20Ji%2C%20I%20would%20like%20to%20schedule%20an%20astrological%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>💬</span> <span>Inquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
