import DateFormatter from '../date-formatter'
import type Author from '../../interfaces/author'
import { Avatar, Box, chakra, Flex } from "@chakra-ui/react";
import Breadcrumb from "../breadcrumb";
import { BreadcrumbItem } from "../../interfaces/breadcrumb";
import PostTitle from "./post-title";


type Props = {
  title: string
  date: string
  author: Author
  slug: string,
  time: string
}


const PostHeader = ({ title, date, author, slug, time }: Props) => {
  const breadCrumbItems: BreadcrumbItem[] = [
    { title: 'home', href: '/' },
    { title: 'posts', href: '/' },
    { title: title, href: `/posts/${slug}` }
  ]

  return (
    <Box as={"header"}>
      <Breadcrumb breadCrumbItems={breadCrumbItems}/>
      <PostTitle marginBottom={1}>{title}</PostTitle>

      <Flex flexWrap={"wrap"} alignItems={"center"} flexDirection={"row"}>
        <Box as={"span"}>
          <DateFormatter dateString={date}/>
        </Box>
        <Box>・</Box>
        <Box as={"span"}>
          {time}
        </Box>
        <Box>・</Box>
        <Box as={"span"}>
          <Avatar name={author.name} src={author.picture} size='xs'></Avatar>
        </Box>
      </Flex>
    </Box>
  )
}

export default chakra(PostHeader)
