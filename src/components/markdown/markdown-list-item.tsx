import React, { HTMLAttributes } from "react";
import { ListItem } from "@chakra-ui/react";

function MarkdownListItem({ children }: HTMLAttributes<HTMLElement>) {
  return (
    <ListItem>{children}</ListItem>
  )
}

export default MarkdownListItem
