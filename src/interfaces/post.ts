import Author from "./author";

type Post = {
  title: string,
  date: string,
  slug: string,
  excerpt: string;
  author: Author,
  content: string,
  ogImage: { url: string },
  coverImage: string,
  time: string,
  tags: string[]
}

type Posts = Post[]


export type {
  Post,
  Posts
}
