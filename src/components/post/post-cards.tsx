import React from "react";
import Post from "../../interfaces/post";
import PostCard from "./post-card";
import { Box } from "@chakra-ui/react";


type Props = {
  posts: Post[]
}

const PostCards = ({ posts }: Props) => {
  return (
    <Box>
      {
        posts.map((post, index) => (
          <PostCard key={index} post={post}/>
        ))
      }
    </Box>
  );
}

export default PostCards
