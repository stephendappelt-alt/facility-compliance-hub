import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllVerticals } from "@/config/verticals";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const verticals = getAllVerticals();

  // Use real content dates so lastmod only changes when content does
  const modified = (list: typeof articles) =>
    new Date(
      Math.max(...list.map((a) => new Date(a.lastUpdated || a.date).getTime()))
    );
  const healthcare = articles.filter((a) => a.topics?.includes("healthcare"));

  const staticPages = [
    { url: siteConfig.url, lastModified: modified(articles), priority: 1.0 },
    { url: `${siteConfig.url}/about`, priority: 0.5 },
  ];

  // Only list verticals that have published articles (skip "coming soon" pages)
  const verticalPages = verticals
    .filter((v) => articles.some((a) => a.vertical === v.slug))
    .map((v) => ({
    url: `${siteConfig.url}/${v.slug}`,
    lastModified: modified(articles.filter((a) => a.vertical === v.slug)),
    priority: 0.9,
  }));

  const hubPages = [
    {
      url: `${siteConfig.url}/healthcare`,
      lastModified: modified(healthcare),
      priority: 0.9,
    },
  ];

  const articlePages = articles.map((a) => ({
    url: `${siteConfig.url}${a.url}`,
    lastModified: new Date(a.lastUpdated || a.date),
    priority: 0.8,
  }));

  return [...staticPages, ...hubPages, ...verticalPages, ...articlePages];
}
