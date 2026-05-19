export default function Testimonials() {
  return (
    <section className="for-parents-section" id="historie">
      <div className="container">
        <h2>Historie, które rodzice zapamiętują</h2>
        <p className="intro-text">
          Najmocniejsze efekty widać nie w deklaracjach, tylko w konkretnych zmianach po tygodniu warsztatów.
        </p>

        <div className="parents-benefits">
          <div className="parent-benefit">
            <strong>Pierwszy raz trzymał wiertarkę</strong>
            <p>
              Po dwóch dniach samodzielnie przygotował i zmontował prosty element z drewna,
              z zachowaniem zasad bezpieczeństwa.
            </p>
          </div>
          <div className="parent-benefit">
            <strong>Naprawił własny rower</strong>
            <p>
              Uczestnik przeszedł pełny proces diagnozy i regulacji podstawowych usterek, a do
              domu wrócił z działającym rowerem i planem dalszych ćwiczeń.
            </p>
          </div>
          <div className="parent-benefit">
            <strong>Zbudował coś własnymi rękami</strong>
            <p>
              Rodzice najczęściej wskazują wzrost pewności siebie, cierpliwości i większą gotowość
              do podejmowania odpowiedzialnych zadań w domu.
            </p>
          </div>
        </div>

        <div className="faq-contact" style={{ marginTop: '2rem' }}>
          <h3>Opinie rodziców</h3>
          <p>
            &quot;W końcu zobaczyliśmy, że nasz syn potrafi skupić się przez kilka godzin na konkretnym
            zadaniu. Wrócił dumny i bardziej samodzielny.&quot;
          </p>
          <p>
            &quot;Córka po warsztatach sama zaproponowała, że naprawi półkę w domu. To był duży krok w
            jej pewności siebie.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
