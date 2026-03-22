import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllVerticals } from "@/config/verticals";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const verticals = getAllVerticals();

  const staticPages = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1.0 },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];

  const verticalPages = verticals.map((v) => ({
    url: `${siteConfig.url}/${v.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }));

  const articlePages = articles.map((a) => ({
    url: `${siteConfig.url}${a.url}`,
    lastModified: new Date(a.lastUpdated || a.date),
    priority: 0.8,
  }));

  return [...staticPages, ...verticalPages, ...articlePages];
}
