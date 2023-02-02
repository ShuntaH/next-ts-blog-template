import { useEffect } from "react";
import { getAllSortedPosts, getPagination, getTotalPageCount, getTotalPostCount } from "../../lib/api";
import { Posts } from "../../interfaces/post";
import { Pagination } from "../../interfaces/pagination";
import PostsPage from "../../components/post/posts-page";


export async function getStaticPaths() {
  const posts = getAllSortedPosts()
  const postCount = getTotalPostCount(posts)

  // 3ページあったら[ 0, 1, 2 ]
  const range: number[] = [...Array(getTotalPageCount(postCount)).keys()]

  return {
    paths: range.map((pageNumber) => {
      return {
        params: {
          page: String(pageNumber + 1)
        }}}),
    fallback: false,
  }
}

type Context = {
  params: {
    page: string
  },
  preview?: boolean
  previewData?: unknown
  locale?: string
  locales?: string[]
  defaultLocale?: string
}

export const getStaticProps = async ({params}: Context) => {
  const posts: Posts = getAllSortedPosts()

  const pagination: Pagination = getPagination({
    currentPageNumber: Number(params.page),
    basePaths: '/pages',
    posts
  })

  return {
    props: {
      pagination
    },
  }
}

type Props = {
  pagination: Pagination
}
/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Page({ pagination }: Props) {
  useEffect(() => {
    console.log('page pagination', pagination)
  })

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <PostsPage
      pagination={pagination}
      boxProps={{minHeight: "inherit"}}
    />
  )
}
