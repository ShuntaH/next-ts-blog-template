import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'
import { STYLES } from 'lib/constants'

function PostCardTitle (props: HeadingProps) {
  return (
    <Heading
      as={'h2'}
      letterSpacing={'0.03em'}
      wordBreak={'break-word'}
      _hover={STYLES.hoverLighterStyle}
      fontSize={{ base: 'md', md: 'xl' }}
      marginBottom={{ base: 2, md: 1 }}
      color={STYLES.textColor}
    >
      {props.children}
    </Heading>
  )
}

export default PostCardTitle
