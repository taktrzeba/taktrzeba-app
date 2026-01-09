export default function ForParents() {
  return (
    <section className="for-parents-section">
      <div className="container">
        <div className="not-vocational">
          <h2>To nie jest kurs zawodowy</h2>
          
          <div className="two-columns">
            <div className="column">
              <h3>Nie dajemy:</h3>
              <ul>
                <li>certyfikatów</li>
                <li>uprawnień</li>
                <li>obietnic kariery</li>
              </ul>
            </div>
            
            <div className="column highlight-column">
              <h3>Dajemy coś ważniejszego:</h3>
              <p className="large-text">👉 doświadczenie</p>
            </div>
          </div>
        </div>

        <div className="for-parents-content">
          <h2>Dla rodziców – dlaczego warto?</h2>
          
          <p className="intro-text">Bo po tym tygodniu:</p>
          
          <div className="parents-benefits">
            <div className="parent-benefit">
              dziecko inaczej patrzy na pracę
            </div>
            <div className="parent-benefit">
              mniej sięga po telefon
            </div>
            <div className="parent-benefit">
              lepiej rozumie świat
            </div>
            <div className="parent-benefit">
              ma poczucie sprawczości
            </div>
          </div>

          <p className="closing-text">
            To często <strong>najlepsza inwestycja wychowawcza</strong> w całe wakacje.
          </p>
        </div>
      </div>
    </section>
  );
}
