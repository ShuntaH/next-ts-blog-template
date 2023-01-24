import React from "react";
import Post from "../../interfaces/post";
import PostCard from "./post-card";
import { Box, chakra } from "@chakra-ui/react";


type Props = {
  posts: Post[]
}

const PostCards = ({ posts }: Props) => {
  return (
    <Box>
      {
        posts.map((post, index) => (
          <PostCard index={index} post={post}></PostCard>
        ))
      }
    </Box>
  );
}

export default chakra(PostCards)
