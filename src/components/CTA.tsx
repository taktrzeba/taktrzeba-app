'use client';

import { FormEvent, useState } from 'react';
import { GA_EVENT_NAMES, trackEvent } from '@/lib/analytics';

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    trackEvent(GA_EVENT_NAMES.FORM_START, { source: 'landing_cta' });

    const formData = new FormData(event.currentTarget);

    const payload = {
      parentName: String(formData.get('parent-name') || ''),
      email: String(formData.get('email') || ''),
      childAge: String(formData.get('child-age') || ''),
      city: String(formData.get('city') || ''),
      preferredWorkshop: String(formData.get('preferred-workshop') || ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') || ''),
      source: 'landing_cta',
    };

    if (!payload.parentName || !payload.email || !payload.childAge || !payload.city || !payload.preferredWorkshop) {
      setSubmitStatus('error');
      setErrorMessage('Uzupełnij wszystkie wymagane pola.');
      return;
    }

    if (!payload.consent) {
      setSubmitStatus('error');
      setErrorMessage('Wymagana jest zgoda na przetwarzanie danych.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submit failed');
      }

      trackEvent(GA_EVENT_NAMES.FORM_SUBMIT, {
        source: 'landing_cta',
        preferred_workshop: payload.preferredWorkshop,
      });
      trackEvent(GA_EVENT_NAMES.SENT, {
        source: 'landing_cta',
        preferred_workshop: payload.preferredWorkshop,
      });
      trackEvent(GA_EVENT_NAMES.SALE, {
        source: 'landing_cta',
        preferred_workshop: payload.preferredWorkshop,
        value: 1,
        currency: 'PLN',
      });
      event.currentTarget.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form className="cta-form" onSubmit={handleSubmit}>
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

              <div className="form-group hp-field" aria-hidden="true">
                <label htmlFor="website">Twoja strona</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="form-group checkbox-group">
                <label htmlFor="consent" className="checkbox-label">
                  <input id="consent" name="consent" type="checkbox" required />
                  Wyrażam zgodę na przetwarzanie danych kontaktowych i danych dotyczących wieku dziecka w celu obsługi zgłoszenia.
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
                onClick={() => {
                  trackEvent(GA_EVENT_NAMES.CLICKED, { location: 'cta_form' });
                  trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'cta_form' });
                }}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Zapisz na listę'}
              </button>

              {submitStatus === 'success' && (
                <p className="form-success" role="status">
                  Dziękujemy! Zgłoszenie zostało zapisane.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="form-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="form-note">
                Oddzwonimy lub odpiszemy z dostępnymi terminami i szczegółami.
              </p>

              <a
                href="#program"
                className="btn btn-secondary btn-large"
                style={{ marginTop: '0.75rem' }}
                onClick={() => {
                  trackEvent(GA_EVENT_NAMES.CLICKED, { location: 'cta_secondary' });
                  trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'cta_secondary' });
                }}
              >
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

      <div className="mobile-sticky-cta">
        <a href="#zapisy" className="btn btn-primary btn-large" onClick={() => {
          trackEvent(GA_EVENT_NAMES.CLICKED, { location: 'mobile_sticky' });
          trackEvent(GA_EVENT_NAMES.CTA_CLICK, { location: 'mobile_sticky' });
        }}>Zapisz dziecko</a>
      </div>
    </section>
  );
}
