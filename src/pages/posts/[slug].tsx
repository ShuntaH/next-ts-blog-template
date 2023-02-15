import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPosts, getPostBySlug, getSortedPosts } from 'lib/api'
import Head from 'next/head'
import { Box, Card } from "@chakra-ui/react";
import { STYLES } from "lib/constants";
import { Post, Posts } from "interfaces/post";
import { useFuse } from "hooks/useFuse";
import markdownToHtml from "lib/markdownToHtml";
import Layout from "components/layouts/layout";
import PostTitle from "components/post/post-title";
import PostBody from "components/post/post-body";
import PostHeader from "components/post/post-header";


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
    fallback: false,
  }
}

type Context = {
  params: {
    slug: string
  },
  preview?: boolean
  previewData?: unknown
  locale?: string
  locales?: string[]
  defaultLocale?: string
}

/**
 *  この関数はサーバー側のビルド時に呼び出されます。
 *  クライアント側では呼び出されないので、
 *  直接データベースクエリを実行できます。
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
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {notFound: true}
  }
  // 非公開中のため null の可能性があるがサーバーサイドでビルドする時にのみ呼ばれて、それは存在する
  // マークダウンのみしか呼ばないので実質エラーは開発中しか起きない。
  // クライアントサイドでのみエラー処理をすればよい。
  post.content = await markdownToHtml(post.content || '')

  return {
    props: {
      post,
      allPosts
    },
  }
}

type Props = {
  post: Post
  morePosts: Posts
  allPosts: Posts
  preview?: boolean
}

export default function PostPage({ post, allPosts, preview }: Props) {
  const fuse = useFuse(allPosts)

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    // todo 共通のエラーページを作る
    return <ErrorPage statusCode={404}/>
  }

  return (
    <Layout fuse={fuse}>
      {
        router.isFallback ? (
          <Card
            as={"div"}
            position={"relative"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={`${STYLES.gap} 0 calc(${STYLES.gap} * 2)`}
            overflow={"hidden"}
            boxShadow={"none"}
          >
            <PostTitle headingProps={{ textAlign: "center" }}>
              {post.title}
            </PostTitle>
          </Card>
        ) : (
          <Box as={"article"}>
            <Head>
              <title>{post.title}</title>
              <meta property="og:image" content={post.ogImageUrl}/>
            </Head>
            <PostHeader post={post} boxProps={{ marginBottom: 20, width: "full" }}/>
            <PostBody content={post.content} boxProps={{width: "full"}}/>
          </Box>
        )
      }
    </Layout>
  )
}
