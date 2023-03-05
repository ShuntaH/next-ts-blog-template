import React from "react";
import { Table, TableContainer } from "@chakra-ui/react";
import { TableProps } from "@chakra-ui/table/dist/table";

function MarkdownTable({ children }: TableProps) {
  return (
    <TableContainer
      marginBlockEnd={4}
      overflowX={"scroll"}
      backdropFilter={'blur(2px) !important'}
      bgColor={"whiteAlpha.200 !important"}
    >
      <Table variant='simple'>
        {children}
      </Table>
    </TableContainer>
  )
}

export default MarkdownTable
