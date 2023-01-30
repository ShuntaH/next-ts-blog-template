import React from "react";
import PostCard from "./post-card";
import { Box } from "@chakra-ui/react";
import { Posts } from "../../interfaces/post";


type Props = {
  posts: Posts
}

const PostCards = ({ posts }: Props) => {
  return (
    <Box>
      { posts.map((post, index) => <PostCard key={index} post={post}/>) }
    </Box>
  );
}

export default PostCards
