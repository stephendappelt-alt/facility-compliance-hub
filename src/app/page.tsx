import Hero from "@/components/home/Hero";
import VerticalCards from "@/components/home/VerticalCards";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import HealthcareBand from "@/components/home/HealthcareBand";
import { getFeaturedArticles } from "@/lib/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedArticles(6);

  return (
    <>
      <Hero />
      <HealthcareBand />
      <VerticalCards />
      <FeaturedArticles articles={featured} />
      <NewsletterCTA />
    </>
  );
}
