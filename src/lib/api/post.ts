import { Post, PostMarkdownData, Posts } from "interfaces/post";
import { Pagination, PaginationProps } from "interfaces/pagination";
import { POST_COUNT_PER_PAGE, POST_DIRECTORY_PATH } from "lib/constants";
import { getAllMarkdownSlugs, getMarkdownBySlug, isPublished, validateMarkdownData } from "lib/api/index";
import { parseISO } from "date-fns";


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
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getPostBySlug = (slug: string): Post | null => {

  const { data, content, cleanedSlug } = getMarkdownBySlug(slug, source)
  const _markdownData = data
  validateMarkdownData(_markdownData, keysShouldExist, slug)
  const markdownData = _markdownData as PostMarkdownData

  // UTC
  const publishedAt = parseISO(markdownData.publishedAt)
  const updatedAt = parseISO(markdownData.updatedAt)

  // 非公開なので返す post はない。
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
    content: content,
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
  return <Posts> allPosts.filter((post) => post)
}

/**
 * 記事の日付をもとにソートして返す。
 */
export const getSortedPosts = (posts: Posts): Posts => {
  // sort posts by date in descending order
  return posts.sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1))
}

export const getAllTags = (posts: Posts): string[] => {
  return [ ...new Set(posts.flatMap((post) => post.tags)) ]
}

export const getTaggedPosts = (posts: Posts, tag: string): Posts => {
  return posts.filter((post) => post.tags.includes(tag))
}

export const getTotalPostCount = (posts: Posts): number => posts.length


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
 * @param postCountPerPage
 */
export const getPagination = (
  {
    currentPageNumber,
    posts,
    basePaths,
    postCountPerPage = POST_COUNT_PER_PAGE
  }
    : PaginationProps
): Pagination => {
  const startIndex = (currentPageNumber - 1) * postCountPerPage;
  const totalPostCount = getTotalPostCount(posts)
  const totalPageCount = getTotalPageCount(totalPostCount)

  if (basePaths === '/') {
    basePaths = ''
  } else if (basePaths.endsWith('/')) {
    // root ではなく、かつ末尾の / があったら取り除く
    basePaths = basePaths.slice(0, -1)
  }

  const prevPageHref = currentPageNumber === 1 ?
    null : `${basePaths}/${currentPageNumber - 1}`

  const nextPageHref = currentPageNumber === totalPageCount ?
    null : `${basePaths}/${currentPageNumber + 1}`

  return {
    currentPageNumber,
    postCountPerPage,
    totalPostCount,
    totalPageCount,
    nextPageHref,
    prevPageHref,
    currentPagePosts: posts!.slice(startIndex, startIndex + postCountPerPage),
  }
}


