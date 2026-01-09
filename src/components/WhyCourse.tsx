'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
        <h2 className="animate-on-scroll">Dlaczego ten kurs powstał?</h2>
        
        <div className="problem-solution">
          <div className="problem-box">
            <h3>Dzisiejsze dzieci:</h3>
            <ul>
              <li>spędzają większość czasu przed ekranem</li>
              <li>mają problem z koncentracją</li>
              <li>nie widzą związku między pracą a efektem</li>
            </ul>
          </div>
          
          <div className="solution-box">
            <h3>Tydzień Rzemiosła to bezpieczny, przemyślany reset:</h3>
            <ul>
              <li>od social mediów</li>
              <li>od ciągłej stymulacji</li>
              <li>od „wirtualnego świata bez konsekwencji"</li>
            </ul>
            <p className="highlight">
              Tu liczą się ręce, uważność i odpowiedzialność.
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
              ✔ młodzi „uzależnieni od telefonu"
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
              <li>żadnych zdolności „manualnych"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
