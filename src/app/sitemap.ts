import type { MetadataRoute } from "next";
import { EDITORIAL_AUTHOR } from "../../content/blog/posts";
import { allBlogsData } from "@/content/pages/allBlogsData";
import { caseStudiesData } from "@/content/pages/caseStudiesData";
import { industriesData } from "@/content/pages/industriesData";
import { priorityIndustriesData } from "@/content/pages/priorityIndustriesData";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");

const staticRoutes = [
  "",
  "/apps",
  "/industries",
  "/pricing",
  "/features",
  "/inventory-management",
  "/order-management",
  "/purchase-orders",
  "/vendors-management",
  "/customer-management",
  "/reporting-module",
  "/mobile-pos",
  "/logistics-management-software",
  "/cattle-management-software",
  "/website",
  "/integration",
  "/fbr-integrated-pos-pakistan",
  "/zatca",
  "/pos-software-ksa",
  "/pos-software-qatar",
  "/pos-software-uae",
  "/pos-software-usa",
  "/case-studies",
  "/insights",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/apps" || route === "/industries" || route === "/pricing" ? 0.9 : 0.7,
  }));

  const authorRoute = {
    url: `${siteUrl}/author/${EDITORIAL_AUTHOR.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  };

  const industrySlugs = Array.from(
    new Set([...Object.keys(industriesData), ...Object.keys(priorityIndustriesData)])
  );
  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${siteUrl}/industries/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudiesData.map((study) => ({
    url: `${siteUrl}/case-studies/${study.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightRoutes = Object.values(allBlogsData).map((post) => ({
    url: `${siteUrl}/insights/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...industryRoutes, ...caseStudyRoutes, ...insightRoutes, authorRoute];
}
