import Link from "next/link";
import { FooterOnly } from "@/components/CtaFooter";

export default function NotFound() {
    return (
        <>
            <section className="container page-hero">
                <p className="meta">404 ✦ sivua ei löytynyt</p>
                <h1>
                    hups
                    <span className="period" aria-hidden="true">
                        .
                    </span>
                </h1>
                <p className="intro">
                    Etsimääsi sivua ei ole olemassa tai se on siirretty.
                </p>
                <p style={{ marginTop: 24 }}>
                    <Link href="/" className="lime-link">
                        takaisin etusivulle →
                    </Link>
                </p>
            </section>
            <FooterOnly locale="fi" />
        </>
    );
}
