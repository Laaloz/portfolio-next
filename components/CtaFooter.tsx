import Link from "next/link";
import type { ReactNode } from "react";
import { copy, localePath, EMAIL, GITHUB_URL, LINKEDIN_URL, type Locale } from "@/content/copy";

function FooterRow({ locale }: { locale: Locale }) {
    const t = copy[locale].footer;
    return (
        <div className="footer-row">
            <span>{t.copyright}</span>
            <div className="footer-links">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                    github
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                    linkedin
                </a>
            </div>
        </div>
    );
}

/* Home: big heading + note + email button */
export function CtaFooterHome({ locale }: { locale: Locale }) {
    const t = copy[locale].home;
    return (
        <footer className="cta-footer">
            <div className="cta-footer-inner">
                <div className="cta-row">
                    <div className="cta-text">
                        <h2 className="cta-heading">
                            {t.ctaLine1}{" "}
                            <br />
                            {t.ctaLine2Before}
                            <span className="lime">{t.ctaHighlight}</span>.
                        </h2>
                        <span className="cta-note">{t.ctaNote}</span>
                    </div>
                    <a
                        href={`mailto:${EMAIL}`}
                        className="btn btn-violet cta-button"
                    >
                        {EMAIL} ↗
                    </a>
                </div>
                <FooterRow locale={locale} />
            </div>
        </footer>
    );
}

/* Subpages: smaller heading + contact button */
export function CtaFooterSub({
    locale,
    heading,
    buttonLabel,
}: {
    locale: Locale;
    heading: ReactNode;
    buttonLabel: string;
}) {
    return (
        <footer className="cta-footer sub">
            <div className="cta-footer-inner">
                <div className="cta-row">
                    <h2 className="cta-heading small">{heading}</h2>
                    <Link
                        href={localePath(locale, "/contact")}
                        className="btn btn-violet cta-button sub"
                    >
                        {buttonLabel}
                    </Link>
                </div>
                <FooterRow locale={locale} />
            </div>
        </footer>
    );
}

/* Contact page: footer row only */
export function FooterOnly({ locale }: { locale: Locale }) {
    return (
        <footer className="cta-footer footer-only">
            <div className="cta-footer-inner">
                <FooterRow locale={locale} />
            </div>
        </footer>
    );
}
