import { copy, GITHUB_URL, type Locale } from "@/content/copy";
import { fetchProjects } from "@/services/contentfulService";
import ProjectCard from "@/components/ProjectCard";
import { CtaFooterSub } from "@/components/CtaFooter";

export default async function ProjectsPage({ locale }: { locale: Locale }) {
    const t = copy[locale].projects;
    const [projects, ownProjects] = await Promise.all([
        fetchProjects(12, locale, "client"),
        fetchProjects(6, locale, "own"),
    ]);

    return (
        <>
            <section className="container page-hero">
                <p className="meta fade-up">{t.heroMeta}</p>
                <h1 className="fade-up">
                    {t.heroTitle}
                    <span className="period" aria-hidden="true">
                        .
                    </span>
                </h1>
                <p className="intro fade-up">{t.intro}</p>
            </section>

            <section className="container section">
                <div className="project-grid">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            locale={locale}
                            priority={i === 0}
                            headingLevel="h2"
                        />
                    ))}
                </div>
            </section>

            <section className="container section">
                <div className="section-header">
                    <h2 className="section-title own-title">{t.ownTitle}</h2>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="lime-link"
                    >
                        {t.ownAllGithub}
                    </a>
                </div>
                <div className="own-projects-grid">
                    {ownProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`own-project-card dark${
                                project.link ? " linked-card" : ""
                            }`}
                        >
                            <span className="repo">{project.title}</span>
                            <p>{project.description}</p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="lime-link stretch-link"
                                    aria-label={t.codeAria(project.title)}
                                >
                                    {t.ownCode}{" "}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            )}
                        </div>
                    ))}
                    <div className="own-project-card placeholder">
                        <span className="repo">{t.nextLabel}</span>
                        <p>{t.nextDesc}</p>
                    </div>
                </div>
            </section>

            <CtaFooterSub
                locale={locale}
                heading={
                    <>
                        {t.ctaBefore}
                        <span className="lime">{t.ctaHighlight}</span>
                        {t.ctaAfter}
                    </>
                }
                buttonLabel={t.ctaButton}
            />
        </>
    );
}
