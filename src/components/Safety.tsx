export default function Safety() {
  return (
    <section className="safety-section">
      <div className="container">
        <h2>Bezpieczeństwo i organizacja</h2>
        
        <div className="safety-grid">
          <div className="safety-item">
            ✓ wszystkie zajęcia prowadzone pod stałym nadzorem
          </div>
          <div className="safety-item">
            ✓ bezpieczne stanowiska i jasne zasady pracy z narzędziami
          </div>
          <div className="safety-item">
            ✓ narzędzia dostosowane do wieku
          </div>
          <div className="safety-item">
            ✓ jasne zasady pracy i przerw
          </div>
          <div className="safety-item">
            ✓ ubezpieczenie uczestników
          </div>
          <div className="safety-item">
            ✓ procedura reagowania w sytuacjach nagłych i kontakt z rodzicem
          </div>
        </div>

        <div className="instructors-section">
          <h2>Telefony podczas zajęć</h2>
          <p className="instructors-intro">
            Telefony odkładamy na czas zajęć, aby uczestnicy mogli skupić się na pracy i współpracy.
          </p>
          <p>
            W sprawach pilnych rodzice mają stały kontakt z zespołem organizacyjnym.
          </p>
        </div>

        <div className="instructors-section">
          <h2>Kim są prowadzący?</h2>
          <p className="instructors-intro">Doświadczeni praktycy, którzy potrafią pracować z młodzieżą.</p>
          
          <div className="instructors-description">
            <h3>To:</h3>
            <ul>
              <li>praktycy z doświadczeniem</li>
              <li>osoby umiejące pracować z młodzieżą</li>
              <li>mentorzy, nie wykładowcy</li>
            </ul>

            <h3>Każdy prowadzący:</h3>
            <ul>
              <li>tłumaczy</li>
              <li>pozwala popełniać błędy</li>
              <li>uczy odpowiedzialności, nie strachu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
