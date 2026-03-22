export interface Sponsor {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  website: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  phone?: string;
  verticals: string[];
  tier: "platinum" | "gold";
}
