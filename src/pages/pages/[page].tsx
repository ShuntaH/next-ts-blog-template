import { getAllPosts, getPagination, getSortedPosts, getTotalPageCountRange } from "lib/api/post";
import { Pagination } from "interfaces/pagination";
import { Posts } from "interfaces/post";
import Layout from "components/layouts/layout";
import PostList from "components/post/postList/post-list";
import { useFuse } from "hooks/useFuse";


export async function getStaticPaths() {
  const allPosts = getAllPosts()
  const posts = getSortedPosts(allPosts)
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
  }
}

export const getStaticProps = async ({ params }: Context) => {
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

export default function PaginatedPage({ pagination, allPosts }: Props) {
  const fuse = useFuse(allPosts)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <PostList
        pagination={pagination}
        boxProps={{minHeight: "inherit"}}
      />
    </Layout>
  )
}
