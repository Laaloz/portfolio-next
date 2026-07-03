import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "en",
    copy.en.contact.metaTitle,
    copy.en.contact.metaDescription,
    "/contact"
);

export default function Page() {
    return <ContactPage locale="en" />;
}
