import {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/layout";

export default function MyApp({Component, pageProps}: AppProps) {

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
