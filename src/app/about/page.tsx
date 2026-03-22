import { Metadata } from "next";
import Container from "@/components/ui/Container";
import { verticals } from "@/config/verticals";

export const metadata: Metadata = {
  title: "About",
  description:
    "Facility Compliance Hub is an independent, vendor-neutral resource for commercial facility compliance guides, maintenance schedules, and checklists.",
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Facility Compliance Hub
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
          <p>
            <strong className="text-gray-900">
              FacilityComplianceHub.com is the definitive online resource for
              commercial facility compliance.
            </strong>{" "}
            We aggregate maintenance requirements, code standards, inspection
            schedules, and operational best practices across every major trade
            vertical into one trusted, searchable resource.
          </p>

          <p>
            Facility managers, property owners, and service contractors
            currently face a fragmented information landscape. Compliance
            requirements vary by trade, jurisdiction, and facility type. Existing
            resources are either vendor-biased sales pages or dense regulatory
            documents written for attorneys. We built this hub to change that.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            What Makes Us Different
          </h2>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600"
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
              <span>
                <strong className="text-gray-900">Vendor-neutral.</strong> Our
                content is written to educate, not sell. Platinum Sponsors
                support free access to these resources but do not influence
                editorial content.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600"
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
              <span>
                <strong className="text-gray-900">Multi-vertical.</strong> From
                generators to HVAC, fire protection to roofing and plumbing. One
                resource for every trade that keeps your facility running.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600"
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
              <span>
                <strong className="text-gray-900">Plain language.</strong> We
                translate dense codes and standards (NFPA, EPA, ASHRAE) into
                clear, actionable guides that facility managers can actually use.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600"
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
              <span>
                <strong className="text-gray-900">Always free.</strong> Every
                guide, checklist, and maintenance schedule on this site is free
                to access. No paywall. No account required.
              </span>
            </li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Verticals We Cover
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {verticals.map((v) => (
              <div
                key={v.slug}
                className="rounded-lg border border-gray-200 p-4"
              >
                <h3 className="font-semibold text-gray-900">{v.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {v.active ? "Live" : "Coming Soon"}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold text-gray-900">
            Our Sponsorship Model
          </h2>

          <p>
            Facility Compliance Hub is supported by Platinum Sponsors -- industry
            leaders who underwrite free access to compliance resources in their
            respective verticals. Sponsors are clearly identified on every page
            they support. Sponsorship supports the publication of free content
            but does not influence the accuracy or editorial direction of our
            guides.
          </p>

          <p>
            If you are interested in becoming a Platinum Sponsor for a vertical,
            please reach out to our editorial team.
          </p>
        </div>
      </div>
    </Container>
  );
}
