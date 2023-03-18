import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { HEADING_LINK_ICON_CLASSNAME } from "../../lib/constants";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ChakraFontAwesomeIcon from "../foundations/chakra-font-awesome-icon";

/**
 * Headingにリンク要素をrehypeAutolinkHeadingsで追加している。そこにspan要素が含まれているので、
 * リンクアイコンをいれるクラスがspanについていたらリンクアイコンのコンポーネントに変換して返す。
 * リンクアイコンを入れない普通のspanはそのままChakraUIのTextコンポーネントに変換して返す。
 * @param props
 */
function MarkdownHeadingLinkIcon (props: TextProps) {
    return (
      props.className?.includes(HEADING_LINK_ICON_CLASSNAME) ?
        <ChakraFontAwesomeIcon icon={faLink} width={4} display={"inline-block"} marginInlineStart={2}/>
        :
        <Text as={'span'} {...props}>{props.children}</Text>
    )
}

export default MarkdownHeadingLinkIcon
