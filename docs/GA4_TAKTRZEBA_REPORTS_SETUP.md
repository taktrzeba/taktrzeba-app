# GA4 taktrzeba Conversion Event Setup

Date: 2026-07-30

## Goal

Register the following GA4 events in the taktrzeba property and ensure they appear in:
- Reports > Engagement > Events
- Reports > Engagement > Retention

## Event names

Use these exact event names in GA4:
- `sent`
- `clicked`
- `opened_page`
- `did_assessment`
- `sale`

## Code coverage

The app already sends these events from the client side via `src/lib/analytics.ts` and the debug helper in `src/components/GA4DebugButtons.tsx`.

## GA4 steps for the taktrzeba account

### 1) Confirm the property and stream

1. Open Google Analytics.
2. Select the taktrzeba property.
3. Go to Admin > Data Streams > Web.
4. Confirm the Measurement ID is `G-3722JJKPZ9`.

### 2) Enable DebugView and send test events

1. In GA4, open `Configure > DebugView`.
2. Enable debug mode in your browser by using the Google Analytics Debugger extension or setting `debug_mode: true` from the app.
3. Start the app locally with `yarn dev`.
4. Enable the debug helper by setting `NEXT_PUBLIC_ENABLE_DEBUG_EVENTS=true` in `.env.local`.
5. Open the homepage and click the debug buttons:
   - `Send opened_page`
   - `Send clicked`
   - `Send sent`
   - `Send did_assessment`
   - `Send sale`
6. Confirm each event arrives in DebugView.

### 3) Check Events report

1. In GA4, go to `Reports > Engagement > Events`.
2. Wait up to 30 minutes for custom events to appear after the first test.
3. You should see rows for:
   - `sent`
   - `clicked`
   - `opened_page`
   - `did_assessment`
   - `sale`

### 4) Mark each event as a conversion

1. In GA4, go to `Configure > Events`.
2. If the events already appear, enable the toggle in the `Mark as conversion` column.
3. If an event does not appear, create it manually:
   - Click `Create event`.
   - Set `Custom event name` to one of the event names above.
   - Add a matching condition: `event_name` equals the event name.
   - Save.
4. Return to `Configure > Events` and mark the new event as a conversion.

### 5) Verify in Engagement reports

1. Open `Reports > Engagement > Events` and verify the conversion events are listed.
2. Open `Reports > Engagement > Retention` to confirm user retention data is available for the property.

## Recommended GA4 event definitions

If GA4 does not automatically register the custom events, use these manual definitions:

- Event name: `sent`
  - Condition: `event_name` equals `sent`
- Event name: `clicked`
  - Condition: `event_name` equals `clicked`
- Event name: `opened_page`
  - Condition: `event_name` equals `opened_page`
- Event name: `did_assessment`
  - Condition: `event_name` equals `did_assessment`
- Event name: `sale`
  - Condition: `event_name` equals `sale`

## Notes

- The app uses the `debug_mode` parameter only for validation in DebugView.
- Actual production events will be sent without `debug_mode`.
- The events will appear under `Reports > Engagement > Events` once GA4 receives them.
- Retention data is generated automatically once engagement events are present.
