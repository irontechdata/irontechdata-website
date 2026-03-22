"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { HeaderQueryResult, FooterQueryResult, SocialLinksQueryResult } from "../../sanity.types";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const Provider = ({
    children,
    headerData,
    socialLinksData,
    footerData,
}: {
    children: React.ReactNode;
    headerData: HeaderQueryResult;
    socialLinksData: SocialLinksQueryResult;
    footerData: FooterQueryResult;
}) => {
    const pathName = usePathname();
    const isStudioPath = pathName.startsWith("/studio");

    return (
        <>
            <Analytics />
            <SpeedInsights />
            {!isStudioPath && <Header headerData={headerData} socialLinksData={socialLinksData} />}
            {children}
            {!isStudioPath && <Footer footerData={footerData} socialLinksData={socialLinksData} />}
            <Toaster />
        </>
    );
};
