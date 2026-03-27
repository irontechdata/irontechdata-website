"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PageAboutQueryResult } from "../../../sanity.types";

type CompanyInformationSection =
  NonNullable<PageAboutQueryResult>["companyInformation"];

const infoItems = [
  { key: "companyName", label: "Company Name" },
  { key: "brandName", label: "Brand Name" },
  { key: "industry", label: "Industry" },
  { key: "coreFocus", label: "Core Focus" },
] as const;

export const CompanyInformation = ({
  data,
}: {
  data: CompanyInformationSection;
}) => {
  if (!data) return null;

  const { backgroundImage, hexagonNodeIllustration, logo } = data;

  return (
    <section className="relative w-full py-16 lg:py-24 px-4 overflow-hidden">
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
        <div className="absolute inset-0 z-1 opacity-30 flex items-center justify-center pointer-events-none">
          <Image
            src={urlFor(hexagonNodeIllustration).url()}
            alt="Hexagon Nodes"
            width={1200}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        {/* Left — Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center z-10"
        >
          {logo && (
            <Image
              src={urlFor(logo).url()}
              alt="Company Logo"
              width={800}
              height={600}
              className="object-contain max-w-full"
            />
          )}
        </motion.div>

        {/* Right — Company Info Details (stacked label/value) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex-1 flex flex-col items-end gap-4 z-10"
        >
          <h3 className="text-2xl lg:text-3xl font-extrabold text-white uppercase tracking-wide mb-2">
            Company Information
          </h3>

          {infoItems.map(({ key, label }) => {
            const value = data[key];
            if (!value) return null;

            return (
              <div key={key} className="flex flex-col items-end">
                <span className="text-sm lg:text-base font-bold text-white/60 uppercase tracking-wider">
                  {label}:
                </span>
                <span className="text-lg lg:text-xl text-white">
                  {value}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
