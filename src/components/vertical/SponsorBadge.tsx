import Image from "next/image";
import { Sponsor } from "@/types/sponsor";

interface SponsorBadgeProps {
  sponsor: Sponsor;
  size?: "sm" | "lg";
}

export default function SponsorBadge({ sponsor, size = "sm" }: SponsorBadgeProps) {
  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 transition hover:border-primary-300 hover:shadow-md ${
        size === "lg" ? "px-6 py-4" : "px-5 py-3"
      }`}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={size === "lg" ? 80 : 60}
        height={size === "lg" ? 40 : 30}
        className="object-contain"
      />
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Platinum Sponsor
        </p>
        <p className={`font-semibold text-gray-900 ${size === "lg" ? "text-base" : "text-sm"}`}>
          {sponsor.name}
        </p>
      </div>
    </a>
  );
}
