import { Sponsor } from "@/types/sponsor";

export const sponsors: Sponsor[] = [
  {
    id: "buffalo-power-solutions",
    name: "Buffalo Power Solutions",
    shortName: "BPS",
    logo: "/images/sponsors/buffalo-power-solutions.png",
    website: "https://www.buffalopowersolutions.com",
    tagline: "Locally Owned. Professionally Managed. Always Ready.",
    description:
      "Turnkey generator installations, maintenance contracts, and 24/7 emergency response for commercial and residential power systems across Texas and the Southeast.",
    ctaText: "Schedule a Free Compliance Assessment",
    ctaUrl: "https://www.buffalopowersolutions.com/contact",
    phone: "(979) 985-2695",
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
