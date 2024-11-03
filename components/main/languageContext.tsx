"use client";

import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
    language: "fi",
    setLanguage: (lang: string) => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [language, setLanguage] = useState("fi");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
