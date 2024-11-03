"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface HeroContentPagesProps {
    title: string;
}

const HeroContentPages = ({ title }: HeroContentPagesProps) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto mt-40 w-full z-[20] md:flex-row md:mt-50"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 font-bold text-foreground w-auto h-auto"
                >
                    <h1 className="text-2xl md:text-4xl">{title}</h1>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroContentPages;
