import Link from "next/link";
import { copy, localePath, type Locale } from "@/content/copy";
import { fetchProjects } from "@/services/contentfulService";
import { fetchLatestGithubActivity } from "@/services/githubService";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { CtaFooterHome } from "@/components/CtaFooter";

export default async function HomePage({ locale }: { locale: Locale }) {
    const t = copy[locale];
    const [projects, github] = await Promise.all([
        fetchProjects(3, locale),
        fetchLatestGithubActivity(locale),
    ]);

    return (
        <>
            <section className="container hero">
                <p className="meta fade-up">{t.home.heroMeta}</p>
                <h1 className="fade-up">
                    {t.home.heroLine1}{" "}
                    <br />
                    {t.home.heroLine2}{" "}
                    <br />
                    <span className="violet">{t.home.heroLine3}</span>
                    <span className="period" aria-hidden="true">
                        .
                    </span>
                </h1>
            </section>

            <section className="container section bento fade-up">
                <div className="bento-card bento-intro">
                    <p>
                        {t.home.introRich.before}
                        <span className="name">{t.home.introRich.name}</span>
                        {t.home.introRich.after}
                    </p>
                    {github && (
                        <div className="gh-activity">
                            <span className="meta-label">
                                {t.home.ghLabel}
                            </span>
                            <a
                                href={github.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="gh-pill"
                            >
                                <span className="gh-text">
                                    {github.text} · {github.timeAgo}
                                </span>
                                <span className="gh-arrow" aria-hidden="true">
                                    ↗
                                </span>
                            </a>
                        </div>
                    )}
                </div>
                <div className="bento-card bento-ai">
                    <span className="meta-label">{t.home.aiLabel}</span>
                    <p>{t.home.aiText}</p>
                </div>
                <div className="bento-card bento-stat">
                    <span className="meta-label">{t.home.perfLabel}</span>
                    <div>
                        <span className="big">{t.home.perfBig}</span>
                        <p>{t.home.perfText}</p>
                    </div>
                </div>
                <div className="bento-card bento-stat">
                    <span className="meta-label">{t.home.a11yLabel}</span>
                    <div>
                        <span className="big">{t.home.a11yBig}</span>
                        <p>{t.home.a11yText}</p>
                    </div>
                </div>
                <div className="bento-card bento-stack">
                    <span className="meta-label">{t.home.stackLabel}</span>
                    <div className="bento-stack-lines">
                        <p>
                            <span>{t.home.stackDaily}</span>
                            <br />
                            {t.home.stackDailyItems}
                        </p>
                        <p>
                            <span>{t.home.stackAlso}</span>
                            <br />
                            {t.home.stackAlsoItems}
                        </p>
                    </div>
                </div>
            </section>

            <section id="projects" className="container section">
                <div className="section-header">
                    <h2 className="section-title">{t.home.projectsTitle}</h2>
                    <Link
                        href={localePath(locale, "/projects")}
                        className="lime-link"
                    >
                        {t.home.projectsAll}
                    </Link>
                </div>
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

            <SkillsSection locale={locale} />
            <ExperienceSection locale={locale} />
            <CtaFooterHome locale={locale} />
        </>
    );
}
