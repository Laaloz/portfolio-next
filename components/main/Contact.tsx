import React from "react";
import ContactContent from "@/components/sub/ContactContent";

interface ContactProps {
    title: string;
    description: string;
    buttonText: string;
}

const Contact = ({ title, description, buttonText }: ContactProps) => {
    return (
        <div
            className="relative flex flex-col h-full w-full px-10 md:px-20"
            id="Contact"
        >
            <ContactContent
                title={title}
                description={description}
                buttonText={buttonText}
            />
        </div>
    );
};

export default Contact;
