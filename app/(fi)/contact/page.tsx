import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "fi",
    copy.fi.contact.metaTitle,
    copy.fi.contact.metaDescription,
    "/contact"
);

export default function Page() {
    return <ContactPage locale="fi" />;
}
