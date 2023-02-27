import {
  getAllPosts,
  getAllTags,
  getHtmlContentPosts,
  getPagination,
  getSortedPosts,
  getTaggedPosts,
  getTotalPageCountRange
} from "lib/api/post";
import { Pagination } from "interfaces/pagination";
import { FilteredPosts } from "interfaces/post";
import Layout from "components/layouts/layout";
import PostList from "components/post/postList/post-list";
import { useSetupFuse } from "hooks/useFuse";
import { getFilteredPosts } from "lib/api/filterPost";

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

export async function getStaticProps({ params }: Context) {
  const allPosts = getAllPosts()
  const taggedPosts = allPosts.filter((post) => post.tags.includes(params.tag))
  const pagination: Pagination = getPagination({
    currentPageNumber: Number(params.page),
    posts: await getHtmlContentPosts(getSortedPosts(taggedPosts)),
    basePaths: `/tags/${params.tag}`,
  })
  const filteredPosts = await getFilteredPosts(allPosts)

  return {
    props: {
      filteredPosts,
      pagination,
    },
  }
}

type Props = {
  pagination: Pagination
  filteredPosts: FilteredPosts
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function PaginatedPage({ pagination, filteredPosts }: Props) {
  const fuse = useSetupFuse(filteredPosts)
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <PostList
        pagination={pagination}
        boxProps={{ minHeight: "inherit" }}
      />
    </Layout>
  )
}
