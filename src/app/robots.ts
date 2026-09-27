import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/wp-admin/admin-ajax.php"],
        disallow: ["/wp-admin/", "/wp-includes/", "/wp-content/uploads/wpo/wpo-plugins-tables-list.json", "/api/", "/_next/"],
      },
      { userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "PerplexityBot", "ClaudeBot", "Claude-Web", "Applebot-Extended"], allow: "/" },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: [`${siteUrl}/sitemap_index.xml`, `${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}
