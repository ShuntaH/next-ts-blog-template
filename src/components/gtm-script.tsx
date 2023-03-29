import React from 'react'
import Script from "next/script";
import { GTM_ID } from "../lib/gtm";
import { useGtm } from "../hooks/useGtm";


/**
 * Google Tag Manager - Global base code
 */
function GtmScript() {
  !GTM_ID && console.warn(
    `GTM_ID is not set.` +
     ' Please set NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID in .env.local')
  useGtm();

  return (
    GTM_ID ?
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      /> :
      null
  )
}

export default GtmScript
