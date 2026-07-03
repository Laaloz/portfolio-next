import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Contentful webhook target: revalidates project-listing pages when an
 * entry is published or unpublished. Authenticated with a shared secret
 * (REVALIDATE_SECRET env var, sent as the x-revalidate-secret header).
 */
export async function POST(request: NextRequest) {
    const secret = request.headers.get("x-revalidate-secret");
    if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    const paths = ["/", "/projects", "/en", "/en/projects"];
    for (const path of paths) {
        revalidatePath(path);
    }
    return NextResponse.json({ revalidated: true, paths });
}
