import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { MarkdownData, Post, Posts } from "../interfaces/post";
import { Pagination, PaginationProps } from "../interfaces/pagination";
import { POST_COUNT_PER_PAGE } from "./constants";

const postsDirectory = join(process.cwd(), 'src', '_posts')


/**
 * 記事を格納しているディレクトリにあるファイル名を全て取得する
 * e.g.
 * postSlugs [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ]
 */
export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory)
}

/**
 * ファイル名からそのファイルの中身を取得する。
 *
 * @param slug マークダウンファイルの名前
 */
export const getPostBySlug = (slug: string): Post => {
  // slug 'hoge.md'
  console.log('slug', slug)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  // md の中身を全て取得する
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // data に --- --- の内容、content に本文が入る
  const { data, content } = matter(fileContents)
  const markdownData = data as MarkdownData
  const charLength: number = content.length

  // 220文字を読むのに1分かかるとする。 hugo のプラグインのロジックを参考にした。
  const charsPerMin = 220

  // 四捨五入する
  const min = Math.round(charLength / charsPerMin)

  const time = `${min} mins`

  return {
    content: content,
    slug: realSlug,
    title: markdownData.title,
    date: markdownData.date,
    excerpt: markdownData.excerpt,
    author: markdownData.author,
    ogImage: markdownData.ogImage,
    coverImage: markdownData.coverImage,
    tags: markdownData.tags,
    time
  }
}

/**
 * 解析された状態のマークダウンの記事を全て取得して、
 * 記事の日付をもとにソートして返す。
 */
export const getAllPosts = (): Posts => {
  const slugs: string[] = getPostSlugs() // [ 'hoge.md', 'hello-world.md' ]
  return slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}


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
  const totalPostCount = posts.length
  const totalPageCount = Math.ceil(totalPostCount / postCountPerPage)

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


