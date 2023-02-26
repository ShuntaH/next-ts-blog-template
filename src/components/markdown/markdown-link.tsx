import React from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

/**
 * MarkdownのリンクをNext.jsのLinkコンポーネントに置き換える。
 * rehypeReactのcomponentsに渡す。
 * @param href
 * @param children
 * @constructor
 */
function MarkdownLink({ href, children }: LinkProps){
  return href?.startsWith("/") ? (
    <Link href={href} as={NextLink}>{children}</Link>
  ) : (
    <Link isExternal href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  )
}

export default MarkdownLink;
