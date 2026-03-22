"use client";

export default function NewsletterCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-main">
        <div className="rounded-2xl bg-gradient-to-r from-primary-900 to-teal-800 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Stay Compliant. Stay Informed.
            </h2>
            <p className="mt-4 text-primary-100">
              Get monthly compliance updates, code changes, and maintenance
              reminders delivered to your inbox. No spam. Unsubscribe anytime.
            </p>
            <form
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 sm:max-w-sm"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400 sm:w-auto"
              >
                Subscribe Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
