# Build Health Action Plan

Date: 2026-07-31

## Goal

Resolve all reproducible TypeScript, lint, and production-build errors in the current workspace without overwriting existing user changes.

## Tasks

- [x] Inspect current compiler, lint, and build diagnostics.
- [x] Fix reproducible source errors only.
- [x] Run linting on every application TypeScript and TSX source file: `yarn.cmd eslint src`.
- [x] Run `yarn.cmd tsc --noEmit`.
- [x] Run `yarn.cmd build`.
- [x] Confirm integration tests cannot run: no integration harness is currently present.
- [x] Confirm E2E tests cannot run: no E2E harness is currently present.

## Integration Test Plan

When a harness exists, verify the root page, Test A, Test B, enrollment API, and analytics event layer against real services.

## E2E Test Plan

When a harness exists, verify root -> Test A -> Test B navigation and GA4 event emission in a deployed test environment.

## Verification Update (2026-07-31)

- Fixed unescaped quote lint errors in Benefits.tsx and CourseDetails.tsx.
- Removed unused showAllTools state from CourseDetails.tsx.
- Source lint, TypeScript checking, and the production build all pass.

