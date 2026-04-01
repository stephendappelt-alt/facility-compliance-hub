import { Sponsor } from "@/types/sponsor";

export const sponsors: Sponsor[] = [
  {
    id: "hvac-sponsor-placeholder",
    name: "Your Company Here",
    shortName: "Sponsor",
    logo: "/images/sponsors/placeholder.png",
    website: "#",
    tagline: "Platinum Sponsor Opportunity",
    description:
      "This space is available for a Platinum Sponsor in the Commercial HVAC vertical. Contact us to learn about sponsorship opportunities.",
    ctaText: "Become a Sponsor",
    ctaUrl: "mailto:hello@facilitycompliancehub.org",
    verticals: ["hvac"],
    tier: "platinum",
  },
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
