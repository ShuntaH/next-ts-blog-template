import Fuse from 'fuse.js'
import { FilteredPost } from 'interfaces/post'
import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { FuseProvider } from 'contexts/fuseContext'

interface Props {
  fuse: Fuse<FilteredPost>
}

function Layout ({ fuse }: Props) {
  return (
    // fuse をサーバーサイドで作成するために getStaticProps に書く。
    // そのために _app.tsx には書かない。
    <FuseProvider fuse={fuse}>
      <Header/>

      <Footer/>
    </FuseProvider>
  )
}

export default Layout
