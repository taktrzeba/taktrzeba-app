'use client';

import { useEffect, useRef } from 'react';

export default function WhyCourse() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="o-kursie" className="why-course-section" ref={sectionRef}>
      <div className="container">
        <h2 className="animate-on-scroll">Dlaczego ten program jest dziś tak potrzebny?</h2>
        
        <div className="problem-solution">
          <div className="problem-box">
            <h3>Dzisiejsze dzieci świetnie obsługują aplikacje, ale rzadziej ćwiczą praktyczne kompetencje:</h3>
            <ul>
              <li>cierpliwość i koncentrację w dłuższej pracy</li>
              <li>samodzielność w rozwiązywaniu codziennych problemów</li>
              <li>odpowiedzialność za proces i efekt końcowy</li>
            </ul>
          </div>
          
          <div className="solution-box">
            <h3>TakTrzeba to bezpieczny, praktyczny tydzień budowania pewności siebie:</h3>
            <ul>
              <li>praca w zespole i współpraca</li>
              <li>realne zadania i realne efekty</li>
              <li>nauka odpowiedzialności przez działanie</li>
            </ul>
            <p className="highlight">
              Tu liczą się uważność, sprawczość i kompetencje, które zostają na lata.
            </p>
          </div>
        </div>

        <div className="target-audience">
          <h2>Dla kogo jest ten kurs?</h2>
          <div className="audience-grid">
            <div className="audience-item">
              ✔ młodzież w wieku 14–16 lat
            </div>
            <div className="audience-item">
              ✔ dzieci znudzone szkołą
            </div>
            <div className="audience-item">
              ✔ młodzież, która potrzebuje więcej działania niż ekranu
            </div>
            <div className="audience-item">
              ✔ uczniowie bez pomysłu na przyszłość
            </div>
            <div className="audience-item">
              ✔ rodzice, którzy chcą dać dziecku realne doświadczenie
            </div>
          </div>

          <div className="no-requirements">
            <h3>Nie trzeba:</h3>
            <ul>
              <li>żadnej wiedzy technicznej</li>
              <li>żadnego doświadczenia</li>
              <li>żadnych wyjątkowych zdolności manualnych</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
