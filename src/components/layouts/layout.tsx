import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Box } from "@chakra-ui/react";
import { STYLES } from "../../lib/constants";
import { SearchContext } from "../../contexts/searchContext";
import Fuse from "fuse.js";
import { FilteredPost } from "../../interfaces/post";

type Props = {
  preview?: boolean
  fuse: Fuse<FilteredPost>
  children: React.ReactNode
}

const Layout = ({ preview, fuse, children }: Props) => {
  return (
    <Box>
      <SearchContext.Provider value={fuse}>
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
      </SearchContext.Provider>
    </Box>
  )
}

export default Layout
