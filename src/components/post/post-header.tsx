import DateFormatter from '../date-formatter'
import type Author from '../../interfaces/author'
import { Avatar, Box, Flex, HStack, Tag, TagLabel } from "@chakra-ui/react";
import Breadcrumb from "../breadcrumb";
import { BreadcrumbItem } from "../../interfaces/breadcrumb";
import PostTitle from "./post-title";


type Props = {
  title: string
  date: string
  author: Author
  slug: string,
  time: string
  tags: string[]
}


const PostHeader = ({ title, date, author, slug, time, tags }: Props) => {
  const breadCrumbItems: BreadcrumbItem[] = [
    { title: 'home', href: '/' },
    { title: 'posts', href: '/' },
    { title: title, href: `/posts/${slug}` }
  ]

  return (
    <Box as={"header"}>
      <Breadcrumb
        breadcrumbItems={breadCrumbItems}
        breadcrumbProps={{ marginBottom: 1 }}
      />

      <PostTitle headingProps={{ marginBottom: 2 }}>
        {title}
      </PostTitle>

      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        flexDirection={"row"}
        marginBottom={2}
      >
        <Box as={"span"}>
          {time}
        </Box>
        <Box>・</Box>
        <Box as={"span"}>
          <DateFormatter dateString={date}/>
        </Box>
        <Avatar
          marginLeft={2}
          name={author.name}
          src={author.picture}
          size='2xs'
          loading={"lazy"}
        />
      </Flex>

      {
        tags.length > 0 ?
        <HStack spacing={4} >
          {tags.map((tag, index) => (
            <Tag
              size={"sm"}
              key={index}
              variant='outline'
              colorScheme='purple'
            >
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
        </HStack>
        :
        null
      }
    </Box>
  )
}

export default PostHeader
