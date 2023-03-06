// pages/404.js
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

export default function Custom404({filteredPosts}: Props) {

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
          {/*todo head*/}
          <CardHeader>404</CardHeader>
          <CardBody>Page Not Found</CardBody>
        </BlurCard>
      </Flex>
    </Layout>
  )
}
