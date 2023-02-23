import { Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react";
import theme from "theme";

export default function Document() {
  return (
    <Html lang="en">
      <body>
      {/*もし色が変わらなかったら localstorage に入ってる theme color を消す*/}
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
