import { chakra, Text } from "@chakra-ui/react";
import React, { BlockquoteHTMLAttributes } from "react";
import ChakraFontAwesomeIcon from "components/foundations/chakra-font-awesome-icon";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const ChakraBlockquote = chakra("blockquote")

function Blockquote({ cite, children }: BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <ChakraBlockquote
      display={"block"}
      position={"relative"}
      paddingBlock={8}
      paddingInline={4}
      backdropFilter={'blur(2px)'}
      bgColor={"whiteAlpha.200"}
    >
      <ChakraFontAwesomeIcon
        icon={faQuoteLeft}
        position={"absolute"}
        width={4}
        left={4}
        top={4}
      />
      <ChakraFontAwesomeIcon
        icon={faQuoteRight}
        position={"absolute"}
        width={4}
        right={4}
        bottom={4}
      />
      <Text
        position={"relative"}
        paddingInlineStart={4}
        paddingBlockEnd={cite? 6:0}
        fontStyle={"italic"}
        fontSize={"sm"}
      >
        {children}
      </Text>
      {cite && (
        <Text
          as={'cite'}
          position={"relative"}
          display={"block"}
          paddingInlineEnd={4}
          fontSize={"xs"}
          textAlign={"right"}
          color={"gray.300"}
        >
          {cite}
        </Text>
      )}
    </ChakraBlockquote>
  )
}

export default Blockquote;

