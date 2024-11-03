"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import {
    useGoogleReCaptcha,
    GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

interface ContactFormProps {
    nametext: string;
    namePlaceholder: string;
    emailtext: string;
    emailPlaceholder: string;
    messagetext: string;
    messagePlaceholder: string;
    submit: string;
    submitAria: string;
    statusSent: string;
    statusSending: string;
    statusError: string;
}

const ContactForm = ({
    nametext,
    namePlaceholder,
    emailtext,
    emailPlaceholder,
    messagetext,
    messagePlaceholder,
    submit,
    submitAria,
    statusSent,
    statusSending,
    statusError,
}: ContactFormProps) => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(statusSending);

        if (!executeRecaptcha) {
            console.error("reCAPTCHA failed to load.");
            setStatus("reCAPTCHA failed to load.");
            return;
        }

        const recaptchaToken = await executeRecaptcha("submitForm");

        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                recaptchaToken,
            }),
        });

        if (response.ok) {
            setStatus(statusSent);
            setName("");
            setEmail("");
            setMessage("");
        } else {
            const errorData = await response.json();
            console.error("Error response: ", errorData);
            setStatus(statusError);
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="relative flex flex-col h-full w-full px-10 md:px-20"
        >
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
            >
                <div className="relative flex flex-col items-start justify-start max-w-screen-2xl mx-auto mt-5 w-full md:flex-row z-0">
                    <div className="form-container flex flex-col w-full">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-lg flex flex-col gap-6"
                        >
                            <div className="flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="name mb-2 font-bold"
                                >
                                    {nametext} <sup>*</sup>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full py-3 border-b border-white bg-transparent text-white"
                                    placeholder={namePlaceholder}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="email"
                                    className="email mb-2 font-bold"
                                >
                                    {emailtext} <sup>*</sup>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full py-3 border-b border-white bg-transparent text-white"
                                    placeholder={emailPlaceholder}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label
                                    htmlFor="message"
                                    className="message mb-2 font-bold"
                                >
                                    {messagetext} <sup>*</sup>
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full h-32 p-3 border border-white bg-transparent text-white"
                                    placeholder={messagePlaceholder}
                                />
                            </div>

                            <div className="flex gap-4 justify-end items-center">
                                {status && (
                                    <p
                                        className="text-base"
                                        aria-live="polite"
                                        aria-atomic="true"
                                    >
                                        {status}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="button-primary font-medium"
                                    aria-label={submitAria}
                                >
                                    {submit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </GoogleReCaptchaProvider>
        </motion.div>
    );
};

export default ContactForm;
