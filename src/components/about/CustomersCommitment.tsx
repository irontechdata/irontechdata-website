import { PageAboutQueryResult } from "../../../sanity.types";

type CustomersCommitment = NonNullable<PageAboutQueryResult>["customersCommitment"];

export const CustomersCommitment = ({ data }: { data: CustomersCommitment }) => {
    return (
        <section id="customers-commitment">
            <div>
                <h3>{data?.targetCustomers?.title || "Target Customers"}</h3>
                <p>{data?.targetCustomers?.description}</p>
            </div>
            <div>
                <h3>{data?.ourCommitment?.title || "Our Commitment"}</h3>
                <p>{data?.ourCommitment?.description}</p>
            </div>
        </section>
    );
};
