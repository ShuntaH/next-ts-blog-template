import React, { HTMLAttributes } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from "@chakra-ui/react";
import { STYLES } from "../../lib/constants";


function MarkdownDetails ({ children }: HTMLAttributes<HTMLElement>) {
  if (!children) {
    console.warn('TableOfContents: children is undefined.')
    return null
  }

  // remark-toc-collapse で生成される details タグには改行が含まれている。
  const cleanedChildren = React.Children.toArray(children).filter(child => child !== '\n')
  const summary = cleanedChildren[0]
  const content = cleanedChildren[1]

  return (
    <Accordion allowToggle>
      <AccordionItem border={"unset"}>
        <Heading as={'h2'} marginBlockStart={'0 !important'}>
          <AccordionButton
            backgroundColor={"whiteAlpha.300"}
            _expanded={{ backgroundColor: "whiteAlpha.400" }}
            _hover={{ backgroundColor: "whiteAlpha.400" }}
            color={STYLES.textColor}
          >
            <Box
              as="span"
              flex='1'
              textAlign='left'
              fontWeight={"bold"}
            >
              {summary}
            </Box>
            <AccordionIcon/>
          </AccordionButton>
        </Heading>

        <AccordionPanel pb={4}>
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default MarkdownDetails
