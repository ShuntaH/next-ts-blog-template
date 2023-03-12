import Layout from "components/layouts/layout";
import { getArticleBySlug } from "lib/api/article";
import { Article } from "interfaces/article";
import { getAllPosts } from "lib/api/post";
import { FilteredPosts } from "interfaces/post";
import SimplePage from "components/common/simple-page";
import MarkdownBox from "components/markdown/markdown-box";
import { useSetupFuse } from "hooks/useFuse";
import { getFilteredPosts } from "lib/api/filterPost";
import { markdownToHtml } from "lib/markdown/server";
import { useSeo } from "hooks/useSeo";
import { NextSeo } from "next-seo";
import React from "react";
import { GetStaticPropsResult } from "next";

type Props = {
  article: Article,
  filteredPosts: FilteredPosts
}

async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  // 検索対象データを取得する
  const filteredPosts = await getFilteredPosts(getAllPosts())

  const article = getArticleBySlug('disclaimer')
  if(!article) return { notFound: true }
  article.content = await markdownToHtml(article.content)

  return {
    props: { article, filteredPosts },
  }
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ article, filteredPosts }: Props) {
  const fuse = useSetupFuse(filteredPosts)
  const seo = useSeo(
    article.title,
    article.excerpt,
    '/disclaimer',
  )

  return (
    <Layout fuse={fuse}>
      <NextSeo {...seo} />
      <SimplePage title={article.title}>
        <MarkdownBox content={article.content}/>
      </SimplePage>
    </Layout>
  )
}
