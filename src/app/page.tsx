import Hero from "@/components/home/Hero";
import VerticalCards from "@/components/home/VerticalCards";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import { getFeaturedArticles } from "@/lib/articles";

export default function HomePage() {
  const featured = getFeaturedArticles(6);

  return (
    <>
      <Hero />
      <VerticalCards />
      <FeaturedArticles articles={featured} />
      <NewsletterCTA />
    </>
  );
}
