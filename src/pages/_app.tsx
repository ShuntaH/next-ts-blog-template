import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { BLOG_NAME, DEFAULT_SEO } from 'lib/constants'
import React from 'react'
import theme from 'theme'
import BlurBackground from 'components/blur-background'
import GtmScript from "../components/gtm-script";
import { useGTMPageView } from "../hooks/useGtm";
import Layout from "../components/layouts/layout";
import Fuse from "fuse.js";
import { FilteredPost } from "../interfaces/post";
import { useSetupFuse } from "../hooks/useFuse";
import Head from "next/head";

DEFAULT_SEO.titleTemplate = BLOG_NAME

function MyApp({ Component, pageProps }: AppProps) {
  const { filteredPosts } = pageProps
  const fuse: Fuse<FilteredPost> = useSetupFuse(filteredPosts)
  useGTMPageView()

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <GtmScript/>
        <DefaultSeo {...DEFAULT_SEO}/>
        <BlurBackground/>
        <Layout fuse={fuse}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>

  )
}

export default MyApp
