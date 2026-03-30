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
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { 
            type: "spring" as const,
            stiffness: 100,
            damping: 20,
            duration: 0.8
        },
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
        <div className="absolute top-0 left-0 w-full z-0 h-3/5 pointer-events-none opacity-50">
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a528f] uppercase tracking-wide text-center md:text-left">
            {pageTitle || "OUR SERVICES"}
          </h1>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-14 max-w-4xl mx-auto"
        >
          {services?.map((service, index) => {
            // Create a clean URL-friendly ID (slugify)
            const sectionId = service.title
                ?.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "") // Remove special chars like &
                .trim()
                .replace(/\s+/g, "-"); // Replace spaces with hyphens
            
            return (
              <motion.div
                id={sectionId}
                key={service?._key || index}
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-12 scroll-mt-24 md:scroll-mt-32 p-6 rounded-2xl transition-all duration-500"
              >
              {/* Illustration / Icon */}
              {service?.illustration && (
                <div className="shrink-0 w-32 h-32 md:w-44 md:h-44 relative mt-1">
                  <Image
                    src={urlFor(service.illustration).url()}
                    alt={service.title || "Service illustration"}
                    fill
                    className="object-contain object-center md:object-left"
                  />
                </div>
              )}

              {/* Text Block */}
              <div className="flex-1 flex flex-col items-center md:items-start w-full pt-1 text-center md:text-left">
                {service?.title && (
                  <h3 className="text-2xl md:text-4xl font-bold text-black mb-2">
                    {service.title}
                  </h3>
                )}
                {service?.description && (
                  <div className="prose prose-lg prose-p:leading-snug prose-li:leading-tight text-black max-w-none [&>p]:text-[20px] [&>p:first-of-type]:font-medium [&>p:first-of-type]:text-[#333] [&>ul]:mt-3 [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:text-[18px] text-center md:text-left">
                    <PortableText value={service.description} />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
        </motion.div>
      </div>
    </section>
  );
};
