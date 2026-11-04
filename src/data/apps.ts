import type { ImageMetadata } from 'astro';

import screenCheckIcon from '../assets/apps/screen-check/icon.png';
import screenCheckShot1 from '../assets/apps/screen-check/shot1.png';
import screenCheckShot2 from '../assets/apps/screen-check/shot2.png';
import screenCheckShot3 from '../assets/apps/screen-check/shot3.jpg';
import speakerIcon from '../assets/apps/speaker-tester/icon.png';
import speakerShot1 from '../assets/apps/speaker-tester/shot1.png';
import speakerShot2 from '../assets/apps/speaker-tester/shot2.png';
import speakerShot3 from '../assets/apps/speaker-tester/shot3.png';
import speakerShot4 from '../assets/apps/speaker-tester/shot4.png';

export interface Feature {
  title: string;
  text: string;
}

export interface App {
  /** Used in the page address: /apps/<slug>/ */
  slug: string;
  /** The title as it appears on Google Play. */
  name: string;
  packageName: string;
  tagline: string;
  /** Two or three short lines for the card on the home page. */
  highlights: string[];
  features: Feature[];
  privacySummary: string;
  /**
   * The app's privacy policy. It lives in its own GitHub Pages repo on the same account, so a path from the
   * site root works both on github.io and on the custom domain.
   */
  privacyPolicy: string;
  downloads: string;
  icon: ImageMetadata;
  screenshots: { src: ImageMetadata; alt: string }[];
}

export const playUrl = (app: App) => `https://play.google.com/store/apps/details?id=${app.packageName}`;

// Features describe what's live on Google Play. Add new ones here when an update ships.
export const apps: App[] = [
  {
    slug: 'speaker-cleaner',
    name: 'Speaker Cleaner & Sound Test',
    packageName: 'com.speakertester.android',
    tagline: "Fix a muffled speaker and check every part of your phone's audio in one app.",
    highlights: [
      'Eject water and dust from the speaker with sound',
      'Full Audio Check with a shareable pass/fail report',
      'Mic test, sound meter, tone generator and hearing test',
    ],
    features: [
      {
        title: 'Speaker cleaner',
        text: 'Water mode plays a 165 Hz pulse, dust mode sweeps up to 8 kHz, and manual mode lets you pick any tone. Clean the loudspeaker or the earpiece, with optional vibration to shake out drops.',
      },
      {
        title: 'Full Audio Check',
        text: 'Run every test in one go: loudspeaker, left and right channels, earpiece, microphone and vibration, plus headphones and Bluetooth. Get a pass/fail report you can share as an image.',
      },
      {
        title: 'Speaker and stereo tests',
        text: 'Play bass, mid and treble tones and a voice sample, check left, right and both channels, and see which output is active.',
      },
      {
        title: 'Microphone test',
        text: 'Watch a live waveform and level, record a few seconds and play it back.',
      },
      {
        title: 'Sound meter and tone generator',
        text: 'Measure the noise around you in dB with min, average and max. Generate any tone from 20 Hz to 20 kHz in four wave shapes, or run a sweep.',
      },
      {
        title: 'Hearing test',
        text: 'Find the highest pitch each ear can hear and compare it with typical ranges by age. For curiosity, not a medical test.',
      },
    ],
    privacySummary:
      'No account needed. Microphone tests run on your phone, and recordings are never saved or uploaded. Ads are provided by Google AdMob and never interrupt a running test.',
    privacyPolicy: '/privacy-policy-speaker-tester/privacy-policy.html',
    downloads: '1K+',
    icon: speakerIcon,
    screenshots: [
      { src: speakerShot1, alt: 'Speaker cleaner screen with water, dust and manual modes' },
      { src: speakerShot2, alt: 'Full Audio Check listing every test it runs' },
      { src: speakerShot3, alt: 'Hearing test screen' },
      { src: speakerShot4, alt: 'Stereo test with left and right channels' },
    ],
  },
  {
    slug: 'screen-check',
    name: 'Screen Tester: LCD & Touch',
    packageName: 'com.ehsanapps.screencheck',
    tagline: 'Find dead pixels, colour problems and touch dead zones before you buy, sell or repair a phone.',
    highlights: [
      'Full-screen colours to spot dead and stuck pixels',
      'Touch tests that show exactly where touch fails',
      'Brightness and glass checks',
    ],
    features: [
      {
        title: 'Colour and LCD tests',
        text: 'Fill the screen with solid colours to spot dead or stuck pixels, tints, uneven backlight and burn-in.',
      },
      {
        title: 'Touch screen tests',
        text: 'Draw over the whole screen or follow N, X and maze patterns. Any area that does not respond shows up straight away.',
      },
      {
        title: 'Brightness test',
        text: 'Check that the screen dims and brightens smoothly, without flicker or uneven patches.',
      },
      {
        title: 'Glass check',
        text: 'A guided look for cracks, chips and deep scratches, with examples of what each one looks like.',
      },
      {
        title: 'Made for buying and repairs',
        text: 'Check a used phone before you pay for it, or a new screen before you leave the repair shop.',
      },
    ],
    privacySummary:
      'No account needed, and your test results stay on your phone. Ads are provided by Google AdMob and never show during a test.',
    privacyPolicy: '/privacy-policy-screencheck/privacy-policy.html',
    downloads: '100+',
    icon: screenCheckIcon,
    screenshots: [
      { src: screenCheckShot1, alt: 'Screen Check: LCD & Touch, "Test. Validate. Trust your screen."' },
      { src: screenCheckShot2, alt: 'Home screen listing the glass, brightness, colour and touch tests' },
      { src: screenCheckShot3, alt: 'X pattern touch test, with the touched squares turning green' },
    ],
  },
];
