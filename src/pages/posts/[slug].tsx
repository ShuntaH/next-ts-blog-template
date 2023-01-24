import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post/post-body'
import PostHeader from '../../components/post/post-header'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import PostTitle from '../../components/post/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { Box } from "@chakra-ui/react";

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }

  return (
    <Box>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title}
              </title>
              <meta property="og:image" content={post.ogImage.url}/>
            </Head>

            <PostHeader
              title={post.title}
              time={post.time}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
            <PostBody content={post.content}/>
          </article>
        </>
      )}
    </Box>
  )
}

type Params = {
  params: {
    slug: string
  }
}

/**
 *  この関数はサーバー側のビルド時に呼び出されます。
 *  クライアント側では呼び出されないので、
 *  直接データベースクエリを実行できます。
 *  開発中はリクエストのたびに実行されますが、サーバーサイドで実行されるので console.log は
 *  ブラウザでは確認できません。npm run dev のコンソールで確認してください。
 * @param params ルートパラメーター [slug].tsx
 */
export async function getStaticProps({ params }: Params) {
  // console.log('params', params)  { slug: 'dynamic-routing' }

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'time'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

/**
 * Next.js は動的パラメーターをもとに全てのパスをレンダリングする。
 * これによって全ての記事を動的に作成できる。
 */
export async function getStaticPaths() {
  const posts = getAllPosts([ 'slug' ])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
