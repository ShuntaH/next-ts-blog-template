import { HStack, StackProps, TagLabelProps } from "@chakra-ui/react";
import React from "react";
import TagLink from "components/foundations/tag-link";
import { TagLinkProps } from "interfaces/foundation";

type Props = {
  tags : string[]
  stackProps?: StackProps
  tagLinkProps?: TagLinkProps
  tagLabelProps?: TagLabelProps
}

const PostTags: React.FC<Props> = ({
  tags,
  stackProps,
  tagLinkProps,
  tagLabelProps
}) => (
  tags.length > 0 ?
    <HStack {...stackProps}>
      {
        tags.map((tag, index) => (
          <TagLink
            key={index}
            tagLinkProps={tagLinkProps}
            tagLabelProps={tagLabelProps}
          >
            {tag}
          </TagLink>
      ))}
    </HStack>
    :
    null
  )

export default PostTags
