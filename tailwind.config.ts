import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                base: "var(--base)",
                neonGreen: "var(--neon-green)",
                neonViolet: "var(--neon-violet)",
                metalGray: "var(--metal-gray)",
                metalGrayLight: "var(--light-metal-gray)",
            },
            fontFamily: {
                roboto: ['"Roboto"', "sans-serif"],
                orbitron: ['"Orbitron"', "sans-serif"],
            },
            screens: {
                "1xl": "1530px",
            },
        },
    },
    plugins: [],
};
export default config;
