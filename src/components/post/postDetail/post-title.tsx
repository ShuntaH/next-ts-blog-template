import { Heading, HeadingProps } from '@chakra-ui/react'
import React from 'react'

function PostTitle (props: HeadingProps) {
  return (
   <Heading
     as={'h1'}
     letterSpacing={'0.03em'}
     wordBreak={'break-word'}
     fontSize={{ base: '2xl', md: '3xl' }}
     {...props}
   >
     {props.children}
   </Heading>
  )
}

export default PostTitle
