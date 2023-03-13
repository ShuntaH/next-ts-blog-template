import markdownStyles from 'components/markdown/markdown-styles.module.css'
import 'prism-themes/themes/prism-vsc-dark-plus.min.css'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useHtmlToReactElements } from 'hooks/useHtmlToReactElement'

interface Props { htmlContent: string }

function MarkdownBox ({ htmlContent }: Props) {
  const reactElements = useHtmlToReactElements(htmlContent)
  return (
      <Box className={markdownStyles['markdown-body']}>
        {reactElements}
      </Box>
  )
}

export default MarkdownBox
