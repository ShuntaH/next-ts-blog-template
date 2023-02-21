import Fuse from "fuse.js";
import { FilteredPost } from "interfaces/post";
import React from "react";
import Header from "components/common/header";
import { Box } from "@chakra-ui/react";
import { STYLES } from "lib/constants";
import Footer from "components/common/footer";
import { FullTextSearchProvider } from "contexts/fullTextSearchContext";


type Props = {
  fuse: Promise<Fuse<FilteredPost>>
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ fuse, children }) => {
  return (
    // fuse をサーバーサイドで作成するために getStaticProps に書く。そのために _app.tsx には書かない。
    <FullTextSearchProvider fuse={fuse}>
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
    </FullTextSearchProvider>
  )
}

export default Layout
