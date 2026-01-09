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
    <div className="course-program">
      <h3>Program szczegółowy</h3>
      <div className="program-accordion">
        {days.map((day, index) => (
          <div key={index} className="program-day">
            <button
              className={`day-header ${expandedDay === index ? 'expanded' : ''}`}
              onClick={() => toggleDay(index)}
            >
              <span>{day.title}</span>
              <span className="expand-icon">{expandedDay === index ? '−' : '+'}</span>
            </button>
            {expandedDay === index && (
              <div className="day-content">
                <div className="day-details">
                  <div className="day-column">
                    <h4>Umiejętności</h4>
                    <ul>
                      {day.skills.map((skill: string, i: number) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>Narzędzia</h4>
                    <ul>
                      {day.tools.map((tool: string, i: number) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>Techniki</h4>
                    <ul>
                      {day.techniques.map((technique: string, i: number) => (
                        <li key={i}>{technique}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="day-column">
                    <h4>Metody</h4>
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

        <div className="course-content-grid">
          {/* Główne narzędzia */}
          <div className="course-tools-box animate-on-scroll">
            <h3>🛠️ Narzędzia i wyposażenie</h3>
            <p className="tools-intro">
              Każdy uczestnik pracuje na profesjonalnym sprzęcie:
            </p>
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
        <div className="course-outcomes animate-on-scroll">
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
        <div className="course-cta animate-on-scroll">
          <a href="#zapisy" className="btn btn-primary btn-large">
            Zapisz się na kurs: {course.name}
          </a>
        </div>
      </div>
    </section>
  );
}
