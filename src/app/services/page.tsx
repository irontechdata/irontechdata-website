import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { pageServicesQuery } from "@/sanity/queries";
import { OurServices } from "@/components/services/OurServices";

export const metadata: Metadata = {
    title: "Services",
};

export default async function ServicesPage() {
    const { data: page } = await sanityFetch({ query: pageServicesQuery });

    if (!page) {
        return <div>Services page data not found.</div>;
    }

    return (
        <main>
            <OurServices data={page} />
        </main>
    );
}
