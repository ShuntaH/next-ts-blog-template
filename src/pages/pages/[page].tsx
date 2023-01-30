import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { getAllPosts, getPagination, getTotalPageCount, getTotalPostCount } from "../../lib/api";
import { Posts } from "../../interfaces/post";
import { Pagination } from "../../interfaces/pagination";
import PostsPage from "../../components/post/posts-page";


export async function getStaticPaths() {
  const posts = getAllPosts()
  const postCount = getTotalPostCount(posts)
  const pageCount = getTotalPageCount(postCount)
  return {
    paths: [...Array(pageCount).keys()].map((pageNumber) => {
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
  const posts: Posts = getAllPosts()
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

    <Box>
      <PostsPage pagination={pagination}></PostsPage>
    </Box>
  )
}
