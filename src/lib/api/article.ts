import { Article, ArticleMarkdownData } from "interfaces/article";
import { getMarkdownBySlug, validateMarkdownData } from "lib/api/index";
import { ARTICLE_DIRECTORY_PATH } from "lib/constants";


const keysShouldExist = [ 'title' ]
const source = ARTICLE_DIRECTORY_PATH

/**
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getArticleBySlug = (slug: string): Article => {
  const { data, content } = getMarkdownBySlug(slug, source)
  const _markdownData = data
  validateMarkdownData(_markdownData, keysShouldExist, slug)
  const markdownData = _markdownData as ArticleMarkdownData
  return {
    title: markdownData.title,
    content
  }
}
