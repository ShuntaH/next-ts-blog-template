import { HStack, StackProps, Tag, TagLabel } from "@chakra-ui/react";
import React from "react";

type Props = {
  tags : string[]
  stackProps?: StackProps
}

const PostTags = ({ tags, stackProps }: Props) => (
  tags.length > 0 ?
    <HStack spacing={4} {...stackProps}>
      {
        tags.map((tag, index) => (
        <Tag
          size={"sm"}
          key={index}
          variant='subtle'
          colorScheme='purple'
        >
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ))}
    </HStack>
    :
    null
  )

export default PostTags
