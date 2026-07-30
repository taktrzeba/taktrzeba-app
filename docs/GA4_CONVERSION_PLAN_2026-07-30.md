# GA4 Conversion Plan — taktrzeba.pl

Date: 2026-07-30
Status: Implemented

## Goal

Track the main conversion actions in GA4 with dedicated events for:
- opened page
- clicked
- sent
- did assessment
- sale

## Event mapping

| User action | GA4 event | Trigger |
| --- | --- | --- |
| Page opened | opened_page | Every page view tracked by the analytics bootstrap |
| Button/link click | clicked | CTA and navigation clicks |
| Lead/contact form sent | sent | Successful enrollment form submission |
| Assessment started | did_assessment | Assessment CTA interaction from the home page |
| Sale conversion | sale | Successful enrollment submission in the current funnel |

## Implementation notes

- Existing GA4 page-view and CTA/form tracking remain intact for compatibility.
- The current product flow does not include a checkout or payment step, so the sale event is mapped to the successful enrollment submission as the closest business conversion available in the app.
- All events are sent through the shared analytics helper so they can be reused across the site.
