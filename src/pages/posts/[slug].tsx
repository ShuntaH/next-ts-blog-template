import { getAllPosts, getPostBySlug, getSortedPosts } from 'lib/api'
import Head from 'next/head'
import { Box } from "@chakra-ui/react";
import { Post, Posts } from "interfaces/post";
import { useFuse } from "hooks/useFuse";
import Layout from "components/layouts/layout";
import PostBody from "components/post/post-body";
import PostHeader from "components/post/post-header";
import React from "react";


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
    // true だと fallback するために getStaticProps が動作する。はずだがしなかった。
    // undefined の props が FC に渡されてレンダーエラー。
    // false だと開発中に存在しないパスにアクセスしたら fallback しないのでそのままエラーページに行く。
    fallback: false
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
 * params contains the route parameters for pages using dynamic routes. For example, if the page name is [id].js , then params will look like { id: ... }. You should use this together with getStaticPaths, which we’ll explain later.
 * preview is true if the page is in the Preview Mode and undefined otherwise.
 * previewData contains the preview data set by setPreviewData.
 * locale contains the active locale (if enabled).
 * locales contains all supported locales (if enabled).
 * defaultLocale contains the configured default locale (if enabled).
 */
export async function getStaticProps({ params }: Context) {
  const allPosts = getAllPosts()
  const post = await getPostBySlug(params.slug) as Post
  // 記事が非公開だとそのパスは getStaticPath に存在しない。
  // fallback も false でそのままエラー用のページに飛ぶので null は来ない。

  return {
    props: {
      post,
      allPosts
    },
  }
}

type Props = {
  post: Post
  allPosts: Posts
}

export default function PostPage({ post, allPosts }: Props) {
  const fuse = useFuse(allPosts)
  return (
    <Layout fuse={fuse}>
      <Box as={"article"}>
        <Head>
          <title>{post.title}</title>
          <meta property="og:image" content={post.ogImageUrl}/>
        </Head>

        <PostHeader post={post} boxProps={{ marginBottom: 20, width: "full" }}/>
        <PostBody content={post.content} boxProps={{ width: "full" }}/>
      </Box>
    </Layout>
  )
}
