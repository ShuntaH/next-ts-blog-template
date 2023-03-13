import { UnorderedList } from '@chakra-ui/react'
import React, { HTMLAttributes } from 'react'

function MarkdownUnorderedList ({ children }: HTMLAttributes<HTMLUListElement>) {
  return (
    <UnorderedList spacing={'2 !important'}>
      {children}
    </UnorderedList>
  )
}

export default MarkdownUnorderedList
