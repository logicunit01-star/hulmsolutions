import type { MetadataRoute } from "next";

import { productionParityPaths } from "@/lib/production-parity";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const productionRoutes = productionParityPaths.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : route === "/industries/" || route === "/pricing/" ? 0.9 : 0.7,
  }));

  return [
    ...productionRoutes,
    {
      url: `${siteUrl}/apps/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];
}
