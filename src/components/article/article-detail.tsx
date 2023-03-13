import React from 'react'
import { Box, BoxProps, Divider, Heading } from '@chakra-ui/react'
import MarkdownBox from 'components/markdown/markdown-box'

interface Props {
  title: string
  content: string
  boxProps?: BoxProps
}

function ArticleDetail ({ title, content, boxProps }: Props) {
  return (
    <Box position={'relative'} as={'article'} {...boxProps}>
      <Box as={'header'} marginBottom={32} width={'full'}>
        <Heading
          as={'h1'}
          letterSpacing={'0.03em'}
          wordBreak={'break-word'}
          fontSize={{ base: '2xl', md: '3xl' }}
          marginBottom={2}
        >
          {title}
        </Heading>
        <Divider />
      </Box>
      <Box w={'full'}>
        <MarkdownBox htmlContent={content}/>
      </Box>
    </Box>
  )
}

export default ArticleDetail
