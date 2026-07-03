import { EMAIL, GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/content/copy";

const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Laalo Ceesay",
    jobTitle: "Web Developer",
    worksFor: {
        "@type": "Organization",
        name: "Into-Digital Oy",
    },
    url: SITE_URL,
    email: `mailto:${EMAIL}`,
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Jyväskylä",
        addressCountry: "FI",
    },
    knowsAbout: [
        "WordPress",
        "WooCommerce",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "PHP",
        "Accessibility (WCAG)",
        "AI-assisted development",
    ],
};

export default function PersonJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
    );
}
