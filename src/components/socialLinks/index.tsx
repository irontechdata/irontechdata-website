import { SocialLinksQueryResult } from "../../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export const SocialLinks = ({ socialLinksData }: { socialLinksData: SocialLinksQueryResult }) => {
    return (
        <div className="flex items-center gap-1">
            {socialLinksData?.icons?.map((icon) => (
                <Link
                    href={icon.link || "#"}
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
            ))}
        </div>
    );
};
