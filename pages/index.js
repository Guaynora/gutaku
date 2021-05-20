import Head from 'next/head'
import Layout from '../components/Layout'
import Today from '../components/Today'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gutaku</title>
        <meta name="description" content="page info for anime" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"></script>
      </Head>
      <Layout>
        <Today />
      </Layout>

    </div>
  )
}
