import { remark } from 'remark'
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";
import LinkNextProvide from "components/markdown/link-next-provide";
import remarkStripBadges from "remark-strip-badges";
import { devLog } from "lib/helpers";

export async function markdownToReactElements(markdown: string): Promise<React.ReactNode> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(
      remarkRehype, {
        allowDangerousHtml: true,
      })
    .use(rehypeRaw) // parse the tree again
    .use(
      rehypeReact,  // compile to React
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


/**
 * 検索対象を作る時、htmlタグやmarkdown記法が混在していて欲しくないのでなるべく取り除く。
 * @param markdown
 */
export async function markdownToPlainText(markdown: string): Promise<string> {
  const strip = require('remark-strip-html');
  const removeMd = require('remove-markdown');

  let result = ''
  remark()
    .use(remarkStripBadges)
    .use(strip)
    .process(markdown, (error, file) => {
      if (error) throw error;
      result = String(file)
    })
  result = removeMd(result)
  devLog([ 'markdown to plain text result', result ])
  return result
}

