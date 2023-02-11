import { getAllPosts } from "../../lib/api";
import Layout from "../../components/layouts/layout";
import { Posts } from "../../interfaces/post";
import { useMemo } from "react";
import { setupFullTextSearch } from "../../lib/search";
import { Box, HStack, Tag } from "@chakra-ui/react";


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
  return {
    props: {
      allPosts
    },
  }
}

type Props = {
  allPosts: Posts
}
/**
 * This is the page that is rendered when the user visits the root of your application.
 */
export default function PaginatedPage({ allPosts }: Props) {
  const fuse = useMemo(
    () => setupFullTextSearch(allPosts),
    [ allPosts ])

  // post にタグは複数ある可能性があるのでそれぞれの post の tags に flat をかけながら
  // 重複を消す。
  const allTags = useMemo(
    () => [...new Set(allPosts.flatMap((post) => post.tags))],
    [allPosts]
  )

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
              key={index}
              variant='subtle'
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
