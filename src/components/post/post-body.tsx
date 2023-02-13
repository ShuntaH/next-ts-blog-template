import markdownStyles from 'components/markdown-styles.module.css'
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

type Props = {
  content: string
  boxProps?: BoxProps
}

const PostBody: React.VFC<Props> = ({ content, boxProps }) => {
  return (
    <Box w={"full"} {...boxProps}>
      <Box
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}

export default PostBody
