import { remark } from 'remark'
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";
import MarkdownLink from "components/markdown/markdown-link";
import remarkStripBadges from "remark-strip-badges";
import { devLog } from "lib/helpers";
import MarkdownNextImage from "components/markdown/markdown-next-image";

export async function markdownToReactElements(markdown: string): Promise<React.ReactNode> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(
      remarkRehype, {
        allowDangerousHtml: true, // mdast to hast で htmlタグをそのまま維持する
      })
    .use(rehypeRaw) // parse the tree again 直接書かれたタグをそのタグのまま維持する
    .use(
      rehypeReact,  // compile to React
      {
        createElement: React.createElement,
        components: {
          // htmlタグの attr にないものを FC の props に渡せない
          a: MarkdownLink,
          img: MarkdownNextImage
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
  devLog([ 'MD to plaintext', result.slice(1, 50) ])
  return result
}

