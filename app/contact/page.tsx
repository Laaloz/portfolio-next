// app/about/page.tsx
import HeroPages from "@/components/main/HeroPages";
import ContactForm from "@/components/contact/ContacForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay - Ota yhteyttä",
    description: "Ota yhteyttä sivu - Laalo Ceesay",
};

const AboutPage = () => {
    const title = "Ota yhteyttä";

    // Form
    const name = "Nimi";
    const namePlaceholder = "Kirjoita nimesi";
    const email = "Sähköposti";
    const emailPlaceholder = "Kirjoita sähköpostisi";
    const message = "Viesti";
    const messagePlaceholder = "Viesti...";
    const submit = "Lähetä";
    const submitAria = "Lähetä sähköposti";
    const statusSending = "Lähetetään...";
    const statusSent = "Viesti lähetetty!";
    const statusError = "Lähetys epäonnistui";

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <HeroPages title={title} />
            <ContactForm
                nametext={name}
                namePlaceholder={namePlaceholder}
                emailtext={email}
                emailPlaceholder={emailPlaceholder}
                messagetext={message}
                messagePlaceholder={messagePlaceholder}
                submit={submit}
                submitAria={submitAria}
                statusSent={statusSent}
                statusSending={statusSending}
                statusError={statusError}
            />
        </div>
    );
};

export default AboutPage;
