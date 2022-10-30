import Meta from './meta'
import React from "react";
import Header from "./header";
import { Container, Grid, GridItem } from "@chakra-ui/react";
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

      <Grid
        width={'100%'}
        templateAreas={
          `"main side"`
        }
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'1fr 400px'}
        gap='0'
        color='blackAlpha.700'
        fontWeight='bold'
      >

        <GridItem gridArea={'main'}>
          <Container maxWidth={'1000px'} minHeight={'calc(100vh - 160px)'}>
            <main>{children}</main>
          </Container>
        </GridItem>

        <GridItem gridArea={'side'}>
          <SideArea></SideArea>
        </GridItem>
      </Grid>

      {/*<Box>*/}
      {/*  /!*<Alert preview={preview}/>*!/*/}


      {/*height 60px*/}
      <Footer/>


    </>
  )
}

export default Layout
