import { CardHeader, CardHeaderProps } from '@chakra-ui/react'
import { Post } from 'interfaces/post'
import PostMeta from 'components/post/common/post-meta'
import React from 'react'
import PostCardTitle from 'components/post/postList/post-card-title'

interface Props {
  post: Post
  cardHeaderProps?: CardHeaderProps
}

function PostCardHeader ({ post, cardHeaderProps }: Props) {
  return (
    <CardHeader
      as={'header'}
      paddingY={1}
      paddingX={0}
      {...cardHeaderProps}
    >
      <PostCardTitle>{post.title}</PostCardTitle>
      <PostMeta
        time={post.time}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        tags={post.tags}
        boxProps={{
          marginBottom: { base: 1, md: 1 },
          fontSize: { base: 'xs', md: 'sm' }
        }}
      />
    </CardHeader>
  )
}

export default PostCardHeader
