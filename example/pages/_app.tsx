import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import '../node_modules/react-calendar/dist/Calendar.css'
import '../node_modules/react-datepicker/dist/react-datepicker.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
