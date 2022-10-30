import Meta from './meta'
import React from "react";
import Header from "./header";
import { Grid, GridItem } from "@chakra-ui/react";
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
      <Grid
        width={'100%'}
        marginInline={'auto'}
        templateAreas={
          `"header header"
            "main side"
            "footer footer"`
        }
        gridTemplateRows={'100px 1fr 60px'}
        gridTemplateColumns={'1fr 400px'}
        gap='4'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem gridArea={'header'} as={"header"}>
          {/*height 100px*/}
          <Header/>
        </GridItem>
        <GridItem gridArea={'main'} minHeight={'calc(100vh - 160px)'}>
          <main>{children}</main>
        </GridItem>
        <GridItem gridArea={'side'}>
          <SideArea></SideArea>
        </GridItem>
        <GridItem gridArea={'footer'}>
          {/*height 60px*/}
          <Footer/>
        </GridItem>
      </Grid>

      {/*<Box>*/}
      {/*  /!*<Alert preview={preview}/>*!/*/}


      {/*</Box>*/}


    </>
  )
}

export default Layout
