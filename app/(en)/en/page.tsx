import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "en",
    copy.en.home.metaTitle,
    copy.en.home.metaDescription,
    "/"
);

export default function Page() {
    return <HomePage locale="en" />;
}
