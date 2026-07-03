"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, localePath, type Locale } from "@/content/copy";

export default function Navbar({ locale }: { locale: Locale }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const t = copy[locale].nav;

    const barePath =
        locale === "en" ? pathname.replace(/^\/en/, "") || "/" : pathname;
    const isHome = barePath === "/";
    const fiHref = barePath;
    const enHref = barePath === "/" ? "/en" : `/en${barePath}`;

    const subLinks = [
        { href: localePath(locale, "/about"), label: t.about },
        { href: localePath(locale, "/projects"), label: t.projects },
    ];
    const anchors = [
        { href: "#projects", label: t.projects },
        { href: "#skills", label: t.skills },
        { href: "#experience", label: t.experience },
    ];
    const contactHref = localePath(locale, "/contact");
    const onContact = barePath === "/contact";

    return (
        <header className="site-nav">
            <div className="container site-nav-inner">
                <Link href={localePath(locale, "/")} className="wordmark">
                    laalo.dev
                </Link>

                <nav className="nav-links" aria-label={t.home}>
                    {isHome
                        ? anchors.map((a) => (
                              <a key={a.href} href={a.href} className="nav-pill">
                                  {a.label}
                              </a>
                          ))
                        : subLinks.map((l) =>
                              barePath === l.href.replace(/^\/en/, "") ||
                              pathname === l.href ? (
                                  <span key={l.href} className="nav-pill current">
                                      {l.label}
                                  </span>
                              ) : (
                                  <Link
                                      key={l.href}
                                      href={l.href}
                                      className="nav-pill"
                                  >
                                      {l.label}
                                  </Link>
                              )
                          )}

                    <span className="lang-switch">
                        {locale === "fi" ? (
                            <span className="active">FI</span>
                        ) : (
                            <a href={fiHref} className="inactive">
                                FI
                            </a>
                        )}
                        <span className="sep">/</span>
                        {locale === "en" ? (
                            <span className="active">EN</span>
                        ) : (
                            <a href={enHref} className="inactive">
                                EN
                            </a>
                        )}
                    </span>

                    {onContact ? (
                        <span className="nav-pill current nav-cta">
                            {t.contact}
                        </span>
                    ) : (
                        <Link href={contactHref} className="btn btn-dark nav-cta">
                            {t.contact}
                        </Link>
                    )}

                    <button
                        type="button"
                        className="nav-burger"
                        aria-label={open ? t.closeMenu : t.openMenu}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 3l12 12M15 3L3 15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 14"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M1 1h16M1 7h16M1 13h16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                    </button>
                </nav>
            </div>

            {open && (
                <nav className="mobile-menu" aria-label={t.home}>
                    {subLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link href={contactHref} onClick={() => setOpen(false)}>
                        {t.contact}
                    </Link>
                </nav>
            )}
        </header>
    );
}
