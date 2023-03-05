import { Code } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";


function MarkdownCode({ className, children }: HTMLAttributes<HTMLElement>) {
  // class nameがlanguage-から始まる場合は、コードブロックでシンタックスハイライトが
  // 適用される pre タグの中にある code なので、そのまま prism の css をあてる。
  if (className?.startsWith("language-")) return <Code className={className}>{children}</Code>
  
  // インラインコードなので シンタックスハイライトは当てないので、独自のスタイルをあてる
  return <Code colorScheme={"cyan"}>{children}</Code>
}

export default MarkdownCode

