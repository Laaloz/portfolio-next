import React from "react";
import HeroContent from "../sub/HeroContent";

interface HeroProps {
    titleTag: string;
    titleTagMiddle: string;
    titleTagEnd: string;
    titleTagFinal: string;
    description: string;
    buttonText: string;
}

const Hero = ({
    titleTag,
    titleTagMiddle,
    titleTagEnd,
    titleTagFinal,
    description,
    buttonText,
}: HeroProps) => {
    return (
        <div
            className="relative flex flex-col h-full w-full px-10 md:px-20"
            id="hero"
        >
            <HeroContent
                titleTag={titleTag}
                titleTagMiddle={titleTagMiddle}
                titleTagEnd={titleTagEnd}
                titleTagFinal={titleTagFinal}
                description={description}
                buttonText={buttonText}
            />
        </div>
    );
};

export default Hero;
