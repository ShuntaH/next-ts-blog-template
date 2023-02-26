import { getAllPosts, getPagination, getSortedPosts } from "lib/api/post";
import { FilteredPosts, Posts } from "interfaces/post";
import { Pagination } from "interfaces/pagination";
import Layout from "components/layouts/layout";
import PostList from "components/post/postList/post-list";
import { useSetupFuse } from "hooks/useFuse";
import { getFilteredPosts } from "lib/api/filterPost";


export async function getStaticProps () {
  const allPosts: Posts = getAllPosts()
  const pagination: Pagination = getPagination({
    currentPageNumber: 1,
    posts: getSortedPosts(allPosts),
    basePaths: '/pages',
  })
  const filteredPosts = await getFilteredPosts(allPosts)

  return {
    props: {
      pagination,
      filteredPosts
    },
  }
}

type Props = {
  pagination: Pagination,
  filteredPosts: FilteredPosts
}

export default function Index({ pagination, filteredPosts }: Props) {
  const fuse = useSetupFuse(filteredPosts)
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <PostList pagination={pagination}/>
    </Layout>
  )
}
