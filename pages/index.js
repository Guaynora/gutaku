import Head from "next/head";
import Layout from "../components/Layout";
import AnimeCarrousel from "../components/AnimeCarrousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gutaku</title>
        {/* general */}
        <link rel="canonical" href="https://www.gutaku.ml" />
        <meta name="author" content="Jonathan Guaynora" />
        <meta name="copyright" content="© 2021 Jonathan Guaynora" />
        {/* twitter and other red social */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Anime website made with nextjs "
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Hi, i'm jonathan guaynora and i created this anime website to learn react and nextjs"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://www.gutaku.ml"
        />
      </Head>
      <Layout>
        <h2 className="subtitle">Today Relases</h2>
        <AnimeCarrousel option="today" />
        <h2 className="subtitle">Top Airing</h2>
        <AnimeCarrousel option="airing" />
      </Layout>
    </>
  );
}
