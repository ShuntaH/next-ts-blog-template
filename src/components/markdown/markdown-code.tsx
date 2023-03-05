import { chakra, Code } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

// chakra 方式でスタイルをあてる。スタイルの当て方を変えるだけなので デフォルトのスタイルがついている Code と区別する。
const ChakraCode = chakra("code")

function MarkdownCode({ className, children }: HTMLAttributes<HTMLElement>) {
  // class nameがlanguage-から始まる場合は、コードブロックでシンタックスハイライトが
  // 適用される pre タグの中にある code なので、そのまま prism の css をあてる。
  if (className?.startsWith("language-")) return (
    <ChakraCode
      className={className}
      backgroundColor={"unset !important"} // prismjsではなく prism-themes の css を使う場合は、bg を unset が必要。
      fontWeight={"bold !important"}
    >
      {children}
    </ChakraCode>
  )

  // インラインコードなので シンタックスハイライトは当てないので、独自のスタイルをあてる
  return <Code
    colorScheme={"teal"}
    variant={"subtle"}
  >
    {children}
  </Code>
}

export default MarkdownCode

