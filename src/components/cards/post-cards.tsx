import React from "react";
import Post from "../../interfaces/post";
import PostCard from "./post-card";


type Props = {
  posts: Post[]
}

const PostCards = ({ posts }: Props) => {
  return (
    <>
      {
        posts.map((post, index) => (
          <PostCard index={index} post={post}></PostCard>
        ))
      }
    </>
  );
}

export default PostCards
