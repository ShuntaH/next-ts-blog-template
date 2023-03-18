import React from 'react'
import { Link, LinkProps } from '@chakra-ui/react'
import { ThemeTypings } from '@chakra-ui/styled-system'
import NextLink from 'next/link'

const color: ThemeTypings['colors'] = 'blue.100 !important'
const hoverColor: ThemeTypings['colors'] = 'blue.50 !important'

/**
 * MarkdownのリンクをNext.jsのLinkコンポーネントに置き換える。
 * rehypeReactのcomponentsに渡す。
 * @param href
 * @param title hover時のtitle
 * @param children
 */
function MarkdownLink ({ href, title, children }: LinkProps) {
  const titleAttr = title ?? href
  return href?.startsWith('/') || href?.startsWith('#') ? (
    // サイト内リンク
    <Link
      href={href}
      title={titleAttr}
      as={NextLink}
      color={color }
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

export default MarkdownLink
