import { Tag, TagLabel, TagProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type Props = {
  tagProps?: TagProps
  href?: string
  content: string

}


/**
 *
 * @param tagProps
 * @param content
 * @param index ループで表示することが多いので、そのインデックス
 * @param href これがあれば、このタグはこのhrefに遷移するNextLinkコンポーネントになる
 * @constructor
 */
const TagLink: React.VFC<Props> = ({ tagProps, content, href}) => {
  const tagMeta: {[key: string]: any} = {}

  if(href) {
    tagMeta.href = href
    tagMeta.as = NextLink
  }

  return (
    <Tag
      {...tagProps}
      {...tagMeta}
      variant='outline'
      colorScheme='purple'
    >
      <TagLabel>{content}</TagLabel>
    </Tag>
  )}


export default TagLink
