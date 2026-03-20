import { sanityFetch } from "@/sanity/lib/live";
import { siteSettingsQuery, headerQuery, socialLinksQuery, footerQuery } from "@/sanity/queries";
import { Provider } from "@/lib/provider";

import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const akrobat = localFont({
    src: [
        {
            path: "../../public/fonts/Akrobat-Regular.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/Akrobat-SemiBold.woff",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/Akrobat-Bold.woff",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/Akrobat-ExtraBold.woff",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-akrobat",
});

export async function generateMetadata(): Promise<Metadata> {
    const { data: settings } = await sanityFetch({ query: siteSettingsQuery });

    return {
        title: settings?.title,
        description: settings?.description,
        openGraph: {
            images: [
                {
                    url: settings?.ogImageUrl || "",
                    width: 1200,
                    height: 630,
                    alt: settings?.title || "",
                },
            ],
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [{ data: headerData }, { data: socialLinksData }, { data: footerData }] =
        await Promise.all([
            sanityFetch({ query: headerQuery }),
            sanityFetch({ query: socialLinksQuery }),
            sanityFetch({ query: footerQuery }),
        ]);

    return (
        <html lang="en">
            <body className={`${akrobat.variable} font-sans antialiased`}>
                <Provider
                    headerData={headerData}
                    socialLinksData={socialLinksData}
                    footerData={footerData}
                >
                    {children}
                </Provider>
            </body>
        </html>
    );
}
