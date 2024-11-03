"use client";

import React, { useEffect, useState, useRef } from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
    language: string; // Accept current language as prop
    setLanguage: (language: string) => void; // Accept setLanguage function
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
    language,
    setLanguage,
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const [languageSelectorVisible, setLanguageSelectorVisible] =
        useState(false);
    const firstButtonRef = useRef<HTMLButtonElement | null>(null);

    // Determine the current language from the URL
    const currentLanguage = pathname.startsWith("/en") ? "en" : "fi";

    useEffect(() => {
        setLanguage(currentLanguage);
    }, [pathname, setLanguage, currentLanguage]);

    const handleLanguageChange = (newLanguage: string) => {
        let basePath = pathname.replace(/^\/en/, ""); // Remove /en from the pathname if it exists

        // If the new language is "fi" and we are at the root, set basePath to "/"
        if (newLanguage === "fi" && basePath === "") {
            basePath = "/"; // Correctly set to root path for Finnish
        }

        const newPath = newLanguage === "en" ? `/en${basePath}` : basePath; // Construct new path
        setLanguage(newLanguage);
        setLanguageSelectorVisible(false);
        router.push(newPath); // Navigate to the new path
    };

    // Focus the first language button when the selector is opened
    useEffect(() => {
        if (languageSelectorVisible && firstButtonRef.current) {
            firstButtonRef.current.focus();
        }
    }, [languageSelectorVisible]);

    // Handle key down events for accessibility
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            setLanguageSelectorVisible((prev) => !prev);
            event.preventDefault();
        }
    };

    return (
        <div
            className="language-selector flex items-center gap-2"
            role="group"
            aria-label="Language selector"
        >
            {languageSelectorVisible && (
                <div className="langs flex items-center gap-2">
                    <button
                        ref={firstButtonRef}
                        className={`text-sm ${
                            currentLanguage === "fi"
                                ? "font-bold"
                                : "hover:underline"
                        }`}
                        onClick={() => handleLanguageChange("fi")}
                        aria-pressed={currentLanguage === "fi"}
                    >
                        FI
                    </button>
                    <button
                        className={`text-sm ${
                            currentLanguage === "en"
                                ? "font-bold"
                                : "hover:underline"
                        }`}
                        onClick={() => handleLanguageChange("en")}
                        aria-pressed={currentLanguage === "en"}
                    >
                        EN
                    </button>
                </div>
            )}
            <GlobeAltIcon
                className="h-4 w-4 cursor-pointer text-foreground"
                tabIndex={0}
                onClick={() => setLanguageSelectorVisible((prev) => !prev)}
                onKeyDown={handleKeyDown}
                aria-label="Select language"
            />
        </div>
    );
};

export default LanguageSwitcher;
