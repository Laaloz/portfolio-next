"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

interface Props {
    description: string;
}

const Info = ({ description }: Props) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="relative flex flex-col h-full w-full px-10 md:px-20"
        >
            <div className="relative flex flex-col items-start justify-start max-w-screen-2xl mx-auto mt-5 w-full z-[20] md:flex-row">
                <div className="form-container flex flex-col w-full">
                    <div className="Welcome-box flex flex-col opacity-[0.9]">
                        <h2 className="text-xl md:texl-2xl mb-3">
                            (ノಠ益ಠ)ノ彡┻━┻
                        </h2>

                        <p className="description text-base">{description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Info;
