import { productionParityPaths } from "@/lib/production-parity";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

function escapeXml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function legacyUrlSet(kind: "post" | "page") {
  const routes = productionParityPaths.filter((route) => kind === "post" ? route.startsWith("/blog/") : !route.startsWith("/blog/"));
  const urls = routes.map((route) => `  <url><loc>${escapeXml(`${siteUrl}${route}`)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function legacySitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${escapeXml(`${siteUrl}/post-sitemap.xml`)}</loc></sitemap>\n  <sitemap><loc>${escapeXml(`${siteUrl}/page-sitemap.xml`)}</loc></sitemap>\n</sitemapindex>\n`;
}

export function xmlResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
