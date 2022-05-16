import React, { memo } from 'react'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { Header, Footer } from '../components/orgs/index'
import 'destyle.css'
import '../styles/style.scss'
import '../styles/globals.css'

export const ProductsList = React.createContext([])

export default function App({ Component, pageProps }: AppProps) {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <title>TERRART</title>
      </Head>

      <Header />
      <NextNprogress color="#2FA597" height={4} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
