import { chakra } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

const ChakraPre = chakra("pre")

function Pre({ children, className }: HTMLAttributes<HTMLPreElement>) {
  return (
    <ChakraPre
      className={className}
      display={"block !important"}
      position={"relative"}
      padding={'4 !important'}
      letterSpacing={"0.05rem"}
      fontSize={"sm !important"}
      backdropFilter={'blur(20px) !important'}
      bgColor={"blackAlpha.300 !important"}
      border={"unset !important"}
      wordBreak={"normal"}
    >
      {children}
    </ChakraPre>
  )
}

export default Pre;

