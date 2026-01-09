# 🎨 Animacje i Efekty Wizualne - Dokumentacja

## 📋 Przegląd zaimplementowanych animacji

### ✨ Animacje CSS (@keyframes)

#### 1. **fadeIn** - Płynne pojawianie się
```css
Zastosowanie: Główne elementy sekcji
Efekt: Pojawia się z przezroczystości + ruch w górę
Czas: 0.8s
```

#### 2. **slideInLeft / slideInRight** - Wjazd z boku
```css
Zastosowanie: Karty kursów, sekcje
Efekt: Element wjeżdża z lewej/prawej strony
Czas: 0.8s
```

#### 3. **scaleIn** - Powiększanie się
```css
Zastosowanie: Ikony, buttony
Efekt: Element powiększa się z centrum
Czas: 0.6s
```

#### 4. **float** - Unoszenie się
```css
Zastosowanie: Ikona emoji w hero, tło
Efekt: Delikatne unoszenie góra-dół
Czas: 3s (infinite)
```

#### 5. **pulse** - Pulsowanie
```css
Zastosowanie: Przyciski przy hover
Efekt: Delikatne powiększanie i zmniejszanie
Czas: 0.5s
```

#### 6. **bounce** - Odbijanie
```css
Zastosowanie: Ikony
Efekt: Element podskakuje
Czas: 2s (infinite)
```

#### 7. **shimmer** - Połysk
```css
Zastosowanie: Skeleton loading
Efekt: Animowany gradient przesuwający się
Czas: 2s (infinite)
```

#### 8. **reveal** - Odsłanianie obrazów
```css
Zastosowanie: Obrazy w kartach
Efekt: Kolorowy overlay przesuwa się przez obraz
Czas: 1.2s
```

---

## 🎬 Komponenty z animacjami

### Hero Section
**Animacje:**
- ✅ Fade in dla tytułu (z delay)
- ✅ Float animation dla emoji 🛠️
- ✅ Gradient background z SVG pattern
- ✅ Smooth gradient overlay na dole
- ✅ Staggered animation dla CTA buttons

**Efekty:**
- Parallax background pattern
- Animated gradient

### Course Program Cards
**Animacje:**
- ✅ Intersection Observer - cards pojawiają się przy scrollu
- ✅ Hover effect - karta podnosi się i powiększa
- ✅ Shimmer effect - gradient przesuwa się przez kartę
- ✅ Image zoom przy hover

**Efekty:**
- Smooth shadow transitions
- Border color change
- Image scale transform

### Benefits Section
**Animacje:**
- ✅ Staggered reveal - każdy benefit z delay
- ✅ Slide from bottom przy scroll
- ✅ Hover effect - translateX + border width

**Efekty:**
- Smooth color transitions
- Shadow enhancement

### Gallery Section
**Animacje:**
- ✅ Grid items fade in przy scroll
- ✅ Image zoom na hover
- ✅ Overlay slide up z opisem
- ✅ Card lift effect

**Efekty:**
- Gradient overlay
- Smooth image transforms
- Shadow transitions

### FAQ Section
**Animacje:**
- ✅ Accordion expand/collapse
- ✅ Icon rotation przy otwarciu
- ✅ Fade in dla odpowiedzi

**Efekty:**
- Smooth height transitions
- Border color changes

---

## 🔄 Scroll Animations

### Intersection Observer
**Wykorzystanie:**
- Wykrywa gdy element wchodzi w viewport
- Dodaje klasę `.visible` do elementów z klasą `.animate-on-scroll`
- Threshold: 0.1 (10% elementu musi być widoczne)

**Komponenty używające:**
- CourseProgram
- WhyCourse
- Benefits
- Gallery
- FAQ

### Scroll Progress Bar
**Funkcjonalność:**
- Zielono-pomarańczowy gradient
-Fixed na górze strony
- Pokazuje % przewinięcia
- Smooth transitions

### Parallax Effect
**Implementacja:**
- Background pattern w Hero
- Różne prędkości dla różnych warstw
- Data attribute: `data-speed`

---

## 🎯 Hover Effects

### Buttons
```css
Primary:
- Transform: translateY(-2px)
- Shadow enhancement
- Pulse animation
- Background color darken

Secondary:
- Fill animation
- Border to background transition
```

### Course Cards
```css
- Transform: translateY(-8px) scale(1.01)
- Box shadow: 0 12px 32px
- Border color change
- Shimmer overlay effect
- Image zoom: scale(1.05)
```

### Gallery Items
```css
- Transform: translateY(-8px) scale(1.02)
- Image zoom: scale(1.1)
- Overlay reveal
- Shadow enhancement
```

### Benefit Items
```css
- Transform: translateX(8px)
- Border width increase: 4px → 8px
- Shadow color transition
```

---

## 🖼️ Obrazy

### Źródła obrazów (Unsplash)
**Course Cards:**
1. Mechanik rowerowy: `photo-1485965120184-e220f721d03e`
2. Stolarka: `photo-1513828583688-c52646db42da`
3. Hydraulika: `photo-1607472586893-edb57bdc0e39`
4. Elektryka: `photo-1621905251918-48416bd8575a`

**Gallery (6 zdjęć):**
- Młodzież z narzędziami
- Warsztat
- Praca zespołowa
- Projekty
- Koncentracja
- Uczenie się

**Parametry obrazów:**
- Width: 800px / 600px
- Height: 400px
- Fit: crop
- Optymalizacja: Next.js Image component
- Priority: true dla pierwszego obrazu

### Wymiana obrazów
Aby wymienić na własne zdjęcia:
1. Umieść w `/public/images/`
2. Zmień `src` w komponentach
3. Użyj Next.js Image dla optymalizacji

---

## 📱 Responsywność animacji

### Mobile (<768px)
- Reduced animation duration
- Simplified transforms
- No parallax (performance)
- Stacking animations reduced

### Tablet (768px-1024px)
- Full animations
- Reduced parallax speed
- Grid adjustments

### Desktop (>1024px)
- All effects enabled
- Full parallax
- Enhanced hover states

---

## ⚡ Performance

### Optymalizacje:
- ✅ `will-change` dla animowanych elementów
- ✅ CSS transforms zamiast position/top/left
- ✅ `requestAnimationFrame` dla scroll
- ✅ Throttling/debouncing scroll events
- ✅ Lazy loading obrazów (Next.js)
- ✅ IntersectionObserver zamiast scroll listeners

### GPU Acceleration:
```css
transform: translateZ(0);
will-change: transform, opacity;
```

---

## 🎨 Customizacja

### Zmiana czasu trwania animacji
W `globals.css`:
```css
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  /* Zmień 0.8s na wybraną wartość */
}
```

### Dodanie nowej animacji
1. Zdefiniuj @keyframes w `globals.css`
2. Stwórz utility class
3. Dodaj do elementu
4. Opcjonalnie: użyj z Intersection Observer

### Wyłączenie animacji
Dodaj w `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 🔧 Debugowanie

### Sprawdzenie animacji:
```javascript
// W DevTools Console
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  console.log(el.classList.contains('visible'));
});
```

### Wyłączenie intersection observer:
```javascript
// W komponencie
const DISABLE_ANIMATIONS = true;
if (!DISABLE_ANIMATIONS) {
  // kod z observer
}
```

---

## 📊 Efekt końcowy

### Statystyki:
- **20+ różnych animacji CSS**
- **5 typów hover effects**
- **Intersection Observer w 5 komponentach**
- **Scroll progress bar**
- **Parallax background**
- **10 obrazów z Unsplash**
- **Smooth transitions wszędzie**

### User Experience:
- ✨ Strona wydaje się żywa
- 📱 Responsywne na wszystkich urządzeniach
- ⚡ Płynne i wydajne
- 👀 Przykuwające uwagę
- 🎯 Profesjonalne wrażenie

---

## 🚀 Dalszy rozwój

### Możliwe ulepszenia:
- [ ] GSAP dla bardziej zaawansowanych animacji
- [ ] Lottie animations dla ilustracji
- [ ] Video backgrounds w hero
- [ ] 3D transforms dla kart
- [ ] Particle effects
- [ ] Smooth page transitions
- [ ] Loading animations między sekcjami
- [ ] Animated SVG icons
- [ ] Scroll-triggered counters
- [ ] Timeline animations

---

**Ostatnia aktualizacja:** 9 stycznia 2026
**Wersja:** 2.0 (z animacjami i obrazami)
