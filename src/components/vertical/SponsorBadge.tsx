import Image from "next/image";
import { Sponsor } from "@/types/sponsor";
import { withUtm } from "@/lib/tracking";
import { isPlaceholderSponsor } from "@/config/sponsors";
import SponsorLink from "@/components/sponsor/SponsorLink";

interface SponsorBadgeProps {
  sponsor: Sponsor;
  size?: "sm" | "lg";
}

export default function SponsorBadge({ sponsor, size = "sm" }: SponsorBadgeProps) {
  const vertical = sponsor.verticals[0];

  return (
    <div
      className={`flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 text-center transition hover:border-primary-300 hover:shadow-md ${
        size === "lg" ? "px-8 py-6 gap-3" : "px-5 py-3 gap-2"
      }`}
    >
      <a
        href={
          // Open slots link to the sponsorship inquiry email instead of "#"
          isPlaceholderSponsor(sponsor)
            ? sponsor.ctaUrl
            : withUtm(sponsor.website, {
                campaign: vertical,
                content: "vertical-header__badge",
              })
        }
        target="_blank"
        rel="sponsored noopener"
        className="flex flex-col items-center gap-3"
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
      {sponsor.phone && (
        <SponsorLink
          sponsor={sponsor}
          placement="vertical-header"
          pageId={`${vertical}-vertical`}
          vertical={vertical}
          kind="phone"
          className="text-sm font-medium text-primary-700 hover:underline"
        >
          {sponsor.phone}
        </SponsorLink>
      )}
    </div>
  );
}
