import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Mindmap from "@/components/main/Mindmap";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay",
};

const Main = () => {
    // hero
    const titleHeroTag = "From start to finish, ";
    const titleHeroTagMiddle = "ship";
    const titleHeroTagEnd = "ping reliable development solutions";
    const titleHeroTagfinal = "";
    const descriptionHero =
        "I am <strong>Laalo Ceesay</strong>, a web developer at Into-Digital Oy with experience in developing websites, online stores, and digital services.";
    const buttonHeroText = "Read More";

    // Projects area
    const limit = 3;
    const className = "mt-40 md:mt-60";
    const showTitle = true;
    const titleProject = "Latest Projects";
    const btnText = "Projects";

    // contact
    const title = "Interested?";
    const description =
        "Feel free to reach out if you have any questions about my projects or if you want to discuss any topic. I would love to hear your thoughts!";
    const buttonText = "Get in Touch";

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
