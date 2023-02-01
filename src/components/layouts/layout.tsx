import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Box } from "@chakra-ui/react";
import { STYLES } from "../../lib/constants";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
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
  )
}

export default Layout
