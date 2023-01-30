import Post from "../lib/post";
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
export type Posts = Post[]
