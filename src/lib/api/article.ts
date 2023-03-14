import { Article, ArticleMarkdownData, Articles } from 'interfaces/article'
import { getAllMarkdownSlugs, getMarkdownBySlug, validateMarkdownData } from 'lib/api/base'
import { ARTICLE_DIRECTORY_PATH } from 'lib/constants'

const keysShouldExist = [ 'title', 'excerpt', 'status' ]
const source = ARTICLE_DIRECTORY_PATH

/**
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getArticleBySlug = (slug: string): Article | null => {
  const { data, content, cleanedSlug } = getMarkdownBySlug(slug, source)
  const _markdownData = data
  validateMarkdownData(_markdownData, keysShouldExist, slug)
  const markdownData = _markdownData as ArticleMarkdownData

  // 非公開
  if (!markdownData.status) return null

  return {
    title: markdownData.title,
    excerpt: markdownData.excerpt,
    slug: cleanedSlug,
    status: markdownData.status,
    content
  }
}

/**
 * ブログの about や disclaimer などのページのマークダウンを解析された状態で取得する。
 * 下書き状態の記事は除く。公開できる全ての記事が対象になる。
 */
export const getAllArticles = (): Articles => {
  const slugs: string[] = getAllMarkdownSlugs(source)
  const allArticles = slugs.map((slug) => getArticleBySlug(slug))
  return allArticles.filter((article) => article) as Articles
}
