# SEO Action Plan — taktrzeba.pl

Date: 2026-05-19
Owner: Marketing + Product + Engineering
Status: Draft (ready for execution)
Last Updated: 2026-05-19

## Progress Tracker (2026-05-19)

Legend: `DONE` | `IN_PROGRESS` | `PENDING` | `BLOCKED`

### Phase P0 — Technical + Trust Foundation

- [x] `DONE` Technical SEO audit (initial pass completed)
  - [x] `DONE` Indexing/crawlability check (`sitemap`, `robots`).
  - [x] `DONE` Canonical/metadata baseline check.
  - [ ] `PENDING` Core Web Vitals measurement baseline from production reports.
  - [ ] `PENDING` Mobile performance audit with PageSpeed report snapshot.
- [x] `DONE` Metadata standardization on key pages
  - [x] `DONE` Home metadata present.
  - [x] `DONE` Trust/legal pages have unique title/description/canonical.
  - [ ] `PENDING` OG/Twitter image and text optimization per each new trust/legal page.
- [ ] `IN_PROGRESS` Performance improvements
  - [ ] `PENDING` `next/image` migration for key media areas.
  - [ ] `PENDING` Font loading optimization pass.
  - [ ] `PENDING` Bundle size/client JS reduction pass.
  - [ ] `PENDING` CDN/cache header verification.
- [x] `DONE` Trust/legal pages published
  - [x] `DONE` `/o-nas`
  - [x] `DONE` `/kontakt`
  - [x] `DONE` `/dla-rodzicow`
  - [x] `DONE` `/bezpieczenstwo`
  - [x] `DONE` `/regulamin`
  - [x] `DONE` `/polityka-prywatnosci`
- [ ] `IN_PROGRESS` Baseline schema coverage
  - [x] `DONE` `Organization`
  - [x] `DONE` `LocalBusiness`
  - [x] `DONE` `Course` (home page JSON-LD)
  - [ ] `PENDING` `Event`
  - [ ] `PENDING` `FAQPage`

### Phase P1 — Content Clusters + Local SEO

- [ ] `PENDING` Launch `/poradnik/` content hub.
- [ ] `PENDING` Publish 20-30 parent-intent educational articles.
- [ ] `PENDING` Build skill clusters.
  - [ ] `PENDING` Stolarka cluster pages.
  - [ ] `PENDING` Hydraulika cluster pages.
  - [ ] `PENDING` Elektryka cluster pages.
  - [ ] `PENDING` Mechanika rowerowa cluster pages.
- [ ] `PENDING` Launch city pages.
  - [ ] `PENDING` `/warszawa`
  - [ ] `PENDING` `/poznan`
  - [ ] `PENDING` `/krakow`
- [ ] `PENDING` Google Business Profile setup and optimization.

### Phase P2 — Conversion + Distribution

- [ ] `PENDING` Create segmented conversion landing pages.
  - [ ] `PENDING` Parents.
  - [ ] `PENDING` Girls.
  - [ ] `PENDING` Boys.
  - [ ] `PENDING` Schools.
  - [ ] `PENDING` Sponsors.
- [ ] `PENDING` Add social proof modules.
- [ ] `PENDING` Add lead magnets and capture flow.
  - [ ] `PENDING` "7 sposobów na ograniczenie telefonu u nastolatka".
  - [ ] `PENDING` "Checklist wakacji bez ekranów".
- [ ] `PENDING` Start short-form cadence (TikTok/Shorts/Reels).
- [ ] `PENDING` Start YouTube SEO cadence.
- [ ] `PENDING` Start backlink outreach.

### Phase P3 — Programmatic + AI-Assisted Scale

- [ ] `PENDING` Introduce reusable SEO page templates.
- [ ] `PENDING` Create instructor entity pages (`/prowadzacy/[slug]`).
- [ ] `PENDING` Add AI-assisted SEO workflow.
  - [ ] `PENDING` Keyword clustering.
  - [ ] `PENDING` Content gap analysis.
  - [ ] `PENDING` FAQ ideation.
  - [ ] `PENDING` Internal linking suggestions.

### Quality Gates Progress

- [ ] `IN_PROGRESS` Linting gate
  - [ ] `BLOCKED` Full `yarn lint` pass (currently failing on pre-existing unrelated component lint errors).
  - [x] `DONE` Lint pass on changed SEO/trust files.
- [x] `DONE` Type checking gate
  - [x] `DONE` `yarn tsc --noEmit`.
- [ ] `PENDING` Integration tests gate
  - [ ] `PENDING` Execute serial integration run for SEO scenarios.
  - [ ] `PENDING` Validate metadata/schema/rendering assertions.
- [ ] `PENDING` E2E tests gate
  - [ ] `PENDING` Execute serial E2E run for trust/local/conversion flows.
  - [ ] `PENDING` Validate mobile and SEO-entry journeys.

### Integration Test Plan Progress

- [ ] `PENDING` Metadata scenario implemented + passing.
- [ ] `PENDING` Schema scenario implemented + passing.
- [ ] `PENDING` Local SEO scenario implemented + passing.
- [ ] `PENDING` Conversion scenario implemented + passing.

### E2E Test Plan Progress

- [ ] `PENDING` Parent journey implemented + passing.
- [ ] `PENDING` Local journey implemented + passing.
- [ ] `PENDING` Trust journey implemented + passing.
- [ ] `PENDING` Mobile performance/UX journey implemented + passing.

## Execution Update (2026-05-19)

Completed in this iteration:
- Technical SEO foundation:
  - Fixed `robots` sitemap domain to `https://taktrzeba.pl/sitemap.xml`.
  - Added `src/app/robots.ts` metadata route for consistent robots configuration.
  - Replaced fragment-only sitemap entries with crawlable URLs.
- Trust/legal foundation pages added:
  - `/o-nas`
  - `/kontakt`
  - `/dla-rodzicow`
  - `/bezpieczenstwo`
  - `/regulamin`
  - `/polityka-prywatnosci`
- Metadata and discoverability:
  - Added unique per-page metadata + canonical URL on each trust/legal page.
  - Added internal links to trust/legal pages in footer navigation.
- Structured data:
  - Added site-wide `Organization` + `LocalBusiness` JSON-LD in root layout.

Still pending from broader plan:
- Content cluster rollout (`/poradnik/`, 20-30 articles, skill clusters).
- Local SEO city pages (`/warszawa`, `/poznan`, `/krakow`, etc.).
- Conversion LP segmentation and lead magnet workflows.
- Distribution cadence (TikTok/Shorts/YouTube) and backlink outreach.

## Documentation Notes

- `AGENTS.md` references `docs/AGENT_INSTRUCTIONS.md` and `docs/DEFAULT_ACTION_PLAN_TEMPLATE.md`, but those files are currently missing in this workspace.
- This plan follows the safest minimal interpretation of the required structure and includes explicit quality gates, Integration Test Plan, and E2E Test Plan.

## 1) Goal and Positioning

Primary goal:
- Position `taktrzeba.pl` as the trusted practical education platform for teenagers in Poland and a parent-first alternative to screen-heavy activities.

Target positioning pillars:
- Practical skills for teenagers (stolarka, hydraulika, elektryka, mechanika rowerowa).
- Youth confidence and independence through real-world competence.
- Safe, transparent, and credible workshops for parents.
- Strong local visibility for physical workshop cities.

## 2) Success Metrics (6-month horizon)

- Organic clicks: +150% minimum.
- Non-brand keyword visibility: top 10 for at least 15 target queries.
- Organic lead submissions: 2x baseline.
- Average Core Web Vitals in good range on primary landing pages.
- Reviews and social proof growth: minimum 30 new verified parent/student reviews.

## 3) Scope and Priorities

### P0 (Weeks 1-4) — Technical + Trust Foundation

Tasks:
- Technical SEO audit (indexing, canonicals, sitemap, `robots.txt`, metadata, structured data, CWV, mobile UX).
- Standardize page metadata (unique title, description, canonical, OG image, Twitter cards).
- Improve performance (`LCP < 2.5s`, `CLS < 0.1`, `INP < 200ms`).
- Publish trust/legal pages:
  - `/o-nas`
  - `/kontakt`
  - `/regulamin`
  - `/bezpieczenstwo`
  - `/dla-rodzicow`
- Add baseline schemas:
  - `Organization`
  - `LocalBusiness`
  - `Course`
  - `Event`
  - `FAQPage`

Exit criteria:
- All trust pages are live and internally linked.
- Metadata coverage complete on priority pages.
- Structured data validation passes on key templates.

### P1 (Weeks 5-10) — Content Clusters + Local SEO

Tasks:
- Launch content hub: `/poradnik/`.
- Publish 20-30 parent-intent educational articles.
- Build skill clusters (minimum 5 pages per skill):
  - Stolarka
  - Hydraulika
  - Elektryka
  - Mechanika rowerowa
- Launch city pages:
  - `/warszawa`
  - `/poznan`
  - `/krakow`
- Set up and optimize Google Business Profile (photos, events, updates, schedule).

Exit criteria:
- Minimum 20 articles published and indexed.
- Minimum 3 city pages live with local relevance blocks.
- Internal linking graph completed (hub -> cluster -> service/city pages).

### P2 (Weeks 11-16) — Conversion + Distribution

Tasks:
- Create conversion-focused landing pages for:
  - parents
  - girls
  - boys
  - schools
  - sponsors
- Add social proof modules (testimonials, stories, before/after, workshop videos).
- Add lead magnets:
  - "7 sposobów na ograniczenie telefonu u nastolatka"
  - "Checklist wakacji bez ekranów"
- Start distribution cadence:
  - TikTok/Shorts/Reels: 3-5 posts/week
  - YouTube: 1 SEO-focused video/week
- Start backlink outreach (parenting blogs, education portals, local media, youth organizations).

Exit criteria:
- Conversion path from organic traffic is fully measurable.
- Continuous distribution cadence is active.
- First external backlinks acquired.

### P3 (Months 5-9) — Programmatic and AI-Assisted Scale

Tasks:
- Introduce reusable templates for workshop, city, event, FAQ, glossary, and instructor pages.
- Create instructor entity pages: `/prowadzacy/[slug]`.
- Add AI-assisted workflow for:
  - keyword clustering
  - content gap analysis
  - FAQ ideation
  - internal linking suggestions

Exit criteria:
- Programmatic page system is live with indexing controls.
- Scaled publishing process is documented and repeatable.

## 4) Immediate Highest-ROI Backlog (first 30 days)

1. Publish trust/legal pages with real entity details.
2. Implement complete metadata on top landing pages.
3. Add core schema to organization/course/event/FAQ pages.
4. Improve image and font loading performance.
5. Publish first 10 parent-intent articles.
6. Launch first 3 city pages.
7. Add first instructor profiles with photos and credentials.
8. Add testimonial and workshop photo/video blocks.
9. Create and optimize Google Business Profile.
10. Start review collection workflow after each workshop.

## 5) Quality Gates (Required)

Before each release wave (P0/P1/P2/P3), complete all checks below.

### Linting Tasks

- Run `yarn lint`.
- Resolve all errors; warnings only when explicitly accepted by owner.

### Type Checking Tasks

- Run `yarn tsc --noEmit`.
- Resolve all TypeScript errors before merge.

### Integration Test Tasks

- Run integration tests serially using repo standard command.
- Validate:
  - metadata generation in rendered pages
  - structured data output validity on target templates
  - form tracking events firing on submission and CTA clicks
  - city/instructor dynamic page rendering and canonical behavior

### E2E Test Tasks

- Run E2E tests serially using repo standard command.
- Validate:
  - organic landing entry -> content page -> CTA -> lead form flow
  - mobile navigation + page speed perception on key templates
  - local page journey (`/warszawa` etc.) -> registration intent action
  - structured data visible in final HTML where expected

## 6) Integration Test Plan

Objective:
- Confirm SEO-critical page output and conversion events behave correctly in real app conditions.

Planned scenarios:
- Metadata scenario: each primary route returns unique title/description/canonical.
- Schema scenario: `Organization`, `Course`, `Event`, and `FAQPage` JSON-LD present and parseable.
- Local SEO scenario: city pages render local content blocks and stable canonical URLs.
- Conversion scenario: lead form submit emits expected analytics payload and success state.

Execution notes:
- Keep all timeouts at or below `30_000` ms.
- Run in serial mode to reduce environment flakiness.

## 7) E2E Test Plan

Objective:
- Confirm real-user acquisition and conversion flows from SEO entry points work across desktop and mobile.

Planned scenarios:
- Parent journey: article entry -> internal links -> workshop landing -> form completion.
- Local journey: city page entry -> schedule/details -> contact action.
- Trust journey: read `/o-nas` and `/bezpieczenstwo` -> conversion page.
- Performance/UX journey: key pages remain usable and stable on mobile viewport.

Execution notes:
- Keep waits/timeouts at or below `30_000` ms.
- Do not mock app code or internal APIs in E2E.

## 8) Reporting Cadence

- Weekly: KPI snapshot (clicks, impressions, rankings, leads).
- Biweekly: content performance review and keyword reprioritization.
- Monthly: roadmap adjustment and next-phase approval.

## 9) Dependencies and Risks

Dependencies:
- Access to GA4, GSC, Clarity, and Google Business Profile.
- Content production capacity (writing + editing + media creation).
- Photo/video assets from real workshops and instructors.

Risks:
- Missing trust pages or weak entity transparency may block ranking growth.
- Inconsistent publishing cadence reduces topical authority gains.
- Slow page templates can suppress conversion despite traffic growth.
