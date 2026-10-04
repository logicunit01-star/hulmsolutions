import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

  const privatePaths = ["/api/"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      // AI search, assistant and training crawlers: welcome (GEO). Same private paths stay blocked.
      {
        userAgent: [
          "GPTBot", "OAI-SearchBot", "ChatGPT-User",
          "ClaudeBot", "Claude-User", "Claude-SearchBot", "Claude-Web", "anthropic-ai",
          "PerplexityBot", "Perplexity-User",
          "Google-Extended",
          "Applebot", "Applebot-Extended",
          "CCBot", "Meta-ExternalAgent", "Amazonbot", "DuckAssistBot", "MistralAI-User",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt"],
        disallow: privatePaths,
      },
      { userAgent: "Bytespider", disallow: "/" },
    ],
    sitemap: [`${siteUrl}/sitemap_index.xml`, `${siteUrl}/sitemap.xml`],
    host: siteUrl,
  };
}
