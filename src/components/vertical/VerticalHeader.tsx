import { VerticalConfig } from "@/types/vertical";
import { Sponsor } from "@/types/sponsor";
import SponsorBadge from "./SponsorBadge";

interface VerticalHeaderProps {
  vertical: VerticalConfig;
  sponsor?: Sponsor;
  articleCount: number;
}

export default function VerticalHeader({
  vertical,
  sponsor,
  articleCount,
}: VerticalHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white pb-8 pt-8">
      <div className="container-main">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{
                backgroundColor: `${vertical.color}15`,
                color: vertical.color,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: vertical.color }}
              />
              {articleCount} {articleCount === 1 ? "Guide" : "Guides"} Available
            </div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {vertical.name}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-gray-600">
              {vertical.description}
            </p>
          </div>
          {sponsor && (
            <div className="flex-shrink-0 sm:self-center">
              <SponsorBadge sponsor={sponsor} size="lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
