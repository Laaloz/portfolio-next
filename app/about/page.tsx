import HeroPages from "@/components/main/HeroPages";
import Info from "@/components/about/Info";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay - Info",
};

const AboutPage = () => {
    const title = "Info";
    const description =
        "Vuonna 2019 päätin haastaa itseni osallistumalla avoimeen Java-kurssiin ja uppouduin täysin koodaamisen pariin. Tästä innostukseni jatkui web-kehityksen maailmaan. Nykyään keskityn pääasiassa verkkosivujen ja verkkokauppojen kehittämiseen. Vapaa-ajallani olen myös rakentanut omia näppäimistöjä ja tietokoneita sekä asentanut niihin räätälöityjä laiteohjelmistoja. Kun en ole tietokoneen ääressä, maastopyöräilen, laskettelen, valokuvaan ja nautin ruoanlaitosta sekä vietän aikaa läheisteni seurassa.";

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <HeroPages title={title} />
            <Info description={description} />
        </div>
    );
};

export default AboutPage;
