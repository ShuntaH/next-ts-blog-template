import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import DateFormatter from 'components/common/date-formatter'
import ChakraFontAwesomeIcon from 'components/foundations/chakra-font-awesome-icon'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { STYLES } from 'lib/constants'

interface Props {
  publishedAt: string
  updatedAt: string
  textProps?: TextProps
}

function PostDate ({ publishedAt, updatedAt, textProps }: Props) {
  return (
    <Text letterSpacing={'0.03em'} {...textProps}>
      <ChakraFontAwesomeIcon
        display={'inline'}
        paddingTop={0.5}
        paddingRight={1}
        icon={faFeather}
        color={STYLES.color}
        width={4}
      />
      <DateFormatter dateString={publishedAt}/>
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
    </Text>
  )
}

export default PostDate
