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

  if (article.relatedSlugs?.length) {
    const related = article.relatedSlugs
      .map((slug) => all.find((a) => a.slug === slug))
      .filter(Boolean) as Article[];
    if (related.length >= limit) return related.slice(0, limit);
  }

  return all
    .filter((a) => a.vertical === article.vertical)
    .slice(0, limit);
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
