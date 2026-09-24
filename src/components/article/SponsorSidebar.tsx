import Image from "next/image";
import { Sponsor } from "@/types/sponsor";
import SponsorLink from "@/components/sponsor/SponsorLink";

interface SponsorSidebarProps {
  sponsor: Sponsor;
  pageId: string;
  vertical: string;
}

export default function SponsorSidebar({
  sponsor,
  pageId,
  vertical,
}: SponsorSidebarProps) {
  const linkProps = { sponsor, pageId, vertical, placement: "sidebar" as const };

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        Platinum Sponsor
      </p>
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={160}
        height={40}
        className="mb-3 object-contain"
        loading="eager"
      />
      <h4 className="font-semibold text-gray-900">{sponsor.name}</h4>
      <p className="mt-1 text-xs text-gray-500">{sponsor.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {sponsor.description}
      </p>
      <SponsorLink
        {...linkProps}
        className="mt-4 block rounded-lg bg-primary-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-600"
      >
        {sponsor.ctaText}
      </SponsorLink>
      {sponsor.phone && (
        <p className="mt-3 text-center text-xs text-gray-500">
          or call{" "}
          <SponsorLink {...linkProps} kind="phone" className="text-primary-700">
            {sponsor.phone}
          </SponsorLink>
        </p>
      )}
    </div>
  );
}
