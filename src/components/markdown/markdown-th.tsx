import React from 'react'
import { Th } from '@chakra-ui/react'
import { TableColumnHeaderProps } from '@chakra-ui/table/dist/th'

function MarkdownTh ({ children }: TableColumnHeaderProps) {
  return (
    <Th>{children}</Th>
  )
}

export default MarkdownTh
