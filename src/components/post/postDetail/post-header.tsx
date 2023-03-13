import { Box, BoxProps } from '@chakra-ui/react'
import { Post } from 'interfaces/post'
import PostTitle from 'components/post/postDetail/post-title'
import PostMeta from 'components/post/common/post-meta'
import { BreadcrumbItem } from 'interfaces/breadcrumb'
import Breadcrumb from 'components/common/breadcrumb'
import React, { useMemo } from 'react'

interface Props {
  post: Post
  boxProps?: Omit<BoxProps, 'as'>
}

function PostHeader ({ post, boxProps }: Props) {
  const breadCrumbItems: BreadcrumbItem[] = useMemo(
    () => [
      { title: 'home', href: '/' },
      { title: 'posts', href: '/' },
      { title: post.title, href: `/posts/${post.slug}` }
    ], [post.slug])

  return (
    <Box as={'header'} {...boxProps}>
      <Breadcrumb
        breadcrumbItems={breadCrumbItems}
        breadcrumbProps={{ marginBottom: 1, fontSize: 'sm' }}
      />
      <PostTitle marginBottom={2}>
        {post.title}
      </PostTitle>
      <PostMeta
        time={post.time}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        tags={post.tags}
      />
    </Box>
  )
}

export default PostHeader
