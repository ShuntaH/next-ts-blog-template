import React from "react";
import Header from "../header";
import Footer from "../footer";

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
      {children}
      {/*height 60px*/}
      <Footer/>
    </>
  )
}

export default Layout
