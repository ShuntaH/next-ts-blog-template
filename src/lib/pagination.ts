export default {}

class Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  posts: BlogPost[];

  constructor(currentPage: number, itemsPerPage: number, posts: Post[]) {
    this.currentPage = currentPage;
    this.itemsPerPage = itemsPerPage;
    this.totalItems = posts.length;
    this.posts = posts;
  }

  getCurrentPagePosts(): BlogPost[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.posts.slice(startIndex, startIndex + this.itemsPerPage);
  }
}

const posts: BlogPost[] = [
  { title: "Post 1", content: "Content 1" },
  { title: "Post 2", content: "Content 2" },
  { title: "Post 3", content: "Content 3" },
  // ...
];

const pagination = new Pagination(1, 2, posts);
console.log(pagination.getCurrentPagePosts());
