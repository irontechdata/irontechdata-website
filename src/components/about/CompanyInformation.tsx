import { PageAboutQueryResult } from "../../../sanity.types";

type companyInformation = NonNullable<PageAboutQueryResult>["companyInformation"];

export const CompanyInformation = ({ data }: { data: companyInformation }) => {
    return (
        <section id="company-information">
            <h3>{data?.companyName || "Company Information"}</h3>
            <p>
                <strong>Brand:</strong> {data?.brandName}
            </p>
            <p>
                <strong>Industry:</strong> {data?.industry}
            </p>
            <p>
                <strong>Focus:</strong> {data?.coreFocus}
            </p>
        </section>
    );
};
