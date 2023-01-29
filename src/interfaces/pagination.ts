import { Posts } from "./post";

interface PaginationProps {
  currentPageNumber: number;
  postCountPerPage: number;
  posts: Posts;
}

export type {
  PaginationProps
}
