import React from "react";
import { ChakraComponent, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type AComponent = ChakraComponent<'a', {}>

/**
 * マークダウンを next/link コンポーネントに変える。
 * さらに Chakra UI も使っているので ChakraComponent
 * todo JSX.Element や FC, Props で型をつけて rehype-react に渡たすのができていない
 * ChakraComponentで型をつけるのは props の型は推論してくれるが、適当な型を入れてもエラーが起きなかったので他では一旦なし
 * @param href / から始まれば外部のリンクではない
 * @param children
 * @constructor
 */
const LinkNextProvide: AComponent = ({ href, children }) => {
  return href?.startsWith("/") ? (
    <Link href={href} as={NextLink}>{children}</Link>
  ) : (
    <Link isExternal href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  )
}

export default LinkNextProvide;
