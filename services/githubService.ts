import type { Locale } from "@/content/copy";

const USER = "Laaloz";

export type GithubActivity = {
    text: string;
    timeAgo: string;
    repoUrl: string;
};

function relativeTime(iso: string, locale: Locale): string {
    const days = Math.floor(
        (Date.now() - new Date(iso).getTime()) / 86_400_000
    );
    if (locale === "en") {
        if (days <= 0) return "today";
        if (days === 1) return "yesterday";
        if (days < 7) return `${days} days ago`;
        if (days < 30) return `${Math.floor(days / 7)} wk ago`;
        return `${Math.floor(days / 30)} mo ago`;
    }
    if (days <= 0) return "tänään";
    if (days === 1) return "eilen";
    if (days < 7) return `${days} pv sitten`;
    if (days < 30) return `${Math.floor(days / 7)} vk sitten`;
    return `${Math.floor(days / 30)} kk sitten`;
}

const VERBS: Record<Locale, Record<string, (repo: string) => string>> = {
    fi: {
        PushEvent: (r) => `pushasi repoon ${r}`,
        PullRequestEvent: (r) => `työsti pull requestia repossa ${r}`,
        CreateEvent: (r) => `loi repon ${r}`,
        ReleaseEvent: (r) => `julkaisi version reposta ${r}`,
    },
    en: {
        PushEvent: (r) => `pushed to ${r}`,
        PullRequestEvent: (r) => `worked on a pull request in ${r}`,
        CreateEvent: (r) => `created ${r}`,
        ReleaseEvent: (r) => `released a version of ${r}`,
    },
};

type GithubEvent = {
    type: string;
    created_at: string;
    repo: { name: string };
};

/**
 * Latest public GitHub activity for the intro card. Returns null on any
 * failure so the card degrades to just the intro paragraph.
 */
export async function fetchLatestGithubActivity(
    locale: Locale
): Promise<GithubActivity | null> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${USER}/events/public?per_page=30`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    "User-Agent": "laalo.dev-portfolio",
                },
                next: { revalidate: 3600 },
            }
        );
        if (!res.ok) return null;

        const events = (await res.json()) as GithubEvent[];
        const event = events.find((e) => e.type in VERBS.fi);
        if (!event) return null;

        const repo = event.repo.name.replace(new RegExp(`^${USER}/`), "");
        return {
            text: VERBS[locale][event.type](repo),
            timeAgo: relativeTime(event.created_at, locale),
            repoUrl: `https://github.com/${event.repo.name}`,
        };
    } catch {
        return null;
    }
}
