import { copy, GITHUB_URL, type Locale } from "@/content/copy";
import { fetchProjects } from "@/services/contentfulService";
import ProjectCard from "@/components/ProjectCard";
import { CtaFooterSub } from "@/components/CtaFooter";

export default async function ProjectsPage({ locale }: { locale: Locale }) {
    const t = copy[locale].projects;
    const projects = await fetchProjects(12, locale);

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
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            locale={locale}
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
                    <div className="own-project-card dark">
                        <span className="repo">{t.ownRepo}</span>
                        <p>{t.ownDesc}</p>
                        <a
                            href={`${GITHUB_URL}/portfolio-next`}
                            target="_blank"
                            rel="noreferrer"
                            className="lime-link"
                        >
                            {t.ownCode}
                        </a>
                    </div>
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
