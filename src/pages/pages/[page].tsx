import { useEffect } from "react";
import { getAllPosts, getPagination, getSortedPosts, getTotalPageCount, getTotalPostCount } from "../../lib/api";
import { Pagination } from "../../interfaces/pagination";
import PostsPage from "../../components/post/posts-page";


export async function getStaticPaths() {
  const posts = getSortedPosts(getAllPosts())
  const postCount = getTotalPostCount(posts)

  // 3ページあったら[ 0, 1, 2 ]
  const range: string[] = [...Array(getTotalPageCount(postCount)).keys()].map((pageNumber) => {
    return String(pageNumber + 1)
  })

  return {
    paths: range.map((pageNumber) => {
      return {
        params: {
          page: pageNumber
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
  const pagination: Pagination = getPagination({
    currentPageNumber: Number(params.page),
    posts: getSortedPosts(getAllPosts()),
    basePaths: '/pages',
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
