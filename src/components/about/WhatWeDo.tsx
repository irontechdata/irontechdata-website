import { PageAboutQueryResult } from "../../../sanity.types";
import { PortableText } from "next-sanity";

type WhatWeDoSection = NonNullable<PageAboutQueryResult>["whatWeDoSection"];

export const WhatWeDo = ({ data }: { data: WhatWeDoSection }) => {
  if (!data) return null;

  const { whatWeDo, ourApproach, whyChoose } = data;

  return (
    <section id="what-we-do">
      <div>
        <h3>{whatWeDo?.title || "What We Do"}</h3>
        {whatWeDo?.description && (
          <PortableText value={whatWeDo.description} />
        )}
      </div>
      <div>
        <h3>{ourApproach?.title || "Our Approach"}</h3>
        {ourApproach?.description && (
          <PortableText value={ourApproach.description} />
        )}
      </div>
      <div>
        <h3>{whyChoose?.title || "Why Choose Us"}</h3>
        {whyChoose?.items && (
          <PortableText value={whyChoose.items} />
        )}
      </div>
    </section>
  );
};
