import { getAllPosts, getHtmlContentPosts, getPagination, getSortedPosts } from 'lib/api/post'
import { FilteredPosts, Posts } from 'interfaces/post'
import { Pagination } from 'interfaces/pagination'
import PostList from 'components/post/postList/post-list'
import { getFilteredPosts } from 'lib/api/filterPost'
import { GetStaticPropsResult } from 'next'

interface Props {
  pagination: Pagination
  filteredPosts: FilteredPosts
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const allPosts: Posts = getAllPosts()

  const filteredPosts = await getFilteredPosts(allPosts)

  const pagination: Pagination = getPagination({
    pageTitle: 'TOP',
    currentPageNumber: 1,
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

export default function Index({ pagination }: Props) {
  /*
  // このページは top page なので デフォルト設定があるため、
  // seo は設定は不要。
   */
  return <PostList pagination={pagination}/>
}
