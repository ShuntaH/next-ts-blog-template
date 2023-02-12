import { SearchKeys } from "interfaces/search";

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

// 検索用の記事のデータ
export type FilteredPost = Pick<Post, SearchKeys>
export type FilteredPosts = FilteredPost[]

export type Author = {
  name: string
  picture: string
}

