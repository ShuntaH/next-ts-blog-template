import { Box } from "@chakra-ui/react";
import { getAllPosts, getPagination } from "../lib/api";
import IntroCard from "../components/intro-card";
import { Posts } from "../interfaces/post";
import PostsPage from "../components/post/posts-page";
import { Pagination } from "../interfaces/pagination";

type Params = {
  slug: string
}

export const getStaticProps = async ({ slug }: Params) => {
  const posts: Posts = getAllPosts()
  const pagination: Pagination = getPagination({
    currentPageNumber: 1,
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
export default function Index({ pagination }: Props) {
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>

    <Box>
      <IntroCard/>
      <PostsPage pagination={pagination}></PostsPage>
    </Box>
  )
}
