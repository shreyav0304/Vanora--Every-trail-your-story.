# Hosted Vanora setup

1. Create a Supabase project in an India region when available. Keep its database password private.
2. Open **SQL Editor → New query** and run [the migration](migrations/202610030001_vanora.sql). It creates only `vanora_*` objects and can be rerun. It does not import or delete local SQLite data.
3. In **Authentication → URL Configuration**, set Site URL to your production Vercel URL and add that URL to allowed Redirect URLs. Keep email confirmation enabled. Configure production SMTP if needed for Supabase email delivery limits.
4. In Vercel **Vanora → Settings → Environment Variables**, add server values `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` (the publishable key, not a service-role secret), `APP_URL` (your production URL), and build value `VITE_AUTH_BACKEND=supabase`. Apply them to Production and Preview if desired. Keys are never embedded in client code. Optional `OPENAI_API_KEY` stays server-side.
5. Redeploy the project with `vercel --prod`. The Vite frontend is served from `dist`; `/api/[path].mjs` supplies Supabase-backed account/activity/planning APIs and `/api/nearby.mjs` supplies Overpass facility lookup. No local SQLite file is created by the hosted API.
6. Verify email confirmation/login, save a private activity, reload and sign in on another device, explicitly share it, and confirm precise points stay absent from the public feed. Supabase configuration and schema must be tested live before reporting the deployment as working.

Authentication uses Supabase Auth with Secure, HttpOnly, SameSite cookies. Database requests use the verified user's access token and the publishable key; no service-role bypass is used. RLS protects all private tables. A deliberate owner-executed view exposes a fixed whitelist for explicitly shared feed entries, including a photo only when `sharePhoto=true`. Private photos are stored in the protected activity JSON row for this MVP, not a public bucket; a dedicated private storage bucket is a future scaling step. Unsharing removes the feed entry, but cannot recall copies someone has already downloaded.

The migration's elevated boolean helper is restricted to authenticated callers and exposes no private rows. PostgreSQL tests verify cross-account read/write isolation, private default, photo opt-in, GPS redaction, and unsharing. API tests verify server cookies, confirmation, refresh and ownership. Automated tests use fixtures; they do not establish a live Supabase connection.

Local `npm run dev` and `npm start` keep their existing SQLite behavior when Supabase variables are absent. Set the server configuration to test cloud APIs locally; don't copy the SQLite database into Vercel. Local accounts remain local and are not silently migrated into cloud accounts.

CLI deployment does not require a GitHub integration. Vercel could not connect this GitHub repository automatically in the current session; import/authorize it in Vercel if you want pushes to trigger future deployments.
