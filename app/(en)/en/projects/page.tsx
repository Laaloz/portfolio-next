import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "en",
    copy.en.projects.metaTitle,
    copy.en.projects.metaDescription,
    "/projects"
);

export default function Page() {
    return <ProjectsPage locale="en" />;
}
