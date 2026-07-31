# GA4 Path Exploration Guide — See Exactly Where Customers Drop Off

Date: 2026-08-01
Applies to: taktrzeba.pl GA4 property (Measurement ID `G-3722JJKPZ9`)

## Goal

Use GA4 **Explore → Path Exploration** to visualize the customer journey from email click → page open → CTA click → form sent → sale, and see at which exact point each customer leaves.

---

## Your Events (already firing from the code)

| Event | Fires when |
|---|---|
| `opened_page` | Any page loads |
| `opened_through_email` | Visitor arrived with `?utm_medium=email` (from Brevo) |
| `clicked` | Any CTA / button / link clicked |
| `sent` | Enrollment form successfully submitted |
| `did_assessment` | Test page A or B loaded |
| `sale` | Enrollment completed (also fires GA4 `purchase`) |

---

## STEP 1 — Open Path Exploration

1. Sign in to **Google Analytics** → open the **taktrzeba** property.
2. In the left sidebar, click **Explore** (it has a compass icon).
3. Click **Blank** exploration template (or click **+ New** → **Blank**).

---

## STEP 2 — Choose the "Path Exploration" Technique

1. On the blank exploration, look at the **Variables** tab (left panel).
2. Under **TECHNIQUE**, click the dropdown that says **Free form**.
3. Select **Path exploration**.
4. The report will switch to a path exploration canvas.

---

## STEP 3 — Configure the "Starting Point" (First Event)

1. In the canvas, find the **Starting point** block (a box labeled `Session start` or `Any`).
2. Click the **Edit pencil** (✏️) on the starting point block.
3. In the menu that opens:
   - Choose **Event** (not Page, not Page title).
   - Search for and select: **`opened_through_email`**
4. Click **Apply**.

> This means: "Start the path at the moment a person arrived from your Brevo email." Every path shown will begin with someone who clicked your email link.

---

## STEP 4 — Add Your Events as the Path Nodes

The path exploration already shows the next steps automatically, but you want to focus only on YOUR events. Do this:

1. In the right panel (or the **Settings** tab at the top), find **Node value**.
2. Set the **Node value** dropdown to **Event**.
3. Click **+ Add filter** (or **Edit** near the "Next actions" section).
4. Add an **Event name** filter using **Include** and choose ONLY these events:

```
opened_page
opened_through_email
clicked
sent
did_assessment
sale
purchase
```

5. Click **Apply**.

> This filters the path so you only see your funnel events — not every scroll, click, or automatic event Google records.

---

## STEP 5 — Narrow It to Email Visitors Only (Segment)

1. At the top of the exploration, click **+ Add segment** (or **+** in the Segments section of Variables).
2. Click **Create segment** → **Session segment**.
3. Name it: **Brevo / Email traffic**
4. In the conditions, add:
   - **Dimension:** `Session source / medium`
   - **Match:** `matches regex` (or "contains")
   - **Value:** `brevo / email`
5. Click **Save**, then **Apply**.

> Now the path exploration only shows journeys of people who came from your Brevo email campaigns. This is the group you care about.

---

## STEP 6 — Read the Path Report (Drop-off Points)

The path exploration will show a tree like this:

```
opened_through_email  (100 people)
        │
        ▼
opened_page  (98 people — 2 lost in redirect)
        │
        ▼
clicked  (55 people — 43 left without clicking anything)
        │
        ▼
sent  (22 people — 33 left after clicking but never submitted)
        │
        ▼
sale  (20 people — 2 left between form and sale)
```

**Key numbers to look at:**
- The **percentage on each arrow** = how many continued to the next step.
- The **"No subsequent events"** node = people who **left your site entirely** at that step.
- The **red/green drop-off** indicator = biggest loss points.

---

## STEP 7 — Compare Campaigns Side by Side

1. In the **Segments** panel, click **+ Compare**.
2. Add a second segment (or create per-campaign segments):
   - `Campaign = maj_2026`
   - `Campaign = czerwiec_2026`
   - `Campaign = early_bird`
3. Now the path shows two colored lines (blue = one campaign, red = other) so you can compare which email converts better.

> Tip: Because every Brevo campaign uses a unique `utm_campaign`, you can create a segment per campaign and see which one drives people furthest down the funnel.

---

## STEP 8 — Save the Exploration

1. Click the **Save** button (top right of the Explore window).
2. Name it: **Email → Sale Funnel Path**
3. Choose where to save it (Private to me or Shared).
4. Click **Save**.

Next time, it appears under **Explore** in the left sidebar. You can also add it to a **Dashboard/Report** later.

---

## Extra: If you want a Funnel Exploration instead

Path exploration shows the actual journeys people take. A **Funnel exploration** forces a fixed order. For a strict "email → sale" funnel:

1. In Explore → **+ New** → choose **Funnel exploration**.
2. Under **Steps**, add in this exact order:

| Step | Event |
|---|---|
| 1 | `opened_through_email` |
| 2 | `clicked` |
| 3 | `sent` |
| 4 | `sale` |

3. Add the **Brevo / Email** session segment.
4. Save as **Email → Sale Funnel**.

This gives you the classic "open funnel" with bars showing how many people completed each step and how many dropped off between them.

---

## Quick Checklist

- [ ] GA4 → Explore → Blank → Path exploration
- [ ] Starting point = `opened_through_email`
- [ ] Node value = Event
- [ ] Filter events to: `opened_page`, `opened_through_email`, `clicked`, `sent`, `did_assessment`, `sale`, `purchase`
- [ ] Add segment: Session source/medium = brevo/email
- [ ] Save as "Email → Sale Funnel Path"
- [ ] (Optional) Create per-campaign segments to compare campaigns

