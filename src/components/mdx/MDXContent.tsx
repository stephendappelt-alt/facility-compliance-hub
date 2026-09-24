import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Callout from "./Callout";
import PrintButton from "./PrintButton";
import GeneratorTestLog from "./GeneratorTestLog";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const components = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(children));
    return (
      <h2 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = slugify(String(children));
    return (
      <h3 id={id} className="scroll-mt-24" {...props}>
        {children}
      </h3>
    );
  },
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full" {...props}>
        {children}
      </table>
    </div>
  ),
  Callout,
  PrintButton,
  GeneratorTestLog,
};

interface MDXContentProps {
  source: string;
  extraComponents?: Record<string, React.ComponentType>;
}

export default async function MDXContent({
  source,
  extraComponents,
}: MDXContentProps) {
  const { content } = await compileMDX({
    source,
    components: { ...components, ...extraComponents },
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return <article className="prose prose-lg max-w-none">{content}</article>;
}
