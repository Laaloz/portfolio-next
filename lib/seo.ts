import type { Metadata } from "next";
import type { Locale } from "@/content/copy";

/**
 * Shared per-page metadata: canonical URL, fi/en hreflang alternates and
 * Open Graph. `path` is the locale-less path ("/", "/about", ...).
 */
export function pageMetadata(
    locale: Locale,
    title: string,
    description: string,
    path: string
): Metadata {
    const fiPath = path;
    const enPath = path === "/" ? "/en" : `/en${path}`;
    const canonical = locale === "en" ? enPath : fiPath;

    return {
        title,
        description,
        alternates: {
            canonical,
            languages: {
                fi: fiPath,
                en: enPath,
                "x-default": fiPath,
            },
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: "laalo.dev",
            locale: locale === "en" ? "en_US" : "fi_FI",
            type: "website",
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
    };
}
