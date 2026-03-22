"use client";

import { ArticleCategory, categoryLabels } from "@/types/article";

interface CategoryNavProps {
  categories: ArticleCategory[];
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryNav({
  categories,
  active,
  onChange,
}: CategoryNavProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("all")}
        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
          active === "all"
            ? "bg-primary-700 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            active === cat
              ? "bg-primary-700 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {categoryLabels[cat]}
        </button>
      ))}
    </div>
  );
}
