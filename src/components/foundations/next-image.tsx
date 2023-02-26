import React from "react";
import Image, { ImageProps } from "next/image";

/**
 * width と height を指定しないことが多いので、それに合わせたコンポーネントを作成
 * @param props
 * @constructor
 */
function NextImage(props: ImageProps){
  return <Image
    style={{ objectFit: "cover" }}
    fill
    {...props}
  />
}

export default NextImage
