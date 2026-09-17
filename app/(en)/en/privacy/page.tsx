import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "en",
    copy.en.privacy.metaTitle,
    copy.en.privacy.metaDescription,
    "/privacy"
);

export default function Page() {
    return <PrivacyPage locale="en" />;
}
