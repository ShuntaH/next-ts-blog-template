import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from "./post";
import { MarkdownData, Posts } from "../interfaces/post";
import Pagination from "./pagination";
import { PaginationProps } from "../interfaces/pagination";

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
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)

  // md の中身を全て取得する
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // data に --- --- の内容、content に本文が入る
  const { data, content } = matter(fileContents)
  const markdownData = data as MarkdownData
  return new Post(content, markdownData, slug)
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


export const getPagination = (props: PaginationProps): Pagination => {
  return new Pagination(props.currentPageNumber, props.posts, props.postCountPerPage)
}

