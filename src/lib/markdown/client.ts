import { remark } from 'remark'
import remarkStripBadges from 'remark-strip-badges'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import { createElement, Fragment } from 'react'
import MarkdownLink from 'components/markdown/markdown-link'
import MarkdownNextImage from 'components/markdown/markdown-next-image'
import MarkdownBlockquote from 'components/markdown/markdown-blockquote'
import MarkdownPre from 'components/markdown/markdown-pre'
import MarkdownCode from 'components/markdown/markdown-code'
import MarkdownOrderedList from 'components/markdown/markdown-ordered-list'
import MarkdownUnorderedList from 'components/markdown/markdown-unordered-list'
import MarkdownListItem from 'components/markdown/markdown-list-item'
import MarkdownTable from 'components/markdown/markdown-table'
import MarkdownThead from 'components/markdown/markdown-thead'
import MarkdownTbody from 'components/markdown/markdown-tbody'
import MarkdownTfoot from 'components/markdown/markdown-tfoot'
import MarkdownTr from 'components/markdown/markdown-tr'
import MarkdownTd from 'components/markdown/markdown-td'
import MarkdownHeadingLinkIcon from "../../components/markdown/markdown-heading-link-icon";

const strip = require('remark-strip-html')
const removeMd = require('remove-markdown')

// getStaticProps で react node は渡せないのでクライアントサイドで変換する
export async function htmlToReactElements(htmlContent: string) {
  return unified()
    .use(rehypeParse, {
      fragment: true // html, body head タグを取り除く
    })
    .use(rehypeReact, {
      createElement,
      Fragment, // div で囲まないようにする
      components: {
        // 要素タグの attr に component の props の type を一致させること。
        // react独自の機能や、スタイリングが必要な要素は react のコンポーネントを用意する。
        a: MarkdownLink,
        span: MarkdownHeadingLinkIcon,
        img: MarkdownNextImage,
        blockquote: MarkdownBlockquote,
        pre: MarkdownPre,
        code: MarkdownCode,
        ol: MarkdownOrderedList,
        ul: MarkdownUnorderedList,
        li: MarkdownListItem,
        table: MarkdownTable,
        thead: MarkdownThead,
        tbody: MarkdownTbody,
        tfoot: MarkdownTfoot,
        tr: MarkdownTr,
        td: MarkdownTd
      }
    })
    .processSync(htmlContent).result
}

/**
 * 検索対象を作る時、htmlタグやmarkdown記法が混在していて欲しくないのでなるべく取り除く。
 * @param markdown
 */
export async function markdownToPlainText(markdown: string): Promise<string> {
  let result = ''
  remark()
    .use(remarkStripBadges)
    .use(strip)
    .process(markdown, (error, file) => {
      if (error != null) throw error
      result = String(file)
    })
  result = removeMd(result)
  return result
}
