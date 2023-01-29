import { Posts } from "../interfaces/post";
import { POST_COUNT_PER_PAGE } from "./constants";
import { PaginationProps } from "../interfaces/pagination";


class Pagination {
  private readonly currentPageNumber: number = 1;
  private readonly postCountPerPage: number = POST_COUNT_PER_PAGE;
  private readonly totalPostCount: number = 0
  private readonly posts: Posts | null = null
  private readonly totalPageCount: number = 0
  private readonly currentPagePosts: Posts = []

  constructor({ currentPageNumber, postCountPerPage = POST_COUNT_PER_PAGE, posts }: PaginationProps) {
    this.currentPageNumber = currentPageNumber
    this.postCountPerPage = postCountPerPage
    this.posts = posts
    this.totalPostCount = posts.length;
    this.totalPageCount = Math.ceil(this.totalPostCount / postCountPerPage)
    const startIndex = (currentPageNumber - 1) * this.postCountPerPage;
    this.currentPagePosts = this.posts!.slice(startIndex, startIndex + postCountPerPage);
  }
}

export default Pagination
