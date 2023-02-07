import { getAllPosts, getPagination, getSortedPosts } from "../lib/api";
import { Posts } from "../interfaces/post";
import PostsPage from "../components/post/posts-page";
import { Pagination } from "../interfaces/pagination";
import { useMemo } from "react";
import { setupFullTextSearch } from "../lib/search";
import Layout from "../components/layouts/layout";


export const getStaticProps = async () => {
  const allPosts: Posts = getSortedPosts(getAllPosts())
  const pagination: Pagination = getPagination({
    currentPageNumber: 1,
    posts: allPosts,
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
  pagination: Pagination,
  allPosts: Posts
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ pagination, allPosts }: Props) {
  const fuse = useMemo(
    () => setupFullTextSearch(allPosts),
    [ allPosts ])

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      {/*<IntroCard/>*/}
      <PostsPage pagination={pagination}/>
    </Layout>
  )
}
