import Link from "next/link";
import { copy, localePath, GITHUB_URL, type Locale } from "@/content/copy";
import { CtaFooterSub } from "@/components/CtaFooter";

export default function AboutPage({ locale }: { locale: Locale }) {
    const t = copy[locale].about;

    return (
        <>
            <section className="container page-hero">
                <p className="meta fade-up">{t.heroMeta}</p>
                <h1 className="fade-up">
                    {t.heroLine1}{" "}
                    <br />
                    <span className="violet">{t.heroLine2}</span>
                    <span className="period" aria-hidden="true">
                        .
                    </span>
                </h1>
            </section>

            <section className="container section about-grid fade-up">
                <div className="about-col">
                    <div className="story-card">
                        <p className="lead">{t.storyLead}</p>
                        <p className="rest">{t.storyRest}</p>
                    </div>
                    <div className="dark-card">
                        <span className="meta-label">{t.howLabel}</span>
                        <div className="numbered-rows">
                            {t.principles.map((principle, i) => (
                                <div
                                    key={principle.title}
                                    className="numbered-row"
                                >
                                    <span className="num">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <span className="row-title">
                                            {principle.title}
                                        </span>
                                        <p>{principle.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-col">
                    {/* Portrait photo not delivered yet — striped placeholder
                        per handoff until the owner drops in the real photo */}
                    <div className="portrait img-placeholder">
                        <span>{t.portraitPlaceholder}</span>
                    </div>
                    <div className="facts-card">
                        {t.facts.map((fact) => (
                            <div key={fact.k} className="facts-row">
                                <span className="k">{fact.k}</span>
                                <span className="v">{fact.v}</span>
                            </div>
                        ))}
                        <div className="facts-row">
                            <span className="k">{t.githubLabel}</span>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="v"
                            >
                                {t.githubValue}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <CtaFooterSub
                locale={locale}
                heading={
                    <>
                        {t.ctaBefore}
                        <Link href={localePath(locale, "/projects")}>
                            {t.ctaLink}
                        </Link>
                        .
                    </>
                }
                buttonLabel={t.ctaButton}
            />
        </>
    );
}
