import { useMemo } from "react";
import { getAllPosts, getPagination, getSortedPosts, getTotalPageCountRange } from "lib/api";
import { Pagination } from "interfaces/pagination";
import { Posts } from "interfaces/post";
import { setupFullTextSearch } from "lib/search";
import Layout from "components/layouts/layout";
import PostsPage from "components/post/posts-page";


export async function getStaticPaths() {
  const posts = getSortedPosts(getAllPosts())
  const range: number[] = getTotalPageCountRange(posts)

  return {
    paths: range.map((pageNumber) => {
      return {
        params: {
          page: String(pageNumber)
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
  const allPosts = getAllPosts()
  const pagination: Pagination = getPagination({
    currentPageNumber: Number(params.page),
    posts: getSortedPosts(allPosts),
    basePaths: '/pages',
  })

  return {
    props: {
      pagination,
      allPosts
    },
  }
}

type Props = {
  pagination: Pagination
  allPosts: Posts
}
/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function PaginatedPage({ pagination, allPosts }: Props) {
  const fuse = useMemo(
    () => setupFullTextSearch(allPosts),
    [ allPosts ])

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <PostsPage
        pagination={pagination}
        boxProps={{minHeight: "inherit"}}
      />
    </Layout>
  )
}
