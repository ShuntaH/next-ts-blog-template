import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from "lib/constants";
import React from "react";
import theme from "theme";
import BlurBackground from "components/blur-background";
import { useToggleSearchModal } from "hooks/useKeyboradEvents";

function MyApp({ Component, pageProps }: AppProps) {
  useToggleSearchModal()
  return (
    // 本来はここに Layout のコンポーネントを置きたい。
    // 検索データを getServersideProps で取得したいので pages に書いている。
    // app.tsx でも getInitialProps を使えばサーバーサイドの処理になるが、
    // SSG では画像の最適化がされなくなるので、使わない。
    // ref: https://nextjs.org/docs/advanced-features/custom-app
    <ChakraProvider theme={theme}>
      <DefaultSeo {...DEFAULT_SEO}/>
      <BlurBackground/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
