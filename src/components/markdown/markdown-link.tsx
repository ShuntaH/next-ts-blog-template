import React from 'react'
import { Link, LinkBox, LinkOverlay, LinkProps } from '@chakra-ui/react'
import { ThemeTypings } from '@chakra-ui/styled-system'
import NextLink from 'next/link'
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "../foundations/chakra-font-awesome-icon";
import { STYLES } from "../../lib/constants";

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
    <LinkBox as={'span'}>
      <LinkOverlay
        href={href}
        title={titleAttr}
        rel="noreferrer"
        target="_blank"
        isExternal
        color={color}
        _hover={{ color: hoverColor }}
      >
        {children}
      </LinkOverlay>
      <ChakraFontAwesomeIcon
        display={"inline"}
        color={STYLES.colorLight}
        opacity={0.8}
        _hover={{ color: STYLES.colorLighter }}
        icon={faExternalLink}
        height={'0.6em'} // headingのfont-sizeに応じて動的にアイコンの大きさを変える
        marginInlineStart={2}
      />
    </LinkBox>
  )
}

export default MarkdownLink
