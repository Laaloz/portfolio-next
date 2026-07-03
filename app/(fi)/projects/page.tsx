import type { Metadata } from "next";
import ProjectsPage from "@/components/pages/ProjectsPage";
import { copy } from "@/content/copy";

export const metadata: Metadata = {
    title: copy.fi.projects.metaTitle,
    description: copy.fi.projects.metaDescription,
};

export default function Page() {
    return <ProjectsPage locale="fi" />;
}
