'use client';

import { useState } from 'react';
import { coursesSyllabus } from '@/data/coursesSyllabus';

export default function CourseDetails() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedDay, setExpandedDay] = useState<{ [key: string]: boolean }>({});

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
          <h2>ðŸ“‹ SzczegÃ³Å‚owy Program KursÃ³w</h2>
          <p className="section-subtitle">
            DokÅ‚adnie to, czego nauczy siÄ™ Twoje dziecko â€” dzieÅ„ po dniu, narzÄ™dzie po narzÄ™dziu
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
                <span className="accordion-arrow">{expandedCourse === courseIndex ? 'âˆ’' : '+'}</span>
              </button>

              {expandedCourse === courseIndex && (
                <div className="course-accordion-content">
                  <div className="main-tools-section">
                    <h4>ðŸ› ï¸ GÅ‚Ã³wne narzÄ™dzia kursu:</h4>
                    <ul className="tools-list-compact">
                      {course.mainTools.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="days-list">
                    <h4>ðŸ“… Program 5 dni:</h4>
                    {course.days.map((day, dayIndex) => (
                      <div key={dayIndex} className="day-accordion-item">
                        <button
                          className={`day-accordion-header ${expandedDay[`${courseIndex}-${dayIndex}`] ? 'active' : ''}`}
                          onClick={() => toggleDay(courseIndex, dayIndex)}
                        >
                          <span className="day-number">DzieÅ„ {dayIndex + 1}</span>
                          <span className="day-title">{day.title}</span>
                          <span className="day-arrow">{expandedDay[`${courseIndex}-${dayIndex}`] ? 'â–¼' : 'â–¶'}</span>
                        </button>

                        {expandedDay[`${courseIndex}-${dayIndex}`] && (
                          <div className="day-accordion-content">
                            <div className="day-content-grid">
                              <div className="skills-column">
                                <h5>âœ“ UmiejÄ™tnoÅ›ci:</h5>
                                <ul>
                                  {day.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="tools-column">
                                <h5>ðŸ”§ NarzÄ™dzia:</h5>
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
          <h3>ðŸŽ¯ Co realnie zyskuje uczestnik?</h3>
          <div className="outcome-grid">
            <div className="outcome-card">
              <span className="outcome-icon">ðŸ”§</span>
              <p>Zna narzÄ™dzia i nie boi siÄ™ ich uÅ¼ywaÄ‡</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">ðŸ§ </span>
              <p>Rozumie podstawy techniczne Å›wiata</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">ðŸ’¡</span>
              <p>Potrafi logicznie rozwiÄ…zywaÄ‡ problemy</p>
            </div>
            <div className="outcome-card">
              <span className="outcome-icon">âš¡</span>
              <p>Ma doÅ›wiadczenie, nie tylko teoriÄ™</p>
            </div>
          </div>
        </div>

        <div className="standards-note animate-on-scroll">
          <h4>ðŸ“Œ Standard organizacyjny</h4>
          <div className="standards-grid">
            <div className="standard-item standard-yes">
              <strong>âœ“ KaÅ¼dy uczestnik:</strong>
              <ul>
                <li>pracuje na prawdziwych narzÄ™dziach</li>
                <li>uÅ¼ywa narzÄ™dzi dostosowanych do wieku</li>
                <li>ma staÅ‚e stanowisko</li>
                <li>uczy siÄ™ prawidÅ‚owych nazw i zastosowaÅ„</li>
              </ul>
            </div>
            <div className="standard-item standard-no">
              <strong>âœ— Nie uÅ¼ywamy:</strong>
              <ul>
                <li>atrap i makiet</li>
                <li>plastikowych â€žzabawek&quot;</li>
                <li>narzÄ™dzi bez zabezpieczeÅ„</li>
                <li>sprzÄ™tu nienadajÄ…cego siÄ™ do pracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

