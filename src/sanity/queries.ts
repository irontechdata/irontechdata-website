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
    _id,
    heroSection,
    aboutSection,
    ourServices,
    partners
  }
`);

export const headerQuery = defineQuery(`
  *[_type == "header"][0] {
    logo,
    navLinks,
    navBackgroundImage
  }
`);

export const footerQuery = defineQuery(`
  *[_type == "footer"][0] {
    logo,
    addressText,
    phoneLandline,
    phoneMobile,
    email,
    footerBackgroundImage
  }
`);

export const socialLinksQuery = defineQuery(`
  *[_type == "socialLinks"][0] {
    title,
    icons
  }
`);

export const pageAboutQuery = defineQuery(`
    *[_type == "pageAbout"][0] {
      _id,
      pageTitle,
      companyOverview,
      missionVision,
      whatWeDoSection,
      customersCommitment,
      companyInformation
    }
`);

export const pageServicesQuery = defineQuery(`
    *[_type == "pageServices"][0] {
      _id,
      pageTitle,
      hexagonNodeIllustration,
      networkNodeIllustration,
      services
    }
`);
