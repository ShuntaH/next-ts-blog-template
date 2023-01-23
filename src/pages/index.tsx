import Post from '../interfaces/post'
import { Text } from "@chakra-ui/react";
import { getAllPosts } from "../lib/api";
import HeroCard from "../components/cards/hero-card";
import PostCards from "../components/cards/post-cards";


type Props = {
  allPosts: Post[]
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ allPosts }: Props) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>

    <>
      <HeroCard/>
      {
        allPosts.length > 0 ?
          <PostCards posts={allPosts}/>
          :
          <Text align={"center"}>
            There is no post yet.
          </Text>
      }
    </>
  )
}
