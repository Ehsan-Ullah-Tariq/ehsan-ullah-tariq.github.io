/** Details shared by every page. Change them here, not in the pages. */
export const site = {
  name: 'Ehsan Apps',
  owner: 'Ehsan Ullah Tariq',
  /** The planned custom domain. Until it's bought, the site is served from GitHub Pages (see astro.config.mjs). */
  domain: 'ehsanullahapps.com',
  /** Switch to hello@ehsanullahapps.com once the domain and its email forwarding are set up. */
  email: 'ehsanullahgit54@gmail.com',
  github: 'https://github.com/Ehsan-Ullah-Tariq',
  playDeveloper: 'https://play.google.com/store/apps/developer?id=Ehsan051',
  description:
    'Ehsan Apps: focused Android apps by Ehsan Ullah Tariq, an Android developer working in Kotlin and Jetpack Compose who is available for client work.',
};

export const mailto = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
