import { getAllPosts, getPostBySlug, getSortedPosts } from 'lib/api/post'
import { FilteredPost, FilteredPosts, Post } from "interfaces/post";
import React from "react";
import Fuse from "fuse.js";
import Layout from "components/layouts/layout";
import { useSetupFuse } from "hooks/useFuse";
import Head from "next/head";
import PostDetail from "components/post/postDetail/post-detail";
import { getFilteredPosts } from "lib/api/filterPost";
import { markdownToHtml } from "lib/markdown/server";


/**
 * Next.js は動的パラメーターをもとに全てのパスをレンダリングする。
 * これによって全ての記事を動的に作成できる。
 */
export async function getStaticPaths() {
  const posts = getSortedPosts(getAllPosts())
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        }
      }
    }),
    fallback: false // そのままエラー用のページに飛ぶ
  }
}

type Context = {
  params: {
    slug: string
  }
}

/**
 *  この関数はサーバー側のビルド時に呼び出されます。
 *  クライアント側では呼び出されない。
 *  開発中はリクエストのたびに実行されますが、サーバーサイドで実行されるので console.log は
 *  ブラウザでは確認できません。npm run dev のコンソールで確認してください。
 * @param params ルートパラメーター [slug].tsx
 *
 * https://nextjs.org/docs/api-reference/data-fetching/get-static-props
 * */
export async function getStaticProps({ params }: Context) {
  const filteredPosts = await getFilteredPosts(getAllPosts())
  const post = getPostBySlug(params.slug) as Post
  post.content = await markdownToHtml(post.content)

  return {
    props: {
      post,
      filteredPosts
    },
  }
}

type Props = {
  post: Post
  filteredPosts: FilteredPosts
}

export default function PostPage({ post, filteredPosts }: Props) {
  const fuse: Fuse<FilteredPost> = useSetupFuse(filteredPosts)

  return (
    <Layout fuse={fuse}>
      <Head>
        <title>{post.title}</title>
        <meta property="og:image" content={post.ogImageUrl}/>
      </Head>
      <PostDetail post={post}/>
    </Layout>
  )
}
