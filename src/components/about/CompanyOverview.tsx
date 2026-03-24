import { PageAboutQueryResult } from "../../../sanity.types";
import { PortableText } from "next-sanity";

type CompanyOverviewSection =
  NonNullable<PageAboutQueryResult>["companyOverview"];

export const CompanyOverview = ({ data }: { data: CompanyOverviewSection }) => {
  if (!data) return null;

  const { title, description } = data || {};

  return (
    <section id="company-overview">
      <h2>{title || "Company Overview"}</h2>
      {description && <PortableText value={description} />}
    </section>
  );
};
