import { Posts } from "../interfaces/post";
import { POST_COUNT_PER_PAGE } from "./constants";


class Pagination {
  readonly currentPageNumber: number = 1;
  readonly postCountPerPage: number = POST_COUNT_PER_PAGE;
  readonly totalPostCount: number = 0
  readonly posts: Posts = []
  readonly totalPageCount: number = 0
  readonly currentPagePosts: Posts = []

  constructor(currentPageNumber: number, posts: Posts, postCountPerPage: number = POST_COUNT_PER_PAGE) {
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
