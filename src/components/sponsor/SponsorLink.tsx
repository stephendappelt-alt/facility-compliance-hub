"use client";

import { Sponsor } from "@/types/sponsor";
import { SponsorPlacement, trackEvent, withUtm } from "@/lib/tracking";

interface SponsorLinkProps {
  sponsor: Sponsor;
  placement: SponsorPlacement;
  /** Page identifier for attribution, e.g. the article slug or "healthcare-hub" */
  pageId: string;
  vertical: string;
  kind?: "cta" | "phone";
  className?: string;
  children: React.ReactNode;
}

export default function SponsorLink({
  sponsor,
  placement,
  pageId,
  vertical,
  kind = "cta",
  className,
  children,
}: SponsorLinkProps) {
  const href =
    kind === "phone"
      ? `tel:${sponsor.phone}`
      : withUtm(sponsor.ctaUrl, {
          campaign: vertical,
          content: `${pageId}__${placement}`,
        });

  return (
    <a
      href={href}
      {...(kind === "cta"
        ? { target: "_blank", rel: "sponsored noopener" }
        : {})}
      className={className}
      onClick={() =>
        trackEvent(kind === "phone" ? "sponsor_call" : "sponsor_click", {
          sponsor: sponsor.id,
          placement,
          page: pageId,
          vertical,
        })
      }
    >
      {children}
    </a>
  );
}
