import { AppProps } from 'next/app'
import '../styles/app.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App