import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "theme";
import BlurBackground from "components/blur-background";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 本来はここに Layout のコンポーネントを置きたい。
    // 検索データを共通レイアウトの Layout に渡すために
    // getServersideProps 使うために pages に書いている。
    // app.tsx でも getInitialProps を使えばサーバーサイドの処理になるが、
    // SSG では画像の最適化がされなくなるので、使わない。
    // ref: https://nextjs.org/docs/advanced-features/custom-app
    <ChakraProvider theme={theme}>
      <BlurBackground/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
