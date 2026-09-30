import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { id: "", priority: 1.0 as const },
    { id: "#about", priority: 0.8 as const },
    { id: "#experience", priority: 0.8 as const },
    { id: "#skills", priority: 0.8 as const },
    { id: "#projects", priority: 0.9 as const },
    { id: "#engineering", priority: 0.7 as const },
    { id: "#contact", priority: 0.9 as const },
  ];

  const projectRoutes = projects.map((project) => ({
    id: `/projects/${project.slug}`,
    priority: 0.7 as const,
  }));

  return [
    ...routes.map(({ id, priority }) => ({
      url: `${siteConfig.siteUrl}${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...projectRoutes.map(({ id, priority }) => ({
      url: `${siteConfig.siteUrl}${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
    })),
  ];
}