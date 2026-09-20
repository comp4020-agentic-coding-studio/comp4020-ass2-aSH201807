import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see. "Studio" is the weekly hands-on scenario-writing
// meeting, distinct from a "Lecture" (theory input for the week ahead).
export const sessionLabels = {
  singular: "Studio",
  plural: "Studios",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

// The nav brand renders as a text wordmark (not the Slop crest image) so it
// can read "Miskatonic University" and link out to the in-universe fan site
// below instead of home — see BrandLinkOverride.astro, injected into every
// page's head slot, for how the link target is patched in.
export const miskatonicUrl = "https://miskatonic.cthulhuclub.com/";

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Miskatonic University",
  logo: undefined,
  logoDark: undefined,
  logoCompact: undefined,

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  licence: "CC-BY-NC-SA-4.0",
});
