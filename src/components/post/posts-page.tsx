import { Box, BoxProps, Flex, Link, Text } from "@chakra-ui/react";
import PostCards from "./post-cards";
import TextSpan from "../foundations/text-span";
import Pagination from "../../lib/pagination";
import NextLink from "next/link";

type Props = {
  pagination: Pagination,
  boxProps?: BoxProps
}

const PostsPage = ({ pagination, boxProps }: Props) => {
  const posts = pagination.posts

  return (
    posts.length > 0 ?
    <Box>
      <PostCards posts={posts}/>
      {/*トップページだったら戻るはない*/}
      <Flex justifyContent={"space-between"}>
        {/*<Link as={NextLink}>Previous</Link>*/}
        <TextSpan textProps={{ color: "gray.500" }}>Previous</TextSpan>
        <Link as={NextLink}>{pagination.currentPageNumber} of {pagination.totalPageCount}</Link>
        <Link as={NextLink} href={`/pages/${pagination.currentPageNumber + 1}`}>Next</Link>
      </Flex>
    </Box>
    :
    <Box>
      {/*todo 見た目確認*/}
      <Text align={"center"}>
        There is no post yet.
      </Text>
    </Box>)

}

export default PostsPage
