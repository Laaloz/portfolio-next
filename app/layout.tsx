// app/layout.tsx
"use client";

import { ReactNode } from "react";
import StarsCanvas from "@/components/sub/Background";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
// import { Metadata } from "next";
import "./globals.css";
import "./header.css";
import "./footer.css";
import "./cards.css";
import "./buttons.css";

// Import your fonts
const orbitron = localFont({
    src: [
        { path: "./fonts/Orbitron-Regular.woff2", weight: "400" },
        { path: "./fonts/Orbitron-Medium.woff2", weight: "500" },
        { path: "./fonts/Orbitron-SemiBold.woff2", weight: "700" },
        { path: "./fonts/Orbitron-Black.woff2", weight: "900" },
    ],
    variable: "--font-orbitron",
});

const roboto = localFont({
    src: [
        { path: "./fonts/Roboto-Thin.woff2", weight: "100" },
        { path: "./fonts/Roboto-Light.woff2", weight: "300" },
        { path: "./fonts/Roboto-Regular.woff2", weight: "400" },
        { path: "./fonts/Roboto-Medium.woff2", weight: "500" },
        { path: "./fonts/Roboto-Bold.woff2", weight: "700" },
        { path: "./fonts/Roboto-Black.woff2", weight: "900" },
    ],
    variable: "--font-roboto",
});

export default function LangLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname(); // This can be used now
    const isEnglish = pathname.startsWith("/en"); // Determine language

    return (
        <html lang={isEnglish ? "en" : "fi"}>
            <body
                className={`${orbitron.variable} ${roboto.variable} antialiased flex flex-col`}
            >
                <StarsCanvas />
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
