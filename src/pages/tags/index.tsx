import { getAllPosts, getAllTags } from "lib/api";
import { Posts } from "interfaces/post";
import { Box, HStack } from "@chakra-ui/react";
import Layout from "components/layouts/layout";
import TagLink from "components/foundations/tag-link";
import { useFuse } from "hooks/useFuse";
import NextLink from "next/link";


export const getStaticProps = async () => {
  const allPosts = getAllPosts()
  const allTags = getAllTags(allPosts)
  return {
    props: {
      allPosts,
      allTags
    },
  }
}

type Props = {
  allPosts: Posts
  allTags: string[]
}

/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function Index({ allPosts, allTags }: Props) {
  const fuse = useFuse(allPosts)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <Box position={"relative"}>
        <HStack spacing={4}>
          {allTags.map((tag, index) => (
            <TagLink
              key={index}
              href={`/tags/${tag}/1`}
              as={NextLink}
            >
              {tag}
            </TagLink>
          ))}
        </HStack>
      </Box>
    </Layout>
  )
}
