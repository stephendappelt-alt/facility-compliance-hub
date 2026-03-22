import { VerticalConfig } from "@/types/vertical";

export const verticals: VerticalConfig[] = [
  {
    slug: "generators",
    name: "Emergency Generators",
    shortName: "Generators",
    description:
      "NFPA 110 compliance guides, maintenance schedules, load bank testing requirements, and EPA emissions standards for commercial emergency power systems.",
    icon: "Zap",
    image: "/images/verticals/generators.jpg",
    color: "#0F766E",
    active: true,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
  {
    slug: "hvac",
    name: "Commercial HVAC",
    shortName: "HVAC",
    description:
      "Preventive maintenance schedules, refrigerant regulations, energy efficiency codes, and indoor air quality standards for commercial HVAC systems.",
    icon: "Wind",
    image: "/images/verticals/hvac.jpg",
    color: "#1D4ED8",
    active: false,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
  {
    slug: "fire-protection",
    name: "Fire Protection",
    shortName: "Fire Protection",
    description:
      "NFPA 25 inspection and testing requirements, sprinkler system maintenance, fire alarm compliance, and extinguisher servicing schedules.",
    icon: "Flame",
    image: "/images/verticals/fire-protection.jpg",
    color: "#DC2626",
    active: false,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
  {
    slug: "roofing",
    name: "Commercial Roofing",
    shortName: "Roofing",
    description:
      "Inspection schedules, warranty compliance requirements, storm damage protocols, and coating and membrane maintenance standards.",
    icon: "Home",
    image: "/images/verticals/roofing.jpg",
    color: "#9333EA",
    active: false,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
  {
    slug: "plumbing",
    name: "Commercial Plumbing",
    shortName: "Plumbing",
    description:
      "Backflow prevention testing, water heater codes, grease trap maintenance, and ADA compliance requirements for commercial plumbing systems.",
    icon: "Droplets",
    image: "/images/verticals/plumbing.jpg",
    color: "#0284C7",
    active: false,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
  {
    slug: "electrical",
    name: "Electrical Systems",
    shortName: "Electrical",
    description:
      "Arc flash compliance, NFPA 70E workplace safety, electrical panel maintenance, transformer testing, and commercial electrical inspection requirements.",
    icon: "Bolt",
    image: "/images/verticals/electrical.jpg",
    color: "#D97706",
    active: false,
    categories: [
      "compliance-guides",
      "maintenance-schedules",
      "checklists",
      "code-updates",
      "buyer-guides",
      "faq",
    ],
  },
];

export function getVerticalBySlug(slug: string): VerticalConfig | undefined {
  return verticals.find((v) => v.slug === slug);
}

export function getActiveVerticals(): VerticalConfig[] {
  return verticals.filter((v) => v.active);
}

export function getAllVerticals(): VerticalConfig[] {
  return verticals;
}
