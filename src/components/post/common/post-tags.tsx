import { HStack, StackProps } from "@chakra-ui/react";
import React from "react";
import TagLink from "components/foundations/tag-link";

type Props = {
  tags : string[]
  stackProps?: StackProps
}

const PostTags: React.FC<Props> = ({ tags, stackProps }) => (
  tags.length > 0 ?
    <HStack spacing={4} {...stackProps}>
      {
        tags.map((tag, index) => (
          <TagLink key={index}>
            {tag}
          </TagLink>
      ))}
    </HStack>
    :
    null
  )

export default PostTags
