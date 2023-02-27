import markdownStyles from 'components/markdown/markdown-styles.module.css'
import { Box } from "@chakra-ui/react";
import React from "react";
import { useHtmlToReactElements } from "hooks/useHtmlToReactElement";

type Props = { content: string }

function MarkdownBox({ content }: Props) {
  const reactElements = useHtmlToReactElements(content)
  return (
      <Box className={markdownStyles['markdown']}>
        {reactElements}
      </Box>
  )
}

export default MarkdownBox


