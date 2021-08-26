import { AppProps } from 'next/app'
// import 'sanitize.css'
import 'destyle.css'
import '../styles/app.css'
import { Header, Footer } from '../templates/organisms/molecules'

function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
