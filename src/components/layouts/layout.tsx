import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import { FuseProvider } from "contexts/searchContexts";
import React from "react";
import Header from "components/header";
import { Box } from "@chakra-ui/react";
import { STYLES } from "lib/constants";
import Footer from "components/footer";


type Props = {
  preview?: boolean
  fuse: Fuse<FilteredPost>
  children: React.ReactNode
}

const Layout = ({ preview, fuse, children }: Props) => {
  return (
    // ほぼrootだが検索対象のデータはビルド時に決まって、そのあとは
    // 変わらないはずなので、頻繁に fuse が変わって再レンダリング
    // は走らない。よって問題ないはず。
    <FuseProvider fuse={fuse}>
      <>
          <Header/>
          {/*<Box>*/}
          {/*  /!*<Alert preview={preview}/>*!/*/}
          <Box
            as={"section"}
            position={"relative"}
            display={"block"}
            maxWidth={STYLES.contentMaxWidth}
            minHeight={`calc(100vh - ${STYLES.headerHeight} - ${STYLES.footerHeight})`}
            marginX={"auto"}
            marginBottom={12}
            marginTop={24}
            padding={`${STYLES.gap}`}
          >
            {children}
          </Box>
        
          {/*height 60px*/}
          <Footer/>
      </>
    </FuseProvider>
  )
}

export default Layout
