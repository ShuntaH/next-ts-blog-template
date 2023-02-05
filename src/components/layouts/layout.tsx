import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Box } from "@chakra-ui/react";
import { STYLES } from "../../lib/constants";
import { FuseProvider } from "../../contexts/searchContexts";
import Fuse from "fuse.js";
import { FilteredPost } from "../../interfaces/post";

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
            maxWidth={STYLES.contentMaxWidth}
            minHeight={`calc(100vh - ${STYLES.headerHeight} - ${STYLES.footerHeight})`}
            margin={"auto"}
            padding={`${STYLES.gap}`}
            display={"block"}
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
