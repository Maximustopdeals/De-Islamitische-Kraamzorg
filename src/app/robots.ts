import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.url.replace(/\/$/, ""); // Verwijder trailing slash

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // API routes (indien aanwezig)
          "/_next/",         // Next.js interne bestanden
          "/over-mij/",      // Oude redirect-pagina
          "/utrecht-2/",     // Oude redirect-pagina
          "/*.json$",        // JSON-bestanden
        ],
      },
      // AI-crawlers (optioneel)
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
