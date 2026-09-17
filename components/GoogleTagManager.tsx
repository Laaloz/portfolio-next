import Script from "next/script";
import { preconnect } from "react-dom";

const GTM_ID = "GTM-KHLLDG6N";

export function GtmScript() {
    /* GTM loads Cookiebot (uc.js -> settings.json -> cc.js) after hydration
       and the consent dialog ends up as the mobile LCP element. Warming these
       origins during HTML parse shortens that chain (Lighthouse estimates
       ~300 ms LCP savings per origin). */
    preconnect("https://www.googletagmanager.com");
    preconnect("https://consent.cookiebot.com");
    preconnect("https://consentcdn.cookiebot.com");
    return (
        <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
    );
}

export function GtmNoScript() {
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
    );
}
