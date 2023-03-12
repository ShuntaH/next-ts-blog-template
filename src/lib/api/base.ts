import { join } from "path";
import matter from "gray-matter";
import * as fs from "fs";

/**
 * マークダウンの全ての slug を取得する。
 * fs は node で実行されるので クライアントサイドではエラー
 * @param directoryPath
 */
export const getAllMarkdownSlugs = (directoryPath: string) => fs.readdirSync(directoryPath)

/**
 * 与えられた slug の記事のマークダウンを読み込み meta data と content に分けて返す。
 * slug も返す。
 * @param slug
 * @param directoryPath
 */
export const getMarkdownBySlug = (slug: string, directoryPath: string): {
  data: {},
  content: string,
  cleanedSlug: string
} => {
  // ディレクトリから .md つきでも、パスからでも slug を渡せる
  const cleanedSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directoryPath, `${cleanedSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return { ...matter(fileContents), cleanedSlug }
}

/**
 * マークダウンの全ての記事を読み込み、meta data と content に分けて返す。
 * meta data は any なのでデータが整っているかチェックする必要がある。
 *
 * @param markdownData マークダウンから取得したメタデータ 何が入っているかは動的なので不明
 * @param keysShouldExist このメタデータが持っているべきキーの配列
 * @param slug エラーメッセージ用にこの記事を特定できる slug
 */
export function validateMarkdownData(
  markdownData: any,
  keysShouldExist: string[],
  slug: string
): never | void {
  const markdownDataKeys = Object.keys(markdownData)
  let message = undefined

  if (!markdownDataKeys.length) {
    // data の部分が空か --- の数を間違えているなどして取れていない
    message = `Markdown file "${slug}" data is empty. check data part syntax.`
  } else {
    markdownDataKeys.forEach((k => {
      // キーが不足していないか
      if (!keysShouldExist.includes(k)) {
        message = `Markdown file "${slug}" contains unknown data "${k}".`
        return
      }
    }))

    keysShouldExist.forEach((k) => {
      // 余計なキーが入っていないか
      if (markdownData[k] === undefined) {
        message = `Markdown file "${slug}" is lack of markdown data "${k}".`
        return
      }
    })
  }

  if (message) {
    throw new Error(message)
  }
}
