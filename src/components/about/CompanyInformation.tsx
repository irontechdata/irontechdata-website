import { PageAboutQueryResult } from "../../../sanity.types";

type companyInformation = NonNullable<PageAboutQueryResult>["companyInformation"];

export const CompanyInformation = ({ data }: { data: companyInformation }) => {
    if (!data) return null;

    const { companyName, brandName, industry, coreFocus } = data;

    return (
        <section id="company-information">
            <h3>{companyName || "Company Information"}</h3>
            <p>
                <strong>Brand:</strong> {brandName}
            </p>
            <p>
                <strong>Industry:</strong> {industry}
            </p>
            <p>
                <strong>Focus:</strong> {coreFocus}
            </p>
        </section>
    );
};
