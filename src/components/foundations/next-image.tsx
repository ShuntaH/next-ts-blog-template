import React from "react";
import { Box } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";

/**
 * width と height　が必須だが、指定しないことが多いので、それに合わせたコンポーネントを作成。
 * srcと alt を設定すれば親エレメントに合わせていい感じで表示される。
 * @param props
 * @constructor
 */
function NextImage(props: ImageProps) {
  return (
    <Box>
      <Image
        style={props.style === undefined ? { objectFit: "cover" } : props.style}
        fill={!props.width || !props.height}
        {...props}/>
    </Box>
  )
}

export default NextImage
