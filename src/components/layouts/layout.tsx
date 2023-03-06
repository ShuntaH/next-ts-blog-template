import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import React from "react";
import Header from "components/header";
import { Box } from "@chakra-ui/react";
import { STYLES } from "lib/constants";
import Footer from "components/footer";
import { FuseProvider } from "contexts/fuseContext";


type Props = {
  fuse: Fuse<FilteredPost>
  children: React.ReactNode
}

function Layout({ fuse, children }: Props){
  // devLog(["fuse", fuse])
  return (
    // fuse をサーバーサイドで作成するために getStaticProps に書く。そのために _app.tsx には書かない。
    <FuseProvider fuse={fuse}>
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
        marginBottom={20}
        marginTop={72}
        padding={`${STYLES.gap}`}
      >
        {children}
      </Box>
      <Footer/>
    </FuseProvider>
  )
}

export default Layout
