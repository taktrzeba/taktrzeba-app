# GA4 Email and Conversion Tracking Plan

Date: 2026-07-31
Status: Ready for implementation

## Goal

Measure the journey from a Brevo email to website activity and real business outcomes without sending personal data to Google Analytics 4 (GA4).

## Non-Negotiable Data Rule

Never send an email address, name, phone number, or other personally identifiable information to GA4 in an event name, event parameter, URL, or page title. GA4 should receive anonymous event data only.

## Event Map

| User action | GA4 event | Conversion / key event? | Required data |
| --- | --- | --- | --- |
| Opens any website page | `page_view` | No | Automatically collected by the Google tag |
| Clicks the primary website button | `cta_clicked` | Usually no | `location`, `destination` |
| Successfully submits an email/enrollment form | `generate_lead` | Yes | `form_name`, `preferred_workshop` (never the email address) |
| Completes an assessment | `assessment_completed` | Yes | `assessment_name`, `score_band` (never answers or personal data) |
| Completes a paid sale | `purchase` | Yes | `transaction_id`, `value`, `currency`, `items` |

## Step-by-Step Setup

### 1. Confirm the GA4 property and web data stream

1. Sign in to Google Analytics.
2. Open the TakTrzeba property.
3. Go to **Admin -> Data streams -> Web**.
4. Add or select the stream for `https://taktrzeba.pl`.
5. Copy its Measurement ID (format: `G-XXXXXXXXXX`).
6. In the deployment environment, set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to that ID.
7. Deploy the app. The Google tag must be deployed before any events can be received.

### 2. Verify the Google tag before adding conversions

1. Open the deployed website in a private browser window with ad blockers disabled.
2. In GA4, open **Reports -> Realtime** or **Admin -> DebugView**.
3. Visit the home page.
4. Confirm a `page_view` event arrives.
5. If it does not arrive, first confirm the deployed environment variable is present and the Google tag request is not blocked by consent settings or an ad blocker.

### 3. Prepare every Brevo link with UTM parameters

Use a different campaign name for every Brevo email campaign. Example:

`https://taktrzeba.pl/?utm_source=brevo&utm_medium=email&utm_campaign=summer_2026_launch&utm_content=primary_cta`

Required convention:

- `utm_source=brevo`
- `utm_medium=email`
- `utm_campaign=` a stable lower-case campaign name
- `utm_content=` the position or variant of the link, such as `primary_cta` or `footer_link`

Brevo records delivery, opens, and email-link clicks. GA4 records what happens after the recipient reaches the website. Do not expect GA4 to measure an email open; that is a Brevo metric.

### 4. Track the website CTA click

1. Emit `cta_clicked` only when the user clicks a meaningful CTA.
2. Include safe context such as `location: 'home'` and `destination: 'test_a'`.
3. Verify the event in Realtime/DebugView.
4. Do not mark this as a key event unless a CTA click itself is a business conversion; normally it is a funnel step only.

### 5. Track a successful form send as a lead

1. Emit GA4's recommended `generate_lead` event only after the form API returns success and Brevo has accepted the contact.
2. Include safe parameters such as `form_name` and `preferred_workshop`.
3. Never include the submitted email address, name, phone number, child age, or city in GA4.
4. In GA4 **Admin -> Events**, mark `generate_lead` as a key event after it first appears.

### 6. Track assessment completion

1. Define the exact completion point (for example, the final submit/thank-you screen).
2. Emit `assessment_completed` once at that point, not per question.
3. Include only non-identifying summary data: `assessment_name` and an optional broad `score_band` such as `low`, `medium`, or `high`.
4. Mark `assessment_completed` as a key event after it first appears.

### 7. Track a real sale

1. Trigger `purchase` only after a payment provider or back-office process confirms payment.
2. Use a unique `transaction_id`; GA4 uses it to prevent duplicate purchases.
3. Send `value`, ISO currency code (for example `PLN`), and an `items` array with course/product details.
4. Mark `purchase` as a key event after it first appears.
5. Never fire `purchase` when someone merely clicks a payment button, reaches checkout, or submits a non-binding form.

### 8. Mark and report conversions in GA4

1. Generate one real test for each event on the deployed site.
2. In **Admin -> Events**, wait for each event to appear.
3. Mark these as key events: `generate_lead`, `assessment_completed`, and `purchase`.
4. Do not mark `page_view` or `cta_clicked` as key events unless your reporting definition explicitly treats them as conversions.
5. In **Reports -> Acquisition -> Traffic acquisition**, filter by `Session source / medium = brevo / email` to measure email-driven leads, assessments, and sales.

## Implementation Order

1. Deploy and verify the Google tag and `page_view`.
2. Add UTM parameters to every Brevo campaign link.
3. Implement and verify `cta_clicked`.
4. Implement and verify `generate_lead` after confirmed Brevo acceptance.
5. Implement and verify `assessment_completed` at the actual assessment completion point.
6. Implement and verify `purchase` from confirmed payment data.
7. Mark the three outcome events as GA4 key events.

## Quality Gates

### Linting

- [ ] Run `yarn lint` and resolve issues in touched files.

### Type Checking

- [ ] Run `yarn tsc --noEmit`.

### Integration Test Plan

- [ ] Run integration tests serially when a harness is available.
- [ ] Verify `generate_lead` fires only after successful form persistence/Brevo acceptance.
- [ ] Verify no event payload includes PII.
- [ ] Verify `purchase` is emitted only for a confirmed unique transaction.

### E2E Test Plan

- [ ] Run E2E tests serially when a harness is available.
- [ ] Verify Brevo UTM link -> page view -> CTA -> lead flow.
- [ ] Verify assessment completion emits exactly one event.
- [ ] Verify the confirmed-payment success flow emits exactly one purchase event.

## Implementation Update (2026-07-31)

- [x] Added `page_view`, `cta_clicked`, and `generate_lead` event names to the reusable tracking layer.
- [x] Added reusable `assessment_completed` and confirmed `purchase` tracking hooks.
- [x] Prevented duplicate initial page views by disabling automatic page views in the initial Google tag configuration and sending them from the client tracker.
- [ ] Set the deployed `NEXT_PUBLIC_GA_MEASUREMENT_ID` value.
- [ ] Create Brevo campaign links with the documented UTM parameters.
- [ ] Add the assessment completion call at the real assessment success point.
- [ ] Add the confirmed-sale call at the payment-provider success point.
- [ ] Verify every event in GA4 DebugView and mark the outcome events as key events.

## Verification Update (2026-07-31)

- [x] Targeted lint passed for the GA4 files changed in this implementation.
- [x] `yarn.cmd tsc --noEmit` passed.
- [ ] Full-repository lint was not completed because it exceeded the 30-second timeout ceiling.
- [ ] Integration tests cannot run: this repository has no integration test harness.
- [ ] E2E tests cannot run: this repository has no E2E test harness.

## Additional Event Update (2026-07-31)

New live events:

- `opened_test_a` when `/test-a` loads.
- `opened_test_b` when `/test-b` loads.
- `opened_through_email` when a visitor arrives with `utm_medium=email`; safe UTM source, campaign, and content values are included.
- `sale` and GA4 `purchase` remain emitted together only by `trackConfirmedSale` after a confirmed transaction.

To test email attribution, use a Brevo link such as:

`https://taktrzeba.pl/?utm_source=brevo&utm_medium=email&utm_campaign=test_a&utm_content=primary_cta`
