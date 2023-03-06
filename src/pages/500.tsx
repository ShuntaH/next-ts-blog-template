import { CardBody, CardHeader, Flex } from "@chakra-ui/react";
import React from "react";
import { getAllPosts } from "lib/api/post";
import { getFilteredPosts } from "lib/api/filterPost";
import { FilteredPosts } from "interfaces/post";
import { useSetupFuse } from "hooks/useFuse";
import Layout from "components/layouts/layout";
import BlurCard from "components/common/blur-card";


export async function getStaticProps() {
  return {
    props: {
      filteredPosts: await getFilteredPosts(getAllPosts())
    },
  }
}

type Props = {
  filteredPosts: FilteredPosts
}

export default function Custom500({filteredPosts}: Props) {

  const fuse = useSetupFuse(filteredPosts)
  return (
    // ページ固有のhead内容を設定したい時
    // <Head>
    //   <title>hskpg blog</title>
    // </Head>
    <Layout fuse={fuse}>
      <Flex justifyContent={"center"}>
        <BlurCard
          maxW={'lg'}
          minW={'md'}
          textAlign={"center"}
        >
          <CardHeader>500</CardHeader>
          <CardBody>Server-side error occurred</CardBody>
        </BlurCard>
      </Flex>
    </Layout>
  )
}
