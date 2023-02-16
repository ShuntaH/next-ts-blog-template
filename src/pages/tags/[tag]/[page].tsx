import {
  getAllPosts,
  getAllTags,
  getPagination,
  getSortedPosts,
  getTaggedPosts,
  getTotalPageCountRange
} from "lib/api";
import { Pagination } from "interfaces/pagination";
import { Posts } from "interfaces/post";
import Layout from "components/layouts/layout";
import PostsPage from "components/post/posts-page";
import { useFuse } from "hooks/useFuse";

export async function getStaticPaths() {
  const posts = getSortedPosts(getAllPosts())
  const tags = getAllTags(posts)
  let paths: object[] = []

  tags.forEach((tag) => {
    // タグのパスを動的に作成するためにループ

    const taggedPosts = getTaggedPosts(posts, tag)
    // あるタグを持っている記事を全て取得する

    const range = getTotalPageCountRange(taggedPosts)
    // あるタグを持っている記事の数を取得する

    const pages = range.map((pageNumber) => String(pageNumber))
    // 記事数からページ数を取得する

    pages.forEach((pageNumber) => {
      // このタグの中でパジネーションを作成するために、ページのパスを動的に作成する
      paths = [
        ...paths,
        {
          params: {
            tag: tag,
            page: pageNumber
          }
        }
      ]
    })
    return paths
  })

  return {
    paths,
    fallback: false,
  }
}

type Context = {
  params: {
    tag: string,
    page: string
  }
}

export const getStaticProps = async ({ params }: Context) => {
  const allPosts = getAllPosts()
  const taggedPosts = allPosts.filter((post) => post.tags.includes(params.tag))
  const pagination: Pagination = getPagination({
    currentPageNumber: Number(params.page),
    posts: getSortedPosts(taggedPosts),
    basePaths: `/tags/${params.tag}`,
  })

  return {
    props: {
      allPosts,
      pagination,
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
  const fuse = useFuse(allPosts)
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <PostsPage
        pagination={pagination}
        boxProps={{ minHeight: "inherit" }}
      />
    </Layout>
  )
}
