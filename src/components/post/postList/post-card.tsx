import { Card, CardProps } from '@chakra-ui/react'
import { STYLES } from "lib/constants";
import React, { useMemo } from "react";
import NextLink from "next/link";
import { Post } from "interfaces/post";
import PostCardHeader from "components/post/postList/post-card-header";
import PostCardBody from "components/post/postList/post-card-body";

// cardProps をスプレッドで渡すために他のものを混ぜない(&を使わない)
type Props = {
  post: Post,
  cardProps?: CardProps
}

function PostCard({ post, cardProps}: Props){
  const postHref = useMemo(
    () => `/posts/${post.slug}`,
    [post]
  );

  return (
      <Card
        as={NextLink}
        href={postHref}
        position={"relative"}
        bgColor={"transparent"}
        border={'2px'}
        borderColor={"rgba(51, 65, 85, 1)"}
        borderStyle={"solid"}
        marginBottom={STYLES.gap}
        padding={{base: STYLES.gapSm, md: STYLES.gap}}
        borderRadius={STYLES.radius}
        overflow={"hidden"}
        backdropFilter={'blur(4px)'}
        boxShadow={'0 0 #0000,0 0 #0000 ,0 0 #0000,0 0 #0000, 0 25px 50px -12px rgb(0 0 0 / 0.25)'}
        {...cardProps}
      >
        {/*todo head*/}
        <PostCardHeader
          post={post}
          cardHeaderProps={{
            marginBottom: {base: 2, md: 1}
        }} />
        <PostCardBody post={post} />
      </Card>
  );
}

export default PostCard
