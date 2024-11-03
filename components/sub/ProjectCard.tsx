import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import {
    EyeIcon,
    EyeSlashIcon,
    ChevronRightIcon,
} from "@heroicons/react/24/solid";

type ProjectCardProps = {
    image?: string;
    title: string;
    description: React.ReactNode;
    tag: string;
    category: string;
    cardDuration?: number;
    link?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    description,
    tag,
    category,
    cardDuration = 0.3,
    link,
}) => {
    const handleClick = () => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromTop(cardDuration)}
            onClick={handleClick}
            className={`card-project h-full rounded-lg shadow-lg overflow-hidden flex flex-col w-full h-full ${
                link ? "has-link cursor-pointer" : ""
            }`}
        >
            <div className="image-wrapper relative w-full flex mb-5">
                {image ? (
                    <>
                        <EyeIcon className="w-8 h-8 text-gray-700" />
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="w-full object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </>
                ) : (
                    <EyeSlashIcon className="w-8 h-8 text-gray-500" />
                )}
            </div>

            <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                </div>

                <div className="mt-2 text-base flex-grow">{description}</div>

                <div className="meta mt-8 flex items-center justify-between gap-2">
                    <div className="flex gap-2 items-center">
                        <p className="category text-sm font-medium">
                            {category}
                        </p>

                        <span className="tag text-sm font-semibold px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    </div>

                    {link && (
                        <ChevronRightIcon className="w-6 h-6 text-gray-500 chevron" />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
