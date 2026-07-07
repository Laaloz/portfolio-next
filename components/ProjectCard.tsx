import Image from "next/image";
import { copy, type Locale } from "@/content/copy";
import type { Project } from "@/services/contentfulService";
import ArrowUpRight from "@/components/icons/ArrowUpRight";

export function CardPlaceholder({
    name,
    label,
    className,
}: {
    name: string;
    label: string;
    className?: string;
}) {
    const initial = name.trim().charAt(0).toLowerCase() || "•";
    return (
        <div
            className={`img-placeholder${className ? ` ${className}` : ""}`}
            aria-hidden="true"
        >
            <span className="ph-initial">
                {initial}
                <span className="ph-period">.</span>
            </span>
            <span className="ph-label">{label}</span>
        </div>
    );
}

export default function ProjectCard({
    project,
    locale,
    priority = false,
    headingLevel = "h3",
}: {
    project: Project;
    locale: Locale;
    priority?: boolean;
    /* h2 on the projects page (cards sit directly under the h1),
       h3 on the home page (under the "valitut työt" h2) */
    headingLevel?: "h2" | "h3";
}) {
    const t = copy[locale].projects;
    const Heading = headingLevel;
    const hasLink = Boolean(project.link);

    return (
        <article
            className={`project-card${hasLink ? " linked-card" : ""}`}
        >
            {project.image ? (
                <Image
                    src={project.image.url}
                    alt={t.screenshotAlt(project.title)}
                    width={project.image.width}
                    height={project.image.height}
                    className="project-card-media"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={priority}
                />
            ) : (
                <CardPlaceholder name={project.title} label={project.title} />
            )}
            <div className="project-card-body">
                <span className="project-card-meta">
                    {project.tag} ✦ {project.role}
                </span>
                <Heading className="project-card-title">
                    {project.title}
                </Heading>
                <p className="project-card-desc">{project.description}</p>
                <div className="challenge-box">
                    <span className="meta-label">{t.challengeLabel}</span>
                    <p>{project.challenge}</p>
                </div>
                {hasLink && (
                    <div className="project-card-footer">
                        {/* stretch-link makes the whole card the click target */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="lime-link stretch-link"
                            aria-label={t.openAria(project.title)}
                        >
                            {t.viewLive} <ArrowUpRight />
                        </a>
                    </div>
                )}
            </div>
        </article>
    );
}
