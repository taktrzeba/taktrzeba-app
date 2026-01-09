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
            ✔ własnoręcznie wykonane projekty
          </div>
          <div className="benefit-item animate-on-scroll">
            ✔ realne umiejętności życiowe
          </div>
          <div className="benefit-item animate-on-scroll">
            ✔ szacunek do pracy fizycznej
          </div>
          <div className="benefit-item animate-on-scroll">
            ✔ lepszą koncentrację
          </div>
          <div className="benefit-item animate-on-scroll">
            ✔ odpoczynek od telefonu
          </div>
          <div className="benefit-item animate-on-scroll">
            ✔ doświadczenie dorosłego świata pracy
          </div>
        </div>

        <div className="benefits-highlight">
          <p className="large-text">To nie jest „zabawa w zawody".</p>
          <p className="large-text">To pierwsze prawdziwe zetknięcie z rzeczywistością.</p>
        </div>
      </div>
    </section>
  );
}
