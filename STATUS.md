# Oakhaven Website — Project Status

## How to use this file
At the end of every Claude session, this file is updated with what changed and what's next.
To roll back to any previous version, go to github.com/jordynkerasmus/oakhaven-website/commits/main and click the commit you want.

---

## Current status: LIVE
**URL:** https://www.oakhaven.co.za
**Hosting:** Vercel (auto-deploys on every push to GitHub main branch)
**Domain registrar:** domains.co.za

---

## Session log

### Session 3 — 2026-06-24
**Commit:** `5beaeac`
**Changes made:**
- Design enhancements across the site:
  - Hero headline size increased (more dramatic on large screens)
  - Intro quote section: large gold ghost quotation mark added behind text
  - Eyebrow labels (e.g. "UNDERBERG · SOUTHERN DRAKENSBERG"): thin gold underline rule added
  - Activity cards on homepage: icons restored (fish, mountain, horse, golf, ripple, road)
  - Footer copyright text: made more readable (was nearly invisible)
- Reverted per feedback: nav scrolled colour and CTA band colour kept as original taupe
- Google Search Console: verified and sitemap submitted (https://www.oakhaven.co.za/sitemap.xml)

### Session 2 — (previous session)
**Commit:** `038dbdc`
**Changes made:**
- All veranda/verandah → deck
- Footer year updated to 2026
- WhatsApp button: +27660128642, CTA "WhatsApp Us"
- Google Maps iframe updated to exact coordinates (-29.789306, 29.486806)
- Room card images updated (Main, Second, Loft, Cottage)
- Living spaces images updated (Lounge, Deck, Entertainment Area)
- "Staircase & Loft Hall" renamed to "Entertainment Area" with new image and braai copy
- Gallery strip homepage images updated
- Gallery magnifying glass overlays removed
- Driving directions updated (From Durban + From Johannesburg)
- Mobile grid layouts fixed (all use auto-fit minmax)
- All Book Now CTAs → mailto:marketing@underbergaccommodation.co.za?subject=Oakhaven%20Booking%20Enquiry
- Google Analytics GA4 (G-YVNB81N86Y) added to all 5 pages
- sitemap.xml created and deployed
- robots.txt created and deployed
- Domain oakhaven.co.za live (DNS at domains.co.za → Vercel)

---

## Pending / to do
- [ ] **Contact form** — currently uses data-netlify (doesn't work on Vercel). Set up Formspree: sign up at formspree.io, create form, replace form action with Formspree endpoint. Submissions go to marketing@underbergaccommodation.co.za with subject "Oakhaven".
- [ ] **Booking CTAs** — replace mailto links with Knightsbridge calendar URL once available
- [ ] **Google Search Console** — submit sitemap (done ✓), wait ~1 week for indexing to begin
- [ ] **Video load speed** — 95MB hero video loads slowly on mobile. Consider compressing or hosting on a CDN.

---

## Key info
| Thing | Detail |
|---|---|
| Booking email | marketing@underbergaccommodation.co.za |
| WhatsApp | +27660128642 |
| GA4 property | G-YVNB81N86Y |
| GitHub repo | github.com/jordynkerasmus/oakhaven-website |
| GA reports | Scheduled daily to jordynkerasmus@gmail.com |
