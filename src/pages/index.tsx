import { Box } from "@chakra-ui/react";
import { getAllPosts } from "../lib/api";
import HeroCard from "../components/intro-card";
import { Posts } from "../interfaces/post";
import PostsPage from "../components/post/posts-page";
import { useRouter } from "next/router";

type Params = {
  slug: string
}

export const getStaticProps = async ({ slug }: Params) => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'time',
    'tags'
  ])

  return {
    props: { posts },
  }
}

type Props = {
  posts: Posts
}
/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ posts }: Props) {
  console.log('posts', posts)
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const router = useRouter()
  const currentPathname = router.pathname
  console.log('router', router)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>

    <Box>
      <HeroCard/>
      <PostsPage posts={posts}></PostsPage>
    </Box>
  )
}
