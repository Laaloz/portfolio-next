// app/about/page.tsx
import HeroPages from "@/components/main/HeroPages";
import ContactForm from "@/components/contact/ContacForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Laalo Ceesay - Contact",
    description: "Contact page - Laalo Ceesay",
};

const AboutPage = () => {
    const title = "Contact";

    // Form
    const name = "Name";
    const namePlaceholder = "Enter your name";
    const email = "Email";
    const emailPlaceholder = "Enter your email";
    const message = "Message";
    const messagePlaceholder = "Message...";
    const submit = "Send";
    const submitAria = "Send email";
    const statusSending = "Sending...";
    const statusSent = "Message sent!";
    const statusError = "Sending failed";

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
