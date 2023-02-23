import React from "react";
import PostCard from "components/post/postList/post-card";
import { Box, BoxProps } from "@chakra-ui/react";
import { Posts } from "interfaces/post";


type Props = {
  posts: Posts
  boxProps?: BoxProps
}

function PostCards({ posts, boxProps }: Props) {
  return (
    <Box {...boxProps}>
      { posts.map((post, index) => <PostCard key={index} post={post}/>) }
    </Box>
  );
}

export default PostCards
