import { PageAboutQueryResult } from "../../../sanity.types";

type CompanyOverviewSection = NonNullable<PageAboutQueryResult>["companyOverview"];

export const CompanyOverview = ({ data }: { data: CompanyOverviewSection }) => {
    return (
        <section id="company-overview">
            <h2>{data?.title || "Company Overview"}</h2>
            {data?.description?.map((text: string, i: number) => (
                <p key={i}>{text}</p>
            ))}
        </section>
    );
};
