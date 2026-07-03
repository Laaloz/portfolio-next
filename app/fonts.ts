import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";

export const archivo = Archivo({
    subsets: ["latin"],
    axes: ["wdth"],
    variable: "--font-archivo",
    display: "swap",
});

export const instrumentSans = Instrument_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-sans",
    display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-mono",
    display: "swap",
});

export const fontClassNames = `${archivo.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`;
