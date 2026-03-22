import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ArticleGrid from "@/components/vertical/ArticleGrid";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Search",
  description: "Search compliance guides, maintenance schedules, and checklists.",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.toLowerCase() || "";
  const allArticles = getAllArticles();

  const results = query
    ? allArticles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query) ||
          a.keywords.some((k) => k.toLowerCase().includes(query))
      )
    : [];

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold text-gray-900">Search</h1>

      <form className="mt-6" action="/search" method="GET">
        <div className="flex gap-3">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.q || ""}
            placeholder="Search compliance guides, checklists, standards..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white hover:bg-primary-600"
          >
            Search
          </button>
        </div>
      </form>

      {query && (
        <div className="mt-8">
          <p className="mb-6 text-sm text-gray-500">
            {results.length} {results.length === 1 ? "result" : "results"} for
            &ldquo;{searchParams.q}&rdquo;
          </p>
          <ArticleGrid articles={results} showVertical />
        </div>
      )}

      {!query && (
        <p className="mt-8 text-gray-500">
          Enter a search term to find compliance guides, checklists, and
          maintenance schedules.
        </p>
      )}
    </Container>
  );
}
