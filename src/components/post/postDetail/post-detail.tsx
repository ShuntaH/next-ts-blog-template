import { Box, CardBodyProps } from "@chakra-ui/react";
import React from "react";
import { Post } from "interfaces/post";
import PostHeader from "components/post/postDetail/post-header";
import PostBody from "components/post/postDetail/post-body";

type Props = {
  post: Post
  cardBodyProps?: CardBodyProps
}

const PostDetail: React.FC<Props> = ({ post, cardBodyProps }) => (
  <Box as={"article"}>
    <PostHeader post={post} boxProps={{ marginBottom: 20, width: "full" }}/>
    <PostBody content={post.content} boxProps={{ width: "full" }}/>
  </Box>
)

export default PostDetail
