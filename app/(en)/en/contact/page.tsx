import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
    title: copy.en.contact.metaTitle,
    description: copy.en.contact.metaDescription,
};

export default function Page() {
    return <ContactPage locale="en" />;
}
