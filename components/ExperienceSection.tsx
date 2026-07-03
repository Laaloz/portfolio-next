import { copy, type Locale } from "@/content/copy";

export default function ExperienceSection({ locale }: { locale: Locale }) {
    const t = copy[locale];

    return (
        <section id="experience" className="container section">
            <div className="section-header">
                <h2 className="section-title">{t.home.experienceTitle}</h2>
            </div>
            <div className="experience-list">
                {t.experience.map((row) => (
                    <div key={row.period} className="experience-row">
                        <span className="experience-period">{row.period}</span>
                        <div className="experience-body">
                            <span className="experience-title">{row.title}</span>
                            <span className="experience-desc">
                                {row.description}
                            </span>
                        </div>
                        {row.chip && (
                            <span className="experience-chip">{row.chip}</span>
                        )}
                        {row.link && (
                            <a
                                href={row.link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="lime-link"
                            >
                                {row.link.label}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
