'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function CourseProgram() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const cards = sectionRef.current?.querySelectorAll('.course-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      icon: '🔧',
      title: 'Mechanik rowerowy',
      subtitle: '„Zrozum, jak działa ruch"',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop&q=80',
      why: 'Najniższy próg wejścia. Szybkie efekty. Zero strachu.',
      learns: [
        'jak zbudowany jest rower',
        'jak działają hamulce i przerzutki',
        'jak naprawić przebitą dętkę',
        'jak diagnozować usterki'
      ],
      practice: [
        'rozbieranie i składanie roweru',
        'regulacja napędu',
        'pełny serwis techniczny'
      ],
      result: 'Rower gotowy do jazdy + poczucie „umiem to".'
    },
    {
      icon: '🪚',
      title: 'Stolarka',
      subtitle: '„Z kawałka drewna do prawdziwego przedmiotu"',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=400&fit=crop&q=80',
      learns: [
        'pracy z naturalnym materiałem',
        'mierzenia, planowania i precyzji',
        'obsługi narzędzi ręcznych',
        'cierpliwości i skupienia'
      ],
      practice: [
        'cięcie i szlifowanie drewna',
        'łączenie elementów',
        'wykonanie prostego projektu (np. półka, skrzynka, stołek)'
      ],
      result: 'Gotowy, własnoręcznie wykonany przedmiot z drewna.'
    },
    {
      icon: '🚰',
      title: 'Hydraulika',
      subtitle: '„Każdy dom tego potrzebuje"',
      image: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&h=400&fit=crop&q=80',
      learns: [
        'jak działa instalacja wodna w domu',
        'czym są rury, zawory, syfony',
        'jak uszczelniać połączenia',
        'jak naprawić przeciek'
      ],
      practice: [
        'montaż i demontaż elementów instalacji',
        'skręcanie rur',
        'symulowane awarie i ich naprawa'
      ],
      result: 'Działająca instalacja demo + brak strachu przed „usterką".'
    },
    {
      icon: '🔌',
      title: 'Elektryka',
      subtitle: '„Prąd przestaje być magią"',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=400&fit=crop&q=80',
      learns: [
        'podstaw bezpieczeństwa',
        'jak działa obwód elektryczny',
        'czym różni się faza, neutralny i uziemienie',
        'jak czytać prosty schemat'
      ],
      practice: [
        'montaż gniazdka i włącznika',
        'podłączanie oświetlenia',
        'budowa działającego obwodu na stanowisku szkoleniowym'
      ],
      result: 'Działająca instalacja elektryczna + ogromny wzrost pewności siebie.'
    }
  ];

  return (
    <section id="program" className="course-program-section" ref={sectionRef}>
      <div className="container">
        <h2 className="animate-on-scroll">Program kursu – szczegóły</h2>
        
        <div className="courses-list">
          {courses.map((course, index) => (
            <article key={index} className="course-card animate-on-scroll">
              {course.image && (
                <Image
                  src={course.image}
                  alt={course.title}
                  width={800}
                  height={400}
                  className="course-image"
                  priority={index === 0}
                />
              )}
              
              <div className="course-header">
                <span className="course-icon">{course.icon}</span>
                <div>
                  <h3>{course.title}</h3>
                  <p className="course-subtitle">{course.subtitle}</p>
                </div>
              </div>

              {course.why && (
                <div className="course-why">
                  <h4>Dlaczego zaczynamy od tego?</h4>
                  <p>{course.why}</p>
                </div>
              )}

              <div className="course-content">
                <div className="course-section">
                  <h4>Czego uczy się uczestnik:</h4>
                  <ul>
                    {course.learns.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="course-section">
                  <h4>Praktyka:</h4>
                  <ul>
                    {course.practice.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="course-result">
                  <strong>Efekt dnia:</strong> {course.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
