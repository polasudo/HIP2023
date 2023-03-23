import Navbar from '../components/Navbar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='p-8, mx-auto font-sans'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
