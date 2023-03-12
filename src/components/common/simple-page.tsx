import React from "react";
import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string
  children?: React.ReactNode
}

function SimplePage({ title, children }: Props) {
  return (
    <Box position={"relative"}>
      <Heading
        as={'h1'}
        letterSpacing={'0.03em'}
        wordBreak={"break-word"}
        fontSize={{base: "2xl", md: "3xl"}}
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default SimplePage
