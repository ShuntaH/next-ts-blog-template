import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "theme";
import BlurBackground from "components/blur-background";
import 'prismjs/themes/prism-tomorrow.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 本来はここに Layout のコンポーネントを置きたい。
    // 全文検索するクラスインスタンスを全ページで使うので、
    // 事前に1回だけ作って useContext で管理したい。
    // インスタンスを作るためには全ての記事を取得している必要がある。
    // 記事を取得するのはサーバーサイドで行われる getStaticProps。
    // しかし getStaticProps は _app.tsx では書けない。
    // app.tsx でも getInitialProps を使えばサーバーサイドの処理になるが、
    // SSG では画像の最適化がされなくなるので、使わない。
    // ref: https://nextjs.org/docs/advanced-features/custom-app
    // pages のコンポーネントなら getStaticProps が呼べるので、記事が取得できる。
    // pages のコンポーネントの一番最初に毎回 layout を置いている。
    // layout の中に Context.Provider を起き、
    // それで fuse インスタンス を任意の場所で受け取る。
    <ChakraProvider theme={theme}>
      <BlurBackground/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
