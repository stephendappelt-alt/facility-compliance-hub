import { ArticleCategory } from "./article";

export interface VerticalConfig {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  image: string;
  color: string;
  active: boolean;
  categories: ArticleCategory[];
}
