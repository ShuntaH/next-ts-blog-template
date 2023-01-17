import Meta from '../meta'
import React from "react";
import Header from "../header";
import {Container} from "@chakra-ui/react";
import Footer from "../footer";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
  return (
    <>
      <Meta/>
      <Header/>
      <Container maxWidth={'1200px'} py={12}>
      </Container>

      {/*<Box>*/}
      {/*  /!*<Alert preview={preview}/>*!/*/}


      {/*height 60px*/}
      <Footer/>


    </>
  )
}

export default Layout
