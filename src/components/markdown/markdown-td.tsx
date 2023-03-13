import React from 'react'
import { Td } from '@chakra-ui/react'
import { TableCellProps } from '@chakra-ui/table/dist/td'

function MarkdownTd ({ children }: TableCellProps) {
  return (
    <Td>{children}</Td>
  )
}

export default MarkdownTd
