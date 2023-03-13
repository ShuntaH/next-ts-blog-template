import { Thead } from '@chakra-ui/react'
import { TableHeadProps } from '@chakra-ui/table/dist/thead'

function MarkdownThead ({ children }: TableHeadProps) {
  return (
    <Thead>{children}</Thead>
  )
}

export default MarkdownThead
