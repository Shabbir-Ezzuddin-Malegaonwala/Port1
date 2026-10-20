import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/work";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${profile.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const studyRoutes = caseStudies.map((c) => ({
    url: `${profile.siteUrl}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...studyRoutes];
}
