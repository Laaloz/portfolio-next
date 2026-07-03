import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { fontClassNames } from "../fonts";
import Navbar from "@/components/Navbar";
import { copy } from "@/content/copy";
import "../globals.css";
import "../header.css";
import "../footer.css";
import "../cards.css";
import "../pages.css";

export const metadata: Metadata = {
    title: copy.en.home.metaTitle,
    description: copy.en.home.metaDescription,
};

export const viewport: Viewport = {
    themeColor: "#f2f0ea",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={fontClassNames}>
                <a href="#main" className="skip-link">
                    {copy.en.nav.skipToContent}
                </a>
                <Navbar locale="en" />
                <main id="main">{children}</main>
            </body>
        </html>
    );
}
