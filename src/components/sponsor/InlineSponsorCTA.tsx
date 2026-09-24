import Image from "next/image";
import { Sponsor } from "@/types/sponsor";
import { SponsorPlacement } from "@/lib/tracking";
import SponsorLink from "./SponsorLink";

interface InlineSponsorCTAProps {
  sponsor: Sponsor;
  headline: string;
  body?: string;
  pageId: string;
  vertical: string;
  placement?: SponsorPlacement;
  showLogo?: boolean;
}

export default function InlineSponsorCTA({
  sponsor,
  headline,
  body,
  pageId,
  vertical,
  placement = "inline",
  showLogo = false,
}: InlineSponsorCTAProps) {
  return (
    <aside
      aria-label="Sponsor"
      className="not-prose my-8 rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-6"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-700">
        {showLogo ? "Platinum Sponsor" : <>From our Platinum Sponsor &middot; {sponsor.name}</>}
      </p>
      {showLogo && (
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={44}
          className="mt-3 h-auto w-48 object-contain"
        />
      )}
      <p className="mt-2 text-lg font-bold leading-snug text-gray-900">
        {headline}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-gray-700">
        {body || sponsor.description}
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <SponsorLink
          sponsor={sponsor}
          placement={placement}
          pageId={pageId}
          vertical={vertical}
          className="inline-block rounded-lg bg-teal-700 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-teal-600"
        >
          {sponsor.ctaText}
        </SponsorLink>
        {sponsor.phone && (
          <SponsorLink
            sponsor={sponsor}
            placement={placement}
            pageId={pageId}
            vertical={vertical}
            kind="phone"
            className="whitespace-nowrap text-sm font-medium text-teal-800 hover:underline"
          >
            or call {sponsor.phone}
          </SponsorLink>
        )}
      </div>
    </aside>
  );
}
