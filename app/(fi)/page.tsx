import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "fi",
    copy.fi.home.metaTitle,
    copy.fi.home.metaDescription,
    "/"
);

export default function Page() {
    return <HomePage locale="fi" />;
}
