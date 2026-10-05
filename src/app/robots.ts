import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

  const privatePaths = ["/api/"];

  // Netlify sets URL at build time. On the *.netlify.app staging site, block all crawling.
  // When the custom domain (hulmsolutions.com) is attached, URL changes and the normal rules apply.
  const deployUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || "";
  if (/\.netlify\.app/i.test(deployUrl) || process.env.SITE_NOINDEX === "1") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

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
