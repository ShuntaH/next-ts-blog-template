import { Box, BoxProps } from "@chakra-ui/react";
import Breadcrumb from "../breadcrumb";
import { BreadcrumbItem } from "../../interfaces/breadcrumb";
import PostTitle from "./post-title";
import PostTags from "./post-tags";
import PostInfo from "./post-info";
import { Author } from "../../interfaces/author";

type Props = {
  title: string
  date: string
  author: Author
  slug: string,
  time: string
  tags: string[]
  boxProps?: BoxProps
}

const PostHeader = ({ title, date, author, slug, time, tags, boxProps }: Props) => {
  const breadCrumbItems: BreadcrumbItem[] = [
    { title: 'home', href: '/' },
    { title: 'posts', href: '/' },
    { title: title, href: `/posts/${slug}` }
  ]

  return (
    <Box as={"header"} {...boxProps}>
      <Breadcrumb breadcrumbItems={breadCrumbItems} breadcrumbProps={{ marginBottom: 1 }}/>
      <PostTitle headingProps={{ marginBottom: 2 }}>{title}</PostTitle>
      <PostInfo time={time} date={date} author={author} />
      <PostTags tags={tags} />
    </Box>
  )
}

export default PostHeader
