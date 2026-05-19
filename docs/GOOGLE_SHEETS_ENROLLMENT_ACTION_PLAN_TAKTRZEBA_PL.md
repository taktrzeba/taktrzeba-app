# Google Sheets Enrollment Action Plan — taktrzeba.pl

Date: 2026-05-19
Owner: Engineering + Ops + Marketing
Status: Completed (code scope) with explicit external dependencies
Last Updated: 2026-05-19

## 1) Goal

Collect enrollment leads from `taktrzeba.pl` safely into Google Sheets with minimal complexity and fast operational usability.

Primary outcomes:
- submissions are reliably saved,
- parent/team can quickly review leads,
- data is not exposed client-side,
- setup remains maintainable for MVP scale.

## 2) Implementation Scope (MVP)

Use server-side Google Sheets write path:
- Landing form (`CTA`) -> app API route -> Google Sheets API.
- No direct browser-to-sheet writes.
- Use service account credentials via environment variables.

Collected fields (MVP only):
- parent name,
- email,
- child age,
- city,
- preferred workshop,
- submission timestamp.

## 3) Progress Tracker (2026-05-19)

Legend: `DONE` | `IN_PROGRESS` | `PENDING` | `BLOCKED`

### P0 — Spreadsheet + Access Setup

- [ ] `BLOCKED` Create dedicated Google Spreadsheet for enrollments (manual Google Workspace step required).
- [ ] `BLOCKED` Define worksheet columns and data order (depends on sheet creation).
  - [ ] `BLOCKED` `submitted_at`
  - [ ] `BLOCKED` `parent_name`
  - [ ] `BLOCKED` `email`
  - [ ] `BLOCKED` `child_age`
  - [ ] `BLOCKED` `city`
  - [ ] `BLOCKED` `preferred_workshop`
  - [ ] `BLOCKED` `source`
- [ ] `BLOCKED` Create Google Cloud service account for Sheets access (manual GCP setup required).
- [ ] `BLOCKED` Share spreadsheet with service account email (Editor role) (manual Google Sheets ACL step).
- [ ] `IN_PROGRESS` Store and secure credentials in local/prod env management.

### P1 — Backend Integration

- [x] `DONE` Add Google API dependency.
- [x] `DONE` Implement server utility for appending rows to Google Sheet.
- [x] `DONE` Add API endpoint for enrollment submit.
- [x] `DONE` Add server-side input validation and normalization.
- [x] `DONE` Add error handling and stable API response contract.

### P2 — Frontend Form Wiring

- [x] `DONE` Wire existing CTA form submit to API endpoint.
- [x] `DONE` Add loading/success/error UI states.
- [x] `DONE` Prevent duplicate submits while request is active.
- [x] `DONE` Add lightweight client validation matching server contract.

### P3 — Security + Compliance Baseline

- [x] `DONE` Confirm no service account key exposure to client bundles.
- [x] `DONE` Add anti-spam baseline (honeypot or rate-limit).
- [x] `DONE` Add/confirm consent text for processing parent/child data.
- [ ] `BLOCKED` Validate least-privilege permissions for Google service account (requires created service account).

### P4 — Operations + Reliability

- [x] `DONE` Add structured logging for submission outcomes.
- [ ] `BLOCKED` Add alerting/monitoring note for repeated failures (no monitoring stack in this repo yet).
- [x] `DONE` Document manual fallback process for temporary API failure.
- [x] `DONE` Define deduplication rule for repeated submissions.

## 4) Delivery Milestones

- Milestone 1: Spreadsheet and credentials ready.
- Milestone 2: Backend API successfully writes test row.
- Milestone 3: Landing form connected with successful UX feedback.
- Milestone 4: Security/compliance checks complete.
- Milestone 5: Tests and release checks complete.

## 5) Quality Gates (Required)

### Linting Tasks
- [ ] `IN_PROGRESS` Run `yarn lint`.
- [ ] `BLOCKED` Full lint is currently blocked by pre-existing unrelated component lint errors (`Benefits.tsx`, `CourseDetails.tsx`, `CourseSection.tsx`).
- [x] `DONE` Resolve lint errors in touched files.

### Type Checking Tasks
- [x] `DONE` Run `yarn tsc --noEmit`.
- [x] `DONE` Resolve TypeScript errors in touched files.

### Integration Test Tasks
- [ ] `BLOCKED` Run integration tests serially with repo standard command (integration test harness absent in this repository).
- [ ] `BLOCKED` Add/verify integration tests for enrollment API (no integration test framework/config present yet).
  - [ ] `BLOCKED` success path (valid payload -> append called -> 2xx)
  - [ ] `BLOCKED` validation path (invalid payload -> 4xx)
  - [ ] `BLOCKED` provider failure path (Sheets error -> 5xx)

### E2E Test Tasks
- [ ] `BLOCKED` Run E2E tests serially with repo standard command (E2E harness absent in this repository).
- [ ] `BLOCKED` Add/verify E2E flow for landing submit (no Playwright/Cypress setup present yet).
  - [ ] `BLOCKED` parent fills form and receives success state
  - [ ] `BLOCKED` invalid form shows validation state
  - [ ] `BLOCKED` repeat submit prevention while request is pending

## 6) Integration Test Plan

Objective:
- Verify server-side enrollment ingestion path to Google Sheets integration boundary behaves correctly and safely.

Scenarios:
- Valid submission returns success and attempts one append operation.
- Missing/invalid required fields return validation errors.
- External provider failure returns safe server error without leaking secrets.
- Row payload mapping preserves expected sheet column order.

Execution notes:
- Run tests serially.
- Keep timeouts at or below `30_000` ms.

## 7) E2E Test Plan

Objective:
- Verify real user can submit the landing form and receive clear feedback on success/failure states.

Scenarios:
- Happy path: complete form -> submit -> success confirmation visible.
- Validation path: submit with missing fields -> inline errors shown.
- Resilience path: simulated backend failure -> error message and retry path visible.
- UX path: mobile viewport form usability (tap targets, scrolling, submit button visibility).

Execution notes:
- Run tests serially.
- Keep waits/timeouts at or below `30_000` ms.
- Do not mock app code or internal APIs in E2E.

## 8) Environment Variables (planned)

- `GOOGLE_SHEETS_SPREADSHEET_ID`
- `GOOGLE_SHEETS_WORKSHEET_NAME`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

Notes:
- Keep all variables server-only.
- Never expose private key in client-side env vars.

## 9) Risks and Mitigations

- Risk: leaked service account key.
  - Mitigation: server-only env vars, no client imports, key rotation policy.
- Risk: silent write failures.
  - Mitigation: explicit API error handling + operational logging.
- Risk: duplicate/spam submissions.
  - Mitigation: dedupe key and anti-spam baseline.
- Risk: compliance ambiguity for minors.
  - Mitigation: explicit consent copy + policy alignment.

## 10) Definition of Done

- Landing form writes enrollment entries to Google Sheet via backend endpoint.
- Validation and error states are user-visible and tested.
- Credentials are secured and not exposed client-side.
- Required lint/typecheck/integration/E2E gates are completed.
- This action plan progress tracker is updated with final statuses and date.

## 11) Execution Update (2026-05-19)

Completed in this implementation pass:
- Added `googleapis` dependency using `yarn`.
- Implemented server-side enrollment module at `src/lib/enrollment.ts`.
- Implemented enrollment API route at `src/app/api/enroll/route.ts`.
- Connected CTA form submit flow to `/api/enroll` with loading/success/error UX.
- Added honeypot anti-spam input and consent checkbox.
- Added server-side validation + normalization + logging path.
- Added planned env var integration points for service account and sheet IDs.

Blocked external/manual items:
- Google Spreadsheet creation and sharing.
- Service account creation and least-privilege validation.
- Integration/E2E execution (no test harness exists in this repo yet).

Manual fallback rule (operations):
- If API writes fail temporarily, collect enrollment details via `kontakt@taktrzeba.pl`, then append missed records manually to the Google Sheet with original submission timestamp where available.

Deduplication rule (operations):
- Treat `(email + child_age + preferred_workshop + city)` submitted within 24 hours as one lead; keep latest row and mark earlier duplicates in an internal note column when spreadsheet operations are active.
