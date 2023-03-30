import {
  getAllPosts,
  getAllTags,
  getHtmlContentPosts,
  getPagination,
  getSortedPosts,
  getTaggedPosts,
  getTotalPageCountRange
} from 'lib/api/post'
import { Pagination } from 'interfaces/pagination'
import { FilteredPosts } from 'interfaces/post'
import PostList from 'components/post/postList/post-list'
import { getFilteredPosts } from 'lib/api/filterPost'
import { useSeo } from 'hooks/useSeo'
import { NextSeo } from 'next-seo'
import { GetStaticPropsResult } from 'next'

export async function getStaticPaths () {
  const posts = getSortedPosts(getAllPosts())
  const tags = getAllTags(posts)
  let paths: object[] = []

  // todo markdown タグを作るとビルドの時感知されない不具合がある
  tags.forEach((tag) => {
    // タグのパスを動的に作成するためにループ
    console.log('tag', tag)
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
            tag,
            page: pageNumber
          }
        }
      ]
    })
    return paths
  })

  return {
    paths,
    fallback: false
  }
}

interface Context {
  params: {
    tag: string
    page: string
  }
}

interface Props {
  pagination: Pagination
  filteredPosts: FilteredPosts
}

export async function getStaticProps ({ params }: Context): Promise<GetStaticPropsResult<Props>> {
  const allPosts = getAllPosts()

  const taggedPosts = allPosts.filter((post) => post.tags.includes(params.tag))

  const pagination: Pagination = getPagination({
    pageTitle: `${params.tag}タグの記事一覧 ${params.page}ページ目`,
    currentPageNumber: Number(params.page),
    posts: await getHtmlContentPosts(getSortedPosts(taggedPosts)),
    basePaths: `/tags/${params.tag}`
  })

  const filteredPosts = await getFilteredPosts(allPosts)

  return {
    props: {
      filteredPosts,
      pagination
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
