import Meta from './meta'
import React from "react";
import Header from "./header";
import {Container, Grid, GridItem} from "@chakra-ui/react";
import SideArea from "./side-area";
import Footer from "./footer";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
  return (
    <>
      <Meta/>

      {/*height 100px*/}
      <Header/>

      <Container maxWidth={'1200px'} py={12}>
        <Grid
          gridTemplateRows={'1fr'}
          gridTemplateColumns={'1fr 30%'}
          gap='2'
          color='blackAlpha.700'
        >
          <GridItem gridArea={'main'} minHeight={'calc(100vh - 160px)'}>
            <main>{children}</main>
          </GridItem>

          <GridItem gridArea={'side'}>
            <SideArea></SideArea>
          </GridItem>
        </Grid>

      </Container>

      {/*<Box>*/}
      {/*  /!*<Alert preview={preview}/>*!/*/}


      {/*height 60px*/}
      <Footer/>


    </>
  )
}

export default Layout
