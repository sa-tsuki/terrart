import { AppProps } from 'next/app'
import '../styles/app.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <div>これ全ページに反映？</div>
  <Component {...pageProps} />
  </>
  )
}

export default App