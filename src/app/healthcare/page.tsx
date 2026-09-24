import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleGrid from "@/components/vertical/ArticleGrid";
import InlineSponsorCTA from "@/components/sponsor/InlineSponsorCTA";
import { getArticlesByTopic } from "@/lib/articles";
import { getSponsorByVertical, isPlaceholderSponsor } from "@/config/sponsors";

const title = "Healthcare Facility Compliance: Emergency Power, Life Safety & Survey Readiness";
const description =
  "Joint Commission, CMS, NFPA 99 and NFPA 110 requirements for hospitals, nursing homes, and assisted living facilities, organized in one place for facility directors preparing for survey.";

const metaDescription =
  "Joint Commission, CMS, NFPA 99 and NFPA 110 emergency power requirements for hospitals, nursing homes, and assisted living, in one place.";

export const metadata: Metadata = {
  title: "Healthcare Facility Compliance Hub",
  description: metaDescription,
  alternates: { canonical: "/healthcare" },
  openGraph: { title, description, url: "/healthcare" },
};

const surveyItems = [
  {
    item: "Monthly generator load test",
    detail:
      "12 times a year, 20 to 40 days apart, 30 minutes under load. Diesel units need at least 30% of nameplate kW or the manufacturer's minimum exhaust gas temperature. Record the actual kW, not just run time.",
  },
  {
    item: "Monthly transfer switch test",
    detail: "Transfer switches are tested monthly and each test is documented.",
  },
  {
    item: "10-second restoration",
    detail:
      "Generators serving Type 1 and Type 2 essential electrical systems must supply the life safety and critical branches within 10 seconds of a utility failure (NFPA 99).",
  },
  {
    item: "Annual supplemental load test (if monthly tests fall short)",
    detail:
      "Diesel units that miss the monthly load threshold need a yearly 90-minute test: 30 minutes at 50% of nameplate, then 60 minutes at 75%, usually with a load bank.",
  },
  {
    item: "36-month, 4-hour test",
    detail:
      "At least once every 36 months, each Level 1 generator runs 4 continuous hours under load.",
  },
  {
    item: "Emergency fuel plan",
    detail:
      "CMS requires a plan to keep emergency power running through an emergency unless you evacuate. There is no fixed federal hour count, so document how you will get fuel.",
  },
];

export default function HealthcareHubPage() {
  const articles = getArticlesByTopic("healthcare");
  const sponsor = getSponsorByVertical("generators");
  const realSponsor = sponsor && !isPlaceholderSponsor(sponsor) ? sponsor : undefined;

  return (
    <>
      <div className="border-b border-gray-200 bg-white py-8">
        <Container>
          <Breadcrumbs items={[{ label: "Healthcare Facilities" }]} />
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
            <span className="h-2 w-2 rounded-full bg-rose-600" />
            {articles.length} Guides for Healthcare Facilities
          </div>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-gray-600">{description}</p>
        </Container>
      </div>

      <Container className="py-10">
        <div className="lg:flex lg:gap-10">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold text-gray-900">
              What surveyors check on emergency power
            </h2>
            <p className="mt-2 text-gray-600">
              A quick reference drawn from our{" "}
              <Link
                href="/generators/joint-commission-cms-emergency-power-healthcare-compliance"
                className="font-medium text-primary-700 hover:underline"
              >
                Joint Commission and CMS emergency power guide
              </Link>
              . Your AHJ and accreditor may add requirements.
            </p>
            <ul className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200">
              {surveyItems.map((s) => (
                <li key={s.item} className="flex gap-3 p-4">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">{s.item}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {s.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {realSponsor && (
            <div className="lg:w-80 lg:flex-shrink-0">
              <InlineSponsorCTA
                sponsor={realSponsor}
                headline="Managing emergency power across multiple healthcare sites?"
                body="Buffalo Power Solutions offers generator maintenance contracts, load bank testing, and 24/7 emergency response. Ask about multi-site programs and test documentation ready for your next survey."
                pageId="healthcare-hub"
                vertical="healthcare"
                placement="hub"
                showLogo
              />
            </div>
          )}
        </div>

        <h2 className="mb-6 mt-12 text-2xl font-bold text-gray-900">
          Healthcare compliance guides
        </h2>
        <ArticleGrid articles={articles} showVertical />
      </Container>
    </>
  );
}
