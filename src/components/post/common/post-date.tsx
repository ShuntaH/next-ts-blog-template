import React from 'react'
import { Box, Text, TextProps } from '@chakra-ui/react'
import DateFormatter from 'components/common/date-formatter'

interface Props {
  publishedAt: string
  updatedAt: string
  textProps?: TextProps
}

function PostDate({ publishedAt, updatedAt, textProps }: Props) {
  return (
    <Box letterSpacing={'0.03em'} {...textProps}>
      {
        publishedAt === updatedAt ?
          null :
          (
            <>
              <Text as={"span"}> / </Text>
              <DateFormatter dateString={updatedAt}/>
            </>
          )
      }
    </Box>
  )
}

export default PostDate
