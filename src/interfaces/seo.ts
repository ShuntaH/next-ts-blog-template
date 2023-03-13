import { NextSeoProps, OpenGraph } from 'next-seo/lib/types'

export type PageSeoOpenGraph = Pick<OpenGraph, 'title' | 'description' | 'url'>
export type PageSeo = {
  openGraph: PageSeoOpenGraph
} & Pick<NextSeoProps, 'title' | 'description'>
