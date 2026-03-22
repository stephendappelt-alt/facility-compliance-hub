import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
  generateArticleStaticParams,
} from "@/lib/articles";
import { getVerticalBySlug } from "@/config/verticals";
import { getSponsorByVertical } from "@/config/sponsors";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TableOfContents from "@/components/article/TableOfContents";
import SponsorSidebar from "@/components/article/SponsorSidebar";
import RelatedArticles from "@/components/article/RelatedArticles";
import MDXContent from "@/components/mdx/MDXContent";
import Badge from "@/components/ui/Badge";
import { categoryLabels } from "@/types/article";
import { siteConfig } from "@/config/site";

interface ArticlePageProps {
  params: { vertical: string; slug: string };
}

export async function generateStaticParams() {
  return generateArticleStaticParams();
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.vertical, params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.lastUpdated || article.date,
      authors: [article.author],
      url: `${siteConfig.url}${article.url}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.vertical, params.slug);
  if (!article) notFound();

  const vertical = getVerticalBySlug(params.vertical);
  const sponsor = getSponsorByVertical(params.vertical);
  const related = getRelatedArticles(article, 3);

  return (
    <>
      <Container className="py-8">
        <Breadcrumbs
          items={[
            { label: vertical?.name || params.vertical, href: `/${params.vertical}` },
            { label: article.title },
          ]}
        />

        <div className="lg:flex lg:gap-10">
          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Article Header */}
            <div className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge color={vertical?.color}>
                  {vertical?.shortName || params.vertical}
                </Badge>
                <Badge className="bg-gray-100 text-gray-600">
                  {categoryLabels[article.category]}
                </Badge>
              </div>
              <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                {article.title}
              </h1>
              <p className="mt-4 text-lg text-gray-600">{article.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>By {article.author}</span>
                <span>&middot;</span>
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>&middot;</span>
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Article Body */}
            <MDXContent source={article.content} />

            {/* Sponsor Strip */}
            {sponsor && (
              <div className="mt-8 flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={32}
                  className="object-contain"
                />
                <div className="flex-1">
                  <p className="text-xs text-gray-500">
                    This guide is brought to you by our Platinum Sponsor
                  </p>
                  <p className="font-medium text-gray-900">{sponsor.name}</p>
                </div>
                <a
                  href={sponsor.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
                >
                  {sponsor.ctaText}
                </a>
              </div>
            )}

            <RelatedArticles articles={related} />
          </div>

          {/* Sidebar */}
          <div className="hidden w-72 flex-shrink-0 lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents />
              {sponsor && <SponsorSidebar sponsor={sponsor} />}
            </div>
          </div>
        </div>
      </Container>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.lastUpdated || article.date,
            author: { "@type": "Person", name: article.author },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            mainEntityOfPage: `${siteConfig.url}${article.url}`,
          }),
        }}
      />
    </>
  );
}
