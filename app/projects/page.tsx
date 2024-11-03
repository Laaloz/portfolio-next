// app/about/page.tsx
import HeroPages from "@/components/main/HeroPages";
import Projects from "@/components/main/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay - Projektit",
    description: "Projektien listaus sivu - Laalo Ceesay",
};

const AboutPage = () => {
    const title = "Projektit";
    const className = "mt-5 md:mt-5";
    const limit = 99;

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <HeroPages title={title} />
            <Projects
                limit={limit}
                className={className}
                showTitle={false}
                title=""
                btnText=""
            />
        </div>
    );
};

export default AboutPage;
