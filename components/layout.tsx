import Footer from './footer'
import Meta from './meta'
import React from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
  return (
    <>
      <Meta/>

      {/*height 75px*/}
      <Header/>

      <Box minHeight={'calc(100vh - 135px)'}>
        {/*<Alert preview={preview}/>*/}
        <main>{children}</main>
      </Box>

      {/*height 60px*/}
      <Footer/>
    </>
  )
}

export default Layout
