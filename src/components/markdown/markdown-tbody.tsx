import { Tbody } from '@chakra-ui/react'
import { TableBodyProps } from '@chakra-ui/table/dist/tbody'

function MarkdownTbody ({ children }: TableBodyProps) {
  return (
    <Tbody>{children}</Tbody>
  )
}

export default MarkdownTbody
