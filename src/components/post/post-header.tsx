import { Box, BoxProps } from "@chakra-ui/react";
import { Post } from "interfaces/post";
import PostTitle from "components/post/post-title";
import PostMeta from "components/post/post-meta";
import PostTags from "components/post/post-tags";
import { BreadcrumbItem } from "interfaces/breadcrumb";
import Breadcrumb from "components/breadcrumb";
import React from "react";

type Props = {
  post: Post
  boxProps?: BoxProps
}

const PostHeader: React.VFC<Props> = ({ post, boxProps }) => {
  const breadCrumbItems: BreadcrumbItem[] = [
    { title: 'home', href: '/' },
    { title: 'posts', href: '/' },
    { title: post.title, href: `/posts/${post.slug}` }
  ]

  return (
    <Box as={"header"} {...boxProps}>
      <Breadcrumb
        breadcrumbItems={breadCrumbItems}
        breadcrumbProps={{ marginBottom: 1, fontSize: "sm" }}
      />
      <PostTitle headingProps={{ marginBottom: 2 }}>
        {post.title}
      </PostTitle>
      <PostMeta
        time={post.time}
        date={post.date}
        author={post.author}
        flexProps={{marginBottom: 1}}
      />
      <PostTags tags={post.tags} />
    </Box>
  )
}

export default PostHeader
