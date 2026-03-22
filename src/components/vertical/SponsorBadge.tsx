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
      className={`flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 text-center transition hover:border-primary-300 hover:shadow-md ${
        size === "lg" ? "px-8 py-6 gap-3" : "px-5 py-3 gap-2"
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        Platinum Sponsor
      </p>
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={size === "lg" ? 180 : 100}
        height={size === "lg" ? 50 : 30}
        className="object-contain"
      />
      <p className={`font-semibold text-gray-900 ${size === "lg" ? "text-base" : "text-sm"}`}>
        {sponsor.name}
      </p>
    </a>
  );
}
