import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-teal-800 py-20 sm:py-28">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-main relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Trusted Resource for{" "}
            <span className="text-teal-300">Facility Compliance</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-100 sm:text-xl">
            Free compliance guides, maintenance schedules, and checklists for
            commercial facility managers. Every trade. Every code requirement.
            One resource.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/generators"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-900 shadow-lg hover:bg-gray-50"
            >
              Explore Generator Compliance
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
