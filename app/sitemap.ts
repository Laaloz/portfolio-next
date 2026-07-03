import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/copy";

const paths = ["/", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
    return paths.flatMap((path) => {
        const fi = `${SITE_URL}${path === "/" ? "" : path}`;
        const en = `${SITE_URL}/en${path === "/" ? "" : path}`;
        const alternates = { languages: { fi, en } };
        return [
            { url: fi, lastModified: new Date(), alternates },
            { url: en, lastModified: new Date(), alternates },
        ];
    });
}
