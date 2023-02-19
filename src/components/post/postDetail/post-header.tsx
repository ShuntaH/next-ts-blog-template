import { Box, BoxProps } from "@chakra-ui/react";
import { Post } from "interfaces/post";
import PostTitle from "components/post/postDetail/post-title";
import PostMeta from "components/post/common/post-meta";
import PostTags from "components/post/common/post-tags";
import { BreadcrumbItem } from "interfaces/breadcrumb";
import Breadcrumb from "components/breadcrumb";
import React, { useMemo } from "react";

type Props = {
  post: Post
  boxProps?: BoxProps
}

const PostHeader: React.FC<Props> = ({ post, boxProps }) => {
  const breadCrumbItems: BreadcrumbItem[] = useMemo(
    () => [
    { title: 'home', href: '/' },
    { title: 'posts', href: '/' },
    { title: post.title, href: `/posts/${post.slug}` }
  ], [post.slug]);


  return (
    <Box as={"header"} {...boxProps}>
      <Breadcrumb
        breadcrumbItems={breadCrumbItems}
        breadcrumbProps={{ marginBottom: 1, fontSize: "sm" }}
      />
      <PostTitle marginBottom={2}>
        {post.title}
      </PostTitle>
      <PostMeta
        time={post.time}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        flexProps={{marginBottom: 1}}
      />
      <PostTags tags={post.tags} />
    </Box>
  )
}

export default PostHeader
