import { copy, type Locale } from "@/content/copy";

export default function SkillsSection({ locale }: { locale: Locale }) {
    const t = copy[locale];

    return (
        <section id="skills" className="container section">
            <div className="section-header">
                <h2 className="section-title">{t.home.skillsTitle}</h2>
            </div>
            <div className="skills-box">
                {t.skills.map((group) => (
                    <div
                        key={group.label}
                        className={`skills-row${group.ai ? " ai" : ""}`}
                    >
                        <span className="skills-row-label">{group.label}</span>
                        <div className="chip-row">
                            {group.items.map((item) => (
                                <span key={item} className="chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
