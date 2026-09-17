const isDev = process.env.NODE_ENV === "development";

/* CSP: 'unsafe-inline' for scripts is required by Next's inline bootstrap
   without nonce-based rendering (which would force every page dynamic).
   reCAPTCHA needs google.com/gstatic.com script + frame access.
   Vercel Web Analytics is same-origin (/_vercel/insights/*) in production;
   in development it loads a debug script from va.vercel-scripts.com. */
const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""} https://www.google.com https://www.gstatic.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.ctfassets.net",
    "font-src 'self'",
    "connect-src 'self' https://www.google.com",
    "frame-src https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
    { key: "Content-Security-Policy", value: csp },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), payment=()",
    },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        /* Inline the single ~6 KiB (gzipped) stylesheet into the HTML. The
           separate CSS request used to race the async script chunks: when
           the scripts arrived first they executed (hydration) before the
           first frame, delaying first paint by ~0.3-1 s. */
        inlineCss: true,
    },
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { protocol: "https", hostname: "images.ctfassets.net" },
        ],
    },
    async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
    },
};

export default nextConfig;
