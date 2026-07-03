import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
    title: copy.en.about.metaTitle,
    description: copy.en.about.metaDescription,
};

export default function Page() {
    return <AboutPage locale="en" />;
}
