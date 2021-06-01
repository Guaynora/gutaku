import '../styles/globals.css'
import '../styles/navbar.css'
import '../node_modules/glider-js/docs/assets/js/glider.min'
import '../node_modules/glider-js/docs/assets/css/glider.css'
import '../styles/glider.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import AnimeSearchContext from '../context/AnimeSearchContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gutaku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimeSearchContext>
        <Component {...pageProps} />
      </AnimeSearchContext>
    </>
  )

}

export default MyApp
