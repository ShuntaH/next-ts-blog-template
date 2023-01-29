import { Box } from "@chakra-ui/react";
import { getAllPosts } from "../lib/api";
import HeroCard from "../components/intro-card";
import { Posts } from "../interfaces/post";
import PostsPage from "../components/post/posts-page";
import { useRouter } from "next/router";
import Pagination from "../lib/pagination";

type Params = {
  slug: string
}

export const getStaticProps = async ({ slug }: Params) => {
  const posts: Posts = getAllPosts()
  const pagination: Pagination = new Pagination(1, posts)

  return {
    props: {
      pagination
    },
  }
}

type Props = {
  posts: Posts
  postCount: number
}
/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ posts, postCount }: Props) {


  const router = useRouter()
  if (router.pathname === router.basePath) {
    const currentPageNumber = 1
    const current: Page  = { href: router.basePath, pageNumber: 1}
    const next: Page = {
      href: `/pages/${currentPageNumber + 1}`,
      pageNumber: currentPageNumber + 1
    }
    const prev: Page = {
      href: null,
      pageNumber: currentPageNumber - 1
    }

    const p: Paginator = {
      pageCount:
    }

  }
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
