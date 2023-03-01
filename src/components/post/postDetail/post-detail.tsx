import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { Post } from "interfaces/post";
import PostHeader from "components/post/postDetail/post-header";
import PostBody from "components/post/postDetail/post-body";

type Props = {
  post: Post
  boxProps?: BoxProps
}

function PostDetail({ post, boxProps }: Props){
  return (
    <Box as={"article"} {...boxProps}>
      <PostHeader post={post} boxProps={{ marginBottom: 32, width: "full" }}/>
      <PostBody content={post.content} boxProps={{ width: "full" }}/>
    </Box>
  )
}

export default PostDetail
