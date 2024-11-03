import { Document } from "@contentful/rich-text-types"; // Import Document type

// Set your Contentful Space ID and Access Token
const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// Function to fetch projects from Contentful using fetch API
export async function fetchProjects(number: number, locale: string = "fi-FI") {
    // Default to 'en-US'
    // Construct URL with locale
    const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=project&locale=${locale}`;

    try {
        const response = await fetch(url);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Convert response to JSON
        const data = await response.json();

        // Define the type for project fields
        type ProjectFields = {
            title: string;
            description: Document; // Keep as Document for rich text
            tag: string;
            category: string;
            image?: {
                sys: {
                    id: string;
                };
            };
            cardDuration?: number;
            link: string;
        };

        const assetMap: { [id: string]: string } = {};

        data.includes.Asset.forEach(
            (asset: {
                sys: { id: string };
                fields: { file: { url: string } };
            }) => {
                assetMap[asset.sys.id] = `https:${asset.fields.file.url}`; // Prepend with 'https:'
            }
        );

        // Map over the returned entries to structure the data
        const projects = data.items.map(
            (item: {
                fields: ProjectFields;
                sys: { id: string; publishedAt: string };
            }) => ({
                id: item.sys.id, // Get ID from sys
                title: item.fields.title,
                description: item.fields.description, // Keep it as Document
                tag: item.fields.tag,
                category: item.fields.category,
                image: assetMap[item.fields.image?.sys.id || ""] || "", // Resolve image URL using assetMap
                cardDuration: item.fields.cardDuration || 0.3, // Default duration, adjust as needed
                publishedAt: item.sys.publishedAt, // Include publishedAt
                link: item.fields.link,
            })
        );

        // Sort projects by publishedAt in descending order and return the specified number
        return projects
            .sort(
                (a: { publishedAt: string }, b: { publishedAt: string }) =>
                    new Date(b.publishedAt).getTime() -
                    new Date(a.publishedAt).getTime()
            )
            .slice(0, number); // Use the number parameter to slice the array
    } catch (error) {
        console.error("Error fetching projects from Contentful", error);
        return [];
    }
}
