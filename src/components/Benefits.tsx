'use client';

import { useEffect, useRef } from 'react';

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.benefit-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits-section" ref={sectionRef}>
      <div className="container">
        <h2>Co dziecko wynosi z tego tygodnia?</h2>
        
        <div className="benefits-grid">
          <div className="benefit-item animate-on-scroll">
            âœ” wÅ‚asnorÄ™cznie wykonane projekty
          </div>
          <div className="benefit-item animate-on-scroll">
            âœ” realne umiejÄ™tnoÅ›ci Å¼yciowe
          </div>
          <div className="benefit-item animate-on-scroll">
            âœ” szacunek do pracy fizycznej
          </div>
          <div className="benefit-item animate-on-scroll">
            âœ” lepszÄ… koncentracjÄ™
          </div>
          <div className="benefit-item animate-on-scroll">
            âœ” odpoczynek od telefonu
          </div>
          <div className="benefit-item animate-on-scroll">
            âœ” doÅ›wiadczenie dorosÅ‚ego Å›wiata pracy
          </div>
        </div>

        <div className="benefits-highlight">
          <p className="large-text">To nie jest â€žzabawa w zawody&quot;.</p>
          <p className="large-text">To pierwsze prawdziwe zetkniÄ™cie z rzeczywistoÅ›ciÄ….</p>
        </div>
      </div>
    </section>
  );
}

