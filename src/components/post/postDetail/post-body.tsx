import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import MarkdownBox from 'components/markdown/markdown-box'

interface Props {
  content: string
  boxProps?: BoxProps
}

function PostBody ({ content, boxProps }: Props) {
  return (
    <Box w={'full'} {...boxProps}>
      <MarkdownBox htmlContent={content}/>
    </Box>
  )
}

export default PostBody
