'use client';

import { useState } from 'react';
import { coursesSyllabus } from '@/data/coursesSyllabus';

export default function CourseDetails() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedDay, setExpandedDay] = useState<{ [key: string]: boolean }>({});
  const [showAllTools, setShowAllTools] = useState(false);

  const toggleCourse = (index: number) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  const toggleDay = (courseIndex: number, dayIndex: number) => {
    const key = `${courseIndex}-${dayIndex}`;
    setExpandedDay(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="program-szczegolowy" className="course-details-section">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2>📋 Szczegółowy Program Kursów</h2>
          <p className="section-subtitle">
            Dokładnie to, czego nauczy się Twoje dziecko — dzień po dniu, narzędzie po narzędziu
          </p>
        </div>

        <div className="courses-accordion">
          {coursesSyllabus.map((course, courseIndex) => (
            <div key={courseIndex} className="course-accordion-item animate-on-scroll">
              <button
                className={`course-accordion-header ${expandedCourse === courseIndex ? 'active' : ''}`}
                onClick={() => toggleCourse(courseIndex)}
              >
                <span className="course-accordion-icon">{course.icon}</span>
                <div className="course-accordion-title">
                  <h3>{course.name}</h3>
                  <p className="course-goal">Cel: {course.goal}</p>
                </div>
                <span className="accordion-arrow">{expandedCourse === courseIndex ? '−' : '+'}</span>
              </button>

              {expandedCourse === courseIndex && (
                <div className="course-accordion-content">
                  <div className="main-tools-section">
                    <h4>🛠️ Główne narzędzia kursu:</h4>
                    <ul className="tools-list-compact">
                      {course.mainTools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="days-list">
                    <h4>📅 Program 5 dni:</h4>
                    {course.days.map((day, dayIndex) => (
                      <div key={dayIndex} className="day-accordion-item">
                        <button
                          className={`day-accordion-header ${expandedDay[`${courseIndex}-${dayIndex}`] ? 'active' : ''}`}
                          onClick={() => toggleDay(courseIndex, dayIndex)}
                        >
                          <span className="day-number">Dzień {dayIndex + 1}</span>
                          <span className="day-title">{day.title}</span>
                          <span className="day-arrow">{expandedDay[`${courseIndex}-${dayIndex}`] ? '▼' : '▶'}</span>
                        </button>

                        {expandedDay[`${courseIndex}-${dayIndex}`] && (
                          <div className="day-accordion-content">
                            <div className="day-content-grid">
                              <div className="skills-column">
                                <h5>✓ Umiejętności:</h5>
                                <ul>
                                  {day.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="tools-column">
                                <h5>🔧 Narzędzia:</h5>
                                <ul>
                                  {day.tools.map((tool, i) => (
                                    <li key={i}>{tool}</li>
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
              )}
            </div>
          ))}
        </div>

        <div className="course-outcome animate-on-scroll">
          <h3>🎯 Co realnie zyskuje uczestnik?</h3>
          <div className="outcome-grid">
            <div className="outcome-card">
              <span className="outcome-icon">🔧</span>
              <p>Zna narzędzia i nie boi się ich używać</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">🧠</span>
              <p>Rozumie podstawy techniczne świata</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">💡</span>
              <p>Potrafi logicznie rozwiązywać problemy</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">⚡</span>
              <p>Ma doświadczenie, nie tylko teorię</p>
            </div>
          </div>
        </div>

        <div className="standards-note animate-on-scroll">
          <h4>📌 Standard organizacyjny</h4>
          <div className="standards-grid">
            <div className="standard-item standard-yes">
              <strong>✓ Każdy uczestnik:</strong>
              <ul>
                <li>pracuje na prawdziwych narzędziach</li>
                <li>używa narzędzi dostosowanych do wieku</li>
                <li>ma stałe stanowisko</li>
                <li>uczy się prawidłowych nazw i zastosowań</li>
              </ul>
            </div>
            <div className="standard-item standard-no">
              <strong>✗ Nie używamy:</strong>
              <ul>
                <li>atrap i makiet</li>
                <li>plastikowych „zabawek"</li>
                <li>narzędzi bez zabezpieczeń</li>
                <li>sprzętu nienadającego się do pracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
