import { Box } from "@chakra-ui/react";
import { getAllPosts, getPagination, getSortedPosts } from "../lib/api";
import IntroCard from "../components/intro-card";
import { Posts } from "../interfaces/post";
import PostsPage from "../components/post/posts-page";
import { Pagination } from "../interfaces/pagination";
import { useEffect } from "react";


export const getStaticProps = async () => {
  const posts: Posts = getSortedPosts(getAllPosts())
  const pagination: Pagination = getPagination({
    currentPageNumber: 1,
    basePaths: '/pages',
    posts
  })
  // todo contextからfuseを受け取る

  return {
    props: {
      pagination,

    },
  }
}

type Props = {
  pagination: Pagination,
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ pagination }: Props) {
  useEffect(() => {
    // const fuse = setupFullTextSearch(pagination.allPosts)
    // const result = fuse.search('sample')
    // console.log('search', result)
  })

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
