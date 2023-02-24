import { getAllPosts, getAllTags } from "lib/api/post";
import { FilteredPosts } from "interfaces/post";
import { Box, Flex } from "@chakra-ui/react";
import Layout from "components/layouts/layout";
import TagLink from "components/foundations/tag-link";
import { useSetupFuse } from "hooks/useFuse";
import NextLink from "next/link";
import { getFilteredPosts } from "lib/api/filterPost";


export async function getStaticProps() {
  const allPosts = getAllPosts()
  const filteredPosts = await getFilteredPosts(allPosts)
  const allTags = getAllTags(allPosts)
  return {
    props: {
      filteredPosts,
      allTags
    }
  }
}

type Props = {
  filteredPosts: FilteredPosts
  allTags: string[]
}

export default function Index({ allTags, filteredPosts }: Props) {
  const fuse = useSetupFuse(filteredPosts)

  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <Box position={"relative"}>
        <Flex
          flexWrap={"wrap"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={{base: 2, md: 4}}
        >
          {allTags.map((tag, index) => (
            <TagLink
              key={index}
              tagLinkProps={{
                fontSize: "md",
                size: "lg",
                href:`/tags/${tag}/1`,
                as: NextLink
            }}
            >
              {tag}
            </TagLink>
          ))}
        </Flex>
      </Box>
    </Layout>
  )
}
