import { chakra, Code } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

const ChakraPre = chakra("pre")

function Pre({ children, className }: HTMLAttributes<HTMLPreElement>) {
  return (
    <ChakraPre
      className={className}
      display={"block"}
      position={"relative"}
      padding={4}
      marginBlockEnd={4}
      letterSpacing={"0.05rem"}
      fontSize={"sm"}
      backdropFilter={'blur(2px)'}
      bgColor={"whiteAlpha.200"}
    >

      <Code
        position={"relative"}
        paddingInlineStart={4}
        fontStyle={"italic"}
        fontSize={"sm"}
      >
        {children}
      </Code>
    </ChakraPre>
  )
}

export default Pre;

