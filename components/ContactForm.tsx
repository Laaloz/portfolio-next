"use client";

import { useCallback, useEffect, useState } from "react";
import { copy, type Locale } from "@/content/copy";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
    interface Window {
        grecaptcha?: {
            ready: (cb: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
            ) => Promise<string>;
        };
    }
}

function useRecaptcha() {
    useEffect(() => {
        if (!RECAPTCHA_SITE_KEY || window.grecaptcha) return;
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.head.appendChild(script);
    }, []);

    return useCallback(async () => {
        if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return "";
        await new Promise<void>((resolve) =>
            window.grecaptcha!.ready(resolve)
        );
        return window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
            action: "submitForm",
        });
    }, []);
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
    const t = copy[locale].contact;
    const [status, setStatus] = useState<Status>("idle");
    const [validationError, setValidationError] = useState("");
    const getRecaptchaToken = useRecaptcha();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();

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
            const recaptchaToken = await getRecaptchaToken();
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, recaptchaToken }),
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
                    required
                />
            </label>
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
                <span className="privacy-note">{t.privacyNote}</span>
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
