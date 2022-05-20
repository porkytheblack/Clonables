import '../styles/globals.css'
import '../utils/antDesignStyles.less';
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/Store'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
