import { remark } from 'remark'
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";
import RehypeReactLink from "components/foundations/rehype-react-link";

export default async function markdownToReactElements(markdown: string) {
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
          a: RehypeReactLink,
        }
      })
    .processSync(markdown).result
}
