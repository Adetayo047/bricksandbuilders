# Bricks & Builders — Marketing Site

Next.js 16 (App Router) + Tailwind CSS v4 marketing/lead-gen site for Bricks & Builders
Property Limited (Abuja, Nigeria). See `/Users/phillipadetunji/.claude/plans/gleaming-whistling-owl.md`
for the full design/build plan this implements.

## Running locally

```bash
npm install
npm run dev
```

Opens on `http://localhost:3000` by default (or via the `bricks-and-builders` launch
config on port 3100).

## Current state

- All pages built and working: Home, Properties (with category filter), Property detail,
  About, Services, Gallery, Contact.
- Property data lives in `src/lib/properties.ts` as typed local data — **not yet wired to
  a live CMS**. The shape matches what the future Sanity schema will store, so swapping in
  real data later is a data-layer change, not a redesign.
- Contact/inquiry forms use a Next.js Server Action (`src/lib/actions.ts`) with Resend.
  Without `RESEND_API_KEY` set, submissions are logged to the server console instead of
  emailed — this lets the form be tested end-to-end before real credentials exist.
- **Real content pulled from Facebook (logged-in session) and Instagram's public preview
  metadata**: actual logo (`public/logo.jpg` / `logo-mark.png` / `logo-full.jpg`), CAC
  registration number (RC 7692089), and official listing flyers for 4 of the 6
  developments (`public/photos/flyer-*.jpg`). Two developments — Builders Empire and ASO
  Drive — still use placeholder line-art (`src/components/PlaceholderImage.tsx`) since no
  flyer/photo was found for them; swap those out if/when real photos arrive.
- **Note**: their own flyers advertise `www.bricksandbuildersproperties.com` — that domain
  does not currently resolve (checked via DNS). Worth registering it to match existing
  printed/social marketing if this site is meant to replace it.

## Next steps (require your input / accounts — not something I can do standalone)

1. **Real photography/renders.** This is the biggest blocker for the Hestia-style visual
   treatment described in the plan. Get high-res photos or 3D renders for Karshi, Builders
   Empire, and ASO Drive from the client, then swap them into `PlaceholderImage` usages.
2. **Resend account + API key.** Sign up at resend.com, verify a sending domain, and set
   `RESEND_API_KEY` (and optionally `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`) as env vars.
3. **Sanity CMS.** Requires creating an account (`npx sanity login`) — that's an account
   signup step I won't do on your behalf. Once you have a project ID, the schema files
   (`property`, `testimonial`, `siteSettings` per the plan) still need to be written and
   `src/lib/properties.ts` swapped for a `next-sanity` GROQ query.
4. **CAC registration number** and confirmed legal spelling — currently unverified, flagged
   in the original research as a trust-signal gap.
5. **Domain + Vercel deployment** once the client has a domain to point.

## Environment variables

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

All optional in development (see fallback behavior above); required for real email in
production.
