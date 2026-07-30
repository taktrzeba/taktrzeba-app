# TakTrzeba - Landing Page

Strona marketingowa projektu TakTrzeba (taktrzeba.pl) dla warsztatow praktycznych dla mlodziezy 14-16 lat.

Last updated: 2026-07-30

## Overview

Projekt zawiera:
- nowoczesny landing page z sekcjami sprzedazowymi,
- formularz zapisow z backendem API,
- integracje z Google Sheets po stronie serwera,
- integracje z Google Analytics 4,
- SEO (metadata, Open Graph, sitemap, robots),
- osobne podstrony informacyjne (np. bezpieczenstwo, kontakt, regulamin, polityka prywatnosci).

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- ESLint 9
- CSS globalne + komponentowe style
- Google Sheets API (`googleapis`)

## Getting Started

W tym repo domyslnym managerem pakietow jest `yarn`.

```bash
yarn install
yarn dev
```

Aplikacja domyslnie uruchamia sie na:
- http://localhost:3000

### Build produkcyjny

```bash
yarn build
yarn start
```

## Current Status

- Landing page oraz podstrony informacyjne sa wdrozone w kodzie.
- Integracja GA4 jest zaimplementowana i wymaga potwierdzenia eventow po deployu produkcyjnym.
- Integracja Google Sheets dla zapisow jest zaimplementowana po stronie serwera, ale wymaga skonfigurowanych danych Google Cloud/Sheets.
- Zewnetrzne kroki publikacyjne i operacyjne sa opisane w dokumentach wdrozeniowych.

## Scripts

```bash
yarn dev      # next dev
yarn build    # next build
yarn start    # next start
yarn lint     # eslint
yarn tsc --noEmit  # type check
```

## Project Structure

```text
src/
  app/
    api/enroll/route.ts
    bezpieczenstwo/page.tsx
    design-system/page.tsx
    dla-rodzicow/page.tsx
    kontakt/page.tsx
    o-nas/page.tsx
    polityka-prywatnosci/page.tsx
    regulamin/page.tsx
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Analytics.tsx
    CTA.tsx
    FAQ.tsx
    Hero.tsx
    Testimonials.tsx
    ...
  data/
    coursesSyllabus.ts
  hooks/
    useScrollAnimation.ts
  lib/
    analytics.ts
    enrollment.ts
```

## Environment Variables

Ustaw w `.env.local` (wartosci przykladowe):

```bash
# GA4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-3722JJKPZ9
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=twoj_token_weryfikacyjny

# Google Sheets (server-side)
GOOGLE_SHEETS_SPREADSHEET_ID=...
GOOGLE_SHEETS_WORKSHEET_NAME=...
GOOGLE_SERVICE_ACCOUNT_EMAIL=...
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Uwagi:
- zmienne z prefiksem `NEXT_PUBLIC_` sa widoczne po stronie klienta,
- dane Google Service Account musza pozostac tylko po stronie serwera.
- wartosc `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` zwykle wymaga zachowania sekwencji `\n` w jednej linii.

## Enrollment Flow

1. Uzytkownik wypelnia formularz w sekcji CTA.
2. Frontend wysyla dane do `POST /api/enroll`.
3. Serwer waliduje payload.
4. Po poprawnej walidacji rekord jest dopisywany do Google Sheets.

Kod odpowiedzialny za zapis i walidacje:
- `src/lib/enrollment.ts`
- `src/app/api/enroll/route.ts`

## Analytics (GA4)

GA4 jest ladowane w `src/app/layout.tsx`, a helpery eventow sa w:
- `src/lib/analytics.ts`
- `src/components/Analytics.tsx`

Domyslny fallback measurement ID jest zdefiniowany w kodzie, ale rekomendowane jest ustawienie `NEXT_PUBLIC_GA_MEASUREMENT_ID` w srodowisku.

## SEO i publikacja

Szczegolowe checklisty i plany:
- `README-SEO.md`
- `DEPLOY-CHECKLIST.md`
- `docs/GA4_ACTION_PLAN_TAKTRZEBA_PL.md`
- `docs/GOOGLE_SHEETS_ENROLLMENT_ACTION_PLAN_TAKTRZEBA_PL.md`
- `docs/LANDING_PAGE_ACTION_PLAN_TAKTRZEBA_PL.md`

## QA

Minimalne kroki przed wdrozeniem:

```bash
yarn lint
yarn tsc --noEmit
yarn build
```

Nastepnie:
- sprawdz podstrony i formularz zapisow,
- potwierdz eventy w GA4 Realtime,
- zweryfikuj sitemap (`/sitemap.xml`) i robots (`/robots.txt`).

## Deployment Notes

Przed publikacja sprawdz i uzupelnij:
- dane kontaktowe i social links,
- obrazy produkcyjne (`/public/og-image.jpg`, `favicon.ico`, `apple-touch-icon.png` lub ich odpowiedniki w aktualnej identyfikacji),
- token Google Search Console,
- dzialanie zapisu do Google Sheets na srodowisku produkcyjnym,
- eventy i konwersje w GA4 Realtime.

