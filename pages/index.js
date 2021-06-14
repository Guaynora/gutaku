import Head from "next/head";
import Layout from "../components/Layout";
import { colors } from "../styles/theme";
import AnimeCarrousel from "../components/AnimeCarrousel";
import Hero from "../components/Hero";

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
        <meta property="og:title" name="twitter:title" content="Gutaku" />
        <meta
          property="og:description"
          name="twitter:description"
          content="Hi, i'm jonathan guaynora and i created this anime website to learn react and nextjs"
        />
        <meta property="og:image" name="twitter:image" content="/meta.png" />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://www.gutaku.ml"
        />
      </Head>
      <Layout>
        <Hero />
        <h3 className="subtitle">Today Releases</h3>
        <AnimeCarrousel option="today" />
        <h3 className="subtitle">Top Airing</h3>
        <AnimeCarrousel option="airing" />
      </Layout>
      <style jsx>{`
        h3 {
          margin-top: 3rem;
          margin-left: 3.125rem;
          color: ${colors.white};
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
