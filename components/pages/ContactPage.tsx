import { copy, EMAIL, LINKEDIN_URL, type Locale } from "@/content/copy";
import ContactForm from "@/components/ContactForm";
import { FooterOnly } from "@/components/CtaFooter";

export default function ContactPage({ locale }: { locale: Locale }) {
    const t = copy[locale].contact;

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
            </section>

            <section className="container section contact-grid fade-up">
                <ContactForm locale={locale} />
                <div className="contact-col">
                    <div className="dark-card">
                        <span className="meta-label">{t.nextLabel}</span>
                        <div className="numbered-rows next-steps">
                            {t.nextSteps.map((step, i) => (
                                <div key={i} className="numbered-row">
                                    <span className="num">{i + 1}</span>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="facts-card">
                        <div className="facts-row">
                            <span className="k">{t.infoEmail}</span>
                            <a href={`mailto:${EMAIL}`} className="v">
                                {EMAIL}
                            </a>
                        </div>
                        <div className="facts-row">
                            <span className="k">{t.infoLinkedin}</span>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noreferrer"
                                className="v"
                            >
                                {t.infoLinkedinValue}
                            </a>
                        </div>
                        <div className="facts-row">
                            <span className="k">{t.infoLocation}</span>
                            <span className="v">{t.infoLocationValue}</span>
                        </div>
                    </div>
                </div>
            </section>

            <FooterOnly locale={locale} />
        </>
    );
}
