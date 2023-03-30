import { getAllPosts } from 'lib/api/post'
import { FilteredPosts } from 'interfaces/post'
import React from 'react'
import { getFilteredPosts } from 'lib/api/filterPost'
import { markdownToHtml } from 'lib/markdown/server'
import { useSeo } from 'hooks/useSeo'
import { NextSeo } from 'next-seo'
import { GetStaticPropsResult } from 'next'
import { getAllArticles, getArticleBySlug } from "lib/api/article";
import { Article } from "interfaces/article";
import ArticleDetail from "components/article/article-detail";

// 動的パスから記事のそれぞれのpathを作成する
export async function getStaticPaths() {
  return {
    paths: getAllArticles().map((article) => {
      return {
        params: {
          slug: article.slug
        }
      }
    }),
    fallback: false // そのままエラー用のページに飛ぶ
  }
}

interface Context {
  params: { slug: string }
}

interface Props {
  article: Article
  filteredPosts: FilteredPosts
}

export async function getStaticProps({ params }: Context): Promise<GetStaticPropsResult<Props>> {
  const filteredPosts = await getFilteredPosts(getAllPosts())
  const article = getArticleBySlug(params.slug) as Article
  article.content = await markdownToHtml(article.content)

  return {
    props: {
      article,
      filteredPosts
    }
  }
}

export default function ArticlePage({ article }: Props) {
  const seo = useSeo(
    article.title,
    article.excerpt,
    `/${article.slug}`
  )

  return (
    <>
      <NextSeo {...seo} />
      <ArticleDetail
        title={article.title}
        content={article.content}
      />
    </>
  )
}
