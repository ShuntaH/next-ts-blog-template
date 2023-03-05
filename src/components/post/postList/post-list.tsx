import { Box, BoxProps, Text } from "@chakra-ui/react";
import PostCards from "components/post/postList/post-cards";
import { Pagination as PaginationType } from "interfaces/pagination";
import Pagination from "components/common/pagination";
import React, { useMemo } from "react";

type Props = {
  pagination: PaginationType,
  boxProps?: BoxProps
}

function PostList({ pagination, boxProps } : Props) {
  const posts = useMemo(() => pagination.currentPagePosts, [pagination]);

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

export default PostList
