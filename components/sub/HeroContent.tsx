"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeroContentProps {
    titleTag: string;
    titleTagMiddle: string;
    titleTagEnd: string;
    titleTagFinal: string;
    description: string;
    buttonText: string;
}

const HeroContent = ({
    titleTag,
    titleTagMiddle,
    titleTagEnd,
    titleTagFinal,
    description,
    buttonText,
}: HeroContentProps) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [gifUrl, setGifUrl] = useState("");
    const [gifPosition, setGifPosition] = useState({ x: 0, y: 0 });
    const [gifTimeout, setGifTimeout] = useState<NodeJS.Timeout | null>(null);
    const pathname = usePathname();
    const isEnglish = pathname.includes("/en");

    const texts = React.useMemo(() => {
        const texts = isEnglish
            ? ["Code", "Electronics", "¯\\_(ツ)_/¯"]
            : ["Koodi", "Elektroniikka", "¯\\_(ツ)_/¯"];
        return texts;
    }, [isEnglish]);

    const typingSpeed = 100;

    useEffect(() => {
        const currentString = texts[currentIndex];
        let charIndex = 0;
        let tempText = "";

        const interval = setInterval(() => {
            if (charIndex < currentString.length) {
                tempText += currentString[charIndex];
                setCurrentText(tempText);
                charIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentIndex(
                        (prevIndex) => (prevIndex + 1) % texts.length
                    );
                }, 2000);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [currentIndex, texts]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    const handleMouseEnter = async (
        event: React.MouseEvent<HTMLSpanElement>
    ) => {
        // Fetch the GIF
        const res = await fetch(`/api/fetchGif?searchTerm=spaceship`);
        const data = await res.json();
        setGifUrl(data.gifUrl);

        const { clientX, clientY } = event;
        setGifPosition({ x: clientX, y: clientY });
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const gifWidth = 300;
        const gifHeight = (gifWidth / 3) * 2;

        let xPosition = clientX + 10;
        let yPosition = clientY + 10;

        // Ensure x position is within screen boundaries
        if (xPosition + gifWidth > windowWidth) {
            xPosition = clientX - gifWidth - 10;
            if (xPosition < 0) {
                xPosition = 0;
            }
        }

        // Ensure y position is within screen boundaries
        if (yPosition + gifHeight > windowHeight) {
            yPosition = clientY - gifHeight - 10;
            if (yPosition < 0) {
                yPosition = 0;
            }
        }

        setGifPosition({ x: xPosition, y: yPosition });
    };

    const handleMouseLeave = () => {
        // Clear the timeout if it exists
        if (gifTimeout) clearTimeout(gifTimeout);

        // Set a timeout to hide the GIF after a delay
        const timeout = setTimeout(() => {
            setGifUrl(""); // Hide GIF after a delay
        }, 100); // Adjust delay as needed

        setGifTimeout(timeout); // Store the timeout
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto mt-40 w-full z-[20] md:flex-row md:mt-60"
            onMouseMove={handleMouseMove}
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop(0.3)}
                    className="Welcome-box flex flex-row gap-[8px] py-[8px] px-[7px] opacity-[0.9]"
                    aria-hidden
                >
                    <CubeTransparentIcon className="text-[#b49bff] h-5 w-5" />
                    <span className="Welcome-text text-[14px]">
                        {currentText}
                        <span
                            className={`${
                                showCursor ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-300`}
                        >
                            _
                        </span>
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-2 text-3xl font-bold text-foreground max-w-[600px] w-auto h-auto md:text-5xl"
                >
                    <h1>
                        {titleTag}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-default"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {" "}
                            {titleTagMiddle}
                        </span>
                        {titleTagEnd} {titleTagFinal}
                    </h1>
                </motion.div>

                {gifUrl && (
                    <motion.div
                        style={{
                            position: "absolute",
                            width: "300px",
                            height: "auto",
                            aspectRatio: "3 / 2",
                            top: gifPosition.y + 10,
                            left: gifPosition.x + 10,
                        }}
                        className="flex justify-center items-center z-[10]"
                    >
                        <Image
                            src={gifUrl}
                            alt="Spaceship GIF"
                            className="rounded-lg shadow-lg"
                            fill
                            unoptimized
                            priority
                        />
                    </motion.div>
                )}

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-base my-5 max-w-[600px]"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    href="/about"
                    className="py-2 px-6 button-primary text-center text-base cursor-pointer font-medium"
                >
                    {buttonText}
                </motion.a>
            </div>
        </motion.div>
    );
};

export default HeroContent;
