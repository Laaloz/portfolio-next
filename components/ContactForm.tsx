"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { copy, localePath, type Locale } from "@/content/copy";

type Status = "idle" | "sending" | "success" | "error";

/* Spam protection without third parties or cookies: a honeypot field that
   humans never see, the time the form has been open (bots submit within
   milliseconds) and a per-IP rate limit on the server. */
export default function ContactForm({ locale }: { locale: Locale }) {
    const t = copy[locale].contact;
    const [status, setStatus] = useState<Status>("idle");
    const [validationError, setValidationError] = useState("");
    const openedAt = useRef(0);

    useEffect(() => {
        openedAt.current = Date.now();
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        const website = String(data.get("website") ?? "");

        if (!name || !email || !message) {
            setValidationError(t.requiredError);
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setValidationError(t.emailError);
            return;
        }

        setValidationError("");
        setStatus("sending");
        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    website,
                    elapsedMs: Date.now() - openedAt.current,
                }),
            });
            if (!response.ok) throw new Error(`Send failed: ${response.status}`);
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="form-card">
                <div className="form-success" role="status">
                    <h2>{t.successTitle}</h2>
                    <p>{t.successText}</p>
                </div>
            </div>
        );
    }

    return (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-fields-row">
                <label>
                    <span>{t.nameLabel}</span>
                    <input
                        type="text"
                        name="name"
                        placeholder={t.namePlaceholder}
                        autoComplete="name"
                        maxLength={200}
                        required
                    />
                </label>
                <label>
                    <span>{t.emailLabel}</span>
                    <input
                        type="email"
                        name="email"
                        placeholder={t.emailPlaceholder}
                        autoComplete="email"
                        maxLength={254}
                        required
                    />
                </label>
            </div>
            <label>
                <span>{t.messageLabel}</span>
                <textarea
                    name="message"
                    rows={6}
                    placeholder={t.messagePlaceholder}
                    maxLength={5000}
                    required
                />
            </label>
            {/* Honeypot: hidden from people and assistive tech, filled by bots */}
            <div className="hp-field" aria-hidden="true">
                <label>
                    website
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </label>
            </div>
            {validationError && (
                <p className="form-error" role="alert">
                    {validationError}
                </p>
            )}
            {status === "error" && (
                <p className="form-error" role="alert">
                    {t.errorText}
                </p>
            )}
            <div className="form-footer">
                <span className="privacy-note">
                    {t.privacyNote}{" "}
                    <Link href={localePath(locale, "/privacy")}>
                        {t.privacyLinkLabel}
                    </Link>
                </span>
                <button
                    type="submit"
                    className="btn btn-violet form-submit"
                    disabled={status === "sending"}
                >
                    {status === "sending" ? t.sending : t.submit}
                </button>
            </div>
        </form>
    );
}
