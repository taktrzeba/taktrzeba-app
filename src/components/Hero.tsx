import Image from 'next/image';
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
      {/* Animated background gradient */}
      <div className="hero-gradient-bg"></div>
      
      {/* Background images grid */}
      <div className="hero-images-background">
        <div className="hero-image-item fade-in delay-1">
          <Image 
            src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&h=400&fit=crop&q=80" 
            alt="Narzędzia warsztatowe - klucze i narzędzia" 
            width={500} 
            height={400}
            className="hero-bg-img"
            priority
          />
        </div>
        <div className="hero-image-item fade-in delay-2">
          <Image 
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=500&h=400&fit=crop&q=80" 
            alt="Praca przy drewnie - stolarka" 
            width={500} 
            height={400}
            className="hero-bg-img"
          />
        </div>
        <div className="hero-image-item fade-in delay-3">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&q=80" 
            alt="Naprawa roweru - mechanika" 
            width={500} 
            height={400}
            className="hero-bg-img"
          />
        </div>
        <div className="hero-image-item fade-in delay-4">
          <Image 
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&h=400&fit=crop&q=80" 
            alt="Praca techniczna - elektryka" 
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
            <p className="hero-tagline">Tydzień bez ekranów. Umiejętności na całe życie.</p>
            <p className="hero-tagline-sub">
              Stolarka, hydraulika, elektryka i mechanika rowerowa prowadzona przez praktyków.
              Małe grupy, prawdziwe narzędzia i realne umiejętności.
            </p>
          </div>

          {/* Stats cards */}
          <div className="hero-stats fade-in delay-3">
            <div className="stat-card scale-in delay-3">
              <div className="stat-number">12</div>
              <div className="stat-label">Uczestników max</div>
            </div>
            <div className="stat-card scale-in delay-4">
              <div className="stat-number">4</div>
              <div className="stat-label">Warsztaty praktyczne</div>
            </div>
            <div className="stat-card scale-in delay-5">
              <div className="stat-number">35</div>
              <div className="stat-label">Godzin zajęć</div>
            </div>
            <div className="stat-card scale-in delay-6">
              <div className="stat-number">0</div>
              <div className="stat-label">Telefonów podczas zajęć</div>
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
              <span className="btn-text">Zapisz dziecko</span>
              <span className="btn-icon">→</span>
            </a>
            <a href="#program" className="btn btn-secondary btn-hero">
              <span className="btn-text">Zobacz program</span>
            </a>
          </div>

          {/* Szybkie linki do kursów */}
          <div className="hero-course-quick-links fade-in delay-6">
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
          <div className="hero-trust fade-in delay-7">
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
          <div className="hero-urgency-banner fade-in delay-8">
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
