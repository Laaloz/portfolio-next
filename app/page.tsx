import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Mindmap from "@/components/main/Mindmap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay",
    description: "Portfolio etusivu - Laalo Ceesay",
};

const Main = () => {
    // Hero area
    const titleHeroTag = "Luotettavaa kehitystä";
    const titleHeroTagMiddle = "alus";
    const titleHeroTagEnd = "ta";
    const titleHeroTagfinal = "loppuun";
    const descriptionHero =
        "Olen <strong>Laalo Ceesay</strong>, web-ohjelmistokehittäjä Into-Digital Oy:ssä, jolla on kokemusta verkkosivujen, verkkokauppojen ja digitaalisten palveluiden kehittämisestä.";
    const buttonHeroText = "Lue lisää";

    // Projects area
    const limit = 3;
    const className = "mt-40 md:mt-60";
    const showTitle = true;
    const titleProject = "Projektit";
    const btnText = "Kaikki projektit";

    // contact area
    const title = "Kiinnostuitko?";
    const description =
        "Ota rohkeasti yhteyttä, jos sinulla on kysymyksiä projekteistani tai haluat keskustella mistä tahansa aiheesta. Kuulen mielelläni ajatuksiasi!";
    const buttonText = "Ota yhteyttä";

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <Hero
                titleTag={titleHeroTag}
                titleTagMiddle={titleHeroTagMiddle}
                titleTagEnd={titleHeroTagEnd}
                titleTagFinal={titleHeroTagfinal}
                description={descriptionHero}
                buttonText={buttonHeroText}
            />
            <Projects
                limit={limit}
                className={className}
                showTitle={showTitle}
                title={titleProject}
                btnText={btnText}
            />
            <Mindmap />
            <Contact
                title={title}
                description={description}
                buttonText={buttonText}
            />
        </div>
    );
};

export default Main;
