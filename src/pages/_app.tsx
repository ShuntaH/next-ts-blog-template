import { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/layouts/layout";

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('app.tsx')
  // console.log('theme', theme)
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
