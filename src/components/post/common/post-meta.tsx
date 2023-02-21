import React from "react";
import { Box, BoxProps, Flex, TagLabelProps } from "@chakra-ui/react";
import PostDate from "components/post/common/post-date";
import PostTime from "components/post/common/post-time";
import PostTags from "components/post/common/post-tags";
import { TagLinkProps } from "interfaces/foundation";
import { STYLES } from "lib/constants";

type Props = {
  time: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  boxProps?: BoxProps
  tagLinkProps?: TagLinkProps
  tagLabelProps?: TagLabelProps
}

const PostMeta: React.FC<Props> = ({
  time,
  publishedAt,
  updatedAt,
  tags,
  boxProps,
  tagLinkProps,
  tagLabelProps
}) => (
  <Box
    display={{ base: 'block', md: "flex" }}
    fontSize={"smaller"}
    color={STYLES.textColorDark}
    {...boxProps}
  >
    <PostDate
      publishedAt={publishedAt}
      updatedAt={updatedAt}
      textProps={{ marginBottom: {base: 0.5}, paddingRight: 2 }}
    />
    <Flex alignItems={"center"}>
      <PostTime time={time}/>
      <PostTags
        tags={tags}
        stackProps={{spacing: 2, paddingLeft: 2}}
        tagLinkProps={tagLinkProps}
        tagLabelProps={tagLabelProps}
      />
    </Flex>
  </Box>
)

export default PostMeta
