import React, { ImgHTMLAttributes } from "react";
import NextImage from "components/foundations/next-image";
import { Box } from "@chakra-ui/react";

/**
 * MarkdownのimgをNext.jsのImageコンポーネントに置き換える。
 * img の attributes が next/image と一致していないので、それに合わせたコンポーネントを作成。
 * 例えば width="100%" は img では許容されるが、next/image では許容されないので width=100 と数字に限定している。
 *
 * CLI対策でサイズ指定が必要だが、実際サイズを指定するのは難しい。
 * next/image の fill=ture にしたいが position: absolute width: 100% height: 100% を強制してくる
 * markdownからのDOM生成だと、親は高さをもっていないので表示されない。height 100% を上書きもできない。
 * 固定の高さを親に与えるのは難しいが、比率を決めておけば親のサイズは動的に確保できる。
 * 比率が整えば見た目も整うしこれでいくとする。
 * @param width
 * @param height
 * @param src
 * @param alt
 * @constructor
 */
function MarkdownNextImage({ width, height, src, alt }: ImgHTMLAttributes<HTMLImageElement>) {
  if (typeof width === "string") {
    throw new Error(`width must be number [${width}]`)
  }

  if (typeof height === "string") {
    throw new Error(`height must be number [${height}]`)
  }

  if (typeof src !== "string") {
    throw new Error(`src must be string [${src}]`)
  }

  if (typeof alt !== "string") {
    throw new Error(`alt must be string [${alt}]`)
  }

  return (
    <Box
      width={"full"}
      position={"relative"}
      style={width && height ? {} : { aspectRatio: '16/9' }}
    >
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
