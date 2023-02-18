import { remark } from 'remark'
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";
import LinkNextProvide from "components/markdown/link-next-provide";

export default async function markdownToReactElements(markdown: string): Promise<React.ReactNode> {
  return remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(
      remarkRehype, {
        allowDangerousHtml: true,
      })
    .use(rehypeRaw)
    .use(
      rehypeReact,
      {
        createElement: React.createElement,
        components: {
          // chakra を使っているので chakraComponent
          // が一番型をつけるのが簡単
          a: LinkNextProvide,
        }
      })
    .processSync(markdown).result
}
