# 🛠️ Tydzień Rzemiosła - Landing Page

Profesjonalny landing page dla kursu "Tydzień Rzemiosła" - wakacyjnych kursów praktycznych dla młodzieży 14-16 lat.

## 🎯 Funkcje

- ✅ Pełna optymalizacja SEO (meta tags, structured data, sitemap)
- ✅ Responsywny design (mobile-first)
- ✅ 8 sekcji landing page:
  - Hero z CTA
  - Dlaczego ten kurs powstał
  - Format kursu
  - Program szczegółowy (4 zawody)
  - Korzyści dla uczestników
  - Bezpieczeństwo i prowadzący
  - Sekcja dla rodziców
  - Formularz zapisu + kontakt
- ✅ Semantyczny HTML5
- ✅ JSON-LD structured data dla wyszukiwarek
- ✅ Open Graph i Twitter Cards
- ✅ Accessibility (ARIA labels)
- ✅ Performance optimized

## 🚀 Szybki start

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Uruchomienie produkcji
npm start
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## 📁 Struktura projektu

```
webapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout z SEO metadata
│   │   ├── page.tsx            # Główna strona z JSON-LD
│   │   ├── globals.css         # Globalne style
│   │   └── sitemap.ts          # Automatyczny sitemap
│   └── components/
│       ├── Hero.tsx            # Sekcja hero
│       ├── WhyCourse.tsx       # Dlaczego kurs
│       ├── CourseFormat.tsx    # Format zajęć
│       ├── CourseProgram.tsx   # Program szczegółowy
│       ├── Benefits.tsx        # Korzyści
│       ├── Safety.tsx          # Bezpieczeństwo
│       ├── ForParents.tsx      # Dla rodziców
│       └── CTA.tsx             # Formularz zapisu
├── public/
│   └── robots.txt             # Konfiguracja robotów
└── README-SEO.md              # Dokumentacja SEO
```

## 🎨 Komponenty

### Hero
Sekcja główna z tytułem, hasłem i przyciskami CTA.

### WhyCourse
Wyjaśnia problem i rozwiązanie. Pokazuje grupę docelową.

### CourseFormat
Szczegóły organizacyjne: czas, grupy, forma zajęć.

### CourseProgram
4 szczegółowe karty zawodów:
- 🔧 Mechanik rowerowy
- 🪚 Stolarz
- 🚰 Hydraulik
- 🔌 Elektryk

### Benefits
Lista korzyści dla uczestników.

### Safety
Bezpieczeństwo, organizacja, informacje o prowadzących.

### ForParents
Argumenty dla rodziców, wyjaśnienie wartości kursu.

### CTA
Formularz kontaktowy i zapisy na kurs.

## 🔍 SEO

### Zaimplementowane:
- **Meta tags**: title, description, keywords
- **Open Graph**: Facebook, LinkedIn
- **Twitter Cards**: dedykowane meta tagi
- **JSON-LD**: Schema.org structured data typu Course
- **Sitemap**: automatycznie generowany
- **Robots.txt**: prawidłowa konfiguracja
- **Canonical URLs**: zapobiega duplikacji
- **Semantic HTML**: prawidłowa hierarchia
- **Mobile-friendly**: pełna responsywność

### Główne słowa kluczowe:
- kursy zawodowe dla młodzieży
- wakacyjne kursy praktyczne
- stolarka dla dzieci
- elektryka dla młodzieży
- hydraulika kurs
- mechanika rowerowa kurs
- kursy rzemieślnicze Polska

Szczegóły: [README-SEO.md](./README-SEO.md)

## 📱 Responsywność

Strona jest w pełni responsywna z breakpointami:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## 🎨 Style

### Kolory (CSS Variables):
```css
--primary-color: #2c5f2d (zielony)
--primary-dark: #1e4620
--secondary-color: #d97706 (pomarańczowy)
--success-color: #059669
```

### Typografia:
- Font główny: Geist Sans
- Font mono: Geist Mono
- Responsive font sizes

## ⚙️ Technologie

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: CSS Modules + Custom CSS
- **SEO**: Built-in Next.js metadata API
- **Deployment**: Vercel ready

## 📋 Przed publikacją

- [ ] Zaktualizuj URL w `layout.tsx` (metadataBase)
- [ ] Dodaj prawdziwy email i telefon w `CTA.tsx`
- [ ] Utwórz obrazy:
  - `/public/og-image.jpg` (1200x630px)
  - `/public/favicon.ico`
  - `/public/apple-touch-icon.png`
- [ ] Google Search Console verification
- [ ] Google Analytics setup
- [ ] Polityka prywatności
- [ ] Test na urządzeniach mobilnych
- [ ] Lighthouse audit (Performance, SEO, Accessibility)

## 🧪 Testowanie

```bash
# Build test
npm run build

# Lighthouse audit
npx lighthouse http://localhost:3001 --view
```

### Cele Lighthouse:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

## 📈 Analityka (do wdrożenia)

Dodaj w `layout.tsx`:
- Google Analytics 4
- Facebook Pixel (opcjonalnie)
- Hotjar (opcjonalnie)

## 🔒 RODO/GDPR

Przed publikacją dodaj:
- Polityka prywatności
- Banner cookies
- Regulamin
- Zgody marketingowe w formularzu

## 📞 Kontakt

Formularz znajduje się w sekcji #zapisy na stronie głównej.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
