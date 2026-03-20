"use client";

import type { HeaderQueryResult, SocialLinksQueryResult } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { SocialLinks } from "../socialLinks";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = ({
    headerData,
    socialLinksData,
}: {
    headerData: HeaderQueryResult;
    socialLinksData: SocialLinksQueryResult;
}) => {
    const pathname = usePathname();

    return (
        <header className="w-full sticky top-0 z-50">
            <section className="container mx-auto flex items-center justify-around">
                <Link href="/" className="cursor-pointer p-2">
                    <Image
                        src={urlFor(headerData?.logo ?? "").url()}
                        alt="Logo"
                        width={300}
                        height={100}
                        className="h-16 object-contain"
                    />
                </Link>

                <div className="relative flex items-center justify-center w-full min-h-20">
                    <Image
                        src={urlFor(headerData?.navBackgroundImage ?? "").url()}
                        alt="Nav Background Image"
                        fill
                        className="lg:object-contain object-cover z-0"
                    />

                    <div className="relative z-10 px-4 py-6 flex items-center justify-evenly w-full gap-4">
                        <nav className="px-4">
                            <NavigationMenu>
                                <NavigationMenuList className="text-primary">
                                    {headerData?.navLinks?.map((link) => {
                                        const isActive = pathname === link?.link;

                                        return (
                                            <NavigationMenuItem key={link?._key}>
                                                <NavigationMenuLink
                                                    asChild
                                                    className={cn(
                                                        "font-semibold text-xl transition-all",
                                                        isActive && "font-black",
                                                    )}
                                                >
                                                    <Link href={link?.link || "#"}>{link?.label}</Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        );
                                    })}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>

                        <SocialLinks socialLinksData={socialLinksData} />
                    </div>
                </div>
            </section>
        </header>
    );
};
