// pages/404.js
import React from 'react'
import { getAllPosts } from 'lib/api/post'
import { getFilteredPosts } from 'lib/api/filterPost'
import { FilteredPosts } from 'interfaces/post'
import ErrorCard from 'components/common/error-card'
import { GetStaticPropsResult } from 'next'

interface Props {filteredPosts: FilteredPosts}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      filteredPosts: await getFilteredPosts(getAllPosts())
    }
  }
}

export default function Custom404() {
  return (
    <ErrorCard
      statusCode={'404'}
      errorMessage={'Page Not Found'}
    />
  )
}
