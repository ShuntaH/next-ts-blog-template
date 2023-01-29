import { Posts } from "../interfaces/post";
import { POST_COUNT_PER_PAGE } from "./constants";

type PaginationProps = {
  currentPage: number;
  postCountPerPage?: number;
  posts: Posts;
}

class Pagination {
  currentPage: number = 1;
  postCountPerPage: number = POST_COUNT_PER_PAGE;
  totalPostCount: number
  posts: Posts;

  constructor({ currentPage, postCountPerPage, posts }: PaginationProps) {
    this.currentPage = currentPage;
    if (postCountPerPage) {
      this.postCountPerPage = postCountPerPage;
    }
    this.totalPostCount = posts.length;
    this.posts = posts;
  }

  /**
   * ページ数を取得する
   */
  get getTotalPageCount(): number {
    return Math.ceil(this.totalPostCount / this.postCountPerPage)
  }

  /**
   * 指定したページが含む記事を取得する
   */
  get getCurrentPagePosts(): Posts {
    const startIndex = (this.currentPage - 1) * this.postCountPerPage;
    return this.posts.slice(startIndex, startIndex + this.postCountPerPage);
  }
}

export default Pagination
