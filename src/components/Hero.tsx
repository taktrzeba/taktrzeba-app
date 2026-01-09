export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            <span className="hero-icon float-animation">🛠️</span> Tydzień Rzemiosła
          </h1>
          <p className="hero-subtitle fade-in delay-1">
            „Brudne ręce. Czysta głowa."
          </p>
          <p className="hero-description fade-in delay-2">
            Wakacyjny kurs praktyczny dla młodzieży 14–16 lat<br />
            Bez telefonów. Bez ocen. Bez szkolnej teorii.<br />
            Za to z narzędziami, prawdziwą pracą i widocznym efektem.
          </p>
          <div className="hero-cta fade-in delay-3">
            <a href="#zapisy" className="btn btn-primary">
              Zapisz dziecko na kurs
            </a>
            <a href="#program" className="btn btn-secondary">
              Zobacz program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
