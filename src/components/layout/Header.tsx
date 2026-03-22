"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/config/navigation";
import Container from "@/components/ui/Container";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [verticalDropdown, setVerticalDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-700 text-white">
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">
                Facility Compliance Hub
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-700"
              >
                {item.label}
              </Link>
            ))}

            {/* Verticals Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setVerticalDropdown(true)}
              onMouseLeave={() => setVerticalDropdown(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-primary-700">
                Verticals
                <svg
                  className={`h-4 w-4 transition-transform ${verticalDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {verticalDropdown && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  {navigation.verticals.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.label}
                      {!item.active && (
                        <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                          Coming Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-gray-100" />
              <span className="px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Verticals
              </span>
              {navigation.verticals.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {!item.active && (
                    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
