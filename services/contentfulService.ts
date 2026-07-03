import type { Locale } from "@/content/copy";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export type Project = {
    id: string;
    title: string;
    description: string;
    tag: string;
    challenge: string;
    role: string;
    link: string;
    image: { url: string; width: number; height: number } | null;
};

type RichTextNode = {
    nodeType: string;
    value?: string;
    content?: RichTextNode[];
};

function richTextToPlain(node: RichTextNode | undefined): string {
    if (!node) return "";
    if (node.nodeType === "text") return node.value ?? "";
    return (node.content ?? [])
        .map(richTextToPlain)
        .join("")
        .trim();
}

type Asset = {
    sys: { id: string };
    fields: {
        file: {
            url: string;
            details?: { image?: { width: number; height: number } };
        };
    };
};

type Entry = {
    sys: { id: string };
    fields: {
        title?: string;
        description?: RichTextNode;
        tag?: string;
        challenge?: string;
        role?: string;
        link?: string;
        image?: { sys: { id: string } };
    };
};

/**
 * Fetch redesign project entries (the ones with a challenge field) in
 * handoff order. Returns [] when Contentful env vars are missing so pages
 * still render with placeholders.
 */
export async function fetchProjects(
    limit: number,
    locale: Locale = "fi"
): Promise<Project[]> {
    if (!SPACE_ID || !ACCESS_TOKEN) return [];

    const cfLocale = locale === "en" ? "en-US" : "fi-FI";
    const url =
        `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries` +
        `?access_token=${ACCESS_TOKEN}&content_type=project&locale=${cfLocale}` +
        `&fields.challenge[exists]=true&order=sys.firstPublishedAt&limit=${limit}`;

    try {
        const response = await fetch(url, { next: { revalidate: 3600 } });
        if (!response.ok) {
            throw new Error(`Contentful responded ${response.status}`);
        }
        const data = await response.json();

        const assets = new Map<string, Asset>(
            (data.includes?.Asset ?? []).map((a: Asset) => [a.sys.id, a])
        );

        return (data.items as Entry[]).map((item) => {
            const asset = item.fields.image
                ? assets.get(item.fields.image.sys.id)
                : undefined;
            return {
                id: item.sys.id,
                title: item.fields.title ?? "",
                description: richTextToPlain(item.fields.description),
                tag: item.fields.tag ?? "",
                challenge: item.fields.challenge ?? "",
                role: item.fields.role ?? "",
                link: item.fields.link ?? "",
                image: asset
                    ? {
                          url: `https:${asset.fields.file.url}`,
                          width:
                              asset.fields.file.details?.image?.width ?? 1200,
                          height:
                              asset.fields.file.details?.image?.height ?? 750,
                      }
                    : null,
            };
        });
    } catch (error) {
        console.error("Error fetching projects from Contentful", error);
        return [];
    }
}
