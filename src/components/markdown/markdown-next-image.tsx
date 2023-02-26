import React, { ImgHTMLAttributes } from "react";
import { Box } from "@chakra-ui/react";
import NextImage from "components/foundations/next-image";

/**
 * MarkdownのimgをNext.jsのImageコンポーネントに置き換える。
 * img の attributes が next/image と一致していないので、それに合わせたコンポーネントを作成。
 * 例えば width="100%" は img では許容されるが、next/image では許容されないので width=100 と数字に限定している。
 * @param width
 * @param height
 * @param src
 * @param alt
 * @constructor
 */
function MarkdownNextImage({ width, height, src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  if (!(typeof width === "number" || typeof width === "undefined")) {
    throw new Error(`width must be number [${width}]`)
  }

  if (!(typeof height === "number" || typeof height === "undefined")) {
    throw new Error(`height must be number [${height}]`)
  }

  if (typeof src !== "string") {
    throw new Error(`src must be string [${src}]`)
  }

  if (typeof alt !== "string") {
    throw new Error(`alt must be string [${alt}]`)
  }

  return (
    <Box>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </Box>
  )
}

export default MarkdownNextImage
