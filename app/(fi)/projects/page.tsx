import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { copy } from "@/content/copy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
    "fi",
    copy.fi.projects.metaTitle,
    copy.fi.projects.metaDescription,
    "/projects"
);

export default function Page() {
    return <ProjectsPage locale="fi" />;
}
