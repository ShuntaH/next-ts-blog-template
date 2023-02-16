import { SearchKeys } from "interfaces/search";

export type MarkdownData = {
  title: string
  publishedAt: string
  updatedAt: string
  status: boolean
  excerpt: string
  ogImageUrl: string
  tags: string[]
}

// マークダウンを取り込む時に内容の検証をする。そのときの結果のデータオブジェクト
export type MarkdownDataValidationResult = {
  success: boolean
  message: string
}

export type Post = {
  title: string
  publishedAt: string
  updatedAt: string
  slug: string
  status: boolean
  excerpt: string
  content: string
  ogImageUrl: string
  time: string
  tags: string[]
}

export type Posts = Post[]

// 検索用の記事のデータ
export type FilteredPost = Pick<Post, SearchKeys>
export type FilteredPosts = FilteredPost[]
