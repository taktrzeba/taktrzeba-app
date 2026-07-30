# Build Fix Action Plan

Date: 2026-07-30

## Scope

Restore a successful production build by resolving the homepage Server Component event-handler error and the deprecated metadata viewport configuration.

## Tasks

- [x] Identify the prerender failure on `/`.
- [x] Mark the interactive `Hero` component as a Client Component so its analytics click handlers are valid.
- [x] Move viewport settings from the `metadata` export to Next.js's `viewport` export.
- [x] Run linting: `yarn.cmd lint` (blocked by pre-existing errors in `Benefits.tsx` and `CourseDetails.tsx`).
- [x] Run TypeScript checking: `yarn.cmd tsc --noEmit`.
- [x] Confirm integration tests cannot run: no integration test harness exists.
- [x] Confirm E2E tests cannot run: no E2E test harness exists.
- [x] Run `yarn.cmd build` to confirm the production build.

## Verification Update (2026-07-30)

- `yarn.cmd tsc --noEmit` passed.
- `yarn.cmd build` passed, including homepage prerendering.
- `yarn.cmd lint` remains blocked by two pre-existing `react/no-unescaped-entities` errors outside this change.

## Integration Test Plan

No integration test harness is present. When added, verify the homepage renders and CTA analytics handlers remain available in the real runtime.

## E2E Test Plan

No E2E test harness is present. When added, verify the homepage loads and both hero CTA links navigate to their anchors.
