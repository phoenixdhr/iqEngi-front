import { siteInfo } from "./site-info";

export const siteSchema = {
    context: siteInfo.dominio,
    siteName: siteInfo.titleWeb,
    siteUrl: siteInfo.dominio,
    organization: {
      "@type": "Organization",
      "name": siteInfo.titleWeb,
      "url": siteInfo.dominio,
      "logo": `${siteInfo}/assets/logo.png`
    },
    currency: "USD",
  };
  