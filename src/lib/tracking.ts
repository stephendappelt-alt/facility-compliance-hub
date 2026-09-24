// ============================================================
// Outbound sponsor link tracking
// ============================================================
// UTM tags let the sponsor's own analytics attribute visits to FCH.
// The GA4 event gives FCH its own click count (free, unlike Vercel
// custom events). Both work independently.
// ============================================================

export type SponsorPlacement = "inline" | "sidebar" | "footer-strip" | "hub";

export function withUtm(
  url: string,
  { campaign, content }: { campaign: string; content: string }
): string {
  if (!url.startsWith("http")) return url; // mailto:, tel:, "#"
  const u = new URL(url);
  u.searchParams.set("utm_source", "facilitycompliancehub");
  u.searchParams.set("utm_medium", "referral");
  u.searchParams.set("utm_campaign", campaign);
  u.searchParams.set("utm_content", content);
  return u.toString();
}

type Gtag = (command: "event", name: string, params: Record<string, string>) => void;

export function trackEvent(name: string, params: Record<string, string>) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
