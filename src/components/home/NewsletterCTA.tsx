"use client";

import { useNewsletterForm } from "@/lib/useNewsletterForm";

export default function NewsletterCTA() {
  const { email, setEmail, status, errorMessage, handleSubmit, reset } =
    useNewsletterForm();

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

            {status === "success" ? (
              <div className="mt-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-teal-500/20 px-6 py-3 text-teal-100">
                  <svg
                    className="h-5 w-5"
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
                  <span className="text-sm font-medium">
                    You&apos;re subscribed! Check your inbox to confirm.
                  </span>
                </div>
                <button
                  onClick={reset}
                  className="mt-3 text-xs text-teal-300 underline hover:text-white"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 sm:max-w-sm"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400 disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe Free"}
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-300">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
