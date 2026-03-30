"use client";

import type { HeaderQueryResult, SocialLinksQueryResult } from "../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { SocialLinks } from "../socialLinks";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export const Header = ({
    headerData,
    socialLinksData,
}: {
    headerData: HeaderQueryResult;
    socialLinksData: SocialLinksQueryResult;
}) => {
    const pathname = usePathname();

    const NavLinks = ({
        className,
        isMobile = false,
    }: {
        className?: string;
        isMobile?: boolean;
    }) => (
        <NavigationMenu className={className}>
            <NavigationMenuList
                className={cn(
                    "flex",
                    isMobile
                        ? "flex-col items-start gap-12"
                        : "text-primary flex-row items-center xl:gap-10 text-center",
                )}
            >
                {headerData?.navLinks?.map((link) => {
                    const isActive = pathname === link?.link;

                    return (
                        <NavigationMenuItem key={link?._key} className={cn(isMobile && "w-full")}>
                            <NavigationMenuLink
                                asChild
                                className={cn(
                                    "font-semibold text-xl transition-all hover:text-primary/70",
                                    isActive &&
                                        "font-black text-primary border-b-2 border-primary lg:border-none",
                                    isMobile && "text-3xl py-2 block uppercase tracking-tighter",
                                )}
                            >
                                <Link href={link?.link || "#"}>{link?.label}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="cursor-pointer shrink-0">
                    <Image
                        src={urlFor(headerData?.logo ?? "").url()}
                        alt="Logo"
                        width={200}
                        height={66}
                        className="h-10 lg:h-16 w-auto object-contain"
                    />
                </Link>

                {/* DESKTOP NAV (Hidden on Tablet and Mobile) - Breakpoint at lg (1024px) */}
                <div className="hidden lg:flex relative items-center justify-center flex-1 min-h-20 max-w-4xl ml-20">
                    {headerData?.navBackgroundImage && (
                        <Image
                            src={urlFor(headerData?.navBackgroundImage).url()}
                            alt="Nav Background"
                            fill
                            className="object-cover z-0"
                            priority
                        />
                    )}

                    <div className="relative z-10 px-12 flex items-center justify-between w-full">
                        <NavLinks />
                        <SocialLinks socialLinksData={socialLinksData} />
                    </div>
                </div>

                {/* MOBILE NAV TRIGGER (Visible on Tablet and Mobile) */}
                <div className="lg:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 text-primary hover:bg-zinc-100 rounded-full transition-colors outline-none cursor-pointer">
                                <Menu className="w-10 h-10" />
                            </button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[300px] sm:w-[450px] p-0 border-l-0"
                        >
                            <SheetHeader className="sr-only">
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </SheetHeader>
                            {/* Mobile Menu with Theme Background */}
                            <div className="relative h-full w-full flex flex-col p-10 bg-white">
                                {headerData?.navBackgroundImage && (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={urlFor(headerData?.navBackgroundImage).url()}
                                            alt="Menu Background"
                                            fill
                                            className="object-cover opacity-15"
                                        />
                                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
                                    </div>
                                )}

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-16">
                                        <Image
                                            src={urlFor(headerData?.logo ?? "").url()}
                                            alt="Logo"
                                            width={180}
                                            height={60}
                                            className="h-12 w-auto object-contain mb-8"
                                        />
                                        <div className="h-1 w-20 bg-primary rounded-full" />
                                    </div>

                                    <NavLinks isMobile />

                                    <div className="mt-auto pt-10 border-t border-zinc-200">
                                        <p className="text-sm font-extrabold text-[#126299] mb-6 uppercase tracking-[0.25em]">
                                            Connect With Us
                                        </p>
                                        <SocialLinks socialLinksData={socialLinksData} />
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};
