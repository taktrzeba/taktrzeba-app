# Landing Navigation Action Plan

Date: 2026-07-30

## Goal

Replace the `/landing` content with a single button to Page 1 (`/test-a`) and Page 1 navigation with a single button to Page 2 (`/test-b`).

## Quality Gates

- [ ] Lint: `yarn.cmd lint`
- [ ] Type check: `yarn.cmd tsc --noEmit`
- [ ] Integration tests: no harness exists; run serially when available.
- [ ] E2E tests: no harness exists; run serially when available.

## Integration Test Plan

Verify the links render as `/landing` -> `/test-a` -> `/test-b`.

## E2E Test Plan

Verify users can click through `/landing` -> `/test-a` -> `/test-b`.
