import Layout from "components/layouts/layout";
import { getArticleBySlug } from "lib/api/article";
import { Article } from "interfaces/article";
import { getAllPosts } from "lib/api/post";
import { Posts } from "interfaces/post";
import SimplePage from "components/common/simple-page";
import MarkdownBox from "components/markdown/markdown-box";
import { useSetupFuse } from "hooks/useFuse";
import { getFilteredPosts } from "lib/api/filterPost";
import { markdownToHtml } from "lib/markdown/server";
import { useSeo } from "hooks/useSeo";
import { NextSeo } from "next-seo";
import React from "react";


export const getStaticProps = async () => {
  const article = getArticleBySlug('disclaimer')
  const filteredPosts = await getFilteredPosts(getAllPosts())
  article.content = await markdownToHtml(article.content)
  return {
    props: { article, filteredPosts }
  }
}

type Props = {
  article: Article,
  allPosts: Posts
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ article, allPosts }: Props) {
  const fuse = useSetupFuse(allPosts)
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
