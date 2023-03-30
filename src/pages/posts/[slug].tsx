import { getAllPosts, getPostBySlug } from 'lib/api/post'
import { FilteredPosts, Post } from 'interfaces/post'
import React from 'react'
import PostDetail from 'components/post/postDetail/post-detail'
import { getFilteredPosts } from 'lib/api/filterPost'
import { markdownToHtml } from 'lib/markdown/server'
import { useSeo } from 'hooks/useSeo'
import { NextSeo } from 'next-seo'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'

/**
 * Next.js は動的パラメーターをもとに全てのパスをレンダリングする。
 * これによって全ての記事を動的に作成できる。
 */
export function getStaticPaths (): GetStaticPathsResult {
  return {
    paths: getAllPosts().map((post) => {
      return { params: { slug: post.slug } }
    }),
    fallback: false // そのままエラー用のページに飛ぶ
  }
}

interface Context {
  params: { slug: string }
}

interface Props {
  post: Post
  filteredPosts: FilteredPosts
}

export async function getStaticProps ({ params }: Context): Promise<GetStaticPropsResult<Props>> {
  const filteredPosts = await getFilteredPosts(getAllPosts())
  const post = getPostBySlug(params.slug) as Post
  post.content = await markdownToHtml(post.content)

  return {
    props: {
      post,
      filteredPosts
    }
  }
}

export default function PostPage ({ post }: Props) {
  const seo = useSeo(
    post.title,
    post.excerpt,
    `/posts/${post.slug}`
  )

  return (
    <>
      <NextSeo {...seo} />
      <PostDetail post={post}/>
    </>
  )
}
