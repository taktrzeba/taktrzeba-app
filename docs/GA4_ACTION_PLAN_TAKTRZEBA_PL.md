# GA4 Action Plan — taktrzeba.pl

Date: 2026-07-30
Owner: Product + Engineering
Status: Implemented in code (pending production verification)
Last Updated: 2026-07-30

## 1) Goal

Add Google Analytics 4 (GA4) to the taktrzeba.pl website so the team can measure:
- page views,
- CTA clicks,
- enrollment/contact form starts and submissions,
- FAQ interactions,
- overall conversion behavior.

## 2) Scope

### In scope
  - add the GA4 tag snippet for measurement ID `G-3722JJKPZ9`,
- initialize GA4 in the Next.js app,
- track key conversion events,
- verify that analytics works in local and production environments.

### Out of scope for v1
- cookie consent banner,
- advanced attribution,
- server-side event collection,
- complex funnel reporting.

## 3) Implementation Plan

### Phase 1 — GA4 setup
- [x] Confirm the GA4 property and stream are created for `https://taktrzeba.pl`.
- [x] Use measurement ID `G-3722JJKPZ9` as the production ID.
- [x] Add the ID to environment variables for safe configuration, for example:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-3722JJKPZ9`

### Phase 2 — App integration
- [x] Add the GA4 bootstrap snippet to the app shell in `src/app/layout.tsx`.
- [x] Ensure the script loads only when a measurement ID is configured.
- [x] Avoid breaking the existing SEO and layout setup.

### Phase 3 — Event tracking
- [x] Track clicks on the main CTA buttons.
- [x] Track clicks on secondary CTA buttons.
- [x] Track contact/enrollment form start.
- [x] Track successful form submission.
- [x] Track FAQ open/close interactions.
- [ ] Optionally track scroll depth to key sections.

### Phase 4 — Verification and rollout
- [x] Verify the tag loads locally.
- [ ] Confirm events appear in GA4 Realtime reports after deployment.
- [x] Check browser console for errors.
- [ ] Validate the site in production after deployment.

## 4) Suggested Files to Update

- [x] `src/app/layout.tsx` — add GA4 initialization and script injection
- [x] `src/components/` — attach event handlers for CTA/form/FAQ interactions
- [x] `src/lib/` — reusable analytics helpers and event naming
- [x] `.env.local` or `.env.example` — store the measurement ID safely

## 5) Example GA4 Snippet to Use

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3722JJKPZ9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-3722JJKPZ9');
</script>
```

## 6) Quality Gates (Required)

### Linting Tasks
- [x] Run `yarn lint`.
- [x] Fix any issues in touched files before merge.

### Type Checking Tasks
- [x] Run `yarn tsc --noEmit`.
- [x] Fix any TypeScript issues before merge.

### Integration Test Tasks
- [x] Run integration tests serially.
- [x] Verify the GA4 script does not break page rendering.
- [x] Verify analytics initializes only when a valid measurement ID is present.

### E2E Test Tasks
- [x] Run E2E tests serially.
- [x] Validate CTA click tracking.
- [x] Validate form submission tracking.
- [x] Validate FAQ interaction tracking.

## 7) Integration Test Plan

Objective:
- Ensure GA4 integration works in real runtime conditions without breaking the app.

Scenarios:
- GA4 loads correctly when a measurement ID is present.
- The app renders normally when analytics is disabled locally.
- CTA clicks emit a custom event.
- Form submit emits a conversion event.

Execution notes:
- Keep timeouts at or below `30_000` ms.
- Run serially.

## 8) E2E Test Plan

Objective:
- Validate the real user journey from page load to conversion actions.

Scenarios:
- Load the homepage and confirm no analytics-related errors.
- Click a primary CTA and verify the event is emitted.
- Submit the contact/enrollment form and verify the event is emitted.
- Open and close FAQ items and verify the interaction is tracked.

Execution notes:
- Keep waits/timeouts at or below `30_000` ms.
- Do not mock application code or internal APIs.
