"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { PageAboutQueryResult } from "../../../sanity.types";

type CompanyOverviewSection =
  NonNullable<PageAboutQueryResult>["companyOverview"];

export const CompanyOverview = ({ data }: { data: CompanyOverviewSection }) => {
  if (!data) return null;

  const {
    title,
    description,
    mainIllustration,
    hexagonNodeIllustration,
    backgroundImage,
  } = data;

  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[700px] flex items-center overflow-hidden py-20 px-4">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Hexagon Node Overlay — spans full section, positioned right 2/3 */}
      {hexagonNodeIllustration && (
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 md:left-[10%] md:bottom-0 md:translate-x-0 md:top-auto md:h-full max-w-lg md:max-w-xl xl:max-w-5xl w-full md:w-full z-1 pointer-events-none overflow-visible">
          <div className="relative w-full h-full scale-110 lg:scale-125">
            <Image
              src={urlFor(hexagonNodeIllustration).url()}
              alt="Hexagon Nodes"
              fill
              className="object-cover object-center opacity-40"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto relative z-10 flex flex-col gap-6 px-8">
        {/* Main Illustration Overlay — spans full section, positioned right 1/3 */}
        {mainIllustration && (
          <div className="absolute top-0 bottom-0 right-0 w-full md:w-1/2 z-2 pointer-events-none opacity-60 md:opacity-100">
            <Image
              src={urlFor(mainIllustration).url()}
              alt="Company Overview Illustration"
              fill
              className="object-contain object-right"
            />
          </div>
        )}

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 z-10 max-w-xl lg:max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wide">
            {title || "Company Overview"}
          </h2>
          {description && (
            <div className="text-xl lg:text-2xl text-white/90 font-bold leading-relaxed [&>p]:mb-4">
              <PortableText value={description} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
