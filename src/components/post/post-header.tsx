import { Box, BoxProps } from "@chakra-ui/react";
import Breadcrumb from "../breadcrumb";
import { BreadcrumbItem } from "../../interfaces/breadcrumb";
import PostTitle from "./post-title";
import PostTags from "./post-tags";
import PostMeta from "./post-meta";
import { Post } from "../../interfaces/post";

type Props = {
  post: Post
  boxProps?: BoxProps
}

const PostHeader = ({ post, boxProps }: Props) => {
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
