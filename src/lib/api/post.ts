import { Post, PostMarkdownData, Posts } from 'interfaces/post'
import { Pagination, PaginationProps } from 'interfaces/pagination'
import { POST_COUNT_PER_PAGE, POST_DIRECTORY_PATH } from 'lib/constants'
import { getAllMarkdownSlugs, getMarkdownBySlug, validateMarkdownData } from 'lib/api/base'
import { parseISO } from 'date-fns'
import { markdownToHtml } from 'lib/markdown/server'

// type Post と一致させること
const keysShouldExist = [
  'title',
  'publishedAt',
  'updatedAt',
  'status',
  'excerpt',
  'ogImageUrl',
  'tags'
]

const source = POST_DIRECTORY_PATH

/**
 * 記事が公開済みか判定する
 * @param publishedAt
 * @param updateAt
 * @param status
 */
export function isPublished(publishedAt: Date, updateAt: Date, status: boolean) {
  // UTC
  const now = new Date()
  return publishedAt <= now && updateAt <= now && status
}

/**
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getPostBySlug = (slug: string): Post | null => {
  const { data, content, cleanedSlug } = getMarkdownBySlug(slug, source)
  const _markdownData = data
  validateMarkdownData(_markdownData, keysShouldExist, slug)
  const markdownData = _markdownData as PostMarkdownData

  // ここで content を処理しない。全文検索と記事本文の２パターンで処理するため。
  // getStaticProps で処理する。

  // UTCで扱う
  const publishedAt = parseISO(markdownData.publishedAt)
  const updatedAt = parseISO(markdownData.updatedAt)

  // 非公開
  if (!isPublished(publishedAt, updatedAt, markdownData.status)) return null

  // サロゲートペアの文字を考慮する
  const charLength: number = [ ...content ].length

  // 220文字を読むのに1分かかるとする。 hugo のプラグインのロジックを参考にした。
  const charsPerMin = 220

  // 四捨五入する
  let min = Math.round(charLength / charsPerMin)
  // 0分の場合は1分かかる
  min = min === 0 ? 1 : min

  const time = `${min} mins`

  // もしマークダウンで設定を忘れた項目があれば undefined はシリアライズ
  // できないのでビルドに失敗する。
  return {
    content,
    slug: cleanedSlug,
    status: markdownData.status,
    title: markdownData.title,
    publishedAt: markdownData.publishedAt,
    updatedAt: markdownData.updatedAt,
    excerpt: markdownData.excerpt,
    ogImageUrl: markdownData.ogImageUrl,
    tags: markdownData.tags,
    time
  }
}

/**
 * 解析された状態のマークダウンの記事を全て取得する。
 * 下書き状態の記事は除く。公開できる全ての記事が対象になる。
 */
export const getAllPosts = (): Posts => {
  const slugs: string[] = getAllMarkdownSlugs(source) // [ 'hoge.md', 'html-md.md' ]
  const allPosts = slugs.map((slug) => getPostBySlug(slug))
  return allPosts.filter((post) => post) as Posts
}

/**
 * 記事の日付をもとにソートして返す。
 */
export const getSortedPosts = (posts: Posts): Posts => {
  // sort posts by date in descending order
  return posts.sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1))
}

/**
 * 全記事一括でマークダウンの内容をHTMLに変換する
 * @param posts
 */
export const getHtmlContentPosts = async (posts: Posts): Promise<Posts> => {
  return await Promise.all(posts.map(async (post) => {
    return {
      ...post,
      content: await markdownToHtml(post.content)
    }
  }))
}

/**
 * タグを全種類取得する。
 * @param posts
 */
export const getAllTags = (posts: Posts): string[] => {
  return [ ...new Set(posts.flatMap((post) => post.tags)) ]
}

/**
 * タグをもとにそのタグがついている記事を取得する。
 * @param posts
 * @param tag
 */
export const getTaggedPosts = (posts: Posts, tag: string): Posts => {
  return posts.filter((post) => post.tags.includes(tag))
}

/**
 * 記事数を返す。
 * @param posts
 */
export const getTotalPostCount = (posts: Posts): number => posts.length

/**
 * 記事数からページ数を返す。
 * @param totalPostCount
 * @param postCountPerPage
 */
export const getTotalPageCount = (
  totalPostCount: number,
  postCountPerPage: number = POST_COUNT_PER_PAGE
): number => Math.ceil(totalPostCount / postCountPerPage)

/**
 * 渡された記事リストから記事数を取得して、パジネーションをした時に何ページあるかを返す。
 * 3ページあったら[ 1, 2, 3 ] と返す。
 * @param posts
 */
export const getTotalPageCountRange = (posts: Posts): number[] => {
  const postCount = getTotalPostCount(posts)
  return [ ...Array(getTotalPageCount(postCount)).keys() ].map((pageNumber) => {
    return pageNumber + 1
  })
}

/**
 * パジネーションを作り、取得する
 * @param currentPageNumber
 * @param posts
 * @param basePaths
 * @param pageTitle
 * @param postCountPerPage
 */
export const getPagination = (
  {
    currentPageNumber,
    posts,
    basePaths,
    pageTitle,
    postCountPerPage = POST_COUNT_PER_PAGE
  }: PaginationProps
): Pagination => {
  const startIndex = (currentPageNumber - 1) * postCountPerPage
  const totalPostCount = getTotalPostCount(posts)
  const totalPageCount = getTotalPageCount(totalPostCount)

  if (basePaths === '/') {
    basePaths = ''
  } else if (basePaths.endsWith('/')) {
    // root ではなく、かつ末尾の / があったら取り除く
    basePaths = basePaths.slice(0, -1)
  }

  const prevPageHref = currentPageNumber === 1
    ? null
    : `${basePaths}/${currentPageNumber - 1}`

  const nextPageHref = currentPageNumber === totalPageCount
    ? null
    : `${basePaths}/${currentPageNumber + 1}`

  return {
    currentPageNumber,
    postCountPerPage,
    pageTitle,
    currentUrl: `${basePaths}/${currentPageNumber}`,
    totalPostCount,
    totalPageCount,
    nextPageHref,
    prevPageHref,
    currentPagePosts: posts.slice(startIndex, startIndex + postCountPerPage)
  }
}
