import { PageAboutQueryResult } from "../../../sanity.types";

type MissionVisionSection = NonNullable<PageAboutQueryResult>["missionVision"];

export const MissionVision = ({ data }: { data: MissionVisionSection }) => {
    return (
        <section id="mission-vision">
            <div>
                <h3>{data?.mission?.title || "Our Mission"}</h3>
                <p>{data?.mission?.description}</p>
            </div>
            <div>
                <h3>{data?.vision?.title || "Our Vision"}</h3>
                <p>{data?.vision?.description}</p>
            </div>
        </section>
    );
};
