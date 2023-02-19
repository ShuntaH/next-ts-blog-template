import { HStack, StackProps, TagProps } from "@chakra-ui/react";
import React from "react";
import TagLink from "components/foundations/tag-link";

type Props = {
  tags : string[]
  stackProps?: StackProps
  tagProps?: TagProps
}

const PostTags: React.FC<Props> = ({ tags, stackProps, tagProps }) => (
  tags.length > 0 ?
    <HStack spacing={4} {...stackProps}>
      {
        tags.map((tag, index) => (
          <TagLink key={index} {...tagProps}>
            {tag}
          </TagLink>
      ))}
    </HStack>
    :
    null
  )

export default PostTags
