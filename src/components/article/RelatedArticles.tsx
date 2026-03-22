import Link from "next/link";
import { Article, categoryLabels } from "@/types/article";

interface RelatedArticlesProps {
  articles: Article[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 border-t border-gray-200 pt-8">
      <h3 className="mb-6 text-xl font-bold text-gray-900">Related Articles</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.url}
            className="group rounded-lg border border-gray-200 p-4 transition hover:shadow-md"
          >
            <span className="text-xs font-medium text-gray-500">
              {categoryLabels[article.category]}
            </span>
            <h4 className="mt-1 font-semibold leading-snug text-gray-900 group-hover:text-primary-700">
              {article.title}
            </h4>
            <p className="mt-1 text-xs text-gray-500">
              {article.readingTime} min read
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
