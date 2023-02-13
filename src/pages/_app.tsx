import { AppProps } from 'next/app'
import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import theme from "theme";


function MyApp({ Component, pageProps }: AppProps) {
  const [blurOpacity, setBlurOpacity] = useState(0)

  const handleBlurOpacity = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    const calculatedOpacity = window.pageYOffset / 300
    setBlurOpacity(() => calculatedOpacity)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleBlurOpacity);
    return () => window.removeEventListener("scroll", handleBlurOpacity);
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
      <Box
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        height={"full"}
        zIndex={-10}
      >
        <Image
          position={"fixed"}
          top={0}
          right={0}
          left={0}
          width={"full"}
          height={"full"}
          htmlWidth={'100%'}
          htmlHeight={'100%'}
          src={"/assets/home-bg.png"}
          fit={"cover"}
          align={"center"}
        />
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          mixBlendMode={"normal"}
          backgroundImage={"linear-gradient(to top, rgba(30, 41, 59, 1), rgba(30, 41, 59, 0))"}
        />
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bottom={0}
          left={0}
          mixBlendMode={"normal"}
          backgroundImage={"linear-gradient(to top, rgba(30, 41, 59, 1), rgba(30, 41, 59, 1))"}
          opacity={0.6}
        />
      </Box>
      <Box
        display={"block"}
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        zIndex={-10}
        width={"full"}
        height={"full"}
        backdropFilter={'blur(40px)'}
        opacity={blurOpacity}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
