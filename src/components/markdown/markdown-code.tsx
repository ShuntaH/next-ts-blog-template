import { chakra, Code } from '@chakra-ui/react'
import React, { HTMLAttributes } from 'react'

// chakra 方式でスタイルの付け方に変えているだけ。
// デフォルトのスタイルがついている Code と区別する。
const CodeStyledByChakra = chakra('code')

function MarkdownCode ({ className, children }: HTMLAttributes<HTMLElement>) {
  return (
    className?.startsWith('language-') ?
      // class nameがlanguage-から始まる場合は、コードブロックでシンタックスハイライトが
      // 適用される pre タグの中にある code。そのまま prism の css をあてる。
      <CodeStyledByChakra
        className={className}
        backgroundColor={'unset !important'} // prismjsではなく prism-themes の css を使う場合は、bg を unset が必要。
        fontWeight={'bold !important'}
      >
        {children}
      </CodeStyledByChakra>
      :
      // コードブロックではなくインラインコードがくる。
      // シンタックスハイライトは当てないので、独自のスタイルをあてる。
      <Code
        colorScheme={'teal'}
        variant={'subtle'}
      >
        {children}
      </Code>
  )
}

export default MarkdownCode
