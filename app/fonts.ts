import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

/* Archivo is only ever used at weight 800 with font-stretch 115-118%, so
   instead of Google's full variable file (wght 100-900 x wdth 62-125,
   ~90 KB) we self-host an instance pinned to wght 800 with the wdth axis
   kept at 100-125 (~26 KB, made with fontTools.varLib.instancer from the
   same Google Fonts latin subset). Licence: app/fonts/Archivo-OFL.txt. */
export const archivo = localFont({
    src: "./fonts/archivo-800.woff2",
    weight: "800",
    style: "normal",
    declarations: [{ prop: "font-stretch", value: "100% 125%" }],
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
