// pages/404.js
import React from "react";
import { getAllPosts } from "lib/api/post";
import { getFilteredPosts } from "lib/api/filterPost";
import { FilteredPosts } from "interfaces/post";
import { useSetupFuse } from "hooks/useFuse";
import Layout from "components/layouts/layout";
import ErrorCard from "components/common/error-card";
import { GetStaticPropsResult } from "next";


type Props = { filteredPosts: FilteredPosts }

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      filteredPosts: await getFilteredPosts(getAllPosts())
    },
  }
}

export default function Custom404({filteredPosts}: Props) {
  const fuse = useSetupFuse(filteredPosts)
  return (
    <Layout fuse={fuse}>
      <ErrorCard
        status_code={'404'}
        error_messages={'Page Not Found'}
      />
    </Layout>
  )
}
