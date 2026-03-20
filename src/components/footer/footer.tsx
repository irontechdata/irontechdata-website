import Link from "next/link";
import type { FooterQueryResult, SocialLinksQueryResult } from "../../../sanity.types";
import { SocialLinks } from "../socialLinks";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Phone, Smartphone, Mail, MapPin } from "lucide-react";

import { ContactForm } from "../contactForm/contactForm";

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
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white">
                    <MapPin size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.addressText,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white">
                    <Phone size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.phoneLandline,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white">
                    <Smartphone size={20} strokeWidth={2} />
                </div>
            ),
            text: footerData?.phoneMobile,
        },
        {
            icon: (
                <div className="flex shrink-0 items-center justify-center rounded-full bg-primary p-2 text-white">
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

                    <div className="flex flex-col gap-1">
                        {contactInfoData?.map((contactInfo, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 py-2 font-bold"
                            >
                                {contactInfo?.icon}
                                <span className="text-xl">{contactInfo?.text}</span>
                            </div>
                        ))}
                    </div>
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
