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
    title: copy.fi.home.metaTitle,
    description: copy.fi.home.metaDescription,
};

export const viewport: Viewport = {
    themeColor: "#f2f0ea",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fi">
            <body className={fontClassNames}>
                <Navbar locale="fi" />
                <main>{children}</main>
            </body>
        </html>
    );
}
