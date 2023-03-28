import React from 'react'
import { Box, BoxProps, TagLabelProps } from '@chakra-ui/react'
import PostDate from 'components/post/common/post-date'
import { TagLinkProps } from 'interfaces/foundation'
import { STYLES } from 'lib/constants'

interface Props {
  time: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  boxProps?: BoxProps
  tagLinkProps?: TagLinkProps
  tagLabelProps?: TagLabelProps
}

function PostMeta ({
  time,
  publishedAt,
  updatedAt,
  tags,
  boxProps,
  tagLinkProps,
  tagLabelProps
}: Props) {
  return (
    <Box
      display={{ base: 'block', md: 'flex' }}
      fontSize={'smaller'}
      color={STYLES.textColorDark}
      {...boxProps}
    >
      <PostDate
        publishedAt={publishedAt}
        updatedAt={updatedAt}
        textProps={{ marginBottom: { base: 0.5 }, paddingRight: 2 }}
      />
    </Box>
  )
}

export default PostMeta
