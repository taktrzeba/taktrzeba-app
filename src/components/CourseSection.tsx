'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type CourseData } from '@/data/coursesSyllabus';

interface CourseSectionProps {
  course: CourseData;
  courseId: string;
  imageUrl: string;
}

export default function CourseSection({ course, courseId, imageUrl }: CourseSectionProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index);
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
          <div className="course-days-box animate-on-scroll">
            <h3>📅 Program 5 dni</h3>
            <div className="days-accordion">
              {course.days.map((day, dayIndex) => (
                <div key={dayIndex} className="single-day-item">
                  <button
                    className={`day-header ${expandedDay === dayIndex ? 'active' : ''}`}
                    onClick={() => toggleDay(dayIndex)}
                  >
                    <span className="day-number">Dzień {dayIndex + 1}</span>
                    <span className="day-title">{day.title}</span>
                    <span className="day-arrow">{expandedDay === dayIndex ? '−' : '+'}</span>
                  </button>

                  {expandedDay === dayIndex && (
                    <div className="day-details">
                      <div className="day-column">
                        <h4>📚 Czego się uczą:</h4>
                        <ul>
                          {day.skills.map((skill, i) => (
                            <li key={i}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="day-column">
                        <h4>🔧 Używane narzędzia:</h4>
                        <ul>
                          {day.tools.map((tool, i) => (
                            <li key={i}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
