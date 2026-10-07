# Site rebuild TODO

## Content to fill in
- [x] Add Michigan license number (471094) — `agent.license` in `src/data/site.ts`
- [x] Write your bio — home page and `src/pages/my-story.astro`
- [ ] Add your client reviews — `reviews` in `src/data/site.ts` (reviews section stays hidden until it has entries)
- [ ] Replace `public/profile.png` with a larger portrait (currently 400×400, soft in the hero)

## Cleanup after events
- [ ] After Pumpkinfest (Oct 10, 2026): delete `src/components/PumpkinfestBar.astro` and its line in `src/layouts/Base.astro`. The bar already hides itself from Oct 11, so this is just tidying

## Hidden for now
- [ ] Bring back Services when ready: rename `src/pages/_services.astro` (drop the `_`) and add it to `nav` in `src/data/site.ts`
- [ ] Decide whether Market Report goes back in the menu (the page still works at `/market-report`)

## Hosting
The site is static again (forms post to lead-grabber), so it can stay on GitHub Pages: merging `rebuild` into `main` deploys it. Moving to Vercel is optional now.
- [ ] Optional: move to Vercel (import the repo, point scottscharl.com's DNS at it, then delete `.github/workflows/deploy.yml` and `public/CNAME`)

## Forms → lead-grabber
- [x] Both forms (`contact.astro`, `what-would-a-buyer-pay.astro`) post to `https://leads.scharl.dev/api/leads/website` (`leadsEndpoint` in `src/data/site.ts`)
- [x] Removed the Resend form handler (`src/pages/api/contact.ts`) and the Vercel adapter
- [x] Kept the "Please text me instead" fallback when a submit fails
- [ ] Deploy lead-grabber's `website-leads` branch first, or the live forms will fail (see `../re-tools/lead-grabber/TODO.md`)
- [ ] Submit a test lead from each form on the live site
- [ ] To test locally: run lead-grabber with `WEBSITE_ORIGINS=http://localhost:4321` and this site with `PUBLIC_LEADS_URL=http://localhost:3000 npm run dev`

## Buttons (one main action)
- [x] Every red button says "Contact Scott" and goes to `/contact` (header, hero, bottom banner)
- [x] Hero: add a secondary seller link, "Selling? See what buyers would pay →", to `/what-would-a-buyer-pay`
- [x] Make the "Who I help" boxes clickable: Sellers → price page; Buyers/Renters/Investors → `/contact` with the topic pre-selected (`?topic=`)
- [x] Move "Text me" out of the red button in the bottom banner; keep it as a normal link next to the phone number

## City market pages (billboard audience)
- [ ] Share the market data fields your automation produces (or a sample of its output)
- [ ] Decide the city list (Royal Oak, Troy, Chesterfield, …)
- [ ] Turn `src/pages/market-report.astro` into a `src/pages/[city].astro` template
- [ ] Add a content collection with a schema for `src/data/markets/<city>.json` so bad data fails the build and the last good deploy stays live
- [ ] Create a sample `royal-oak.json` from the current report numbers
- [ ] Build the automation: pull data → write one JSON file per city → commit to the repo → Vercel rebuilds
- [ ] Make the city pages phone-first for billboard and QR visitors: key numbers, photo, and big "Call Scott" / "What's my home worth?" buttons, with the printable sheet kept as an option
- [ ] Give each city page one clear next step (e.g. contact form with the city filled in)
- [ ] Track billboard visits with QR codes pointing to e.g. `/troy?src=billboard`

## Later: move to Scotty stack
- [ ] Port to React Router + TanStack (data in `src/data/site.ts` and the components carry over)
- [ ] Rebuild the consultation form as a multi-step TanStack Form
- [ ] Keep public pages pre-rendered for search engines
