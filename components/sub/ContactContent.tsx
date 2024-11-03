"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

interface ContactContentProps {
    title: string;
    description: string;
    buttonText: string;
}

const ContactContent = ({
    title,
    description,
    buttonText,
}: ContactContentProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start justify-center max-w-screen-2xl mx-auto mt-40 w-full z-[20] md:flex-row md:mt-60"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center max-w-xl">
                <motion.div
                    variants={slideInFromTop(0.3)}
                    className="Welcome-box flex flex-col items-center gap-[8px] py-[8px] px-[7px] opacity-[0.9]"
                >
                    <h2 className="text-4xl mb-3">{title}</h2>
                    <p className="mb-6 text-base">{description}</p>

                    <a
                        href="/contact"
                        className="py-2 px-6 button-primary text-center text-foreground cursor-pointer font-medium"
                    >
                        {buttonText}
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactContent;
