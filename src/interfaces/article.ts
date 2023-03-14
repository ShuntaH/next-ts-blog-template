export interface ArticleMarkdownData {
  title: string
  status: boolean
  excerpt: string
}

export interface Article {
  title: string
  content: string
  status: boolean
  excerpt: string
  slug: string
}

export type Articles = Article[]
