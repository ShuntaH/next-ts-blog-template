import React from "react";
import { Tr } from "@chakra-ui/react";
import { TableRowProps } from "@chakra-ui/table/dist/tr";

function MarkdownTr({ children }: TableRowProps) {
  return (
    <Tr>{children}</Tr>
  )
}

export default MarkdownTr
