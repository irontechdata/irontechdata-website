import { sanityFetch } from "@/sanity/lib/live";
import { pageLandingQuery, siteSettingsQuery } from "@/sanity/queries";
import Image from "next/image";

export default async function Home() {
    // Fetch site settings and landing page data simultaneously
    const [{ data: settings }, { data: page }] = await Promise.all([
        sanityFetch({ query: siteSettingsQuery }),
        sanityFetch({ query: pageLandingQuery }),
    ]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start text-center sm:text-left gap-12">
                {/* Site Settings Example */}
                <div className="w-full rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wider">
                        Global Site Settings (Fetched from Sanity)
                    </p>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                        {settings?.title || "Default Title"}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        {settings?.description || "No description provided."}
                    </p>
                </div>

                {/* Landing Page Content Example */}
                <div className="flex flex-col gap-6">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                        Landing Page Document (Fetched from Sanity)
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {page?.heroTitle || "Your Barebones Setup is Ready!"}
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
                        {page?.heroSubtitle ||
                            "This page is using React Server Components to fetch strongly typed data directly from your Sanity CMS."}
                    </p>

                    {page?.ctaText && (
                        <a
                            href={page.ctaLink || "#"}
                            className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-max"
                        >
                            {page.ctaText}
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
}
