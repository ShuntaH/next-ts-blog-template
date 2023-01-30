import { Author } from "./author";

export type MarkdownData = {
  title: string
  date: string
  excerpt: string
  author: Author
  ogImage: { url: string }
  coverImage: string
  tags: string[]
}

export type Post = {
  title: string
  date: string
  slug: string
  excerpt: string
  author: Author
  content: string
  ogImage: { url: string }
  coverImage: string
  time: string
  tags: string[]
}

export type Posts = Post[]
