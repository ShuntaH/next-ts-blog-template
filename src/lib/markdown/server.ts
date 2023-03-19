import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import remarkPrism from 'remark-prism'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkUnwrapImages from 'remark-unwrap-images'
import { Root } from 'remark-toc'
import { HEADING_LINK_ICON_CLASSNAME, TOC_HEADING } from 'lib/constants'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";
import { Options, toc } from "mdast-util-toc";

/**
 * markdown content で 記事として表示したい時に
 * getStaticProps の中で HTML に変換する。
 * @param markdown
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  return remark()
    .use(remarkGfm) //  support GFM (autolink literals, footnotes, strikethrough, tables, tasklists)
    .use(remarkBreaks) // hard breaks w/o needing spaces
    .use(remarkTocCollapse, { heading: TOC_HEADING })
    .use(remarkPrism, {}) // code highlight
    .use(remarkUnwrapImages) // md の中の img タグを p タグで囲むのをHTMLに違反しないためにやめる
    .use(remarkRehype, { allowDangerousHtml: true })// markdownの中の img タグを img タグのままにする
    .use(rehypeSlug) // h1, h2, h3 など heading に id を付与する
    .use(
      rehypeAutolinkHeadings,
      {
        behavior: 'append',
        content() {
          return [
            h(
              `span.${HEADING_LINK_ICON_CLASSNAME}`,
              { ariaHidden: 'true' }
            )
          ]
        }
      }) // h1, h2, h3 の id からそこへのリンクを近くに作成する。
    .use(rehypeStringify, { allowDangerousHtml: true }) // htmlタグをそのまま出力する
    .processSync(markdown).toString()
}

/**
 * remark-toc の plugin で出力されるものが details で囲まれるように変更したもの。
 * 記事の目次を accordion で表示したかったらこれを使う。
 * @param options
 */
export function remarkTocCollapse(options: Options = {}) {
  return (node: Root) => {
    // console.log('remarkToc', 'node', node)
    const result = toc(
      node,
      Object.assign({}, options, {
        heading: options.heading || 'toc|table[ -]of[ -]contents?'
      })
    )

    if (
      result.endIndex === null ||
      result.index === null ||
      result.index === -1 ||
      !result.map
    ) {
      return
    }

    // const summary = node.children[result.index - 1]

    // details の中に入れるので、既存の table of contents を削除する。
    node.children.splice(result.index - 1, 1)

    node.children = [
      ...node.children.slice(0, result.index - 1),
      {
        type: 'html',
        value: '<details>'
      },
      {
        type: 'html',
        value: '<summary>'
      },
      // chakra ui のアコーディオンは details と summary で作られていない。
      // summary に該当する部分を heading で包まなければならないのでただのテキストに変換する。
      {
        type: 'text',
        value: TOC_HEADING
      },
      {
        type: 'html',
        value: '</summary>'
      },
      result.map,
      {
        type: 'html',
        value: '</details>'
      },
      ...node.children.slice(result.endIndex)
    ]
  }
}
