import { getAllArticles } from "@/lib/articles";
import { getActiveVerticals } from "@/config/verticals";
import { siteConfig } from "@/config/site";

// llms.txt (https://llmstxt.org): a plain-text map of the site for AI assistants
// like ChatGPT and Perplexity, which are starting to send visitors here.
export const dynamic = "force-static";

export function GET() {
  const articles = getAllArticles();
  const sections = getActiveVerticals()
    .map((v) => {
      const list = articles.filter((a) => a.vertical === v.slug);
      if (!list.length) return "";
      return [
        `## ${v.name}`,
        "",
        ...list.map((a) => `- [${a.title}](${siteConfig.url}${a.url}): ${a.description}`),
        "",
      ].join("\n");
    })
    .filter(Boolean);

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description} Guides cite NFPA, NEC, EPA, ASHRAE, Joint Commission, and CMS sources.`,
    "",
    `- [Healthcare Facility Compliance Hub](${siteConfig.url}/healthcare): Joint Commission, CMS, NFPA 99 and NFPA 110 emergency power requirements for hospitals and senior care.`,
    "",
    ...sections,
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
