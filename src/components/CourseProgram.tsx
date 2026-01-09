export default function CourseProgram() {
  const courses = [
    {
      icon: '🔧',
      title: 'Mechanik rowerowy',
      subtitle: '„Zrozum, jak działa ruch"',
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
    <section id="program" className="course-program-section">
      <div className="container">
        <h2>Program kursu – szczegóły</h2>
        
        <div className="courses-list">
          {courses.map((course, index) => (
            <article key={index} className="course-card">
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
