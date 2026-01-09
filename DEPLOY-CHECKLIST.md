# ⚠️ DANE DO AKTUALIZACJI PRZED PUBLIKACJĄ

## 🔧 Krytyczne zmiany przed wdrożeniem

### 1. URL i domena

**Plik:** `src/app/layout.tsx`

```typescript
// Zmień na prawdziwy URL
metadataBase: new URL('https://tydzienrzemiosla.pl'),

// Dodaj prawdziwy token weryfikacyjny Google
verification: {
  google: 'twoj_token_weryfikacyjny',
},
```

### 2. Dane kontaktowe

**Plik:** `src/components/CTA.tsx`

```typescript
// Linia ~55-57
<p>Email: <a href="mailto:kontakt@tydzienmiosla.pl">kontakt@tydzienmiosla.pl</a></p>
<p>Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
```

**Plik:** `src/components/FAQ.tsx`

```typescript
// Linia ~73
<a href="tel:+48123456789" className="btn btn-secondary">Zadzwoń: +48 123 456 789</a>
```

### 3. Linki social media

**Plik:** `src/components/CTA.tsx`

```typescript
// Linia ~60-63
<div className="social-icons">
  <a href="https://facebook.com/tydzienmiosla" aria-label="Facebook">FB</a>
  <a href="https://instagram.com/tydzienmiosla" aria-label="Instagram">IG</a>
</div>
```

### 4. Obrazy do stworzenia

Utwórz w folderze `/public`:

#### og-image.jpg (1200x630px)
- Obraz dla social media
- Zawiera logo + hasło "Tydzień Rzemiosła"
- Format: JPG, zmaksymalizowana jakość
- Przykładowy tekst: "Wakacyjne kursy praktyczne dla młodzieży 14-16 lat"

#### favicon.ico (32x32px)
- Ikona strony
- Widoczna w zakładce przeglądarki
- Format: ICO

#### apple-touch-icon.png (180x180px)
- Ikona dla iOS
- Format: PNG

### 5. Formularzu kontaktowy - backend

**Plik:** `src/components/CTA.tsx`

Dodaj obsługę wysyłania formularza:

```typescript
// Przykład z użyciem emailjs lub własnego API
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Pobierz dane z formularza
  const formData = new FormData(e.target as HTMLFormElement);
  
  // Wyślij na backend lub użyj serwisu email
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    
    if (response.ok) {
      alert('Dziękujemy za zgłoszenie!');
    }
  } catch (error) {
    alert('Wystąpił błąd. Spróbuj ponownie.');
  }
};

// Dodaj do formularza
<form className="cta-form" onSubmit={handleSubmit}>
```

### 6. Google Analytics

**Plik:** `src/app/layout.tsx`

Dodaj w `<head>`:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-TWOJ_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TWOJ_ID');
  `}
</Script>
```

### 7. Polityka prywatności

Utwórz stronę: `src/app/polityka-prywatnosci/page.tsx`

```typescript
export default function PrivacyPolicy() {
  return (
    <div className="container">
      <h1>Polityka Prywatności</h1>
      {/* Treść polityki prywatności zgodna z RODO */}
    </div>
  );
}
```

### 8. Banner cookies

Dodaj bibliotekę do obsługi cookies (np. react-cookie-consent):

```bash
npm install react-cookie-consent
```

```typescript
import CookieConsent from "react-cookie-consent";

<CookieConsent
  location="bottom"
  buttonText="Akceptuję"
  declineButtonText="Odrzuć"
  cookieName="tydziemiosla-consent"
  style={{ background: "#2c5f2d" }}
  buttonStyle={{ background: "#fff", color: "#2c5f2d" }}
>
  Ta strona wykorzystuje ciasteczka (cookies) w celu poprawy komfortu użytkowania.
  <a href="/polityka-prywatnosci">Dowiedz się więcej</a>
</CookieConsent>
```

### 9. Cennik

Dodaj cennik w sekcji CTA lub stwórz osobną sekcję:

```typescript
// src/components/Pricing.tsx
export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2>Cennik</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Pakiet Podstawowy</h3>
            <div className="price">1499 PLN</div>
            <ul>
              <li>5 dni kursu</li>
              <li>Wszystkie materiały</li>
              <li>Ubezpieczenie</li>
            </ul>
          </div>
          {/* Więcej pakietów... */}
        </div>
      </div>
    </section>
  );
}
```

### 10. Harmonogram terminów

Dodaj w `src/components/CTA.tsx` lub osobna sekcja:

```typescript
const terminy = [
  { data: "1-5 lipca 2026", miejsca: 8 },
  { data: "8-12 lipca 2026", miejsca: 3 },
  { data: "15-19 lipca 2026", miejsca: 10 },
  // ...
];
```

## 📋 Checklist przed wdrożeniem

- [ ] URL w `layout.tsx` zaktualizowany
- [ ] Email i telefon zaktualizowane
- [ ] Obrazy utworzone (og-image, favicon, apple-touch-icon)
- [ ] Google Analytics dodany
- [ ] Google Search Console zweryfikowany
- [ ] Formularz kontaktowy działa
- [ ] Polityka prywatności dodana
- [ ] Banner cookies wdrożony
- [ ] Cennik dodany
- [ ] Terminy kursów zaktualizowane
- [ ] Linki social media działają
- [ ] Test na mobile (Chrome DevTools)
- [ ] Lighthouse audit wykonany
- [ ] Sitemap działa (/sitemap.xml)
- [ ] robots.txt poprawny
- [ ] SSL certificate aktywny (HTTPS)

## 🚀 Wdrożenie

### Vercel (zalecane)
1. Połącz repozytorium GitHub z Vercel
2. Ustaw zmienne środowiskowe
3. Deploy automatyczny

### Własny serwer
```bash
npm run build
npm start
```

## 📞 Wsparcie techniczne

Po wdrożeniu monitoruj:
- Google Search Console
- Google Analytics
- Uptime strony
- Szybkość ładowania
- Formularze (czy działają)

---

**Ostatnia aktualizacja:** 9 stycznia 2026
