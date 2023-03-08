import { Posts } from "interfaces/post";

export type PaginationProps = {
  currentPageNumber: number;
  postCountPerPage?: number;
  posts: Posts;
  basePaths: string,
  pageTitle: string,
}

export type Pagination = {
  currentPageNumber: number
  postCountPerPage: number
  totalPostCount: number
  totalPageCount: number
  currentPagePosts: Posts,
  nextPageHref: string | null
  prevPageHref: string | null
  pageTitle: string
  currentUrl: string
}
