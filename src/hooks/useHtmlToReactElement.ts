import React, { useEffect, useState } from "react";
import { devLog } from "lib/helpers";
import { htmlToReactElements } from "lib/markdown/client";


/**
 * マークダウンを表示するために react element に変換する。
 *
 * promise を返すので、post を作成する際に react element にすると その周辺の関数を切り出した時、型が Promise<Promise ...>
 * のようになってしまうので string で扱い、レンダーする直前で変換する。
 * @param htmlContent
 */
export function useHtmlToReactElements(htmlContent: string) {
  const [ reactElements, setReactElements ] = useState<React.ReactNode>(null)
  useEffect(() => {
    (async () => {
      const elm = await htmlToReactElements(htmlContent)
      devLog([ 'react content', elm ])
      setReactElements(elm)
    })()
  }, [ htmlContent ])
  return reactElements
}
