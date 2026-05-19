# SEO Action Plan — taktrzeba.pl

Date: 2026-05-19
Owner: Marketing + Product + Engineering
Status: Draft (ready for execution)

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
