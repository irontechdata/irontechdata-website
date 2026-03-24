import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { pageAboutQuery } from "@/sanity/queries";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { MissionVision } from "@/components/about/MissionVision";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { CustomersCommitment } from "@/components/about/CustomersCommitment";
import { CompanyInformation } from "@/components/about/CompanyInformation";

export const metadata: Metadata = {
    title: "About",
};

export default async function AboutPage() {
    const { data: page } = await sanityFetch({ query: pageAboutQuery });

    if (!page) {
        return <div>About page data not found.</div>;
    }

    return (
        <main>
            <CompanyOverview data={page.companyOverview} />
            <MissionVision data={page.missionVision} />
            <WhatWeDo data={page.whatWeDoSection} />
            <CustomersCommitment data={page.customersCommitment} />
            <CompanyInformation data={page.companyInformation} />
        </main>
    );
}
