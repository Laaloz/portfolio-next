"use client"; // Ensure that this component is treated as a client component

import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/sub/ProjectCard";
import { fetchProjects } from "@/services/contentfulService";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Import Contentful's rich text renderer
import { Document } from "@contentful/rich-text-types"; // Import Document type
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface Project {
    id: string;
    image: string;
    title: string;
    description: Document; // Contentful rich text document type
    category: string;
    tag: string;
    cardDuration: number;
    link: string;
}

interface ProjectContent {
    limit: number;
    className: string;
    showTitle: boolean;
    title: string;
    btnText: string;
}

const Projects = ({
    limit,
    className,
    showTitle,
    title,
    btnText,
}: ProjectContent) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const pathname = usePathname();

    const isEnglish = pathname.includes("/en"); // Check if the pathname includes '/en'
    const language: "fi-FI" | "en-US" = isEnglish ? "en-US" : "fi-FI";

    useEffect(() => {
        const getProjects = async () => {
            const fetchedProjects = await fetchProjects(limit, language);
            setProjects(fetchedProjects);
            setLoading(false); // Set loading to false after fetching
        };

        getProjects();
    }, []);

    return (
        <div
            className="relative flex flex-col h-full w-full px-10 md:px-20"
            id="projects"
        >
            <div
                className={`flex flex-col items-center justify-center max-w-screen-2xl mx-auto ${className} w-full z-[20]`}
            >
                {showTitle && (
                    <motion.div
                        variants={slideInFromLeft(0.3)}
                        className="flex gap-4 items-center justify-between mb-10 w-full"
                    >
                        <h2 className="text-3xl font-bold">{title}</h2>

                        <a
                            href={isEnglish ? "/en/projects" : "/projects"}
                            className="button-primary"
                        >
                            {btnText}
                        </a>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {" "}
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                description={documentToReactComponents(
                                    project.description
                                )}
                                tag={project.tag}
                                category={project.category}
                                cardDuration={project.cardDuration}
                                link={project.link}
                            />
                        ))
                    ) : (
                        <p>No projects available.</p> // Fallback if no projects
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
