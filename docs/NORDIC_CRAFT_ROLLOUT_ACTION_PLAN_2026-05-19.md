# Nordic Craft Rollout Action Plan — taktrzeba.pl

Date: 2026-05-19
Owner: Product + Design + Engineering
Status: In Progress
Last Updated: 2026-05-19

## Scope

Apply the Nordic Craft design system across the website, with priority on the landing page and shared UI primitives.

## Tasks

### 1) Global Token Rollout
- [ ] Update root color tokens to Nordic Craft palette.
- [ ] Align global typography defaults and readable body contrast.
- [ ] Align shared container spacing and section rhythm.

### 2) Shared Components Rollout
- [ ] Update shared button styles (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline`, `.btn-large`).
- [ ] Update form inputs and focus states to Nordic Craft rules.
- [ ] Update common card surfaces and neutral shadows.

### 3) Landing Page Priority Rollout
- [ ] Apply Nordic hero visual/typography/CTA styling while preserving readability.
- [ ] Apply Nordic surfaces to major landing sections (`for-parents`, `benefits`, `safety`, `cta`, `footer`).
- [ ] Align trust and metric blocks with Nordic contrast and tonal layering.

## Quality Gates (Required)

### Linting Tasks
- [ ] Run targeted lint on touched files.
- [ ] Confirm no new lint errors in touched TS/TSX files.

### Type Checking Tasks
- [ ] Run `yarn tsc --noEmit`.
- [ ] Confirm no TypeScript regressions.

### Integration Test Tasks
- [ ] Run integration tests serially (repo standard).
- [ ] Validate landing page renders key sections with expected semantic structure.
- [ ] Validate CTA form states (idle/success/error) still render correctly.

### E2E Test Tasks
- [ ] Run E2E tests serially (repo standard).
- [ ] Validate hero-to-CTA journey on desktop and mobile.
- [ ] Validate readability and interaction states on primary CTAs and form fields.

## Integration Test Plan

Objective:
- Verify Nordic Craft rollout preserves behavior and improves visual consistency on real runtime paths.

Scenarios:
- Page render scenario: hero, sections, footer, and form are visible and ordered.
- Form scenario: required fields, consent, and submit outcomes remain functional.
- Styling scenario: tokenized colors and states are applied to shared components.

Execution Notes:
- Keep timeouts/waits at or below `30_000` ms.
- Run serially.

## E2E Test Plan

Objective:
- Validate end-user conversion flow remains smooth after design-system rollout.

Scenarios:
- Mobile and desktop first-screen readability and CTA discoverability.
- CTA interaction and form completion path.
- Scroll through trust and safety sections with clear readable contrast.

Execution Notes:
- Keep timeouts/waits at or below `30_000` ms.
- Run serially against real app/backends.
