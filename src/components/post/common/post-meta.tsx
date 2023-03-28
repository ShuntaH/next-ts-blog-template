import React from 'react'
import { Box, BoxProps, Flex, TagLabelProps } from '@chakra-ui/react'
import PostDate from 'components/post/common/post-date'
import PostTime from 'components/post/common/post-time'
import PostTags from 'components/post/common/post-tags'
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
      <Flex alignItems={'center'} flexWrap={'wrap'}>
        <PostTime time={time}/>
        <PostTags
          tags={tags}
          stackProps={{
            spacing: 2,
            paddingLeft: { base: 0, md: 0.5 },
            marginBlockStart: { base: 1, md: 0 }
          }}
          tagLinkProps={tagLinkProps}
          tagLabelProps={tagLabelProps}
        />
      </Flex>
    </Box>
  )
}

export default PostMeta
