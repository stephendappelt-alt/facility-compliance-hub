export type ArticleCategory =
  | "compliance-guides"
  | "maintenance-schedules"
  | "checklists"
  | "code-updates"
  | "buyer-guides"
  | "faq";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  /** <title> tag (max 60 chars, no site name). Falls back to title. */
  seoTitle?: string;
  /** Meta description (max 160 chars). Falls back to description. */
  seoDescription?: string;
  vertical: string;
  category: ArticleCategory;
  date: string;
  lastUpdated?: string;
  author: string;
  authorTitle?: string;
  keywords: string[];
  featuredImage?: string;
  featured?: boolean;
  draft?: boolean;
  readingTime?: number;
  relatedSlugs?: string[];
  /** Topic hubs this article belongs to, e.g. ["healthcare"] */
  topics?: string[];
  /** Headline for the in-article sponsor CTA (shown before the 2nd H2) */
  ctaHeadline?: string;
  ctaBody?: string;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
  url: string;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  "compliance-guides": "Compliance Guides",
  "maintenance-schedules": "Maintenance Schedules",
  "checklists": "Checklists & Templates",
  "code-updates": "Code Updates & News",
  "buyer-guides": "Buyer Guides",
  "faq": "FAQ & Troubleshooting",
};
