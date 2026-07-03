import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "en",
    copy.en.about.metaTitle,
    copy.en.about.metaDescription,
    "/about"
);

export default function Page() {
    return <AboutPage locale="en" />;
}
