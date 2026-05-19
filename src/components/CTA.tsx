export default function CTA() {
  return (
    <section id="zapisy" className="cta-section">
      <div className="container">
        <h2>Zapisz dziecko na listę zainteresowanych</h2>
        
        <div className="cta-content">
          <div className="cta-box">
            <h3>Nadchodzące terminy</h3>
            <div className="cta-info">
              <p>Letnie wakacje 2026</p>
              <p>Miejsca ograniczone – grupy max 12 osób</p>
            </div>
            
            <form className="cta-form">
              <div className="form-group">
                <label htmlFor="parent-name">Imię i nazwisko rodzica</label>
                <input 
                  type="text" 
                  id="parent-name" 
                  name="parent-name" 
                  required 
                  placeholder="Jan Kowalski"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="child-age">Wiek dziecka</label>
                <select id="child-age" name="child-age" required>
                  <option value="">Wybierz wiek</option>
                  <option value="14">14 lat</option>
                  <option value="15">15 lat</option>
                  <option value="16">16 lat</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="city">Miasto</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required 
                  placeholder="np. Warszawa"
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferred-workshop">Preferowany warsztat</label>
                <select id="preferred-workshop" name="preferred-workshop" required>
                  <option value="">Wybierz warsztat</option>
                  <option value="stolarka">Stolarka</option>
                  <option value="hydraulika">Hydraulika</option>
                  <option value="elektryka">Elektryka</option>
                  <option value="mechanika-rowerowa">Mechanika rowerowa</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Zapisz na listę
              </button>

              <p className="form-note">
                Oddzwonimy lub odpiszemy z dostępnymi terminami i szczegółami.
              </p>

              <a href="#program" className="btn btn-secondary btn-large" style={{ marginTop: '0.75rem' }}>
                Zobacz program
              </a>
            </form>
          </div>

          <div className="contact-info">
            <h3>Porozmawiaj z nami</h3>
            <p>Email: <a href="mailto:kontakt@taktrzeba.pl">kontakt@taktrzeba.pl</a></p>
            <p>Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
            <p style={{ marginTop: '1rem' }}>
              Możesz też wysłać zapytanie i wrócimy z propozycją terminu dopasowaną do wieku dziecka i miasta.
            </p>
            
            <div className="social-links">
              <h4>Śledź nas:</h4>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Instagram">IG</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
