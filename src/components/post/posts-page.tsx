import { Box, BoxProps, Text } from "@chakra-ui/react";
import PostCards from "./post-cards";
import { Pagination as PaginationType } from "../../interfaces/pagination";
import Pagination from "../pagination";

type Props = {
  pagination: PaginationType,
  boxProps?: BoxProps
}

const PostsPage = ({ pagination, boxProps }: Props) => {
  const posts = pagination.currentPagePosts

  return (
    posts.length > 0 ?
    <Box {...boxProps}>
      <PostCards posts={posts}/>
      <Pagination pagination={pagination}></Pagination>
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
