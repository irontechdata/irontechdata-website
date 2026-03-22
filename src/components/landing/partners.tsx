"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { motion } from "motion/react";
import { PageLandingQueryResult } from "../../../sanity.types";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type PartnersSectionData = NonNullable<NonNullable<PageLandingQueryResult>["partners"]>;

export const PartnersSection = ({ data }: { data: PartnersSectionData }) => {
    if (!data || !data.partnerImages || data.partnerImages.length === 0) return null;

    const isCarouselActive = data.partnerImages.length > 4;

    const LogoItem = ({ image, index }: { image: any; index: number }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center justify-center p-4 min-w-[140px] lg:min-w-[180px]"
        >
            <div className="relative w-full h-16 lg:h-20 max-w-[200px] transition-transform duration-300 hover:scale-105">
                <Image
                    src={urlFor(image).url()}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    className="object-contain"
                />
            </div>
        </motion.div>
    );

    return (
        <section className="relative w-full min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden py-16 px-4">
            {/* Main Background Image */}
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

            {/* Technical Nodes Overlay */}
            {data.backgroundImageNodes && (
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
                    <Image
                        src={urlFor(data.backgroundImageNodes).url()}
                        alt="Background Nodes"
                        fill
                        className="object-contain"
                    />
                </div>
            )}

            <div className="container relative z-10 w-full max-w-7xl mx-auto">
                {isCarouselActive ? (
                    <Carousel
                        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="max-w-3xl w-full mx-auto"
                    >
                        <CarouselContent>
                            {data.partnerImages.map((image, i) => (
                                <CarouselItem
                                    key={image._key || i}
                                    className="basis-full sm:basis-1/2 lg:basis-1/4"
                                >
                                    <LogoItem image={image} index={i} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto items-center justify-center gap-4 lg:gap-8">
                        {data.partnerImages.map((image, i) => (
                            <div key={image._key || i} className="">
                                <LogoItem image={image} index={i} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
