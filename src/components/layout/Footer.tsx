"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { navigation } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-700 text-white">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Facility Compliance Hub
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Your trusted, vendor-neutral resource for commercial facility
              compliance. Free guides, checklists, and maintenance schedules
              across every major trade vertical.
            </p>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Verticals
            </h3>
            <ul className="space-y-2">
              {navigation.verticals.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item.label}
                    {!item.active && " (Coming Soon)"}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Stay Compliant
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Get monthly compliance updates, code changes, and maintenance
              reminders delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FacilityComplianceHub.com. An
            independent industry resource. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
