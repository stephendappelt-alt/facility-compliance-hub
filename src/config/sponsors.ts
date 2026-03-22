import { Sponsor } from "@/types/sponsor";

export const sponsors: Sponsor[] = [
  {
    id: "buffalo-power-solutions",
    name: "Buffalo Power Solutions",
    shortName: "BPS",
    logo: "/images/sponsors/buffalo-power-solutions.png",
    website: "https://www.buffalopowersolutions.com",
    tagline: "Full-Service Emergency Power Solutions",
    description:
      "Trusted provider of generator sales, service, maintenance, and compliance testing for commercial and industrial facilities across Texas.",
    ctaText: "Schedule a Free Compliance Assessment",
    ctaUrl: "https://www.buffalopowersolutions.com/contact",
    phone: "(512) 555-0100",
    verticals: ["generators"],
    tier: "platinum",
  },
];

export function getSponsorByVertical(vertical: string): Sponsor | undefined {
  return sponsors.find(
    (s) => s.verticals.includes(vertical) && s.tier === "platinum"
  );
}

export function getSponsorById(id: string): Sponsor | undefined {
  return sponsors.find((s) => s.id === id);
}
