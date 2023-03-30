import { getAllPosts, getHtmlContentPosts, getPagination, getSortedPosts, getTotalPageCountRange } from 'lib/api/post'
import { Pagination } from 'interfaces/pagination'
import { FilteredPosts } from 'interfaces/post'
import PostList from 'components/post/postList/post-list'
import { getFilteredPosts } from 'lib/api/filterPost'
import { useSeo } from 'hooks/useSeo'
import { NextSeo } from 'next-seo'
import { GetStaticPropsResult } from 'next'

export async function getStaticPaths () {
  const allPosts = getAllPosts()
  const posts = getSortedPosts(allPosts)
  const range: number[] = getTotalPageCountRange(posts)

  return {
    paths: range.map((pageNumber) => {
      return {
        params: {
          page: String(pageNumber)
        }
      }
    }),
    fallback: false
  }
}

interface Context {
  params: {
    page: string
  }
}

interface Props {
  pagination: Pagination
  filteredPosts: FilteredPosts
}

export async function getStaticProps ({ params }: Context): Promise<GetStaticPropsResult<Props>> {
  const allPosts = getAllPosts()
  const filteredPosts = await getFilteredPosts(allPosts)
  const pagination: Pagination = getPagination({
    pageTitle: `記事一覧 ${params.page}ページ目`,
    currentPageNumber: Number(params.page),
    posts: await getHtmlContentPosts(getSortedPosts(allPosts)),
    basePaths: '/pages'
  })

  return {
    props: {
      pagination,
      filteredPosts
    }
  }
}

export default function PaginatedPage ({ pagination }: Props) {
  const seo = useSeo(
    `${pagination.pageTitle}`,
    `${pagination.pageTitle}です`,
    pagination.currentUrl
  )

  return (
    <>
      <NextSeo {...seo} />
      <PostList
        pagination={pagination}
        boxProps={{ minHeight: 'inherit' }}
      />
    </>
  )
}
