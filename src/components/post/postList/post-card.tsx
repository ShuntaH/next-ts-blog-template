import React, { useMemo } from "react";
import NextLink from "next/link";
import { Post } from "interfaces/post";
import PostCardHeader from "components/post/postList/post-card-header";
import PostCardBody from "components/post/postList/post-card-body";
import BlurCard from "components/common/blur-card";
import { CardLinkProps } from "interfaces/foundation";

// cardProps をスプレッドで渡すために他のものを混ぜない(&を使わない)
type Props = {
  post: Post,
  cardLinkProps?: CardLinkProps
}

function PostCard({ post, cardLinkProps }: Props) {
  const postHref = useMemo(
    () => `/posts/${post.slug}`,
    [ post ]
  );

  return (
    <BlurCard
      as={NextLink}
      href={postHref}
      {...cardLinkProps}
    >
      <PostCardHeader
        post={post}
        cardHeaderProps={{
          marginBottom: { base: 2, md: 1 }
        }}/>
      <PostCardBody post={post}/>
    </BlurCard>

  );
}

export default PostCard
