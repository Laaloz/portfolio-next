import { copy, type Locale } from "@/content/copy";
import { FooterOnly } from "@/components/CtaFooter";

export default function PrivacyPage({ locale }: { locale: Locale }) {
    const t = copy[locale].privacy;

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
                <p className="intro">{t.intro}</p>
            </section>

            <section className="container section fade-up">
                <div className="prose-card">
                    {t.sections.map((section) => (
                        <section key={section.title}>
                            <h2>{section.title}</h2>
                            {section.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </section>
                    ))}
                </div>
            </section>

            <FooterOnly locale={locale} />
        </>
    );
}
