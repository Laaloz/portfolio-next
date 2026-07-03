import Image from "next/image";
import { copy, type Locale } from "@/content/copy";
import type { Project } from "@/services/contentfulService";

export default function ProjectCard({
    project,
    locale,
}: {
    project: Project;
    locale: Locale;
}) {
    const t = copy[locale].projects;

    return (
        <article className="project-card">
            {project.image ? (
                <Image
                    src={project.image.url}
                    alt={t.screenshotAlt(project.title)}
                    width={project.image.width}
                    height={project.image.height}
                    className="project-card-media"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            ) : (
                <div className="img-placeholder">
                    <span>{t.screenshotPlaceholder(project.title)}</span>
                </div>
            )}
            <div className="project-card-body">
                <span className="project-card-meta">
                    {project.tag} ✦ {project.role}
                </span>
                <h3>{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="challenge-box">
                    <span className="meta-label">{t.challengeLabel}</span>
                    <p>{project.challenge}</p>
                </div>
                <div className="project-card-footer">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="lime-link"
                        aria-label={t.openAria(project.title)}
                    >
                        {t.viewLive}
                    </a>
                </div>
            </div>
        </article>
    );
}
