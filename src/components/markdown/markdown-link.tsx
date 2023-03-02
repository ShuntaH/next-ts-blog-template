import React from "react";
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { ThemeTypings } from "@chakra-ui/styled-system";

const color: ThemeTypings["colors"] = "orange.100"
const hoverColor: ThemeTypings["colors"] = "orange.50"

/**
 * MarkdownのリンクをNext.jsのLinkコンポーネントに置き換える。
 * rehypeReactのcomponentsに渡す。
 * @param href
 * @param children
 * @constructor
 */
function MarkdownLink({ href, title, children }: LinkProps) {
  const titleAttr = title || href
  return href?.startsWith("/") || href?.startsWith('#') ? (
    // サイト内リンク
    <Link
      href={href}
      title={titleAttr}
      as={NextLink}
      color={color}
      _hover={{ color: hoverColor }}
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      title={titleAttr}
      rel="noreferrer"
      target="_blank"
      isExternal
      color={color}
      _hover={{ color: hoverColor }}
    >
      {children}
    </Link>
  )
}

export default MarkdownLink;
