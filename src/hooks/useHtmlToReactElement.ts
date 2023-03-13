import React, { useEffect, useState } from 'react'
import { htmlToReactElements } from 'lib/markdown/client'

/**
 * html を ReactElement に変換する。
 * img と a タグは react next のコンポーネントに変換する。
 * @param htmlContent
 */
export function useHtmlToReactElements (htmlContent: string) {
  const [reactElements, setReactElements] = useState<React.ReactNode>(null)
  useEffect(() => {
    (async () => {
      const elm = await htmlToReactElements(htmlContent)
      setReactElements(elm)
    })()
  }, [htmlContent])
  return reactElements
}
