import { Head, Html, Main, NextScript } from 'next/document'
import { BLOG_DISCRIPTION } from "../lib/constants";
import theme from "../theme";
import { ColorModeScript } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          {BLOG_DISCRIPTION}
        </title>
      </Head>

      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  )
}
