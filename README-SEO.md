# SEO - Dokumentacja dla Tydzień Rzemiosła

## 🎯 Zaimplementowane optymalizacje SEO

### 1. Meta Tags
- **Title**: Zoptymalizowany tytuł z kluczowymi słowami (< 60 znaków)
- **Description**: Przekonujący opis (< 160 znaków)
- **Keywords**: Obszerna lista słów kluczowych dla polskiego rynku
- **Open Graph**: Pełna integracja dla media społecznościowe (Facebook, LinkedIn)
- **Twitter Cards**: Dedykowane meta tagi dla Twittera
- **Canonical URL**: Zapobiega duplikacji treści

### 2. Structured Data (JSON-LD)
Implementacja Schema.org dla:
- Type: Course
- Provider: Organization
- Audience: Educational
- Offers: Pricing information
- Instance details: Duration, language, mode

### 3. Semantic HTML
- Prawidłowa hierarchia nagłówków (H1 → H2 → H3)
- Znaczniki `<article>` dla kart kursów
- Znaczniki `<section>` dla różnych sekcji
- Atrybuty `lang="pl"` dla języka polskiego
- ARIA labels dla accessibility

### 4. Performance
- Lazy loading dla komponentów
- Optymalizacja CSS (bez zbędnych klas)
- Minimalna ilość JavaScript
- Responsive images ready

### 5. Technical SEO
- **robots.txt**: Prawidłowa konfiguracja crawlingu
- **sitemap.xml**: Automatycznie generowany przez Next.js
- **Canonical URLs**: Zapobiega duplikacji
- **Mobile-friendly**: Pełna responsywność
- **HTTPS ready**: Bezpieczne połączenie

## 📊 Kluczowe słowa (Keywords)

### Główne
- kursy zawodowe dla młodzieży
- wakacyjne kursy praktyczne
- kursy rzemieślnicze Polska
- nauka zawodu dla młodzieży

### Długi ogon (Long-tail)
- praktyczne kursy wakacyjne dla młodzieży 14-16 lat
- stolarka dla dzieci kurs
- elektryka dla młodzieży kurs praktyczny
- hydraulika kurs dla początkujących
- mechanika rowerowa nauka
- kursy bez telefonów dla młodzieży

### Lokalne (do rozszerzenia)
- kursy zawodowe Warszawa
- wakacyjne kursy młodzieży Kraków
- stolarka dla dzieci Poznań
- [dodaj więcej miast według potrzeb]

## 🔍 Google Search Console - Następne kroki

1. **Zweryfikuj własność domeny**
   - Dodaj meta tag weryfikacyjny w `layout.tsx` (miejsce przygotowane)
   - Lub użyj weryfikacji DNS

2. **Prześlij sitemap**
   ```
   https://tydzienrzemiosla.pl/sitemap.xml
   ```

3. **Monitoruj**
   - Core Web Vitals
   - Mobile usability
   - Index coverage
   - Search queries

## 📱 Social Media Optimization

### Open Graph (Facebook, LinkedIn)
- og:title ✅
- og:description ✅
- og:image ✅ (wymaga utworzenia obrazu 1200x630px)
- og:url ✅
- og:type ✅
- og:locale ✅

### Twitter Cards
- twitter:card ✅
- twitter:title ✅
- twitter:description ✅
- twitter:image ✅

### Rekomendacje obrazów
Utwórz w folderze `/public`:
- `og-image.jpg` (1200x630px) - dla social media
- `favicon.ico` (32x32px) - ikona strony
- `apple-touch-icon.png` (180x180px) - dla iOS

## 🎨 Sugerowane obrazy do stworzenia

1. **Hero image**: Młodzież pracująca z narzędziami
2. **Course cards**: Ikony lub zdjęcia dla każdego kursu
3. **Social media**: Grafika 1200x630px z logo i hasłem

## 📈 Analityka - do wdrożenia

### Google Analytics 4
Dodaj w `layout.tsx`:
```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Facebook Pixel (opcjonalnie)
Dla remarketingu i śledzenia konwersji

## ✅ Checklist przed publikacją

- [ ] Zaktualizuj `metadataBase` URL w `layout.tsx`
- [ ] Dodaj prawdziwy numer telefonu i email w CTA
- [ ] Utwórz obrazy: og-image.jpg, favicon.ico
- [ ] Zweryfikuj Google Search Console
- [ ] Dodaj Google Analytics
- [ ] Przetestuj na mobile (Lighthouse)
- [ ] Sprawdź linki wewnętrzne
- [ ] Utwórz stronę Polityka Prywatności
- [ ] Dodaj RODO/GDPR compliance
- [ ] Przetestuj formularz kontaktowy

## 🚀 Wydajność

Sprawdź przed publikacją:
```bash
npm run build
npm run start
```

Przetestuj w Lighthouse:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

## 📞 Kontakt i wsparcie

Po wdrożeniu monitoruj:
- Pozycje w Google (Search Console)
- Ruch organiczny (Analytics)
- Współczynnik konwersji z formularza
- Czas na stronie i bounce rate
