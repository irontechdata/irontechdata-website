"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { PageAboutQueryResult } from "../../../sanity.types";

type WhatWeDoSection = NonNullable<PageAboutQueryResult>["whatWeDoSection"];

const textBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

export const WhatWeDo = ({ data }: { data: WhatWeDoSection }) => {
  if (!data) return null;

  const { whatWeDo, ourApproach, whyChoose, mainIllustration, hexagonNodeIllustration, backgroundImage } = data;

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[800px] flex items-center overflow-hidden py-20 px-4">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(backgroundImage).url()}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Hexagon Node Overlay */}
      {hexagonNodeIllustration && (
        <div className="absolute inset-0 z-[1] opacity-30 flex items-center justify-center pointer-events-none">
          <Image
            src={urlFor(hexagonNodeIllustration).url()}
            alt="Hexagon Nodes"
            width={1200}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12">
        {/* Main Illustration — Left (taller) */}
        {mainIllustration && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md lg:max-w-lg z-10"
          >
            <div className="relative aspect-[3/4] lg:aspect-[2/3]">
              <Image
                src={urlFor(mainIllustration).url()}
                alt="What We Do Illustration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}

        {/* Text Content — Right */}
        <div className="flex-1 flex flex-col gap-10 z-10 max-w-xl">
          {/* What We Do */}
          {whatWeDo && (
            <motion.div
              custom={0}
              variants={textBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide">
                {whatWeDo.title || "What We Do"}
              </h3>
              {whatWeDo.description && (
                <div className="text-lg lg:text-xl text-white/90 leading-relaxed [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&_li]:text-white/90">
                  <PortableText value={whatWeDo.description} />
                </div>
              )}
            </motion.div>
          )}

          {/* Our Approach */}
          {ourApproach && (
            <motion.div
              custom={1}
              variants={textBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide">
                {ourApproach.title || "Our Approach"}
              </h3>
              {ourApproach.description && (
                <div className="text-lg lg:text-xl text-white/90 leading-relaxed [&>p]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&_li]:text-white/90">
                  <PortableText value={ourApproach.description} />
                </div>
              )}
            </motion.div>
          )}

          {/* Why Choose Us */}
          {whyChoose && (
            <motion.div
              custom={2}
              variants={textBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide">
                {whyChoose.title || "Why Choose Us"}
              </h3>
              {whyChoose.items && (
                <div className="text-lg lg:text-xl text-white/90 leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&_li]:text-white/90">
                  <PortableText value={whyChoose.items} />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
