'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { coursesSyllabus } from '@/data/coursesSyllabus';

export default function CourseProgram() {
  const sectionRef = useRef<HTMLElement>(null);

  const courseLinks = [
    'kurs-mechanik-rowerowy',
    'kurs-stolarka',
    'kurs-hydraulika',
    'kurs-elektryka'
  ];

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

  // Mapujemy dane z syllabusa na format używany w tym komponencie
  const courses = coursesSyllabus.map((course) => {
    const imageMap: { [key: string]: string } = {
      '🔧': 'https://images.prismic.io/taktrzeba/agxM-qYofJOwHXOB_taktrzeba-6.png?auto=format,compress',
      '🪚': 'https://images.prismic.io/taktrzeba/agxM-6YofJOwHXOC_taktrzeba-7.png?auto=format,compress',
      '🚰': 'https://images.prismic.io/taktrzeba/agxM_KYofJOwHXOD_taktrzeba-8.png?auto=format,compress',
      '⚡': 'https://images.prismic.io/taktrzeba/agxM_aYofJOwHXOE_taktrzeba-9.png?auto=format,compress'
    };

    return {
      icon: course.icon,
      title: course.name,
      subtitle: course.goal,
      image: imageMap[course.icon] || imageMap['🔧'],
      why: `Praktyczna nauka przez 5 dni - ${course.days.length} konkretnych tematów`,
      learns: course.days.slice(0, 4).map(day => day.title.toLowerCase()),
      practice: course.mainTools.slice(0, 3),
      result: `Ukończony projekt + umiejętności z zakresu: ${course.name.toLowerCase()}`
    };
  });

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
                  <strong>Efekt:</strong> {course.result}
                </div>

                <div className="course-link-wrapper">
                  <a href={`#${courseLinks[index]}`} className="btn btn-outline">
                    Zobacz szczegółowy program →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
