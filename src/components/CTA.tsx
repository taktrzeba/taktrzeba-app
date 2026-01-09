export default function CTA() {
  return (
    <section id="zapisy" className="cta-section">
      <div className="container">
        <h2>Zapisz dziecko na Tydzień Rzemiosła</h2>
        
        <div className="cta-content">
          <div className="cta-box">
            <h3>Nadchodzące terminy</h3>
            <div className="cta-info">
              <p>Letnie wakacje 2026</p>
              <p>Miejsca ograniczone – grupy max 10 osób</p>
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
                <label htmlFor="phone">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  placeholder="+48 123 456 789"
                />
              </div>

              <div className="form-group">
                <label htmlFor="child-name">Imię dziecka</label>
                <input 
                  type="text" 
                  id="child-name" 
                  name="child-name" 
                  required 
                  placeholder="Imię"
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
                <label htmlFor="message">Dodatkowe informacje (opcjonalnie)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="Pytania, uwagi..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large">
                Wyślij zgłoszenie
              </button>

              <p className="form-note">
                Skontaktujemy się z Tobą w ciągu 24h
              </p>
            </form>
          </div>

          <div className="contact-info">
            <h3>Kontakt</h3>
            <p>Email: <a href="mailto:kontakt@tydzienmiosla.pl">kontakt@tydzienmiosla.pl</a></p>
            <p>Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
            
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
