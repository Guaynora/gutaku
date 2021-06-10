import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import AnimeSearchContext from "../context/AnimeSearchContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimeSearchContext>
        <Component {...pageProps} />
      </AnimeSearchContext>
    </>
  );
}

export default MyApp;
