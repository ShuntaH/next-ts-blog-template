import React from 'react';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {g
    children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

import { AppProps } from 'next/app'
// import { ChakraProvider } from "@chakra-ui/react";

// export default function MyApp({ Component, pageProps }: AppProps) {
//     return (
//         <ChakraProvider>
//             <Component {...pageProps} />
//         </ChakraProvider>
//     )
// }
//
// import { Html, Head, Main, NextScript } from 'next/document'
//
// export default function Document() {
//     return (
//         <Html lang="en">
//             <Head />
//             <body>
//             <Main />
//             <NextScript />
//             </body>
//         </Html>
//     )
// }

