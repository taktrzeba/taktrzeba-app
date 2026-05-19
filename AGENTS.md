# Agents

Primary instructions for agents live in this file and any existing files under `docs/`.

Required workflow instruction:
- Before planning or implementation, read all relevant files in `docs/` for the feature being changed.
- If docs are missing or conflicting, call that out explicitly in your response and proceed with the safest minimal change.
- For any documentation-related change (new docs, plan updates, summaries, changelogs, issue notes), include an explicit date stamp in the updated content (prefer `YYYY-MM-DD`).
- All action plans must be created and maintained as markdown files under `docs/` (for example, `docs/<FEATURE>_ACTION_PLAN.md`).
- Make sure every change is the most minimalistic set of changes to meet the requirements.
- **Always strive for the simplest solution** that meets the requirement: fewer fields, tables, and code paths beat clever generalizations. Prefer one clear flag or column over parallel representations (e.g. timestamp + derived boolean + provenance string) unless a concrete need (audit, compliance, reporting) is spelled out. When in doubt, choose the smaller design and document the trade-off only if you intentionally keep extra complexity.
- **Package manager preference:** always use `yarn` for dependency management and scripts in this repository (avoid `npm`, `pnpm`, and other package managers unless explicitly requested by the user).
- **Action plan quality gates (required):** every action plan must include explicit tasks/subtasks for 1) linting, 2) TypeScript type checking (`yarn tsc --noEmit` or repo equivalent), 3) integration tests, and 4) E2E tests.
- **Default action plan standard (required):** all new action plans must include explicit Integration Test Plan and E2E Test Plan sections by default.

## Prisma

- Any change to **`prisma/schema.prisma`** (models, fields, relations, enums, `@@map`, etc.) must be followed by regenerating the client: **`yarn prisma generate`** (alias: **`yarn prisma:generate`**). Do this before **`yarn build`**, **`yarn test`**, or **`yarn dev`** if the schema changed, so **`@prisma/client`** types and query API match the database model. If you use **`yarn prisma migrate dev`**, it runs generate as part of the flow; after manual edits or **`db push`**, run **`yarn prisma generate`** explicitly whenever you are unsure.

## Tests for every change

- For substantive code changes (features, bug fixes, refactors that alter behavior): add or update **integration** tests under **`tests/integration/**`** and, when the change affects UX, navigation, or multi-step flows, **E2E** tests under **`tests/e2e/**`**. Skip only for purely mechanical edits (comments, formatting) when behavior is unchanged.
- Added 2026-04-29: For type/shape boundary bugs (for example provider/API/external payload mismatches like `number` vs `string` IDs), add both 1) an **integration** regression test that executes the real persistence path and 2) an **E2E** regression test that covers the affected user workflow entrypoint.
- Added 2026-04-30: For touch/scroll E2E assertions, do **not** expect synthetic `TouchEvent` dispatch to produce native page scrolling (`window.scrollY` changes). Use one of: 1) assert whether handlers intercept the event (`defaultPrevented`) when testing JS behavior, or 2) use real Playwright gesture input when validating native browser scrolling.
- Added 2026-04-30: For full-suite reliability, run **integration** and **E2E** suites **serially** (never in parallel shells). Before each full run, do a preflight: `docker compose up -d`, confirm Next server reachability (for integration API tests), and confirm Cognito/AWS env vars are set. If failures show infra/auth signatures (`Can't reach database server`, DNS `EAI_AGAIN`, Cognito `Incorrect username or password` / `Password attempts exceeded`), treat as environment state first: reseed/reset test users, rerun the failing file in isolation, then rerun the full suite before changing app code.
- **Timeouts (integration + E2E):** **Never** set any test or wait **above 30 seconds** (`30_000` ms). That is the **hard ceiling** in **`vitest.config.ts`** and **`playwright.config.ts`** — **do not raise it**. **Prefer** much shorter waits.

## Mocking policy

- **Default:** avoid mocks. Prefer real collaborators and real infrastructure documented for this repo.
- **E2E (Playwright):** do **not** mock application code or HTTP to our own APIs. E2E runs against a real app instance and configured backends.
- **Integration tests:** use a **real Postgres** database. For code paths that use Cognito or external integrations, integration tests should exercise real services/sandboxes instead of mocked `fetch` or a fake Prisma client—unless an existing documented exception applies (for example Stripe **`sk_test_`**, Mailpit for SMTP).
- **Unit tests only:** mocks are allowed **only** to isolate a **single function or small pure unit** when testing that unit in isolation is the goal. Do not mock internal modules broadly to make an integration-style test “pass”; that belongs in **`tests/integration/**`** with real boundaries instead.

Keep this file as an index; place detailed guidance in `docs/` where it exists.
