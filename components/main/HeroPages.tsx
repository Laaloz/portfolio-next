import React from "react";
import HeroContentPages from "../sub/HeroContentPages";

interface HeroPagesProps {
    title: string;
}

const HeroPages = ({ title }: HeroPagesProps) => {
    return (
        <div
            className="relative flex flex-col h-full w-full px-10 md:px-20"
            id="hero"
        >
            <HeroContentPages title={title} />
        </div>
    );
};

export default HeroPages;
