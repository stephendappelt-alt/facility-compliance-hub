import Image from "next/image";
import { Sponsor } from "@/types/sponsor";

interface SponsorBadgeProps {
  sponsor: Sponsor;
  size?: "sm" | "lg";
}

export default function SponsorBadge({ sponsor, size = "sm" }: SponsorBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 ${
        size === "lg" ? "px-5 py-3" : "px-4 py-2"
      }`}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={size === "lg" ? 40 : 32}
        height={size === "lg" ? 40 : 32}
        className="rounded object-contain"
      />
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Platinum Sponsor
        </p>
        <p className={`font-medium text-gray-900 ${size === "lg" ? "text-sm" : "text-xs"}`}>
          {sponsor.name}
        </p>
      </div>
    </div>
  );
}
