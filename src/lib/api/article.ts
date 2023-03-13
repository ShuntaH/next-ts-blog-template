import { Article, ArticleMarkdownData } from 'interfaces/article'
import { getMarkdownBySlug, validateMarkdownData } from 'lib/api/base'
import { ARTICLE_DIRECTORY_PATH } from 'lib/constants'

const keysShouldExist = ['title', 'excerpt', 'status']
const source = ARTICLE_DIRECTORY_PATH

/**
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getArticleBySlug = (slug: string): Article | null => {
  const { data, content } = getMarkdownBySlug(slug, source)
  const _markdownData = data
  validateMarkdownData(_markdownData, keysShouldExist, slug)
  const markdownData = _markdownData as ArticleMarkdownData

  // 非公開
  if (!markdownData.status) return null

  return {
    title: markdownData.title,
    excerpt: markdownData.excerpt,
    status: markdownData.status,
    content
  }
}
