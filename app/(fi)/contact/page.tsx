import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
    title: copy.fi.contact.metaTitle,
    description: copy.fi.contact.metaDescription,
};

export default function Page() {
    return <ContactPage locale="fi" />;
}
