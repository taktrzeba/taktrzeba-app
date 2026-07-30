# Analytics Action Plan — taktrzeba.pl

Date: 2026-07-30
Owner: Product + Engineering
Status: Planned
Last Updated: 2026-07-30

## 1) Main Goal

Add lightweight analytics to the landing page so the team can measure:
- traffic quality,
- CTA engagement,
- enrollment form starts/completions,
- FAQ and section interaction,
- basic conversion funnel performance.

## 2) Recommended Approach

Use Google Analytics 4 (GA4) with a small custom event layer for the most important actions.

Why this choice:
- simple setup for a Next.js app,
- works well for marketing pages,
- supports custom events for form and CTA tracking,
- easy to extend later with consent or Tag Manager.

## 3) Scope

### In scope
- add GA4 initialization for the production site,
- track primary CTA clicks,
- track contact/enrollment form start and submit,
- track FAQ expansion and key section views,
- keep implementation isolated and reusable.

### Out of scope for v1
- cookie consent banner,
- advanced funnel reporting,
- server-side event ingestion,
- multi-platform attribution.

## 4) Implementation Plan

### Phase 1 — Setup and configuration
- [ ] Add measurement ID to environment variables, for example:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- [ ] Add a small analytics helper module under `src/lib/` or `src/components/`.
- [ ] Initialize GA4 in the root layout only when the measurement ID is present.

### Phase 2 — Event tracking
- [ ] Track clicks on primary CTA buttons.
- [ ] Track clicks on secondary CTA buttons.
- [ ] Track enrollment/contact form start.
- [ ] Track successful form submission.
- [ ] Track FAQ open/close interactions.
- [ ] Track scroll depth to key sections (optional for v1).

### Phase 3 — Privacy and maintainability
- [ ] Keep analytics disabled locally unless explicitly configured.
- [ ] Document the environment variable in repo docs or a sample env file.
- [ ] Avoid hardcoded secrets or production IDs in source.
- [ ] Keep event names consistent and simple.

### Phase 4 — QA and rollout
- [ ] Validate events in development and preview environments.
- [ ] Confirm no console errors in the browser.
- [ ] Verify GA4 receives events after deployment.
- [ ] Monitor for regressions in page load performance.

## 5) Suggested File Areas

- [ ] `src/app/layout.tsx` — add analytics bootstrap
- [ ] `src/components/` — optional event-triggered wrappers for CTA/form/FAQ
- [ ] `src/lib/` — reusable analytics helpers and event naming
- [ ] `.env.local` / `.env.example` — store measurement ID safely

## 6) Quality Gates (Required)

### Linting Tasks
- [ ] Run `yarn lint`.
- [ ] Fix any issues in touched files before merge.

### Type Checking Tasks
- [ ] Run `yarn tsc --noEmit`.
- [ ] Fix any TypeScript issues before merge.

### Integration Test Tasks
- [ ] Run integration tests serially.
- [ ] Verify analytics bootstrap does not break page rendering.
- [ ] Verify events fire only when a valid measurement ID is configured.

### E2E Test Tasks
- [ ] Run E2E tests serially.
- [ ] Validate CTA click tracking.
- [ ] Validate form submission tracking.
- [ ] Validate FAQ interaction tracking.

## 7) Integration Test Plan

Objective:
- Ensure analytics integration does not break the app and that the event layer works in real runtime conditions.

Scenarios:
- Analytics disabled when no measurement ID is present.
- Analytics enabled when measurement ID is present.
- CTA click emits expected event payload.
- Form submit emits a successful conversion event.
- FAQ interaction emits a valid event without crashing the page.

Execution notes:
- Keep timeouts at or below `30_000` ms.
- Run serially.

## 8) E2E Test Plan

Objective:
- Validate the real user journey from landing page impression to key conversion actions.

Scenarios:
- Load the home page and confirm no analytics-related errors.
- Click the primary CTA and verify the event is emitted.
- Fill and submit the enrollment/contact form and verify the event is emitted.
- Open and close FAQ items and verify the interaction is tracked.

Execution notes:
- Keep waits/timeouts at or below `30_000` ms.
- Do not mock application code or internal APIs.

## 9) Risks and Notes

Risks:
- missing measurement ID in deployment environment,
- event naming inconsistencies,
- privacy expectations around tracking,
- browser ad blockers affecting analytics delivery.

Mitigations:
- keep the implementation low-risk and opt-in,
- use a small, explicit event list,
- document the setup clearly for deployment.
