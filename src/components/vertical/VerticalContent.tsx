"use client";

import { useState } from "react";
import { Article } from "@/types/article";
import { VerticalConfig } from "@/types/vertical";
import CategoryNav from "./CategoryNav";
import ArticleGrid from "./ArticleGrid";
import Container from "@/components/ui/Container";

interface VerticalContentProps {
  vertical: VerticalConfig;
  articles: Article[];
}

export default function VerticalContent({
  vertical,
  articles,
}: VerticalContentProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles =
    activeCategory === "all"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <Container className="py-8">
      <CategoryNav
        categories={vertical.categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="mt-8">
        <ArticleGrid articles={filteredArticles} />
      </div>
    </Container>
  );
}
