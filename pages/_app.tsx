import { AppProps } from 'next/app'
// import 'sanitize.css'
import 'destyle.css'
import '../styles/style.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link href="http://fonts.cdnfonts.com/css/sf-pro-display" rel="stylesheet" />
      </Head>

      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
