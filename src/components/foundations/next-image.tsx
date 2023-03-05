import React from "react";
import Image, { ImageProps } from "next/image";

/**
 * width と height　が必須だが、指定しないことが多いので、それに合わせたコンポーネントを作成。
 * srcと alt を設定すれば親エレメントに合わせていい感じで表示される。
 * @param props
 * @constructor
 */
function NextImage(props: ImageProps) {
  const propsCopy = { ...props }
  const hasSize = Boolean(props.width && props.height)
  if (!hasSize) {
    delete propsCopy.width
    delete propsCopy.height
  }
  return (
    <Image
      style={props.style === undefined ? { objectFit: "cover" } : props.style}
      fill={!hasSize}
      {...propsCopy}/>
  )
}

export default NextImage
