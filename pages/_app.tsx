import { AppProps } from 'next/app'
import 'destyle.css'
import '../styles/style.scss'
import { Header, Footer } from '../components/index'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router)
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
