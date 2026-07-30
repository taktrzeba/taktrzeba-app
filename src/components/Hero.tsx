 'use client';

import Image from 'next/image';
import { GA_EVENT_NAMES, trackEvent } from '@/lib/analytics';
import { coursesSyllabus } from '@/data/coursesSyllabus';

export default function Hero() {
  const courseLinks = [
    { id: 'kurs-mechanik-rowerowy', name: 'Mechanik Rowerowy' },
    { id: 'kurs-stolarka', name: 'Stolarka' },
    { id: 'kurs-hydraulika', name: 'Hydraulika' },
    { id: 'kurs-elektryka', name: 'Elektryka' }
  ];

  return (
    <section className="hero-section">
      <div className="hero-media">
        <Image
          src="https://images.prismic.io/taktrzeba/agxM_qYofJOwHXOF_taktrzeba-10.png?auto=format,compress"
          alt="Młodzież podczas praktycznych warsztatów TakTrzeba"
          width={1920}
          height={1080}
          className="hero-main-image"
          priority
        />
      </div>
      <div className="hero-overlay" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-content">
          {/* Badge with shine effect */}
          <div className="hero-badge">
            <span className="badge-shine"></span>
            <span className="badge-icon">🌞</span>
            <span className="badge-text">WAKACJE 2026 • LIPIEC & SIERPIEŃ</span>
          </div>

          <p className="hero-kicker">Praktyczne warsztaty dla młodzieży 14-16 lat</p>

          {/* Main heading with enhanced typography */}
          <h1 className="hero-title">
            <span className="hero-title-line">Mniej ekranu.</span>
            <span className="hero-title-line title-highlight">Więcej sprawczości i satysfakcji.</span>
          </h1>
          <p className="hero-brand-subtitle">Wakacyjne warsztaty rzemieślnicze • taktrzeba.pl</p>

          {/* Tagline with glassmorphism */}
          <div className="hero-tagline-box">
            <p className="hero-tagline">Tydzień bez ekranów. Umiejętności na całe życie.</p>
            <p className="hero-tagline-sub">
              Stolarka, hydraulika, elektryka i mechanika rowerowa prowadzona przez praktyków.
              Małe grupy, prawdziwe narzędzia i realne umiejętności.
            </p>
          </div>

          <div className="hero-proof-strip">
            <div className="hero-proof-item">4 warsztaty • 1 tydzień</div>
            <div className="hero-proof-item">Małe grupy do 12 osób</div>
            <div className="hero-proof-item">Stała opieka i ubezpieczenie</div>
          </div>

          {/* Stats cards */}
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">12</div>
              <div className="stat-label">Uczestników max</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Warsztaty praktyczne</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">35</div>
              <div className="stat-label">Godzin zajęć</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">Telefonów podczas zajęć</div>
            </div>
          </div>

          {/* Feature highlights with icons */}
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">📵</span>
              <span>Bez telefonów</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔧</span>
              <span>Prawdziwe narzędzia</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🎯</span>
              <span>Widoczny efekt</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span>Małe grupy</span>
            </div>
          </div>

          {/* CTA buttons with enhanced styling */}
          <div className="hero-cta">
            <a href="#zapisy" className="btn btn-primary btn-hero" onClick={() => trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'hero_primary', destination: 'enrollment' })}>
              <span className="btn-text">Zapisz dziecko</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#program" className="btn btn-secondary btn-hero" onClick={() => trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'hero_secondary', destination: 'program' })}>
              <span className="btn-text">Zobacz program</span>
            </a>
            <a
              href="https://jellyhealth.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tertiary btn-hero"
              onClick={() => trackEvent(GA_EVENT_NAMES.OUTBOUND_CLICK, { location: 'hero', destination: 'jellyhealth_org', link_type: 'external' })}
            >
              <span className="btn-text">Odwiedź JellyHealth</span>
              <span className="btn-icon">↗</span>
            </a>
          </div>

          {/* Szybkie linki do kursów */}
          <div className="hero-course-quick-links">
            <p className="quick-links-label">Przejdź do kursu:</p>
            <div className="quick-links-grid">
              {coursesSyllabus.map((course, index) => (
                <a 
                  key={index}
                  href={`#${courseLinks[index].id}`}
                  className="quick-link-item"
                >
                  <span className="quick-link-icon">{course.icon}</span>
                  <span className="quick-link-name">{course.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Małe grupy</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Ubezpieczenie uczestników</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Doświadczeni prowadzący</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Opieka przez cały dzień</span>
            </div>
          </div>

          {/* Urgency banner */}
          <div className="hero-urgency-banner">
            <span className="urgency-icon">⚡</span>
            <span className="urgency-text">
              <strong>Limitowana liczba miejsc!</strong> Tylko 12 uczestników w grupie – rezerwuj już teraz
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
