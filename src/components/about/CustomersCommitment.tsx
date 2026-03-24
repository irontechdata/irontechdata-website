import { PageAboutQueryResult } from "../../../sanity.types";

type CustomersCommitment =
  NonNullable<PageAboutQueryResult>["customersCommitment"];

export const CustomersCommitment = ({
  data,
}: {
  data: CustomersCommitment;
}) => {
  if (!data) return null;

  const { graphic, targetCustomers, ourCommitment } = data;

  return (
    <section id="customers-commitment">
      <div>
        <h3>{targetCustomers?.title || "Target Customers"}</h3>
        <p>{targetCustomers?.description}</p>
      </div>
      <div>
        <h3>{ourCommitment?.title || "Our Commitment"}</h3>
        <p>{ourCommitment?.description}</p>
      </div>
    </section>
  );
};
