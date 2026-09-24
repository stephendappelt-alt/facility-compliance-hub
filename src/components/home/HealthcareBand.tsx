import Link from "next/link";

export default function HealthcareBand() {
  return (
    <section className="pb-4 pt-2">
      <div className="container-main">
        <Link
          href="/healthcare"
          className="group flex flex-col gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-6 transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-700">
              Hospitals, nursing homes &amp; assisted living
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Healthcare Facility Compliance Hub
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Joint Commission, CMS, NFPA 99, and NFPA 110 emergency power
              requirements in one place, including what surveyors check.
            </p>
          </div>
          <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-lg bg-rose-700 px-5 py-3 text-sm font-semibold text-white group-hover:bg-rose-600">
            Start here
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
