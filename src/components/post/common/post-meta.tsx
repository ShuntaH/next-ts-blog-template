import React from "react";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import PostDate from "components/post/common/post-date";
import PostTime from "components/post/common/post-time";
import PostTags from "components/post/common/post-tags";

type Props = {
  time: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  boxProps?: BoxProps
}

const PostMeta: React.FC<Props> = ({
  time,
  publishedAt,
  updatedAt,
  tags,
  boxProps
}) => (
  <Box
    display={{ base: 'block', md: "flex" }}
    fontSize={"smaller"}
    color={"gray.300"}
    {...boxProps}
  >
    <PostDate
      publishedAt={publishedAt}
      updatedAt={updatedAt}
      textProps={{ marginBottom: {base: 0.5}, paddingRight: 2 }}
    />
    <Flex alignItems={"center"}>
      <PostTime time={time}/>
      <PostTags tags={tags} tagProps={{size: "sm"}} stackProps={{spacing: 2, paddingLeft: 2}} />
    </Flex>
  </Box>
)

export default PostMeta
