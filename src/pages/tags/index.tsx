import { getAllPosts, getAllTags } from "lib/api/post";
import { FilteredPosts } from "interfaces/post";
import { Box, Flex } from "@chakra-ui/react";
import Layout from "components/layouts/layout";
import TagLink from "components/foundations/tag-link";
import { useSetupFuse } from "hooks/useFuse";
import NextLink from "next/link";
import { getFilteredPosts } from "lib/api/filterPost";
import { NextSeo } from "next-seo";
import React from "react";
import { useSeo } from "hooks/useSeo";
import { GetStaticPropsResult } from "next";

type Props = {
  filteredPosts: FilteredPosts
  allTags: string[]
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
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

export default function Index({ allTags, filteredPosts }: Props) {
  const seo = useSeo(
    'タグ一覧',
    'このブログの記事のタグ一覧ページ。',
    '/tags'
  )

  const fuse = useSetupFuse(filteredPosts)

  return (
    <Layout fuse={fuse}>
      <NextSeo {...seo}/>
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
