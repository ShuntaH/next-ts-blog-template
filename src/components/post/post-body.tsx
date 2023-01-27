import markdownStyles from '../markdown-styles.module.css'
import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  content: string
  boxProps?: BoxProps
}

const PostBody = ({ content, boxProps }: Props) => {
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
