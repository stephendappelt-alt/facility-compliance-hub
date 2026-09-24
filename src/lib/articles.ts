import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Article, ArticleFrontmatter } from "@/types/article";

const contentDirectory = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  if (!fs.existsSync(contentDirectory)) return articles;

  const verticalDirs = fs.readdirSync(contentDirectory);

  for (const vertical of verticalDirs) {
    const verticalPath = path.join(contentDirectory, vertical);
    if (!fs.statSync(verticalPath).isDirectory()) continue;

    const files = fs.readdirSync(verticalPath).filter((f) => f.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(verticalPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as ArticleFrontmatter;

      if (frontmatter.draft && process.env.NODE_ENV === "production") continue;

      const slug = file.replace(/\.mdx$/, "");
      const stats = readingTime(content);

      articles.push({
        ...frontmatter,
        slug,
        content,
        url: `/${vertical}/${slug}`,
        readingTime: frontmatter.readingTime || Math.ceil(stats.minutes),
      });
    }
  }

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticlesByVertical(vertical: string): Article[] {
  return getAllArticles().filter((a) => a.vertical === vertical);
}

export function getArticlesByCategory(
  vertical: string,
  category: string
): Article[] {
  return getAllArticles().filter(
    (a) => a.vertical === vertical && a.category === category
  );
}

export function getArticleBySlug(
  vertical: string,
  slug: string
): Article | undefined {
  return getAllArticles().find(
    (a) => a.vertical === vertical && a.slug === slug
  );
}

export function getFeaturedArticles(limit: number = 6): Article[] {
  const all = getAllArticles();
  const featured = all.filter((a) => a.featured);
  return featured.length > 0 ? featured.slice(0, limit) : all.slice(0, limit);
}

export function getRelatedArticles(
  article: Article,
  limit: number = 3
): Article[] {
  const all = getAllArticles().filter((a) => a.slug !== article.slug);

  const pinned = (article.relatedSlugs || [])
    .map((slug) => all.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];

  // Fill remaining slots with the closest matches by shared keywords,
  // shared topics and vertical, instead of simply the newest articles.
  const words = (a: Article) =>
    new Set(
      a.keywords
        .join(" ")
        .toLowerCase()
        .split(/[^a-z0-9.]+/)
        .filter((w) => w.length > 2)
    );
  const mine = words(article);
  const score = (a: Article) => {
    let s = a.vertical === article.vertical ? 3 : 0;
    words(a).forEach((w) => mine.has(w) && s++);
    (a.topics || []).forEach((t) => article.topics?.includes(t) && (s += 4));
    return s;
  };
  const rest = all
    .filter((a) => !pinned.includes(a))
    .map((a) => ({ a, s: score(a) }))
    .sort((x, y) => y.s - x.s)
    .map((x) => x.a);

  return [...pinned, ...rest].slice(0, limit);
}

export function getArticlesByTopic(topic: string): Article[] {
  return getAllArticles().filter((a) => a.topics?.includes(topic));
}

/**
 * Inserts an MDX tag before the article's second H2 so an inline
 * component lands after the intro section rather than at the very top.
 */
export function injectBeforeSecondH2(content: string, tag: string): string {
  const matches = Array.from(content.matchAll(/^## /gm));
  if (matches.length < 2) return `${content}\n\n${tag}\n`;
  const at = matches[1].index!;
  return `${content.slice(0, at)}${tag}\n\n${content.slice(at)}`;
}

export function generateArticleStaticParams(): {
  vertical: string;
  slug: string;
}[] {
  return getAllArticles().map((a) => ({
    vertical: a.vertical,
    slug: a.slug,
  }));
}
