"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Footer = () => {
    const pathname = usePathname();
    const isEnglish = pathname.startsWith("/en");

    // Set link texts and URLs based on the language
    const links = {
        about: isEnglish ? "/en/about" : "/about",
        projects: isEnglish ? "/en/projects" : "/projects",
        contact: isEnglish ? "/en/contact" : "/contact",
    };

    const linkTexts = {
        about: isEnglish ? "About" : "Tietoa",
        projects: isEnglish ? "Projects" : "Projektit",
        contact: isEnglish ? "Contact" : "Ota yhteyttä",
    };

    return (
        <footer className="w-full z-50 px-10 py-5 md:px-20 mt-20 md:mt-40 footer">
            <div className="max-w-screen-2xl mx-auto ease-in duration-200 flex flex-row justify-between footer-content">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-3 flex-shrink-0">
                        <a
                            href={isEnglish ? "/en" : "/"}
                            className="text-l font-bold text-foreground flex gap-3"
                            aria-label={isEnglish ? "Home" : "Etusivu"}
                        >
                            <span className="text-h6">LC.</span>
                        </a>
                    </div>

                    <div className="footer-contacts flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <EnvelopeIcon className="w-5 h-5" />
                            <p className="text-sm">
                                <a
                                    href="mailto:laaloceesay@gmail.com"
                                    className="hover:underline"
                                >
                                    laaloceesay@gmail.com
                                </a>
                            </p>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                            <MapPinIcon className="w-5 h-5" />
                            <p className="text-sm">Jyväskylä, Finland</p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://github.com/Laaloz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm hover:underline"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/laaloceesay/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-sm hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-items flex flex-col md:flex-row gap-4 md:gap-8">
                    <a
                        href={links.about}
                        className={`text-sm w-fit ${
                            pathname === links.about
                                ? "bg-secondary active"
                                : "hover:bg-secondary hover:text-white"
                        }`}
                    >
                        {linkTexts.about}
                    </a>
                    <a
                        href={links.projects}
                        className={`text-sm w-fit ${
                            pathname === links.projects
                                ? "bg-secondary active"
                                : "hover:bg-secondary hover:text-white"
                        }`}
                    >
                        {linkTexts.projects}
                    </a>
                    <a
                        href={links.contact}
                        className={`text-sm w-fit ${
                            pathname === links.contact
                                ? "bg-secondary active"
                                : "hover:bg-secondary hover:text-white"
                        }`}
                    >
                        {linkTexts.contact}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
