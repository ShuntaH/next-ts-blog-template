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
      backdropFilter={'blur(2px) !important'}
      bgColor={"whiteAlpha.200 !important"}
    >
      {children}
    </ChakraPre>
  )
}

export default Pre;

