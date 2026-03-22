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
