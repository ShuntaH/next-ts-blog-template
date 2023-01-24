import { Head, Html, Main, NextScript } from 'next/document'
import theme from "../theme";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <body>
      {/*もし色が変わらなかったら localstorage に入ってる theme color を消す*/}
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
