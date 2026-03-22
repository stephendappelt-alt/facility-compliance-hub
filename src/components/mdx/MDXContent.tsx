import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Callout from "./Callout";

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
};

interface MDXContentProps {
  source: string;
}

export default async function MDXContent({ source }: MDXContentProps) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return <article className="prose prose-lg max-w-none">{content}</article>;
}
