import React, { memo } from 'react'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { Header, Footer } from '../components/orgs/index'
import 'destyle.css'
import '../styles/style.scss'
import '../styles/globals.css'

export const ProductsList = React.createContext([])

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="http://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <NextNprogress color="#2FA597" height={4} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default memo(App)
