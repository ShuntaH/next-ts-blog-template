import markdownStyles from 'components/markdown/markdown-styles.module.css'
import { Box } from "@chakra-ui/react";
import React from "react";
import { useMarkdownToReactElements } from "hooks/useMarkdownToReactElement";

type Props = { content: string }

const MarkdownBox: React.FC<Props> = ({ content }) => {
  const reactElements = useMarkdownToReactElements(content)
  return (
      <Box className={markdownStyles['markdown']}>
        {reactElements}
      </Box>
  )
}

export default MarkdownBox
