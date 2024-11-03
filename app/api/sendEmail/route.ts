import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const { email, name, message, recaptchaToken } = await request.json();

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        { method: "POST" }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
            { error: "reCAPTCHA verification failed" },
            { status: 400 }
        );
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${email}">`,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    try {
        await transport.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent" });
    } catch (err) {
        let errorMessage = "An unexpected error occurred";
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
