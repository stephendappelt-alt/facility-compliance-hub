import Link from "next/link";
import { Article, categoryLabels } from "@/types/article";
import Badge from "@/components/ui/Badge";
import { getVerticalBySlug } from "@/config/verticals";

interface FeaturedArticlesProps {
  articles: Article[];
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container-main">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Latest Compliance Guides
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert resources to help you stay compliant and audit-ready.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const vertical = getVerticalBySlug(article.vertical);
            return (
              <Link
                key={article.slug}
                href={article.url}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge color={vertical?.color}>
                    {vertical?.shortName || article.vertical}
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-600">
                    {categoryLabels[article.category]}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700">
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

        <div className="mt-10 text-center">
          <Link
            href="/generators"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition"
          >
            Browse All Compliance Guides
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
