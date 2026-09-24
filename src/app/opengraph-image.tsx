import { renderOgImage, ogSize } from "@/lib/ogImage";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Free, vendor-neutral compliance guides",
    title: "Your Trusted Resource for Commercial Facility Compliance",
  });
}
