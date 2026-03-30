"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PageAboutQueryResult } from "../../../sanity.types";

type CustomersCommitmentSection =
  NonNullable<PageAboutQueryResult>["customersCommitment"];

export const CustomersCommitment = ({
  data,
}: {
  data: CustomersCommitmentSection;
}) => {
  if (!data) return null;

  const { targetCustomers, ourCommitment, graphic } = data;

  return (
    <section className="relative w-full py-20 lg:py-28 px-4 bg-white overflow-hidden">
      {/* Graphic — overlay on mobile/tablet, hidden on lg+ here */}
      {graphic && (
        <div className="absolute inset-0 z-1 pointer-events-none opacity-10 lg:hidden">
          <Image
            src={urlFor(graphic).url()}
            alt="Graphic Cluster"
            fill
            className="object-contain object-center"
          />
        </div>
      )}

      <div className="container mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
        {/* Text Content — Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-10 z-10 max-w-xl"
        >
          {/* Target Customers */}
          {targetCustomers && (
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl lg:text-4xl font-extrabold text-[#126299] uppercase tracking-wide">
                {targetCustomers.title || "Target Customers"}
              </h3>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                {targetCustomers.description}
              </p>
            </div>
          )}

          {/* Our Commitment */}
          {ourCommitment && (
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl lg:text-4xl font-extrabold text-[#126299] uppercase tracking-wide">
                {ourCommitment.title || "Our Commitment"}
              </h3>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                {ourCommitment.description}
              </p>
            </div>
          )}
        </motion.div>

        {/* Graphic Cluster — visible only on lg+ as inline column */}
        {graphic && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block flex-1 w-full max-w-md z-10"
          >
            <div className="relative aspect-square">
              <Image
                src={urlFor(graphic).url()}
                alt="Graphic Cluster"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
