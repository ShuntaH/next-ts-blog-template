import React from 'react'
import { Box, Text, TextProps } from '@chakra-ui/react'
import DateFormatter from 'components/common/date-formatter'
import ChakraFontAwesomeIcon from 'components/foundations/chakra-font-awesome-icon'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { STYLES } from 'lib/constants'

interface Props {
  publishedAt: string
  updatedAt: string
  textProps?: TextProps
}

function PostDate({ publishedAt, updatedAt, textProps }: Props) {
  return (
    <Box letterSpacing={'0.03em'} {...textProps}>
      <ChakraFontAwesomeIcon
        display={'inline'}
        paddingTop={0.5}
        paddingRight={1}
        icon={faFeather}
        color={STYLES.color}
        width={4}
      />
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
