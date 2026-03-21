"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { urlFor } from "@/sanity/lib/image";
import { PageLandingQueryResult } from "../../../sanity.types";
import { Button } from "@/components/ui/button";

type AboutSectionData = NonNullable<NonNullable<PageLandingQueryResult>["aboutSection"]>;

export const AboutSection = ({ data }: { data: AboutSectionData }) => {
    if (!data) return null;

    return (
        <section className="relative w-full min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Image Optimized with next/image */}
            {data.backgroundImageGradient && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={urlFor(data.backgroundImageGradient).url()}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority={false}
                    />
                </div>
            )}

            <div className="container relative z-10 flex flex-col lg:flex-row justify-evenly items-center gap-12 lg:gap-20 min-h-[400px]">
                {/* Background Nodes Overlay (Centered in Container) */}
                {data.backgroundImageNodes && (
                    <div className="absolute inset-0 z-0 opacity-40 flex items-center justify-center pointer-events-none">
                        <Image
                            src={urlFor(data.backgroundImageNodes).url()}
                            alt="Background Nodes"
                            width={1200}
                            height={800}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                )}

                {/* Content Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start gap-8 z-10"
                >
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {data.title}
                        </h2>
                    </div>

                    <p className="text-lg lg:text-3xl text-white leading-relaxed max-w-[600px]">
                        {data.description}
                    </p>

                    {data.cta?.label && data.cta?.link && (
                        <Button 
                            asChild
                            className="rounded-full bg-[#126299] hover:bg-[#0f5280] py-6 px-10 text-lg font-bold shadow-lg transition-all hover:scale-105"
                        >
                            <Link href={data.cta.link}>{data.cta.label}</Link>
                        </Button>
                    )}
                </motion.div>

                {/* Image / Graphic Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full max-w-[600px] z-10"
                >
                    {data.contentImage && (
                        <div className="relative aspect-4/3 rounded-3xl">
                            <Image
                                src={urlFor(data.contentImage).url()}
                                alt="About Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};