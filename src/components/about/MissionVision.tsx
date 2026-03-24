import { PageAboutQueryResult } from "../../../sanity.types";

type MissionVisionSection = NonNullable<PageAboutQueryResult>["missionVision"];

export const MissionVision = ({ data }: { data: MissionVisionSection }) => {
  if (!data) return null;

  const { mission, vision } = data;

  return (
    <section id="mission-vision">
      <div>
        <h3>{mission?.title || "Our Mission"}</h3>
        <p>{mission?.description}</p>
      </div>
      <div>
        <h3>{vision?.title || "Our Vision"}</h3>
        <p>{vision?.description}</p>
      </div>
    </section>
  );
};
