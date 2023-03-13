import { Tfoot } from '@chakra-ui/react'
import { TableFooterProps } from '@chakra-ui/table/dist/tfooter'

function MarkdownTfoot ({ children }: TableFooterProps) {
  return (
    <Tfoot>{children}</Tfoot>
  )
}

export default MarkdownTfoot
