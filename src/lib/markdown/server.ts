import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";


export async function markdownToHtml(markdown: string): Promise<string> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(remarkPrism, {}) // remove badges from markdown
    .use(
      remarkRehype, { allowDangerousHtml: true })// markdownの中の img タグを img タグのままにする
    .use(rehypeStringify, { allowDangerousHtml: true })
    .processSync(markdown).toString()
}
