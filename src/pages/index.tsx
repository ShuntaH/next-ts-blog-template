import { getAllPosts, getPagination, getSortedPosts } from "lib/api";
import { Posts } from "interfaces/post";
import { Pagination } from "interfaces/pagination";
import Layout from "components/layouts/layout";
import PostCardsPage from "components/post/post-cards-page";
import { useFuse } from "hooks/useFuse";


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
  const fuse = useFuse(allPosts)
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      {/*<IntroCard/>*/}
      <PostCardsPage pagination={pagination}/>
    </Layout>
  )
}
