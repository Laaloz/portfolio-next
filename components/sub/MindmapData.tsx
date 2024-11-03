// Define types for hierarchy and node structure
export interface HierarchyNode {
    id: string;
    labels: {
        fi: string;
        en: string;
    };
    children?: HierarchyNode[];
}

// Define the hierarchical structure and relationships
export const hierarchy: HierarchyNode = {
    id: "main",
    labels: { fi: "Web-kehitys", en: "Web Development" },
    children: [
        {
            id: "front-end",
            labels: { fi: "Front-End-kehitys", en: "Front-End Development" },
            children: [
                {
                    id: "html",
                    labels: { fi: "HTML", en: "HTML" },
                    children: [
                        {
                            id: "structure",
                            labels: { fi: "Rakenne", en: "Structure" },
                        },
                        {
                            id: "semantics",
                            labels: { fi: "Semantiikka", en: "Semantics" },
                        },
                        {
                            id: "accessibility",
                            labels: {
                                fi: "Saavutettavuus",
                                en: "Accessibility",
                            },
                            children: [
                                {
                                    id: "alt-text",
                                    labels: {
                                        fi: "Alt-teksti",
                                        en: "Alt Text",
                                    },
                                },
                                {
                                    id: "aria",
                                    labels: { fi: "ARIA", en: "ARIA" },
                                },
                                {
                                    id: "chrome-devtools",
                                    labels: {
                                        fi: "Chrome DevTools",
                                        en: "Chrome DevTools",
                                    },
                                    children: [
                                        {
                                            id: "wave",
                                            labels: { fi: "Wave", en: "Wave" },
                                        },
                                        {
                                            id: "siteimprove",
                                            labels: {
                                                fi: "Siteimprove",
                                                en: "Siteimprove",
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "css",
                    labels: { fi: "CSS", en: "CSS" },
                    children: [
                        {
                            id: "styling",
                            labels: { fi: "Tyylit", en: "Styles" },
                        },
                        {
                            id: "layout",
                            labels: { fi: "Layout", en: "Layout" },
                            children: [
                                {
                                    id: "flexbox",
                                    labels: { fi: "Flexbox", en: "Flexbox" },
                                },
                                {
                                    id: "grid",
                                    labels: { fi: "Grid", en: "Grid" },
                                },
                            ],
                        },
                        {
                            id: "responsiveness",
                            labels: {
                                fi: "Responsiivisuus",
                                en: "Responsiveness",
                            },
                            children: [
                                {
                                    id: "media-queries",
                                    labels: {
                                        fi: "Media Queryt",
                                        en: "Media Queries",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "javascript",
                    labels: { fi: "JavaScript", en: "JavaScript" },
                    children: [
                        {
                            id: "dom-manipulation",
                            labels: {
                                fi: "DOM-manipulaatio",
                                en: "DOM Manipulation",
                            },
                        },
                        {
                            id: "async-programming",
                            labels: {
                                fi: "Asynkroninen ohjelmointi",
                                en: "Asynchronous Programming",
                            },
                            children: [
                                {
                                    id: "promises",
                                    labels: { fi: "Promises", en: "Promises" },
                                },
                                {
                                    id: "async-await",
                                    labels: {
                                        fi: "Async / Await",
                                        en: "Async / Await",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "frameworks",
                    labels: {
                        fi: "Frameworkit & Kirjastot",
                        en: "Frameworks & Libraries",
                    },
                    children: [
                        {
                            id: "nextjs",
                            labels: { fi: "Next.js", en: "Next.js" },
                        },
                        { id: "vue", labels: { fi: "Vue.js", en: "Vue.js" } },
                    ],
                },
                {
                    id: "ux-ui",
                    labels: { fi: "UX/UI", en: "UX/UI" },
                    children: [
                        {
                            id: "information-architecture",
                            labels: {
                                fi: "Tietorakenne",
                                en: "Information Architecture",
                            },
                        },
                        {
                            id: "visual",
                            labels: {
                                fi: "Käyttöliittymä",
                                en: "User Interface",
                            },
                            children: [
                                {
                                    id: "color-theory",
                                    labels: { fi: "Värit", en: "Colors" },
                                },
                                {
                                    id: "typography",
                                    labels: {
                                        fi: "Typografia",
                                        en: "Typography",
                                    },
                                },
                            ],
                        },
                        {
                            id: "wcag-guidelines",
                            labels: {
                                fi: "WCAG-ohjeet",
                                en: "WCAG Guidelines",
                            },
                        },
                        {
                            id: "screen-reader-compatibility",
                            labels: {
                                fi: "Ruudunlukijan yhteensopivuus",
                                en: "Screen Reader Compatibility",
                            },
                            children: [
                                {
                                    id: "aria-labels",
                                    labels: {
                                        fi: "ARIA Labelit",
                                        en: "ARIA Labels",
                                    },
                                },
                                {
                                    id: "keyboard-navigation",
                                    labels: {
                                        fi: "Näppäimistön navigointi",
                                        en: "Keyboard Navigation",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "back-end",
            labels: { fi: "Back-End-kehitys", en: "Back-End Development" },
            children: [
                {
                    id: "server-side-languages",
                    labels: {
                        fi: "Palvelinpuolen kielet",
                        en: "Server-Side Languages",
                    },
                    children: [
                        { id: "php", labels: { fi: "PHP", en: "PHP" } },
                        {
                            id: "nodejs",
                            labels: { fi: "Node.js", en: "Node.js" },
                        },
                    ],
                },
                {
                    id: "databases",
                    labels: { fi: "Tietokannat", en: "Databases" },
                    children: [
                        {
                            id: "relational-databases",
                            labels: {
                                fi: "Relaatiotietokannat (SQL)",
                                en: "Relational Databases (SQL)",
                            },
                        },
                        {
                            id: "data-modeling",
                            labels: {
                                fi: "Datan mallinnus",
                                en: "Data Modeling",
                            },
                            children: [
                                {
                                    id: "entity-relationship-diagrams",
                                    labels: {
                                        fi: "ER-kaaviot",
                                        en: "ER Diagrams",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "api-development",
                    labels: { fi: "API-kehitys", en: "API Development" },
                    children: [
                        {
                            id: "rest-apis",
                            labels: { fi: "REST API:t", en: "REST APIs" },
                        },
                        {
                            id: "graphql-apis",
                            labels: { fi: "GraphQL API:t", en: "GraphQL APIs" },
                        },
                        {
                            id: "api-documentation",
                            labels: {
                                fi: "API-dokumentaatio",
                                en: "API Documentation",
                            },
                        },
                    ],
                },
                {
                    id: "security",
                    labels: { fi: "Tietoturva", en: "Security" },
                    children: [
                        {
                            id: "authentication-authorization",
                            labels: {
                                fi: "Todentaminen ja valtuutus",
                                en: "Authentication and Authorization",
                            },
                        },
                        {
                            id: "data-encryption",
                            labels: {
                                fi: "Tietojen Salaus",
                                en: "Data Encryption",
                            },
                        },
                        {
                            id: "xss-prevention",
                            labels: {
                                fi: "Cross-Site Scripting (XSS) -esto",
                                en: "Cross-Site Scripting (XSS) Prevention",
                            },
                            children: [
                                {
                                    id: "input-sanitization",
                                    labels: {
                                        fi: "Syötteen puhdistus",
                                        en: "Input Sanitization",
                                    },
                                },
                                {
                                    id: "output-encoding",
                                    labels: {
                                        fi: "Tulosteen koodaus",
                                        en: "Output Encoding",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "scalability-performance",
                    labels: {
                        fi: "Suorituskyky",
                        en: "Scalability & Performance",
                    },
                    children: [
                        {
                            id: "load-balancing",
                            labels: {
                                fi: "Kuormantasaus",
                                en: "Load Balancing",
                            },
                        },
                        {
                            id: "caching",
                            labels: { fi: "Välimuisti", en: "Caching" },
                        },
                        {
                            id: "database-optimization",
                            labels: {
                                fi: "Tietokannan optimointi",
                                en: "Database Optimization",
                            },
                        },
                    ],
                },
            ],
        },
        {
            id: "tools-technologies",
            labels: {
                fi: "Työkalut & Teknologiat",
                en: "Tools & Technologies",
            },
            children: [
                {
                    id: "version-control",
                    labels: { fi: "Versionhallinta", en: "Version Control" },
                    children: [
                        { id: "git", labels: { fi: "Git", en: "Git" } },
                        {
                            id: "sourcetree",
                            labels: { fi: "Sourcetree", en: "Sourcetree" },
                        },
                        {
                            id: "github",
                            labels: { fi: "GitHub", en: "GitHub" },
                        },
                        {
                            id: "bitbucket",
                            labels: { fi: "Bitbucket", en: "Bitbucket" },
                        },
                    ],
                },
                {
                    id: "code-editors",
                    labels: {
                        fi: "Koodieditorit & IDE:t",
                        en: "Code Editors & IDEs",
                    },
                    children: [
                        {
                            id: "vscode",
                            labels: {
                                fi: "Visual Studio Code",
                                en: "Visual Studio Code",
                            },
                        },
                        { id: "nvim", labels: { fi: "Neovim", en: "Neovim" } },
                        { id: "kitty", labels: { fi: "Kitty", en: "Kitty" } },
                    ],
                },
                {
                    id: "build-tools",
                    labels: { fi: "Rakennustyökalut", en: "Build Tools" },
                    children: [
                        {
                            id: "webpack",
                            labels: { fi: "Webpack", en: "Webpack" },
                        },
                        { id: "gulp", labels: { fi: "Gulp", en: "Gulp" } },
                    ],
                },
                {
                    id: "deployment-platforms",
                    labels: {
                        fi: "Julkaisualustat",
                        en: "Deployment Platforms",
                    },
                    children: [
                        {
                            id: "netlify",
                            labels: { fi: "Netlify", en: "Netlify" },
                        },
                        {
                            id: "firebase",
                            labels: { fi: "Firebase", en: "Firebase" },
                        },
                        {
                            id: "cloudcity",
                            labels: { fi: "Cloudcity", en: "Cloudcity" },
                        },
                    ],
                },
                {
                    id: "content-management-systems",
                    labels: { fi: "CMS", en: "CMS" },
                    children: [
                        {
                            id: "wordpress",
                            labels: { fi: "WordPress", en: "WordPress" },
                        },
                        {
                            id: "contentful",
                            labels: { fi: "Contentful", en: "Contentful" },
                        },
                        {
                            id: "strapi",
                            labels: { fi: "Strapi", en: "Strapi" },
                        },
                    ],
                },
            ],
        },
        {
            id: "development-process",
            labels: { fi: "Kehitysprosessi", en: "Development Process" },
            children: [
                {
                    id: "planning-requirements",
                    labels: {
                        fi: "Suunnittelu ja vaatimukset",
                        en: "Planning and Requirements",
                    },
                    children: [
                        {
                            id: "user-stories",
                            labels: {
                                fi: "Käyttäjätarinat",
                                en: "User Stories",
                            },
                        },
                        {
                            id: "wireframing",
                            labels: { fi: "Wireframing", en: "Wireframing" },
                        },
                        {
                            id: "project-scoping",
                            labels: {
                                fi: "Projektin laajuus",
                                en: "Project Scoping",
                            },
                        },
                    ],
                },
                {
                    id: "design-prototyping",
                    labels: {
                        fi: "Suunnittelu ja prototypointi",
                        en: "Design and Prototyping",
                    },
                    children: [
                        {
                            id: "ui-mockups",
                            labels: { fi: "UI Mockups", en: "UI Mockups" },
                        },
                        {
                            id: "interactive-prototypes",
                            labels: {
                                fi: "Interaktiiviset prototyypit",
                                en: "Interactive Prototypes",
                            },
                        },
                        {
                            id: "style-guides",
                            labels: { fi: "Tyyliohjeet", en: "Style Guides" },
                        },
                    ],
                },
                {
                    id: "development-coding",
                    labels: {
                        fi: "Koodaus ja tarkistus",
                        en: "Coding and Review",
                    },
                    children: [
                        {
                            id: "testing-during-development",
                            labels: {
                                fi: "Testaus kehityksen aikana",
                                en: "Testing During Development",
                            },
                        },
                        {
                            id: "code-reviews",
                            labels: {
                                fi: "Koodikatselmukset",
                                en: "Code Reviews",
                            },
                        },
                    ],
                },
                {
                    id: "testing-debugging",
                    labels: {
                        fi: "Testaus ja virheenkorjaus",
                        en: "Testing and Debugging",
                    },
                    children: [
                        {
                            id: "unit-testing",
                            labels: {
                                fi: "Yksikkötestaus",
                                en: "Unit Testing",
                            },
                        },
                        {
                            id: "integration-testing",
                            labels: {
                                fi: "Integraatiotestaus",
                                en: "Integration Testing",
                            },
                        },
                        {
                            id: "user-acceptance-testing",
                            labels: {
                                fi: "Käyttäjän hyväksyntätestaus",
                                en: "User Acceptance Testing",
                            },
                        },
                    ],
                },
                {
                    id: "deployment-maintenance",
                    labels: {
                        fi: "Julkaisu ja ylläpito",
                        en: "Deployment and Maintenance",
                    },
                    children: [
                        {
                            id: "ci-cd",
                            labels: {
                                fi: "CI/CD-integraatiot",
                                en: "CI/CD Integrations",
                            },
                        },
                        {
                            id: "monitoring-logging",
                            labels: {
                                fi: "Seuranta ja logiikka",
                                en: "Monitoring and Logging",
                            },
                        },
                        {
                            id: "bug-fixing-updates",
                            labels: {
                                fi: "Virheiden korjaus ja päivitykset",
                                en: "Bug Fixing and Updates",
                            },
                        },
                    ],
                },
            ],
        },
    ],
};

// Updated generateEdgeData function to capture level and set edge type
function generateEdgeData(
    node: HierarchyNode,
    level: number = 0
): { source: string; target: string; type: string }[] {
    const edges: { source: string; target: string; type: string }[] = [];

    // Check if the node has children
    if (node.children) {
        for (const child of node.children) {
            // Determine the edge type based on the current level
            const edgeType =
                level === 1 || level === 2 ? "smoothstep" : "simplebezier";

            // Create the edge and add it to the edges array
            edges.push({ source: node.id, target: child.id, type: edgeType });

            // Recursively generate edges for child nodes, incrementing level
            edges.push(...generateEdgeData(child, level + 1));
        }
    }

    return edges;
}

// Generate edge data from the hierarchy
export const edgeData: { source: string; target: string; type: string }[] =
    generateEdgeData(hierarchy);
