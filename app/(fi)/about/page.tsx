import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "fi",
    copy.fi.about.metaTitle,
    copy.fi.about.metaDescription,
    "/about"
);

export default function Page() {
    return <AboutPage locale="fi" />;
}
