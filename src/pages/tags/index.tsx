import { getAllPosts, getAllTags } from "lib/api";
import { Posts } from "interfaces/post";
import { useMemo } from "react";
import { setupFullTextSearch } from "lib/search";
import { Box, HStack, Tag } from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "components/layouts/layout";


type Context = {
  params: {
    page: string
  },
  preview?: boolean
  previewData?: unknown
  locale?: string
  locales?: string[]
  defaultLocale?: string
}


export const getStaticProps = async ({params}: Context) => {
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
export default function PaginatedPage({ allPosts, allTags }: Props) {
  const fuse = useMemo(
    () => setupFullTextSearch(allPosts),
    [ allPosts ])

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <Box position={"relative"}>
        <HStack spacing={4}>
          {allTags.map((tag, index) => (
            <Tag
              as={NextLink}
              href={`/tags/${tag}/1`}
              key={index}
              variant='outline'
              colorScheme='purple'
            >
              {tag}
            </Tag>
          ))}
        </HStack>
      </Box>
    </Layout>
  )
}
