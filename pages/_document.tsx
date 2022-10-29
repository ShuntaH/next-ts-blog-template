import { Html, Head, Main, NextScript } from 'next/document'

/**
 * pagesコンポーネントは、デフォルトで<head>、<body>を定義してくれるが、
 * これらを変更したい場合はpages/_document.jsを使う。
 * 例えば、全てのページにgoogle fontsのstyleを読み込みたい場合など.
 *
 * サーバー上でのみレンダリングされるので、onClickなどのクライアントサイド固有の処理は使えない。
 * _document.js で使用される <Head /> は、next/head と同じではない。
 * すべてのページに<head>に共通のコードのみ使用する必要がある。
 * 例えば、titleタグなどはpageまたはcomponentでnext/head を使うべき。
 *
 * **SSR(**サーバサイドレンダリング)のみの実行なので、クライアントサイドの処理を書くべきではありません。← 間違いやすいので注意してください！
 * <Main /> 内に入る外部のReactコンポーネントはブラウザによって初期化されないため、ここでアプリケーションのロジックや、styled-jsxのようなCSSを設定してはいけません。全てのページのコンポーネントに共通させたい場合は代わりにApp コンポーネントを使ってください(_app.js(tsx)に定義)
 * DocumentのgetInitialPropsは、クライアントサイドの遷移中には呼び出されず、ページが静的に最適化されている場合にも呼び出されません
 * @constructor
 */

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
