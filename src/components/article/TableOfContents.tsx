"use client";

import { useEffect, useRef, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const activeRef = useRef<HTMLAnchorElement>(null);
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: el.tagName === "H2" ? 2 : 3,
    }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Auto-scroll the TOC to keep the active item visible
  useEffect(() => {
    if (activeRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeEl = activeRef.current;
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();

      // If active item is below the visible area or above it, scroll to center it
      if (
        activeRect.bottom > containerRect.bottom ||
        activeRect.top < containerRect.top
      ) {
        activeEl.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }, [activeId]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        On this page
      </h4>
      <ul
        ref={scrollContainerRef}
        className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto border-l border-gray-200 scrollbar-thin"
      >
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              ref={activeId === heading.id ? activeRef : undefined}
              href={`#${heading.id}`}
              className={`block border-l-2 py-1 text-sm transition ${
                heading.level === 3 ? "pl-6" : "pl-4"
              } ${
                activeId === heading.id
                  ? "border-primary-700 font-medium text-primary-700"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
