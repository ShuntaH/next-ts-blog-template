import Footer from './footer'
import Meta from './meta'
import React from "react";
import Header from "./header";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
  return (
    <>
      <Meta/>
      <Header/>
      <div>
        {/*<Alert preview={preview}/>*/}
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout
