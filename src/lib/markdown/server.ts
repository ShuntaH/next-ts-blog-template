import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkPrism from 'remark-prism'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import { TOC_HEADING } from 'lib/constants'
import rehypeSlug from 'rehype-slug'

/**
 * markdown content で 記事として表示したい時に
 * getStaticProps の中で HTML に変換する。
 * @param markdown
 */
export async function markdownToHtml (markdown: string): Promise<string> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(remarkToc, { heading: TOC_HEADING })
    .use(remarkPrism, {}) // code highlight
    .use(remarkUnwrapImages) // md の中の img タグを p タグで囲むのをHTMLに違反しないためにやめる
    .use(remarkRehype, { allowDangerousHtml: true })// markdownの中の img タグを img タグのままにする
    .use(rehypeSlug) // h1, h2, h3 に id を付与する
    .use(rehypeStringify, { allowDangerousHtml: true }) // htmlタグをそのまま出力する
    .processSync(markdown).toString()
}
