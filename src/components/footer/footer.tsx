import Link from "next/link";
import type { FooterQueryResult, SocialLinksQueryResult } from "../../../sanity.types";
import { SocialLinks } from "../socialLinks";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";

import { ContactForm } from "../contactForm/contactForm";

import { motion } from "motion/react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

export const Footer = ({
    footerData,
    socialLinksData,
}: {
    footerData: FooterQueryResult;
    socialLinksData: SocialLinksQueryResult;
}) => {
    const contactInfoData = [
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(18,98,153,0.5)]">
                    <MapPin size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.addressText,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(18,98,153,0.5)]">
                    <Phone size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.phoneLandline,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(18,98,153,0.5)]">
                    <Smartphone size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.phoneMobile,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(18,98,153,0.5)]">
                    <Mail size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.email,
        },
    ];

    return (
        <footer className="relative bg-white py-10 dark:bg-black overflow-hidden">
            <Image
                src={urlFor(footerData?.footerBackgroundImage ?? "").url()}
                alt="Footer Background"
                fill
                className="object-cover z-0"
            />
            <div className="absolute inset-0 bg-white/60 dark:bg-black/80 z-0"></div>

            <section className="relative z-10 container mx-auto flex flex-col items-center justify-center gap-12 px-8 lg:flex-row lg:items-center text-black dark:text-white">
                <div className="flex flex-1 flex-col gap-10 lg:items-start">
                    <Image
                        src={urlFor(footerData?.logo ?? "").url()}
                        alt="Logo"
                        width={300}
                        height={100}
                        className="h-36 object-contain text-stone-100 dark:brightness-0 dark:invert"
                    />

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-1"
                    >
                        {contactInfoData?.map((contactInfo, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-4 py-2 font-bold group cursor-pointer transition-all duration-300 hover:translate-x-2"
                            >
                                {contactInfo?.icon}
                                <span className="text-xl transition-colors duration-300 group-hover:text-primary">{contactInfo?.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="relative z-10 flex flex-1 items-center justify-center">
                    <ContactForm />
                </div>
            </section>

            <div className="container mx-auto px-8 mt-16 relative z-10 flex items-center justify-center lg:justify-end">
                <SocialLinks socialLinksData={socialLinksData} />
            </div>
        </footer>
    );
};
