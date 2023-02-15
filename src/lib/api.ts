import { join } from 'path'
import matter from 'gray-matter'
import { MarkdownData, Post, Posts } from "interfaces/post";
import { Pagination, PaginationProps } from "interfaces/pagination";
import * as fs from "fs";
import { POST_COUNT_PER_PAGE } from "lib/constants";


const postsDirectory = join(process.cwd(), 'src', '_posts')


/**
 * 記事を格納しているディレクトリにあるファイル名を全て取得する
 * e.g.
 * postSlugs [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
 */
export const getPostSlugs = (): string[] => {
  // fs は node で実行されるので クライアントサイドではエラー
  return fs.readdirSync(postsDirectory)
}


/**
 * ファイル名からそのファイルの中身を取得する。
 * @param slug マークダウンファイルの名前
 */
export const getPostBySlug = (slug: string): Post | null => {
  // slug 'hoge.md'
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  // md の中身を全て取得する
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // data に --- --- の内容、content に本文が入る
  const { data, content } = matter(fileContents)

  const markdownData = data as MarkdownData

  // returnする時に、undefined でビルドエラーさせるために ! で確認しない。
  if (markdownData.status === false) {
    return null
  }


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
    slug: realSlug,
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
 * 解析された状態のマークダウンの記事を全て取得する
 */
export const getAllPosts = (): Posts => {
  const slugs: string[] = getPostSlugs() // [ 'hoge.md', 'hello-world.md' ]
  const posts = slugs.map((slug) => getPostBySlug(slug))
  return <Post[]> posts.filter((post) => !!post)
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


