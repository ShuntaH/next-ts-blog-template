import { CardHeader, CardHeaderProps } from "@chakra-ui/react";
import { Post } from "interfaces/post";
import PostMeta from "components/post/common/post-meta";
import PostTags from "components/post/common/post-tags";
import React from "react";
import PostCardTitle from "components/post/postList/post-card-title";

type Props = {
  post: Post
  cardHeaderProps?: CardHeaderProps
}

const PostCardHeader: React.FC<Props> = ({ post, cardHeaderProps }) => (
  <CardHeader
    as={"header"}
    paddingY={1}
    paddingX={0}
    {...cardHeaderProps}
  >
    <PostCardTitle>{post.title}</PostCardTitle>
    <PostMeta
      time={post.time}
      publishedAt={post.publishedAt}
      updatedAt={post.updatedAt}
    />
    <PostTags
      tags={post.tags}
      stackProps={{ marginBottom: 2 }}
      tagProps={{size: "sm"}}
    />
  </CardHeader>
)


export default PostCardHeader
