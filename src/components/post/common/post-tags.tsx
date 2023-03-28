import { HStack, StackProps, TagLabelProps } from '@chakra-ui/react'
import React from 'react'
import TagLink from 'components/foundations/tag-link'
import { TagLinkProps } from 'interfaces/foundation'

interface Props {
  tags: string[]
  stackProps?: StackProps
  tagLinkProps?: TagLinkProps
  tagLabelProps?: TagLabelProps
}

function PostTags ({
  tags,
  stackProps,
  tagLinkProps,
  tagLabelProps
}: Props) {
  return (
    tags.length > 0
      ? <HStack
        {...stackProps} shouldWrapChildren flexWrap={'nowrap'}>
        {
          tags.map((tag, index) => (
            <TagLink
              key={index}
              tagLinkProps={{ ...tagLinkProps, title: tag }}
              tagLabelProps={tagLabelProps}
            >
              {tag}
            </TagLink>
          ))}
      </HStack>
      : null
  )
}

export default PostTags
