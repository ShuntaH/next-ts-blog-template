import { Box, BoxProps, Text } from "@chakra-ui/react";
import PostCards from "./post-cards";
import { Pagination as PaginationType } from "../../interfaces/pagination";
import Pagination from "../pagination";
import React from "react";

type Props = {
  pagination: PaginationType,
  boxProps?: BoxProps
}

const PostsPage: React.FC<Props> = ({ pagination, boxProps }) => {
  const posts = pagination.currentPagePosts

  return (
    <Box {...boxProps} position={"relative"}>
      {
        posts.length > 0 ?
          <>
            <PostCards
              posts={posts}
              boxProps={{minHeight: "inherit"}}
            />
            <Pagination
              pagination={pagination}
              flexProps={{
                paddingTop: 6,
                paddingBottom: 6
            }}/>
          </>
        :
        <Text align={"center"}>
          There is no post yet.
        </Text>
      }
    </Box>
  )

}

export default PostsPage
