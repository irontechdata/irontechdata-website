import { SocialLinksQueryResult } from "../../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const SocialLinks = ({ socialLinksData }: { socialLinksData: SocialLinksQueryResult }) => {
    return (
        <div className="flex items-center gap-1">
            {socialLinksData?.icons?.map((icon) => {
                const link = icon.link;
                const isInvalid = !link || link === "" || link === "/";

                if (isInvalid) {
                    return (
                        <Tooltip key={icon._key}>
                            <TooltipTrigger asChild>
                                <div className="flex items-center justify-center grayscale opacity-30 cursor-not-allowed transition-all duration-300 hover:opacity-50">
                                    <Image
                                        src={urlFor(icon.icon ?? "").url()}
                                        alt={icon.iconName ?? ""}
                                        width={22}
                                        height={22}
                                        className="h-10 w-full"
                                    />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Link not available</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                }

                return (
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center transition-opacity hover:opacity-80"
                        key={icon._key}
                    >
                        <Image
                            src={urlFor(icon.icon ?? "").url()}
                            alt={icon.iconName ?? ""}
                            width={22}
                            height={22}
                            className="h-10 w-full hover:scale-110 transition-transform"
                        />
                    </Link>
                );
            })}
        </div>
    );
};
