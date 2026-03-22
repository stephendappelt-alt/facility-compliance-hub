import Link from "next/link";
import { Article, categoryLabels } from "@/types/article";
import { getVerticalBySlug } from "@/config/verticals";
import Badge from "@/components/ui/Badge";

interface ArticleGridProps {
  articles: Article[];
  showVertical?: boolean;
}

export default function ArticleGrid({
  articles,
  showVertical = false,
}: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-500">No articles available yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => {
        const vertical = getVerticalBySlug(article.vertical);
        return (
          <Link
            key={article.slug}
            href={article.url}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-300 hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {showVertical && vertical && (
                <Badge color={vertical.color}>{vertical.shortName}</Badge>
              )}
              <Badge className="bg-gray-100 text-gray-600">
                {categoryLabels[article.category]}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-primary-700">
              {article.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
              {article.description}
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
              <span>{article.readingTime} min read</span>
              <span>&middot;</span>
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
