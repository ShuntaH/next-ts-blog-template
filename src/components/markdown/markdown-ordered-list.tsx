import React, { HTMLAttributes } from "react";
import { OrderedList } from "@chakra-ui/react";

function MarkdownUnorderedList({ children }: HTMLAttributes<HTMLOListElement>) {
  return (
    <OrderedList spacing={'2 !important'}>
      {children}
    </OrderedList>
  )
}

export default MarkdownUnorderedList
