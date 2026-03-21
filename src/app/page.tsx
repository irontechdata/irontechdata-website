import { HeroSection } from "@/components/landing/hero";
import { AboutSection } from "@/components/landing/about";
import { ServicesSection } from "@/components/landing/services";
import { PartnersSection } from "@/components/landing/partners";
import { sanityFetch } from "@/sanity/lib/live";
import { pageLandingQuery, siteSettingsQuery } from "@/sanity/queries";

export default async function Home() {
    const [{ data: settings }, { data: page }] = await Promise.all([
        sanityFetch({ query: siteSettingsQuery }),
        sanityFetch({ query: pageLandingQuery }),
    ]);

    const heroSectionData = page?.heroSection;
    const aboutSectionData = page?.aboutSection;
    const servicesSectionData = page?.ourServices;
    const partnersSectionData = page?.partners;

    return (
        <main className="">
            <HeroSection data={heroSectionData!} />
            <AboutSection data={aboutSectionData!} />
            <ServicesSection data={servicesSectionData!} />
            <PartnersSection data={partnersSectionData!} />
        </main>
    );
}
