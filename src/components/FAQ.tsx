export default function FAQ() {
  const faqs = [
    {
      question: "Dla kogo jest ten kurs?",
      answer: "Kurs jest przeznaczony dla młodzieży w wieku 14-16 lat. Nie jest wymagana żadna wcześniejsza wiedza techniczna ani doświadczenie. Kurs jest idealny dla dzieci znudzonych szkołą, uzależnionych od telefonu lub szukających praktycznych doświadczeń."
    },
    {
      question: "Jak długo trwa kurs?",
      answer: "Kurs trwa 5 dni (od poniedziałku do piątku), około 6-7 godzin dziennie. Każdego dnia uczestnicy poznają inny zawód i wykonują praktyczne projekty."
    },
    {
      question: "Czy kurs jest bezpieczny?",
      answer: "Tak, bezpieczeństwo jest naszym priorytetem. Wszystkie zajęcia prowadzone są pod stałym nadzorem doświadczonych instruktorów. Używamy bezpiecznych, szkoleniowych stanowisk oraz narzędzi dostosowanych do wieku. Wszyscy uczestnicy są objęci ubezpieczeniem."
    },
    {
      question: "Czy dziecko otrzyma certyfikat?",
      answer: "Nie wydajemy certyfikatów zawodowych ani uprawnień. Celem kursu nie jest formalna kwalifikacja, ale praktyczne doświadczenie i rozwój kompetencji życiowych. Dajemy coś ważniejszego - realne umiejętności i pewność siebie."
    },
    {
      question: "Ile osób jest w grupie?",
      answer: "Grupy są małe - maksymalnie 6-10 uczestników. To pozwala na indywidualne podejście do każdego dziecka i zapewnia bezpieczeństwo."
    },
    {
      question: "Co z telefonami?",
      answer: "Telefony są deponowane na czas zajęć. To część doświadczenia - uczymy koncentracji i pracy bez ciągłych rozpraszaczy. Rodzice mają stały kontakt z nami w razie potrzeby."
    },
    {
      question: "Jakie zawody są w programie?",
      answer: "Program obejmuje 4 praktyczne zawody: Mechanik rowerowy, Stolarz, Hydraulik i Elektryk. Każdy dzień to inny zawód z praktycznymi zadaniami i konkretnym efektem końcowym."
    },
    {
      question: "Czy dziecko zabierze coś do domu?",
      answer: "Tak! Uczestnicy zabierają własnoręcznie wykonane projekty: przedmiot z drewna (np. półka, skrzynka), serwisowany rower oraz wiedzę jak naprawić podstawowe usterki w domu."
    },
    {
      question: "Ile kosztuje kurs?",
      answer: "Szczegóły cenowe dostępne są po kontakcie. Oferujemy różne pakiety i możliwość rezerwacji miejsca z rabatem early bird. Skontaktuj się z nami przez formularz lub telefon."
    },
    {
      question: "Kiedy są najbliższe terminy?",
      answer: "Kursy odbywają się w okresie wakacji letnich. Dokładne terminy i dostępność miejsc sprawdzisz wypełniając formularz zgłoszeniowy lub kontaktując się z nami bezpośrednio."
    },
    {
      question: "Co moje dziecko zyska z tego kursu?",
      answer: "Dziecko wyniesie z kursu: własnoręcznie wykonane projekty, realne umiejętności życiowe, szacunek do pracy fizycznej, lepszą koncentrację, odpoczynek od telefonu oraz doświadczenie dorosłego świata pracy. To często najlepsza inwestycja wychowawcza w całe wakacje."
    },
    {
      question: "Czy potrzebne są własne narzędzia?",
      answer: "Nie. Wszystkie narzędzia i materiały zapewniamy. Uczestnicy potrzebują jedynie wygodnego ubrania, które może się ubrudzić, oraz zamkniętych butów."
    }
  ];

  // JSON-LD dla FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="faq-section">
        <div className="container">
          <h2>Często zadawane pytania (FAQ)</h2>
          <p className="faq-intro">
            Masz pytania o kurs? Znajdź odpowiedzi poniżej lub skontaktuj się z nami bezpośrednio.
          </p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">▼</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq-contact">
            <h3>Nie znalazłeś odpowiedzi?</h3>
            <p>Skontaktuj się z nami bezpośrednio:</p>
            <div className="faq-contact-buttons">
              <a href="#zapisy" className="btn btn-primary">Wypełnij formularz</a>
              <a href="tel:+48123456789" className="btn btn-secondary">Zadzwoń: +48 123 456 789</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
