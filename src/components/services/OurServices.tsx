"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { motion } from "motion/react";
import { PageServicesQueryResult } from "../../../sanity.types";

type Services = { data: NonNullable<PageServicesQueryResult> };

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export const OurServices = ({ data }: Services) => {
  if (!data) return null;

  const {
    pageTitle,
    hexagonNodeIllustration,
    networkNodeIllustration,
    services,
  } = data;

  return (
    <section className="relative w-full min-h-screen py-24 overflow-hidden mt-20">
      {/* Background Overlays */}
      {/* Top 1/3 Hexagon Node */}
      {hexagonNodeIllustration && (
        <div className="absolute top-0 left-0 w-full z-0 h-1/2 pointer-events-none opacity-50">
          <Image
            src={urlFor(hexagonNodeIllustration).url()}
            alt="Hexagon Layer"
            fill
            className="object-cover lg:object-contain object-top"
          />
        </div>
      )}

      {/* Bottom 1/3 Network Node */}
      {networkNodeIllustration && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 z-0 pointer-events-none opacity-60">
          <Image
            src={urlFor(networkNodeIllustration).url()}
            alt="Network Node Overlay"
            fill
            className="object-cover object-bottom"
          />
        </div>
      )}

      <div className="container mx-auto relative z-10 px-6 md:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a528f] uppercase tracking-wide">
            {pageTitle || "OUR SERVICES"}
          </h1>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-14 max-w-5xl pl-2 md:pl-8"
        >
          {services?.map((service, index) => (
            <motion.div
              key={service?._key || index}
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10"
            >
              {/* Illustration / Icon */}
              {service?.illustration && (
                <div className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 relative mt-1">
                  <Image
                    src={urlFor(service.illustration).url()}
                    alt={service.title || "Service illustration"}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              )}

              {/* Text Block */}
              <div className="flex-1 w-full pt-1">
                {service?.title && (
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {service.title}
                  </h3>
                )}
                {service?.description && (
                  <div className="prose prose-lg prose-p:leading-snug prose-li:leading-tight text-black max-w-none [&>p]:text-[20px] [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-[#333] [&>ul]:mt-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:text-[18px]">
                    <PortableText value={service.description} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
