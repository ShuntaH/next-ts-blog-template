import React from "react";
import { Box, Heading } from "@chakra-ui/react";

type Props = {
  title: string
  children?: React.ReactNode
}

const SimplePage: React.FC<Props> = ({ title, children }) => {
  return (
    <Box position={"relative"}>
      <Heading
        as={'h1'}
        letterSpacing={'0.03em'}
        lineHeight={1.5}
        wordBreak={"break-word"}
        fontSize={{base: "3xl", md: "4xl"}}
        marginBottom={{base: 2, md: 1}}
        borderBottom={'2px'}
        borderColor={"rgba(51, 65, 85, 1)"}
        borderStyle={"solid"}
      >
        {title}
      </Heading>
      {children}
    </Box>
  )
}

export default SimplePage
