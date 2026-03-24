import { PageAboutQueryResult } from "../../../sanity.types";

type WhatWeDoSection = NonNullable<PageAboutQueryResult>["whatWeDoSection"];

export const WhatWeDo = ({ data }: { data: WhatWeDoSection }) => {
    return (
        <section id="what-we-do">
            <div>
                <h3>{data?.whatWeDo?.title || "What We Do"}</h3>
                <p>{data?.whatWeDo?.description}</p>
                <ul>
                    {data?.whatWeDo?.items?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>{data?.ourApproach?.title || "Our Approach"}</h3>
                <p>{data?.ourApproach?.description}</p>
                <ul>
                    {data?.ourApproach?.items?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>{data?.whyChoose?.title || "Why Choose Us"}</h3>
                <ul>
                    {data?.whyChoose?.items?.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
