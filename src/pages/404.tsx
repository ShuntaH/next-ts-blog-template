// pages/404.js
import React from "react";
import { getAllPosts } from "lib/api/post";
import { getFilteredPosts } from "lib/api/filterPost";
import { FilteredPosts } from "interfaces/post";
import { useSetupFuse } from "hooks/useFuse";
import Layout from "components/layouts/layout";
import ErrorCard from "components/common/error-card";


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

const error_messages = 'Page Not Found'
const status_code = '404'

export default function Custom404({filteredPosts}: Props) {
  const fuse = useSetupFuse(filteredPosts)
  return (
    <Layout fuse={fuse}>
      <ErrorCard
        status_code={status_code}
        error_messages={error_messages}
      />
    </Layout>
  )
}
