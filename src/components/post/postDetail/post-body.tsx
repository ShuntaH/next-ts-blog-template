import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import MarkdownBox from "components/markdown/markdown-box";

type Props = {
  content: string
  boxProps?: BoxProps
}

const PostBody: React.FC<Props> = ({ content, boxProps }) => {
  return (
    <Box w={"full"} {...boxProps}>
      <MarkdownBox content={content}/>
    </Box>
  )
}

export default PostBody
