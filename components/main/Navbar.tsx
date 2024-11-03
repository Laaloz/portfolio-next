"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { WindowIcon, ClockIcon } from "@heroicons/react/24/solid";
import LanguageSwitcher from "./languageSwitcher"; // Ensure correct import case
import { useLanguage } from "./languageContext";
import Clock from "react-live-clock";

// Define a type for the link keys
type LinkKeys = "about" | "projects" | "contact";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const [isClient, setIsClient] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Check if the current language is English based on pathname
    const isEnglish = pathname.startsWith("/en");

    // Define localized link URLs and text based on the language
    const links: Record<LinkKeys, string> = {
        about: isEnglish ? "/en/about" : "/about",
        projects: isEnglish ? "/en/projects" : "/projects",
        contact: isEnglish ? "/en/contact" : "/contact",
    };

    const linkTexts: Record<LinkKeys, string> = {
        about: isEnglish ? "About" : "Tietoa",
        projects: isEnglish ? "Projects" : "Projektit",
        contact: isEnglish ? "Contact" : "Ota yhteyttä",
    };

    const homeLink = isEnglish ? "/en" : "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => setIsClient(true), []);

    // Close menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 px-10 py-5 md:px-20">
            <div
                className={`max-w-screen-2xl mx-auto transition-all duration-200 ${
                    scrolled ? "scrolled" : ""
                }`}
            >
                <div className="flex justify-between h-16 items-center">
                    <div className="flex flex-row gap-3 items-center">
                        <a
                            href={homeLink}
                            className="text-lg font-bold text-foreground flex gap-3"
                            aria-label={isEnglish ? "Home" : "Etusivu"}
                        >
                            <WindowIcon className="h-6 w-6" />
                            <span className="text-h6">LC.</span>
                        </a>
                    </div>

                    <div className="nav-items hidden md:flex">
                        <div className="clock flex items-center">
                            <ClockIcon className="h-4 w-4" />
                            {isClient && (
                                <Clock
                                    format={"H:mm:ss"}
                                    style={{ fontSize: "0.875rem" }}
                                    ticking
                                />
                            )}
                        </div>

                        {Object.keys(links).map((key) => {
                            const typedKey = key as LinkKeys; // Assert that key is of type LinkKeys
                            return (
                                <a
                                    key={typedKey}
                                    href={links[typedKey]}
                                    className={`text-sm ${
                                        pathname === links[typedKey]
                                            ? "bg-secondary active"
                                            : "hover:bg-secondary hover:text-white"
                                    }`}
                                >
                                    {linkTexts[typedKey]}
                                </a>
                            );
                        })}

                        <LanguageSwitcher
                            language={language}
                            setLanguage={setLanguage}
                        />
                    </div>

                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 text-white hover:bg-secondary focus:outline-none"
                            aria-expanded={isOpen}
                            aria-label="Open main menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div ref={menuRef} className="md:hidden nav-items-mobile">
                    <div className="clock flex items-center gap-2 mb-3">
                        <ClockIcon className="h-4 w-4" />
                        <Clock
                            format={"H:mm:ss"}
                            style={{ fontSize: "1rem" }}
                            ticking
                        />
                    </div>

                    <div className="flex flex-col gap-3 justify-end items-end">
                        {Object.keys(links).map((key) => {
                            const typedKey = key as LinkKeys; // Assert that key is of type LinkKeys
                            return (
                                <a
                                    key={typedKey}
                                    href={links[typedKey]}
                                    className={`text-xl ${
                                        pathname === links[typedKey]
                                            ? "bg-secondary active"
                                            : "hover:bg-secondary hover:text-white"
                                    }`}
                                >
                                    {linkTexts[typedKey]}
                                </a>
                            );
                        })}
                    </div>

                    <div className="mt-3 mobile-switcher">
                        <LanguageSwitcher
                            language={language}
                            setLanguage={setLanguage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
