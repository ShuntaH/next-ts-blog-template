import { getAllPosts, getHtmlContentPosts, getPagination, getSortedPosts, getTotalPageCountRange } from "lib/api/post";
import { Pagination } from "interfaces/pagination";
import { FilteredPosts } from "interfaces/post";
import Layout from "components/layouts/layout";
import PostList from "components/post/postList/post-list";
import { useSetupFuse } from "hooks/useFuse";
import { getFilteredPosts } from "lib/api/filterPost";
import { useSeo } from "hooks/useSeo";
import { NextSeo } from "next-seo";


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

export async function getStaticProps({ params }: Context){
  const allPosts = getAllPosts()
  const filteredPosts = await getFilteredPosts(allPosts)
  const pagination: Pagination = getPagination({
    pageTitle: `記事一覧${params.page}ページ目`,
    currentPageNumber: Number(params.page),
    posts: await getHtmlContentPosts(getSortedPosts(allPosts)),
    basePaths: '/pages',
  })

  return {
    props: {
      pagination,
      filteredPosts
    },
  }
}

type Props = {
  pagination: Pagination
  filteredPosts: FilteredPosts
}

export default function PaginatedPage({ pagination, filteredPosts }: Props) {
  const seo = useSeo(
    `${pagination.pageTitle}`,
    `${pagination.pageTitle}です`,
    pagination.currentUrl
  )
  const fuse = useSetupFuse(filteredPosts)

  return (
    <Layout fuse={fuse}>
      <NextSeo {...seo} />
      <PostList
        pagination={pagination}
        boxProps={{minHeight: "inherit"}}
      />
    </Layout>
  )
}
