import React from 'react'
import { getAllPosts } from 'lib/api/post'
import { getFilteredPosts } from 'lib/api/filterPost'
import ErrorCard from 'components/common/error-card'

export async function getStaticProps() {
  return {
    props: {
      filteredPosts: await getFilteredPosts(getAllPosts())
    }
  }
}

export default function Custom500() {
  return <ErrorCard
    statusCode={'500'}
    errorMessage={'Server-side error occurred'}
  />
}
