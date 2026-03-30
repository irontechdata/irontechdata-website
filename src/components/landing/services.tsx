"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "motion/react";
import { PageLandingQueryResult } from "../../../sanity.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

type ServicesSectionData = NonNullable<NonNullable<PageLandingQueryResult>["ourServices"]>;

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

export const ServicesSection = ({ data }: { data: ServicesSectionData }) => {
    if (!data) return null;

    return (
        <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-24 lg:py-32 px-4 bg-white">
            {/* Background Pattern/Image */}
            {data.backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={urlFor(data.backgroundImage).url()}
                        alt="Background"
                        fill
                        className="object-cover opacity-50"
                        priority={false}
                    />
                </div>
            )}

            <div className="container relative z-10 flex flex-col items-center gap-16 lg:gap-24">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full text-center md:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#126299] tracking-tighter uppercase inline-block">
                        {data.title}
                    </h2>
                </motion.div>

                {/* 3x2 Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 w-full max-w-7xl mx-auto"
                >
                    {data.services?.map((service) => (
                        <motion.div 
                            key={service._key}
                            variants={itemVariants}
                            className="flex flex-col items-center text-center group cursor-pointer"
                        >
                            <Link 
                                href={service.link || "#"} 
                                className={cn(
                                    "flex flex-col items-center text-center gap-6 w-full h-full",
                                    !(service as any).link && "pointer-events-none"
                                )}
                            >
                                {/* Service Icon */}
                                {service.icon && (
                                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 transition-transform duration-300 group-hover:scale-110">
                                        <Image
                                            src={urlFor(service.icon).url()}
                                            alt={service.title || "Service Icon"}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}

                                {/* Service Details */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl lg:text-2xl font-bold text-[#126299] leading-none">
                                        {service.title}
                                    </h3>
                                    {service.subtitle && (
                                        <p className="text-base lg:text-lg text-[#126299]/70 font-medium leading-tight">
                                            {service.subtitle}
                                        </p>
                                    )}
                                    {service.link && (
                                        <div className="mt-4 flex items-center justify-center gap-2 text-[#126299] font-bold transition-all duration-300 group-hover:gap-4">
                                            <span className="uppercase tracking-wider text-sm">Read More</span>
                                            <MoveRight size={18} className="transition-transform duration-300" />
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
