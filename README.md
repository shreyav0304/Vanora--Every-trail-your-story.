# Vanora

**Every trail, your story.** An India-focused, responsive trekking PWA built with Vite, Leaflet, Lucide, a Node HTTP API and persistent SQLite storage.

## Run locally

Requires Node 24 (uses `node:sqlite`) and npm.

```sh
npm install
npm run dev
```

Open http://localhost:5173. For the production preview:

```sh
npm run build
npm start
```

Copy `.env.example` to `.env` if desired. `OPENAI_API_KEY` enables server-side AI personalization; `OPENAI_MODEL` selects the model. Restart the server after changing environment settings. No API key reaches the browser. AI errors, timeouts, empty responses and missing credentials produce a retryable error while the deterministic plan stays usable. The default model is configurable and requires access in your OpenAI account.

## Working MVP

- Create a local account, sign in/out, and edit experience and preferred regions. Passwords use salted scrypt; sessions use HttpOnly SameSite cookies. SQLite in `data/vanora.sqlite` persists accounts, saves, activities and social interactions across server restarts. The shared demo account is expressly labelled; personal accounts isolate data.
- Explore an original forest atlas with 185 curated entries covering all 28 states and 8 union territories. Search and filter by state, region, place type, difficulty, distance, gain and duration; use catalogue, state directory or map views. Compare up to three places. Undocumented measurements stay explicitly unknown.
- Build private trip plans with dates, places, packing checklists, group budgets and per-person costs. Download a calendar reminder. Collect private self-reported passport stamps and milestones; nominate missing places with a source link. Nominations remain private and unreviewed, and are not automatically published.
- Toggle a higher-contrast outdoor display. Download your own GPS activity as a private GPX file, preserving paused segments.
- Prepare using a deterministic duration range, experience level, gear checklist and conservative pacing notes. If configured, AI receives the sample trek, baseline, experience and summarized recent activities, plus a brief uphill-fitness answer for first-time users. Precise GPS and photos are not sent to AI.
- Record with real browser GPS: permission errors, accuracy filtering, elapsed time, distance, ascent, pause/resume, finish and private save. Pauses create separate route segments so travel during a pause is excluded. Interrupted sessions are stored on the device and recover paused.
- View history, totals and distance progress. Share/unshare activity summaries, optionally publish a photo, follow users, like and comment on shared posts. GPS points never appear in public feed responses. Private photos live in private activity records, not a publicly served upload directory. Sharing a photo requires a separate choice. One editable comment per person per post keeps this MVP small.
- Save trek information for later. The service worker caches the application shell and loaded assets, excluding authenticated API responses. Saved trek text is also kept locally.

## Demonstration data and remaining configuration

The catalogue contains **six unverified demo routes and 179 source-backed destination or published-trail entries**. Official tourism, forest and district references are linked in each detail and the Atlas sources dialog, with review dates and source scope. Twenty selected Tamil Nadu Forest Department trails include published distance, duration and difficulty; other new places generally have no route measurements. Source-backed destination names do not establish a verified route or current access. Nature walks, island destinations and outdoor places are labelled separately. This growing catalogue covers every state and union territory, but is **not an exhaustive inventory of every Indian trekking spot**.

Images are illustrative Unsplash landscapes, not photographs of the named routes. Maps use live OpenStreetMap tiles with attribution; new destinations use approximate state anchors, clearly labelled as such. There are no invented route polylines, elevation profiles, forecasts, closures, water points, emergency contacts or community condition reports.

The baseline uses `distance / 4 + ascent / 600` hours, multiplied by 1.3 for beginner, 1.1 for regular or 0.9 for experienced users, with a 30% planning range. It is only calculated when both distance and ascent are documented. This transparent heuristic is not a validated prediction or safety assurance. AI output is separately labelled as suggestions and shows generation freshness. Source review dates are not trail inspection dates.

Live weather and verified trail/report integrations are **not configured**. To move beyond the demo, replace the catalogue with permissioned, verified route data and provenance, connect a sourced weather service and reports, and provide an AI key. No mocked integration is presented as live.

## Browser and offline limitations

GPS needs a secure context (HTTPS or localhost) and explicit permission. Mobile operating systems may suspend tabs, geolocation and timers when the screen locks or the app is backgrounded. Vanora deliberately pauses when hidden; keep it visible and the screen awake while recording. It cannot offer native-app background GPS reliability. No-location or inaccurate fixes show a useful status and can be retried. GPS ascent is approximate because phone altitude is noisy.

Install from the browser's install menu where supported; on iOS use Safari → Share → Add to Home Screen. The manifest has 192/512 PNG icons and standalone display. Previously loaded app assets and saved trek notes work offline after caching. External fonts, photos and map tiles need internet and are not guaranteed offline. This MVP does **not** download map regions. Offline GPS can capture coordinates, but saving to the server, authentication, community and AI require a connection. Keep the paused recording until connected and retry saving. Browser storage can be evicted and is not a backup.

## Privacy and deployment scope

Activities are private by default. Access checks isolate private activities and saved lists by session. Public summaries omit coordinates and unshared photos. Unsplash and OSM receive ordinary image/tile requests (including IP address; map tiles can imply the viewed region). Uploaded photos may contain sensitive visual or metadata details; choose carefully before explicitly sharing.

This is a local MVP, not a hardened public service. It binds to `127.0.0.1`; no external deployment is performed. Before public hosting, add HTTPS, `COOKIE_SECURE=true`, account recovery/email verification, durable backups, rate limiting, moderation, image metadata stripping and production monitoring. Protect and back up the SQLite database. Clear a discarded recording or sign out to remove its local GPS draft from a shared device.

## Verification

### Nearby care and rest

Every trail detail page has **Care & places to rest**, the official Indian emergency number 112, external destination-based hospital/rest map searches, and a live OpenStreetMap/Overpass lookup around a user-confirmed map point, manually entered coordinates, or current GPS position. Searches cover 10, 25 or 50 km and separate hospitals/clinics from accommodation, campsites, shelters and road rest areas. Distances are deterministic straight-line distances to mapped positions, not road distances or evacuation estimates. Most catalogue destinations lack exact coordinates; state browsing anchors are never automatically used for proximity. Demo coordinates require explicit confirmation.

Community mapping is incomplete and can be outdated. Results list source records, retrieval time, map edit time where available, and unconfirmed emergency services, phones and opening hours. They cannot establish the true nearest hospital, staffing, bed availability, access or rescue response. Call facilities and confirm locally. The 112 call action uses the device dialler and needs telephone service; the app does not dispatch help. The official reference is https://112.gov.in/.

No API key is required for `OVERPASS_URL` (see `.env.example`). The public provider may time out or reject requests; the UI provides retry and external searches without fabricated results. Queries transmit the chosen point to the provider through the server. Coordinates/results are not stored in the account, shared feed or server database. Optional snapshots are explicitly saved in browser storage, include the search point, remain available offline and show their original timestamp. Delete them with **Delete saved snapshot** on a shared device. Reference sites and map tiles still need internet. Browser tests use labelled fixtures to verify behavior; fixtures are never installed as application facility data.

### Trail stories

Every current atlas entry now includes **Beyond the trail**: an editorial note about history, heritage, living culture, nature or landscape. Notes are searchable, have direct references and review dates, and remain available with saved trek information offline. Religious traditions and folklore are labelled; they are not presented as verified events. Two entries (Karaparai and Kodaikanal–Vellagavi) currently carry catalogue context and explicitly identify the need for further historical research. Other notes vary in depth; this is not a complete history of every trail. References describe destinations or regions, not verified route geometry or present conditions.

Maintain the attributed notes in `src/stories.js`; presentation is in `src/story-view.js` and `src/stories.css`. `npm run test:stories` checks coverage, metadata, research distinctions and escaping. Browser verification also checks historical search and offline story access.

```sh
npm run lint
npm test
npm run build
node tests/browser.mjs
node tests/states.mjs
node tests/atlas-browser.mjs
```

The browser suites use installed Microsoft Edge through Playwright. They check desktop/mobile layouts, filters, accounts, AI failure states, recording transitions, persistence, privacy, sharing, interruption recovery, denied permission, offline notes, PWA icons, comparison, plans, budgets, checklists, calendar downloads, passport stamps and nominations. No live AI response has been verified without credentials. API tests use separate temporary SQLite databases and verify cross-account isolation, public redaction and private planning permissions. Screenshots are written to `artifacts/`.
