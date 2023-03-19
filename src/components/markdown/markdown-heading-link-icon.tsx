import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { HEADING_LINK_ICON_CLASSNAME } from "../../lib/constants";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "../foundations/chakra-font-awesome-icon";

/**
 * Headingにリンクアイコンを追加する。
 * Headingにリンク要素をrehypeAutolinkHeadingsで追加している。span要素が作られている。
 * リンクアイコンをいれるクラス(HEADING_LINK_ICON_CLASSNAME)がspanについていたら、
 * リンクアイコンのコンポーネントに変換して返す。
 * リンクアイコンを入れない普通のspanはそのままChakraUIのTextコンポーネントに変換して返す。
 * @param props
 */
function MarkdownHeadingLinkIcon(props: TextProps) {
  return (
    props.className?.includes(HEADING_LINK_ICON_CLASSNAME) ?
      <Text
        as={'span'}
        {...props}
        display={'inline-flex'}
        alignItems={'center'}
        height={'1em'}
      >
        <ChakraFontAwesomeIcon
          display={"inline"}
          color={'gray.300'}
          _hover={{ color: 'gray.200' }}
          icon={faLink}
          height={'0.6em'} // headingのfont-sizeに応じて動的にアイコンの大きさを変える
          marginInlineStart={2}
        />
      </Text>
      :
      <Text as={'span'} {...props}>{props.children}</Text>
  )
}

export default MarkdownHeadingLinkIcon
