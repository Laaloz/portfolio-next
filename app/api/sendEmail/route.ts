import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* Spam protection without reCAPTCHA (no third parties, no cookies):
   1. honeypot field must stay empty
   2. the form must have been open for a few seconds
   3. per-IP rate limit (in-memory; per serverless instance, which is enough
      to blunt bursts on a personal site) */
const MIN_ELAPSED_MS = 3000;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent);
    if (hits.size > 5000) hits.clear();
    return recent.length > RATE_LIMIT;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
    let body: Record<string, unknown>;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const website = String(body.website ?? "");
    const elapsedMs = Number(body.elapsedMs ?? 0);

    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
        "unknown";

    // Bots get a generic rejection; no need to explain which check failed.
    if (website !== "" || !(elapsedMs >= MIN_ELAPSED_MS) || isRateLimited(ip)) {
        return NextResponse.json({ error: "Rejected" }, { status: 429 });
    }

    if (
        !name ||
        !email ||
        !message ||
        name.length > 200 ||
        email.length > 254 ||
        message.length > 5000 ||
        !EMAIL_RE.test(email)
    ) {
        return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    try {
        await transport.sendMail({
            from: process.env.MY_EMAIL,
            replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
            to: process.env.MY_EMAIL,
            subject: `Message from ${name} (${email})`,
            text: message,
        });
        return NextResponse.json({ message: "Email sent" });
    } catch (err) {
        console.error("sendEmail failed", err);
        return NextResponse.json({ error: "Send failed" }, { status: 500 });
    }
}
