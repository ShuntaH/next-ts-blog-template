import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";
import { TableProps } from "@chakra-ui/table/dist/table";

function MarkdownTable({ children }: TableProps) {
  return (
    <TableContainer
      overflowX={"scroll"}
      borderRadius={'6px'}
      padding={4}
      backdropFilter={'blur(2px)'}
      bgColor={"whiteAlpha.200"}
    >
      <Table variant='simple'>
        {children}
      </Table>
    </TableContainer>
  )
}

export default MarkdownTable
