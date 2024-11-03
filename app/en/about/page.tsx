import HeroPages from "@/components/main/HeroPages";
import Info from "@/components/about/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay - About",
};

const AboutPage = () => {
    const title = "About";
    const description =
        "In 2019, I decided to challenge myself by enrolling in an open Java course, and I fully immersed myself in coding. This sparked my interest in the world of web development. Nowadays, I mainly focus on developing websites and e-commerce platforms. In my free time, I’ve also built custom keyboards and computers and installed tailored firmware on them. When I’m not at the computer, I enjoy mountain biking, skiing, photography, cooking, and spending time with my loved ones.";

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <HeroPages title={title} />
            <Info description={description} />
        </div>
    );
};

export default AboutPage;
