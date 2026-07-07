export type Locale = "fi" | "en";

/*
 * FI copy is the reviewed source of truth from the design handoff — do not
 * rewrite. EN strings are draft translations pending owner review.
 */
export const copy = {
    fi: {
        nav: {
            about: "Tietoa",
            projects: "Projektit",
            skills: "Osaaminen",
            experience: "Kokemus",
            contact: "Ota yhteyttä",
            openMenu: "Avaa valikko",
            closeMenu: "Sulje valikko",
            home: "Etusivu",
            mainNav: "Päävalikko",
            mobileNav: "Mobiilivalikko",
            skipToContent: "Siirry sisältöön",
        },
        home: {
            metaTitle: "Laalo Ceesay — web-kehittäjä",
            metaDescription:
                "Verkkopalveluita, jotka kestävät käyttöä ja aikaa. Laalo Ceesay, web-kehittäjä Into-Digital Oy:ssä, Jyväskylä.",
            heroMeta: "web-kehittäjä ✦ into-digital oy ✦ jyväskylä",
            heroLine1: "verkkopalveluita,",
            heroLine2: "jotka kestävät",
            heroLine3: "käyttöä ja aikaa",
            introRich: {
                before: "Olen ",
                name: "Laalo Ceesay",
                after: ", web-kehittäjä Into-Digital Oy:ssä. Toteutan verkkosivut, verkkokaupat ja digitaaliset palvelut selaimesta palvelimeen.",
            },
            ghLabel: "VIIMEKSI GITHUBISSA",
            aiLabel: "TEKOÄLY TYÖSSÄNI",
            aiText: "Hyödynnän tekoälyä luontevana osana kehitystyötä: apuna koodauksessa, testauksessa ja työnkulkujen sujuvoittamisessa.",
            perfLabel: "SUORITUSKYKY",
            perfBig: "90+",
            perfText:
                "Lighthouse-pisteet tuoreimmissa julkaisuissa. Nopeus on ominaisuus, ei jälkiajatus",
            a11yLabel: "SAAVUTETTAVUUS",
            a11yBig: "WCAG",
            a11yText: "saavutettavuus on mukana jokaisessa projektissa alusta asti",
            stackLabel: "PINO",
            stackDaily: "Päivittäin",
            stackDailyItems:
                "WordPress (Gutenberg/React) · WooCommerce · PHP · MySQL",
            stackAlso: "Lisäksi",
            stackAlsoItems:
                "JavaScript & TypeScript · React & Next.js · Astro · Node.js",
            projectsTitle: "valitut työt",
            projectsAll: "kaikki projektit →",
            skillsTitle: "osaaminen",
            experienceTitle: "kokemus",
            ctaLine1: "tehdään",
            ctaLine2Before: "jotain ",
            ctaHighlight: "hyvää",
            ctaNote: "vastaan sähköpostiin yleensä vuorokauden sisällä",
        },
        skills: [
            {
                label: "WordPress & WooCommerce",
                ai: false,
                items: [
                    "Gutenberg-lohkot (React)",
                    "Teemakehitys",
                    "WooCommerce",
                    "Headless WordPress",
                ],
            },
            {
                label: "Front-end",
                ai: false,
                items: [
                    "JavaScript & TypeScript",
                    "React & Next.js",
                    "Astro",
                    "Vue.js",
                    "SCSS",
                    "Tailwind CSS",
                ],
            },
            {
                label: "Tekoäly",
                ai: true,
                items: [
                    "AI-avusteinen kehitys",
                    "Design-to-code",
                    "MCP-työnkulut",
                    "Automaatiotestaus",
                    "AI-agentit",
                ],
            },
            {
                label: "Back-end",
                ai: false,
                items: ["PHP", "Node.js", "REST-rajapinnat", "MySQL"],
            },
            {
                label: "DevOps & laatu",
                ai: false,
                items: [
                    "Docker",
                    "Git",
                    "GitHub & Bitbucket",
                    "Playwright-testaus",
                    "Saavutettavuus (WCAG)",
                ],
            },
        ],
        experience: [
            {
                period: "2021 → NYT",
                title: "Web-kehittäjä — Into-Digital Oy",
                description:
                    "Lähes viisi vuotta asiakasprojekteja WordPress-ympäristöissä: verkkosivut, verkkokaupat ja digitaaliset palvelut käyttöliittymästä palvelimeen.",
                chip: "TÄYSIPÄIVÄINEN",
                link: null,
            },
            {
                period: "SITÄ ENNEN",
                title: "Harrastuksesta ammatiksi",
                description:
                    "Omia projekteja ja web-kehityksen opiskelua toisen alan töiden ohessa. Tuoreimmat kokeilut GitHubissa.",
                chip: null,
                link: { label: "github", href: "https://github.com/Laaloz" },
            },
        ],
        about: {
            metaTitle: "Tietoa — Laalo Ceesay",
            metaDescription:
                "Harrastuksesta ammatiksi: lähes viisi vuotta asiakastyötä Into-Digital Oy:ssä, verkkosivuista verkkokauppoihin.",
            heroMeta: "tietoa ✦ laalo ceesay",
            heroLine1: "harrastuksesta",
            heroLine2: "ammatiksi",
            storyLead:
                "Kiinnostuin web-kehityksestä alun perin harrastuksena, toisen alan töiden ohessa. Omista projekteista kasvoi ammatti: nyt takana on lähes viisi vuotta asiakastyötä Into-Digital Oy:ssä, verkkosivuista verkkokauppoihin.",
            storyRest:
                "Se tausta näkyy työtavassani edelleen. Opettelen uutta, koska se kiinnostaa, en koska on pakko. Siksi myös tekoäly ja uudet työkalut ovat luonteva osa arkeani eivätkä päälle liimattu lisä.",
            howLabel: "MITEN TYÖSKENTELEN",
            principles: [
                {
                    title: "Ylläpidettävyys edellä",
                    text: "Koodi, jonka seuraava kehittäjä ja sisällöntuottaja ymmärtävät. Ei kikkailua kikkailun vuoksi.",
                },
                {
                    title: "Saavutettavuus alusta asti",
                    text: "Ei erillinen tarkistuslista lopussa, vaan tapa rakentaa jokainen komponentti.",
                },
                {
                    title: "Tekoäly työkaluna",
                    text: "Nopeuttaa rutiinit ja testauksen, jotta aika menee olennaiseen. Vastuu laadusta on aina minulla.",
                },
            ],
            portraitAlt: "Laalo Ceesay",
            facts: [
                { k: "Sijainti", v: "Jyväskylä" },
                { k: "Työkielet", v: "suomi & englanti" },
                { k: "Kokemus", v: "~5 v asiakastyötä" },
            ],
            githubLabel: "GitHub",
            githubValue: "@Laaloz",
            ctaBefore: "katso, mitä olen ",
            ctaLink: "tehnyt",
            ctaButton: "Ota yhteyttä →",
        },
        projects: {
            metaTitle: "Projektit — Laalo Ceesay",
            metaDescription:
                "Valitut työt: asiakasprojektit Into-Digital Oy:ssä ja omat projektit. Jokaisesta kerron haasteen ja ratkaisun.",
            heroMeta: "projektit ✦ asiakastyöt ja omat kokeilut",
            heroTitle: "valitut työt",
            intro: "Asiakasprojektit on toteutettu Into-Digital Oy:ssä. Jokaisesta kerron haasteen ja ratkaisun, koska lopputulos on vain puolet tarinasta.",
            challengeLabel: "HAASTE → RATKAISU",
            viewLive: "katso live",
            openAria: (title: string) =>
                `katso live: ${title} (avautuu uuteen välilehteen)`,
            screenshotAlt: (title: string) => `Kuvakaappaus: ${title}`,
            ownTitle: "omat projektit",
            ownAllGithub: "kaikki GitHubissa",
            ownCode: "katso koodi",
            codeAria: (title: string) =>
                `katso koodi: ${title} (avautuu uuteen välilehteen)`,
            nextLabel: "[ seuraava oma projekti ]",
            nextDesc:
                "Paikka seuraavalle omalle projektille, jossa koodi on nähtävillä alusta loppuun.",
            ctaBefore: "heräsikö ",
            ctaHighlight: "ajatuksia",
            ctaAfter: "?",
            ctaButton: "Ota yhteyttä →",
        },
        contact: {
            metaTitle: "Ota yhteyttä — Laalo Ceesay",
            metaDescription:
                "Laitetaan viestiä. Vastaan yleensä vuorokauden sisällä.",
            heroMeta: "yhteys ✦ vastaan yleensä vuorokauden sisällä",
            heroTitle: "laitetaan viestiä",
            nameLabel: "Nimi",
            namePlaceholder: "Etunimi Sukunimi",
            emailLabel: "Sähköposti",
            emailPlaceholder: "nimi@yritys.fi",
            messageLabel: "Viesti",
            messagePlaceholder: "Kerro lyhyesti, mistä on kyse.",
            privacyNote: "Tietojasi ei käytetä muuhun kuin viestiisi vastaamiseen.",
            submit: "Lähetä viesti →",
            sending: "Lähetetään…",
            successTitle: "kiitos viestistä!",
            successText: "Vastaan yleensä vuorokauden sisällä.",
            errorText:
                "Lähetys epäonnistui. Yritä hetken päästä uudelleen tai laita sähköpostia suoraan: laaloceesay@gmail.com",
            requiredError: "Täytä kaikki kentät.",
            emailError: "Tarkista sähköpostiosoite.",
            nextLabel: "MITÄ TAPAHTUU SEURAAVAKSI",
            nextSteps: [
                "Vastaan viestiisi yleensä vuorokauden sisällä.",
                "Jatketaan sähköpostilla tai sovitaan puhelu, miten sinulle sopii.",
                "Keskustelen mielelläni kaikesta web-kehitykseen liittyvästä.",
            ],
            infoEmail: "Sähköposti",
            infoLinkedin: "LinkedIn",
            infoLinkedinValue: "laaloceesay",
            infoLocation: "Sijainti",
            infoLocationValue: "Jyväskylä, Suomi",
        },
        footer: {
            copyright: "© 2026 laalo.dev — jyväskylä, fi",
            copyrightShort: "© 2026 laalo.dev",
        },
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience",
            contact: "Get in touch",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            home: "Home",
            mainNav: "Main navigation",
            mobileNav: "Mobile navigation",
            skipToContent: "Skip to content",
        },
        home: {
            metaTitle: "Laalo Ceesay — web developer",
            metaDescription:
                "Web services built to last. Laalo Ceesay, web developer at Into-Digital Oy, Jyväskylä, Finland.",
            heroMeta: "web developer ✦ into-digital oy ✦ jyväskylä",
            heroLine1: "web services",
            heroLine2: "that withstand",
            heroLine3: "use and time",
            introRich: {
                before: "I'm ",
                name: "Laalo Ceesay",
                after: ", a web developer at Into-Digital Oy. I build websites, online stores and digital services from browser to server.",
            },
            ghLabel: "LATEST ON GITHUB",
            aiLabel: "AI IN MY WORK",
            aiText: "I use AI as a natural part of development: assisting with coding, testing and streamlining workflows.",
            perfLabel: "PERFORMANCE",
            perfBig: "90+",
            perfText:
                "Lighthouse scores in recent releases. Speed is a feature, not an afterthought",
            a11yLabel: "ACCESSIBILITY",
            a11yBig: "WCAG",
            a11yText: "accessibility is part of every project from day one",
            stackLabel: "STACK",
            stackDaily: "Daily",
            stackDailyItems:
                "WordPress (Gutenberg/React) · WooCommerce · PHP · MySQL",
            stackAlso: "Also",
            stackAlsoItems:
                "JavaScript & TypeScript · React & Next.js · Astro · Node.js",
            projectsTitle: "selected work",
            projectsAll: "all projects →",
            skillsTitle: "skills",
            experienceTitle: "experience",
            ctaLine1: "let's make",
            ctaLine2Before: "something ",
            ctaHighlight: "good",
            ctaNote: "i usually reply to email within a day",
        },
        skills: [
            {
                label: "WordPress & WooCommerce",
                ai: false,
                items: [
                    "Gutenberg blocks (React)",
                    "Theme development",
                    "WooCommerce",
                    "Headless WordPress",
                ],
            },
            {
                label: "Front-end",
                ai: false,
                items: [
                    "JavaScript & TypeScript",
                    "React & Next.js",
                    "Astro",
                    "Vue.js",
                    "SCSS",
                    "Tailwind CSS",
                ],
            },
            {
                label: "AI",
                ai: true,
                items: [
                    "AI-assisted development",
                    "Design-to-code",
                    "MCP workflows",
                    "Test automation",
                    "AI agents",
                ],
            },
            {
                label: "Back-end",
                ai: false,
                items: ["PHP", "Node.js", "REST APIs", "MySQL"],
            },
            {
                label: "DevOps & quality",
                ai: false,
                items: [
                    "Docker",
                    "Git",
                    "GitHub & Bitbucket",
                    "Playwright testing",
                    "Accessibility (WCAG)",
                ],
            },
        ],
        experience: [
            {
                period: "2021 → NOW",
                title: "Web Developer — Into-Digital Oy",
                description:
                    "Nearly five years of client projects in WordPress environments: websites, online stores and digital services from UI to server.",
                chip: "FULL-TIME",
                link: null,
            },
            {
                period: "BEFORE THAT",
                title: "From hobby to profession",
                description:
                    "Personal projects and studying web development alongside work in another field. Latest experiments on GitHub.",
                chip: null,
                link: { label: "github", href: "https://github.com/Laaloz" },
            },
        ],
        about: {
            metaTitle: "About — Laalo Ceesay",
            metaDescription:
                "From hobby to profession: nearly five years of client work at Into-Digital Oy, from websites to online stores.",
            heroMeta: "about ✦ laalo ceesay",
            heroLine1: "from hobby",
            heroLine2: "to profession",
            storyLead:
                "I originally got into web development as a hobby, alongside work in another field. Personal projects grew into a profession: I now have nearly five years of client work at Into-Digital Oy, from websites to online stores.",
            storyRest:
                "That background still shows in how I work. I learn new things because they interest me, not because I have to. That's why AI and new tools are a natural part of my day rather than a bolted-on extra.",
            howLabel: "HOW I WORK",
            principles: [
                {
                    title: "Maintainability first",
                    text: "Code that the next developer and the content editor can understand. No cleverness for cleverness' sake.",
                },
                {
                    title: "Accessibility from the start",
                    text: "Not a checklist at the end, but a way of building every component.",
                },
                {
                    title: "AI as a tool",
                    text: "It speeds up routine work and testing so time goes to what matters. The responsibility for quality is always mine.",
                },
            ],
            portraitAlt: "Laalo Ceesay",
            facts: [
                { k: "Location", v: "Jyväskylä, Finland" },
                { k: "Working languages", v: "Finnish & English" },
                { k: "Experience", v: "~5 yrs client work" },
            ],
            githubLabel: "GitHub",
            githubValue: "@Laaloz",
            ctaBefore: "see what i've ",
            ctaLink: "built",
            ctaButton: "Get in touch →",
        },
        projects: {
            metaTitle: "Projects — Laalo Ceesay",
            metaDescription:
                "Selected work: client projects at Into-Digital Oy and personal projects, each with the challenge and the solution.",
            heroMeta: "projects ✦ client work and personal experiments",
            heroTitle: "selected work",
            intro: "Client projects were built at Into-Digital Oy. For each one I share the challenge and the solution, because the end result is only half the story.",
            challengeLabel: "CHALLENGE → SOLUTION",
            viewLive: "view live",
            openAria: (title: string) =>
                `view live: ${title} (opens in a new tab)`,
            screenshotAlt: (title: string) => `Screenshot: ${title}`,
            ownTitle: "personal projects",
            ownAllGithub: "all on GitHub",
            ownCode: "view code",
            codeAria: (title: string) =>
                `view code: ${title} (opens in a new tab)`,
            nextLabel: "[ next personal project ]",
            nextDesc:
                "A spot for the next personal project where the code is visible from start to finish.",
            ctaBefore: "got ",
            ctaHighlight: "ideas",
            ctaAfter: "?",
            ctaButton: "Get in touch →",
        },
        contact: {
            metaTitle: "Contact — Laalo Ceesay",
            metaDescription:
                "Let's talk. I usually reply within a day.",
            heroMeta: "contact ✦ i usually reply within a day",
            heroTitle: "let's talk",
            nameLabel: "Name",
            namePlaceholder: "First Last",
            emailLabel: "Email",
            emailPlaceholder: "name@company.com",
            messageLabel: "Message",
            messagePlaceholder: "Briefly, what's it about?",
            privacyNote:
                "Your details are only used to reply to your message.",
            submit: "Send message →",
            sending: "Sending…",
            successTitle: "thanks for your message!",
            successText: "I usually reply within a day.",
            errorText:
                "Sending failed. Try again in a moment or email me directly: laaloceesay@gmail.com",
            requiredError: "Please fill in all fields.",
            emailError: "Please check the email address.",
            nextLabel: "WHAT HAPPENS NEXT",
            nextSteps: [
                "I usually reply to your message within a day.",
                "We continue over email or set up a call, whichever suits you.",
                "I'm happy to talk about anything web development related.",
            ],
            infoEmail: "Email",
            infoLinkedin: "LinkedIn",
            infoLinkedinValue: "laaloceesay",
            infoLocation: "Location",
            infoLocationValue: "Jyväskylä, Finland",
        },
        footer: {
            copyright: "© 2026 laalo.dev — jyväskylä, fi",
            copyrightShort: "© 2026 laalo.dev",
        },
    },
} as const;

export const EMAIL = "laaloceesay@gmail.com";
export const GITHUB_URL = "https://github.com/Laaloz";
export const LINKEDIN_URL = "https://www.linkedin.com/in/laaloceesay/";
export const SITE_URL = "https://laalo.dev";

export function localePath(locale: Locale, path: string) {
    const clean = path.startsWith("/") ? path : `/${path}`;
    return locale === "en" ? `/en${clean === "/" ? "" : clean}` : clean;
}
