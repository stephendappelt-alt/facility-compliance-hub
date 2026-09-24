import { renderOgImage, ogSize } from "@/lib/ogImage";
import { getArticleBySlug, generateArticleStaticParams } from "@/lib/articles";
import { getVerticalBySlug } from "@/config/verticals";
import { categoryLabels } from "@/types/article";

export const alt = "Facility Compliance Hub guide";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return generateArticleStaticParams();
}

export default function Image({
  params,
}: {
  params: { vertical: string; slug: string };
}) {
  const article = getArticleBySlug(params.vertical, params.slug);
  const vertical = getVerticalBySlug(params.vertical);
  return renderOgImage({
    eyebrow: [vertical?.name, article && categoryLabels[article.category]]
      .filter(Boolean)
      .join("  ·  "),
    title: article?.title || "Facility Compliance Hub",
    accent: vertical?.color,
  });
}
