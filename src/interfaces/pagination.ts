import { Posts } from "./post";

export type PaginationProps = {
  currentPageNumber: number;
  postCountPerPage?: number;
  posts: Posts;
}

export type Pagination = {
  currentPageNumber: number
  postCountPerPage: number
  totalPostCount: number
  totalPageCount: number
  currentPagePosts: Posts
}
