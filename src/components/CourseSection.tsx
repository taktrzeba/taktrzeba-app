'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type CourseData } from '@/data/coursesSyllabus';

// Client component for accordion functionality
function DayAccordion({ days }: { days: any[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <div className="course-program-detailed">
      <h3>📅 Program szczegółowy - 5 dni</h3>
      <p className="program-intro">
        Każdy dzień to nowy etap w nauce rzemiosła. Kliknij w dzień, aby zobaczyć szczegóły:
      </p>
      <div className="program-accordion">
        {days.map((day, index) => (
          <div key={index} className="program-day">
            <button
              className={`day-header ${expandedDay === index ? 'expanded' : ''}`}
              onClick={() => toggleDay(index)}
            >
              <div className="day-title-section">
                <span className="day-number">Dzień {index + 1}</span>
                <span className="day-title">{day.title}</span>
              </div>
              <span className="expand-icon">{expandedDay === index ? '−' : '+'}</span>
            </button>
            {expandedDay === index && (
              <div className="day-content">
                <div className="day-details">
                  <div className="day-column">
                    <h4>📚 Umiejętności</h4>
                    <ul>
                      {day.skills.map((skill: string, i: number) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>🔧 Narzędzia</h4>
                    <ul>
                      {day.tools.map((tool: string, i: number) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>⚙️ Techniki</h4>
                    <ul>
                      {day.techniques.map((technique: string, i: number) => (
                        <li key={i}>{technique}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>🎯 Metody</h4>
                    <ul>
                      {day.methods.map((method: string, i: number) => (
                        <li key={i}>{method}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

interface CourseSectionProps {
  course: CourseData;
  courseId: string;
  imageUrl: string;
}

export default function CourseSection({ course, courseId, imageUrl }: CourseSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id={courseId} className="single-course-section">
      <div className="container">
        <div className="course-section-header animate-on-scroll">
          <div className="course-header-content">
            <span className="course-big-icon">{course.icon}</span>
            <div className="course-header-text">
              <h2>{course.name}</h2>
              <p className="course-goal-large">Cel kursu: {course.goal}</p>
            </div>
          </div>
          <div className="course-header-image">
            <Image
              src={imageUrl}
              alt={course.name}
              width={600}
              height={400}
              className="course-hero-image"
            />
          </div>
        </div>

        {/* Podstawowe informacje - zawsze widoczne */}
        <div className="course-overview">
          <div className="course-tools-preview">
            <h3>🛠️ Główne narzędzia i wyposażenie</h3>
            <div className="tools-preview-list">
              {course.mainTools.slice(0, 4).map((tool, index) => (
                <span key={index} className="tool-tag">
                  {tool}
                </span>
              ))}
              {course.mainTools.length > 4 && (
                <span className="tool-tag more">
                  +{course.mainTools.length - 4} więcej
                </span>
              )}
            </div>
          </div>

          <div className="course-summary">
            <h3>📅 Program 5 dni</h3>
            <p>
              Praktyczny kurs podzielony na 5 intensywnych dni nauki. 
              Każdy dzień to nowy etap rozwoju umiejętności w {course.name.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* Przycisk toggle szczegółów */}
        <div className="course-details-toggle">
          <button 
            className={`btn btn-outline btn-large details-toggle ${isExpanded ? 'expanded' : ''}`}
            onClick={toggleExpanded}
          >
            <span className="toggle-text">
              {isExpanded ? 'Zwiń szczegóły programu' : 'Zobacz szczegółowy program'}
            </span>
            <span className="toggle-icon">
              {isExpanded ? '↑' : '↓'}
            </span>
          </button>
        </div>

        {/* Szczegółowy program - accordion */}
        {isExpanded && (
          <div className="course-detailed-content animate-on-scroll">
            <div className="course-content-grid">
              {/* Wszystkie narzędzia */}
              <div className="course-tools-box">
                <h3>🛠️ Pełna lista narzędzi</h3>
                <ul className="tools-list-main">
                  {course.mainTools.map((tool, index) => (
                    <li key={index}>
                      <span className="tool-bullet">▸</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Program 5 dni */}
              <DayAccordion days={course.days} />
            </div>

            {/* Efekty kursu */}
            <div className="course-outcomes">
              <h3>✨ Co zyskuje uczestnik?</h3>
              <div className="outcomes-grid">
                <div className="outcome-card">
                  <span className="outcome-icon">🎯</span>
                  <h4>Praktyczne umiejętności</h4>
                  <p>Konkretne zdolności, które można użyć zaraz po kursie</p>
                </div>
                <div className="outcome-card">
                  <span className="outcome-icon">💪</span>
                  <h4>Pewność siebie</h4>
                  <p>Wiedzą, że potrafią naprawić i zbudować rzeczy własnymi rękami</p>
                </div>
                <div className="outcome-card">
                  <span className="outcome-icon">🧠</span>
                  <h4>Logiczne myślenie</h4>
                  <p>Rozumienie związku przyczyna-skutek, diagnozowanie problemów</p>
                </div>
                <div className="outcome-card">
                  <span className="outcome-icon">🏆</span>
                  <h4>Ukończony projekt</h4>
                  <p>Gotowy efekt do zabrania do domu jako dowód umiejętności</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="course-cta">
              <a href="#zapisy" className="btn btn-primary btn-large">
                Zapisz się na kurs: {course.name}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
