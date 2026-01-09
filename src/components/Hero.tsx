import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Animated background gradient */}
      <div className="hero-gradient-bg"></div>
      
      {/* Background images grid */}
      <div className="hero-images-background">
        <div className="hero-image-item fade-in delay-1">
          <Image 
            src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=400&fit=crop&q=80" 
            alt="Młodzież przy warsztacie" 
            width={500} 
            height={400}
            className="hero-bg-img"
            priority
          />
        </div>
        <div className="hero-image-item fade-in delay-2">
          <Image 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=400&fit=crop&q=80" 
            alt="Praca z narzędziami" 
            width={500} 
            height={400}
            className="hero-bg-img"
          />
        </div>
        <div className="hero-image-item fade-in delay-3">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&q=80" 
            alt="Mechanika rowerowa" 
            width={500} 
            height={400}
            className="hero-bg-img"
          />
        </div>
        <div className="hero-image-item fade-in delay-4">
          <Image 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&q=80" 
            alt="Praca warsztatowa" 
            width={500} 
            height={400}
            className="hero-bg-img"
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Badge with shine effect */}
          <div className="hero-badge fade-in">
            <span className="badge-shine"></span>
            <span className="badge-icon">🌞</span>
            <span className="badge-text">WAKACJE 2026 • LIPIEC & SIERPIEŃ</span>
          </div>

          {/* Main heading with enhanced typography */}
          <h1 className="hero-title fade-in delay-1">
            <span className="title-highlight">tak trzeba</span>
            <span className="hero-icon float-animation">🛠️</span>
          </h1>
          <p className="hero-brand-subtitle fade-in delay-1">taktrzeba.pl</p>

          {/* Tagline with glassmorphism */}
          <div className="hero-tagline-box fade-in delay-2">
            <p className="hero-tagline">„Brudne ręce. Czysta głowa."</p>
            <p className="hero-tagline-sub">Praktyczne umiejętności, które zostają na całe życie</p>
          </div>

          {/* Stats cards */}
          <div className="hero-stats fade-in delay-3">
            <div className="stat-card scale-in delay-3">
              <div className="stat-number">5</div>
              <div className="stat-label">Dni intensywnej nauki</div>
            </div>
            <div className="stat-card scale-in delay-4">
              <div className="stat-number">4</div>
              <div className="stat-label">Kierunki rzemiosła</div>
            </div>
            <div className="stat-card scale-in delay-5">
              <div className="stat-number">100%</div>
              <div className="stat-label">Praktyka, zero teorii</div>
            </div>
          </div>

          {/* Feature highlights with icons */}
          <div className="hero-features fade-in delay-4">
            <div className="feature-item slide-in-left delay-4">
              <span className="feature-icon">📵</span>
              <span>Bez telefonów</span>
            </div>
            <div className="feature-item slide-in-left delay-5">
              <span className="feature-icon">🔧</span>
              <span>Prawdziwe narzędzia</span>
            </div>
            <div className="feature-item slide-in-left delay-6">
              <span className="feature-icon">🎯</span>
              <span>Widoczny efekt</span>
            </div>
            <div className="feature-item slide-in-left delay-7">
              <span className="feature-icon">👥</span>
              <span>Małe grupy</span>
            </div>
          </div>

          {/* CTA buttons with enhanced styling */}
          <div className="hero-cta fade-in delay-5">
            <a href="#zapisy" className="btn btn-primary btn-hero shimmer-effect">
              <span className="btn-text">Zarezerwuj miejsce na lato 2026</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#program" className="btn btn-secondary btn-hero">
              <span className="btn-text">Zobacz pełny program</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-trust fade-in delay-6">
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Bezpieczne warsztaty</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Certyfikowane materiały</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span>Doświadczeni instruktorzy</span>
            </div>
          </div>

          {/* Urgency banner */}
          <div className="hero-urgency-banner fade-in delay-7">
            <span className="urgency-icon pulse-animation">⚡</span>
            <span className="urgency-text">
              <strong>Limitowana liczba miejsc!</strong> Tylko 12 uczestników w grupie – rezerwuj już teraz
            </span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
    </section>
  );
}
