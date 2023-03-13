import { Posts } from 'interfaces/post'

export interface PaginationProps {
  currentPageNumber: number
  postCountPerPage?: number
  posts: Posts
  basePaths: string
  pageTitle: string
}

export interface Pagination {
  currentPageNumber: number
  postCountPerPage: number
  totalPostCount: number
  totalPageCount: number
  currentPagePosts: Posts
  nextPageHref: string | null
  prevPageHref: string | null
  pageTitle: string
  currentUrl: string
}
