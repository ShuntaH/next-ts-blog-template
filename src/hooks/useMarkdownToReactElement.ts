import React, { useEffect, useState } from "react";
import { markdownToReactElements } from "lib/transformMarkdown";


/**
 * マークダウンを表示するために react element に変換する。
 *
 * promise を返すので、post を作成する際に react element にすると その周辺の関数を切り出した時、型が Promise<Promise ...>
 * のようになってしまうので string で扱い、レンダーする直前で変換する。
 * @param content string な content
 */
export function useMarkdownToReactElements(content: string) {
  const [ reactElements, setReactElements ] = useState<React.ReactNode>(null)
  useEffect(() => {
    (async () => {
      const elm = await markdownToReactElements(content)
      setReactElements(elm)
    })()
  }, [])
  return reactElements
}
