import { remark } from "remark";
import remarkStripBadges from "remark-strip-badges";
import { devLog } from "lib/helpers";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { createElement, Fragment } from "react";
import MarkdownLink from "components/markdown/markdown-link";
import MarkdownNextImage from "components/markdown/markdown-next-image";
import MarkdownBlockquote from "components/markdown/markdown-blockquote";

const strip = require('remark-strip-html');
const removeMd = require('remove-markdown');

// getStaticProps で react node は渡せないのでクライアントサイドで変換する
export async function htmlToReactElements(htmlContent: string) {
  return unified()
    .use(rehypeParse, {
      fragment: true, // html, body head タグを取り除く
    })
    .use(rehypeReact, {
      createElement,
      Fragment, // div で囲まないようにする
      components: {
        a: MarkdownLink,
        img: MarkdownNextImage,
        blockquote: MarkdownBlockquote
      }
    })
    .processSync(htmlContent).result;
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
      if (error) throw error;
      result = String(file)
    })
  result = removeMd(result)
  devLog([ 'MD to plaintext', result.slice(1, 50) ], false)
  return result
}
