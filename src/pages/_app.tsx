import { AppProps } from 'next/app'
import { ChakraProvider, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import theme from "theme";
import { STYLES } from "lib/constants";
import { useOffsetTop } from "hooks/useOffsetTop";
import { useThrottle } from "hooks/useThrottle";


function MyApp({ Component, pageProps }: AppProps) {
  const screenRef = useRef(null);
  const { pageOffsetTop, viewportTop } = useOffsetTop(screenRef);

  const handler = useThrottle(() => {
    console.log('----------------------')
    console.log('pageYOffset', window.pageYOffset)
    console.log('outerHeight', window.outerHeight)
  }, 100); // 100msに一度実行

  useEffect(() => {
    // マウント時にも実行
    window.addEventListener("scroll", handler);
    // handler();
    console.log('scroll event', window)
    // アンマウント時にイベントリスナーを解除
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
      <Image
        zIndex={-10}
        position={"absolute"}
        top={0}
        height={`calc(100vh - ${STYLES.footerHeight})`}
        htmlWidth={'100%'}
        htmlHeight={'100%'}
        src={"/assets/home-bg.png"}
        fit={"cover"}
        align={"center"}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
