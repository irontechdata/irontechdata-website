"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PageLandingQueryResult } from "../../../sanity.types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PARALLAX_FACTOR = 1.2;

type HeroSectionData = NonNullable<NonNullable<PageLandingQueryResult>["heroSection"]>;

export const HeroSection = ({ data }: { data: HeroSectionData }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const tweenParallax = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return;
        
        const engine = (emblaApi as any).internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        
        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex: number) => {
                const inView = slidesInView.includes(slideIndex);
                if (!inView && emblaApi.scrollSnapList().length > 3) return; // Optimize for larger lists

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem: any) => {
                        const target = loopItem.target();
                        
                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const translate = diffToTarget * (-1 / PARALLAX_FACTOR) * 100;
                const slide = emblaApi.slideNodes()[slideIndex];
                slide.style.setProperty("--parallax-offset", `${translate}%`);
            });
        });
    }, []);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });

        tweenParallax(api);
        api.on("scroll", () => tweenParallax(api));
        api.on("reInit", () => tweenParallax(api));
    }, [api, tweenParallax]);

    const scrollTo = useCallback((index: number) => {
        if (api) api.scrollTo(index);
    }, [api]);

    if (!data) return null;

    return (
        <section className="relative w-full h-[600px] lg:h-[800px] bg-black overflow-hidden flex items-center justify-center">
            {data.backgroundImages && data.backgroundImages.length > 0 && (
                <Carousel
                    setApi={setApi}
                    plugins={[
                        Autoplay({ delay: 5000, stopOnInteraction: false }),
                    ]}
                    opts={{ loop: true }}
                    className="w-full h-full absolute inset-0 z-0 [&>div]:h-full"
                >
                    <CarouselContent className="h-full ml-0">
                        {data.backgroundImages.map((image, i) => (
                            <CarouselItem key={image._key || i} className="relative h-full pl-0 min-w-full overflow-hidden">
                                <div 
                                    className="absolute inset-0 w-[120%] h-full left-[-10%]"
                                    style={{ transform: "translateX(var(--parallax-offset, 0%))" }}
                                >
                                    <Image
                                        src={urlFor(image).url()}
                                        alt={`Background ${i + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={i === 0}
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
            
            {/* Subtle overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />

            {/* Logo and CTA */}
            <div className="relative z-20 flex flex-col items-center justify-center gap-10 px-4 text-center pointer-events-auto">
                {data.logo && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src={urlFor(data.logo).url()}
                            alt="Hero Logo"
                            width={1000}
                            height={400}
                            className="max-w-[90vw] lg:max-w-[800px] object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                )}

                {data.cta?.label && data.cta?.link && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <Button
                            asChild
                            className="rounded-full bg-[#126299] hover:bg-[#0f5280] py-4 px-8 md:py-6 md:px-10 md:text-xl font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-105"
                        >
                            <Link href={data.cta.link}>{data.cta.label}</Link>
                        </Button>
                    </motion.div>
                )}
            </div>

            {/* Custom Pagination Overlay */}
            {count > 1 && (
                <div className="absolute bottom-10 z-30 flex items-center justify-center gap-3 w-full pointer-events-auto">
                    {Array.from({ length: count }).map((_, i) => (
                        <button
                            key={i}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                current === i + 1
                                    ? "w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                                    : "w-2 bg-white/40 hover:bg-white/70"
                            )}
                            onClick={() => scrollTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};
