import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode
  textProps?: TextProps
}

const TextSpan: React.VFC<Props> = ({ children, textProps }) => {
  return (
    <Text as={"span"} {...textProps}>
      {children}
    </Text>
  )
}

export default TextSpan
