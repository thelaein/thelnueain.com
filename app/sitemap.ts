import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/work",
    "/about",
    "/process",
    "/playground",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const caseRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${base}/case/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
