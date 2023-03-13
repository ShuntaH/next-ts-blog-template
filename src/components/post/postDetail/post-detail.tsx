import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { Post } from 'interfaces/post'
import PostHeader from 'components/post/postDetail/post-header'
import PostBody from 'components/post/postDetail/post-body'

interface Props {
  post: Post
  boxProps?: BoxProps
}

function PostDetail ({ post, boxProps }: Props) {
  return (
    <Box as={'article'} {...boxProps}>
      <PostHeader post={post} boxProps={{ marginBottom: 32, width: 'full' }}/>
      <PostBody content={post.content}/>
    </Box>
  )
}

export default PostDetail
