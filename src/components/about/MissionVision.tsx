"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PageAboutQueryResult } from "../../../sanity.types";

type MissionVisionSection = NonNullable<PageAboutQueryResult>["missionVision"];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export const MissionVision = ({ data }: { data: MissionVisionSection }) => {
  if (!data) return null;

  const { mission, vision, backgroundImage } = data;

  return (
    <section className="relative w-full py-20 lg:py-28 px-4 bg-white overflow-hidden">
      <div className="container relative z-10">
        {/* Inner wrapper — background hugs this div */}
        <div className="relative overflow-hidden rounded-lg">
          {/* Background Overlay Illustration — hugs this inner div */}
          {backgroundImage && (
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
              <Image
                src={urlFor(backgroundImage).url()}
                alt="Background Overlay"
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 py-16 px-8 lg:px-16">
            {/* Mission — text-left */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
            >
              {mission?.icon && (
                <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                  <Image
                    src={urlFor(mission.icon).url()}
                    alt={mission.title || "Our Mission"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#126299] uppercase tracking-wide">
                {mission?.title || "Our Mission"}
              </h3>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-md">
                {mission?.description}
              </p>
            </motion.div>

            {/* Vision — text-right */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end text-center md:text-right gap-6"
            >
              {vision?.icon && (
                <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                  <Image
                    src={urlFor(vision.icon).url()}
                    alt={vision.title || "Our Vision"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#126299] uppercase tracking-wide">
                {vision?.title || "Our Vision"}
              </h3>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-md">
                {vision?.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
