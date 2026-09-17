import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "fi",
    copy.fi.privacy.metaTitle,
    copy.fi.privacy.metaDescription,
    "/privacy"
);

export default function Page() {
    return <PrivacyPage locale="fi" />;
}
