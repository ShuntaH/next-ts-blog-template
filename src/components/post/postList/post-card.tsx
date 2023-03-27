import React from 'react'
import { Post } from 'interfaces/post'
import PostCardHeader from 'components/post/postList/post-card-header'
import PostCardBody from 'components/post/postList/post-card-body'
import BlurCard from 'components/common/blur-card'
import { CardProps, LinkBox } from "@chakra-ui/react";

// cardProps をスプレッドで渡すために他のものを混ぜない(&を使わない)
interface Props {
  post: Post,
  cardProps?: CardProps
}

function PostCard ({ post, cardProps }: Props) {
  return (
    <LinkBox>
      <BlurCard title={post.title} {...cardProps}>
        <PostCardHeader
          post={post}
          cardHeaderProps={{ marginBottom: { base: 2, md: 1 } }}
        />
        <PostCardBody post={post}/>
      </BlurCard>
    </LinkBox>
  )
}

export default PostCard
