import { Posts } from "./post";

type PageNavigator = {
  href: string | null
  label?: string
  pageNumber: number
}

type Page = {
  posts: Posts
  current: PageNavigator
  next: PageNavigator
  prev: PageNavigator
}

type Pagination = {
  currentPageNumber: number
  currentPage: Page
  postCountPerPage: number
  pageCount: number
}

type PaginationProps = {
  allPosts: Posts
  currentPageNumber: number
  postCountPerPage: number
}

export type {
  Pagination,
  PaginationProps,
  Page,
  PageNavigator,
}
