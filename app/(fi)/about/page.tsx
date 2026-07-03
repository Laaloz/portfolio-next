import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
    title: copy.fi.about.metaTitle,
    description: copy.fi.about.metaDescription,
};

export default function Page() {
    return <AboutPage locale="fi" />;
}
