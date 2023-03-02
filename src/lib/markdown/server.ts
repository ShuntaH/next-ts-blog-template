import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkPrism from "remark-prism";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkToc from "remark-toc";
import { TOC_HEADING } from "lib/constants";


export async function markdownToHtml(markdown: string): Promise<string> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(remarkToc, { heading: TOC_HEADING, tight: true, ordered: true })
    .use(remarkPrism, {}) // code highlight
    .use(remarkUnwrapImages) // md の中の img タグを p タグで囲むのをHTMLに違反しないためにやめる
    .use(remarkRehype, { allowDangerousHtml: true })// markdownの中の img タグを img タグのままにする
    // .use(rehypeFormat) // 整形されていないHTMLを空白や改行を消して整える。
    .use(rehypeStringify, { allowDangerousHtml: true }) // htmlタグをそのまま出力する
    .processSync(markdown).toString()
}
