import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVerticalBySlug, getAllVerticals } from "@/config/verticals";
import { getSponsorByVertical } from "@/config/sponsors";
import { getArticlesByVertical } from "@/lib/articles";
import { siteConfig } from "@/config/site";
import VerticalHeader from "@/components/vertical/VerticalHeader";
import VerticalContent from "@/components/vertical/VerticalContent";
import Container from "@/components/ui/Container";

interface VerticalPageProps {
  params: { vertical: string };
}

export function generateStaticParams() {
  return getAllVerticals().map((v) => ({ vertical: v.slug }));
}

export function generateMetadata({ params }: VerticalPageProps): Metadata {
  const vertical = getVerticalBySlug(params.vertical);
  if (!vertical) return {};

  return {
    title: vertical.name,
    description: vertical.description,
    openGraph: {
      title: `${vertical.name} | ${siteConfig.name}`,
      description: vertical.description,
      url: `${siteConfig.url}/${vertical.slug}`,
    },
  };
}

export default function VerticalPage({ params }: VerticalPageProps) {
  const vertical = getVerticalBySlug(params.vertical);

  if (!vertical) {
    notFound();
  }

  const sponsor = getSponsorByVertical(params.vertical);
  const articles = getArticlesByVertical(params.vertical);

  if (!vertical.active) {
    return (
      <>
        <VerticalHeader vertical={vertical} articleCount={0} />
        <Container className="py-16">
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <svg
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            <p className="mt-3 text-gray-600">
              We are actively developing comprehensive compliance guides for{" "}
              {vertical.name.toLowerCase()}. Subscribe to our newsletter to be
              notified when this vertical launches.
            </p>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <VerticalHeader
        vertical={vertical}
        sponsor={sponsor}
        articleCount={articles.length}
      />
      <VerticalContent vertical={vertical} articles={articles} />
    </>
  );
}
