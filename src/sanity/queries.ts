import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    title,
    description,
    "ogImageUrl": ogImage.asset->url
  }
`);

export const pageLandingQuery = defineQuery(`
  *[_type == "pageLanding"][0] {
    heroTitle,
    heroSubtitle,
    ctaText,
    ctaLink
  }
`);
