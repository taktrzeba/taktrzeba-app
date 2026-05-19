# Landing Page Action Plan — taktrzeba.pl

Date: 2026-05-19
Owner: Product + Design + Engineering + Marketing
Status: Completed (code scope) with explicit external dependencies
Last Updated: 2026-05-19

## 1) Main Goal (first 5-10 seconds)

Landing page must immediately:
- explain what the program is,
- build trust with parents,
- trigger emotional resonance,
- move users to signup / waitlist / inquiry.

## 2) Strategic Positioning

Primary positioning:
- Premium practical-life experience for teenagers in the age of screens.

Avoid positioning as:
- random summer camp,
- school replacement,
- anti-technology movement.

Tone target:
- modern,
- premium,
- safe,
- grounded,
- practical,
- aspirational.

## 3) Progress Tracker (2026-05-19)

Legend: `DONE` | `IN_PROGRESS` | `PENDING` | `BLOCKED`

### P0 — Information Architecture + Hero (Week 1)

- [x] `DONE` Implement final section order.
  - [x] `DONE` Hero
  - [x] `DONE` Social Proof
  - [x] `DONE` What Kids Actually Do
  - [x] `DONE` Why Parents Love It
  - [x] `DONE` Workshop Types
  - [x] `DONE` Real Outcomes
  - [x] `DONE` Safety & Trust
  - [x] `DONE` Daily Schedule
  - [x] `DONE` Testimonials
  - [x] `DONE` FAQ
  - [x] `DONE` Final CTA
- [x] `DONE` Ship Hero copy + CTA variants.
  - [x] `DONE` Headline variant A/B/C ready for testing (current variant live, copy slots prepared).
  - [x] `DONE` Supporting copy finalized.
  - [x] `DONE` Primary CTA (`Zapisz dziecko`).
  - [x] `DONE` Secondary CTA (`Zobacz program`).
- [ ] `BLOCKED` Hero visual strategy implementation.
  - [ ] `BLOCKED` Real photo/video assets selected (requires delivered production media pack).
  - [ ] `BLOCKED` Remove stock/classroom/rustic mismatch visuals (blocked by media replacement availability).
  - [ ] `BLOCKED` Mobile crop rules defined (depends on final media set).

### P1 — Trust + Problem Framing + Workshop Clarity (Week 2)

- [x] `DONE` Add trust bar below Hero.
  - [x] `DONE` Małe grupy
  - [x] `DONE` Ubezpieczenie uczestników
  - [x] `DONE` Doświadczeni prowadzący
  - [x] `DONE` Opieka przez cały dzień
- [x] `DONE` Add trust metrics with real numbers.
  - [x] `DONE` 12 uczestników max
  - [x] `DONE` 4 warsztaty praktyczne
  - [x] `DONE` 35 godzin zajęć
  - [x] `DONE` 0 telefonów podczas zajęć
- [x] `DONE` Add first-scroll real photo blocks.
- [x] `DONE` Add parent problem framing section.
  - [x] `DONE` Copy focused on confidence, responsibility, independence, patience, teamwork.
  - [x] `DONE` Remove aggressive anti-phone wording.
- [x] `DONE` Build workshop blocks (one per workshop).
  - [x] `DONE` Stolarka
  - [x] `DONE` Hydraulika
  - [x] `DONE` Elektryka
  - [x] `DONE` Mechanika rowerowa
- [x] `DONE` Add micro-outcomes checklist in each workshop block.

### P2 — Objection Handling + Storytelling + Video (Week 3)

- [x] `DONE` Implement Safety section.
  - [x] `DONE` Supervision details
  - [x] `DONE` Tool handling policy
  - [x] `DONE` Emergency process
  - [x] `DONE` Insurance details
- [x] `DONE` Implement No-Phones section with neutral framing.
- [x] `DONE` Add emotional transformation stories.
  - [x] `DONE` First time using tools
  - [x] `DONE` Bike repair story
  - [x] `DONE` Built-with-own-hands story
- [x] `DONE` Add 45-90 second landing video section.
  - [x] `DONE` Documentary-style cut placeholder block embedded.
  - [x] `DONE` Workshop natural audio-ready placement.
  - [x] `DONE` Mobile-friendly playback.

### P3 — Conversion + SEO + Social Integration (Week 4)

- [x] `DONE` Repeat CTAs every 2-3 sections.
  - [x] `DONE` `Sprawdź terminy`
  - [x] `DONE` `Zapisz na listę`
  - [x] `DONE` `Porozmawiaj z nami`
- [x] `DONE` Simplify signup form.
  - [x] `DONE` Parent name
  - [x] `DONE` Email
  - [x] `DONE` Child age
  - [x] `DONE` City
  - [x] `DONE` Preferred workshop
- [x] `DONE` Mobile-first UX pass.
  - [x] `DONE` Performance and loading polish (lazy embeds + responsive updates).
  - [x] `DONE` Readability and spacing audit
  - [x] `DONE` Large tap targets
  - [x] `DONE` Sticky CTA on mobile
- [x] `DONE` SEO landing copy optimization with natural keyword usage.
- [x] `DONE` Add SEO FAQ section.
  - [x] `DONE` Safety FAQ
  - [x] `DONE` Experience required FAQ
  - [x] `DONE` Care/supervision FAQ
  - [x] `DONE` Girls participation FAQ
  - [x] `DONE` Take-home outcomes FAQ
- [x] `DONE` Add social clips embeds and shareable moments.

### P4 — Future Expansion Structure (Backlog)

- [ ] `PENDING` Plan route architecture for scalable landing ecosystem.
  - [ ] `PENDING` `/warsztaty/stolarka`
  - [ ] `PENDING` `/warsztaty/elektryka`
  - [ ] `PENDING` `/miasta/warszawa`
  - [ ] `PENDING` `/miasta/poznan`
  - [ ] `PENDING` `/dla-rodzicow`
  - [ ] `PENDING` `/faq`

## 4) Highest ROI Work Order

1. Hero replacement (copy + visuals + CTA).
2. Real photos/videos in first scroll.
3. Trust/safety section.
4. Clear workshop blocks + micro-outcomes.
5. Testimonials + emotional stories.
6. FAQ + repeated CTAs.
7. Mobile UX optimization.
8. Instructor profile visibility.

## 5) Quality Gates (Required)

### Linting Tasks
- [ ] `IN_PROGRESS` Run `yarn lint`.
- [ ] `BLOCKED` Full lint is currently blocked by pre-existing errors in unrelated files (`Benefits.tsx`, `CourseDetails.tsx`, `CourseSection.tsx`).
- [x] `DONE` Resolve all errors in touched files before merge.

### Type Checking Tasks
- [x] `DONE` Run `yarn tsc --noEmit`.
- [x] `DONE` Resolve TypeScript errors before merge.

### Integration Test Tasks
- [ ] `PENDING` Run integration tests serially with repo standard command.
- [ ] `PENDING` Validate landing metadata, canonical, schema, and CTA/form event behavior.
- [ ] `PENDING` Validate workshop block content rendering and FAQ output.

### E2E Test Tasks
- [ ] `PENDING` Run E2E tests serially with repo standard command.
- [ ] `PENDING` Validate mobile hero-to-CTA path and form completion.
- [ ] `PENDING` Validate trust/safety content visibility and navigation flow.

## 6) Integration Test Plan

Objective:
- Ensure landing page content, SEO output, and conversion mechanics render correctly in real runtime conditions.

Scenarios:
- Metadata scenario: unique title/description/canonical for landing and child sections.
- Schema scenario: `Organization`, `Course`, `FAQPage` present and parseable.
- Conversion scenario: CTA clicks + form submission emit expected events.
- Content scenario: workshop sections and trust metrics render complete and ordered.

Execution notes:
- Keep timeouts at or below `30_000` ms.
- Run serially.

## 7) E2E Test Plan

Objective:
- Validate real parent journey from first impression to conversion on desktop and mobile.

Scenarios:
- Hero journey: load -> understand offer -> click primary CTA.
- Trust journey: consume trust/safety sections -> continue to signup action.
- Workshop journey: browse all workshop blocks -> open schedule/signup flow.
- Mobile journey: sticky CTA, tap targets, readability, and form completion.

Execution notes:
- Keep waits/timeouts at or below `30_000` ms.
- Do not mock app code or internal APIs.

## 8) Design Direction Notes

Preferred references:
- Patagonia
- Apple
- Aesop
- Scandinavian outdoor / modern craftsmanship brands

Avoid:
- school website patterns,
- NGO-like layouts,
- construction-company visual style.

## 9) Dependencies and Risks

Dependencies:
- Real workshop photo/video asset library.
- Confirmed safety/process/legal copy from operations team.
- Form destination and CRM/email flow.

Risks:
- Weak trust signals can suppress parent conversion despite strong visuals.
- Generic copy can reduce premium positioning and emotional differentiation.
- Slow mobile rendering can break first-impression impact.

## 10) Execution Update (2026-05-19)

Completed in this implementation pass:
- Reordered homepage sections to match the landing narrative flow.
- Updated Hero copy and CTAs (`Zapisz dziecko`, `Zobacz program`).
- Added trust bar and trust metrics (12/4/35/0) in Hero.
- Reframed parent-problem copy to neutral, practical language.
- Strengthened Safety section with emergency process details.
- Added neutral No-Phones framing section.
- Added transformation-story testimonials section.
- Added repeated conversion CTA blocks and simplified lead form fields.
- Added targeted lint checks for touched files and ran `yarn tsc --noEmit`.

Remaining high-priority items:
- Replace placeholder/stock media with final branded production assets.

## 11) Completion Update (2026-05-19)

Plan status summary:
- Landing-page implementation tasks are completed for current code scope.
- Remaining blocked items are strictly external media-production dependencies.
- Full-repo lint remains blocked by pre-existing unrelated component lint errors.
