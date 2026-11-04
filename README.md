# Ehsan Apps website

The website for Ehsan Ullah Tariq's apps (Android today, iOS, web or desktop later) and client work. It also hosts
`app-ads.txt`, which AdMob reads to confirm the ads in every app are authorised.

- Live now at: https://ehsan-ullah-tariq.github.io
- Planned domain: https://ehsanullahapps.com (not bought yet)

Built with [Astro](https://astro.build) as a static site and published to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Run it locally

Needs Node 22.23 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:4321. `npm run build` writes the finished site to `dist/`.

## Where things are

| What | File |
| --- | --- |
| Name, email, GitHub and Play links | `src/site.ts` |
| The apps: text, features, screenshots, privacy policy links | `src/data/apps.ts` |
| App icons and screenshots | `src/assets/apps/<app>/` |
| Pages | `src/pages/` (home, `apps/[slug]`, `work-with-me`, `about`, `404`) |
| Colours and shared styles | `src/styles/global.css` |
| AdMob authorisation | `public/app-ads.txt` |

### Adding an app

1. Put its icon (512×512) and a few screenshots in `src/assets/apps/<slug>/`.
2. Add an entry to `apps` in `src/data/apps.ts`. Its page appears at `/apps/<slug>/`. List where to get it in
   `links`, one per platform (`android`, `ios`, `web`, `desktop`); each gets its own button.
3. For an app with ads, set the developer website in its store listing (Google Play "Website", App Store "Marketing
   URL") to this site, so AdMob finds `app-ads.txt`.

`app-ads.txt` doesn't need changing for new apps on the same AdMob account (`pub-6145543964998796`).

### Privacy policies

Each app's policy lives in its own GitHub Pages repo on the same account (`privacy-policy-screencheck`,
`privacy-policy-speaker-tester`), so it's served under this site's address at `/<repo>/privacy-policy.html`. The links
in `src/data/apps.ts` are paths from the site root, so they keep working after the move to the custom domain.

## Still to fill in

- `src/pages/about.astro`: background, years of experience, where you're based, a photo, LinkedIn and a CV link.
- `src/pages/work-with-me.astro`: check the services list matches what you want to offer.
- Screen Check's features and screenshots describe the live 1.0.1. Update them when 1.1.0 ships.

## Moving to ehsanullahapps.com

1. Buy the domain.
2. At the registrar, add these DNS records:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` for `www`: `ehsan-ullah-tariq.github.io`
3. In GitHub, verify the domain on your account (profile picture → Settings → Pages → Add a domain, then add the TXT
   record it shows), so nobody else can point a GitHub site at it.
4. In this repo:
   - set `site` in `astro.config.mjs` to `https://ehsanullahapps.com`;
   - add `public/CNAME` containing `ehsanullahapps.com`;
   - once email forwarding is set up, change `email` in `src/site.ts` to `hello@ehsanullahapps.com`.
5. Push, then in the repo's Settings → Pages, set the custom domain to `ehsanullahapps.com` and tick "Enforce HTTPS"
   once it's offered.
6. Check https://ehsanullahapps.com/app-ads.txt opens, then set the "Website" field on every app's Play listing to
   `https://ehsanullahapps.com`.
7. Wait until AdMob (Apps → app-ads.txt) shows every app as verified. Only then retire the old Firebase site
   (`screen-check-b6b11.web.app`).
