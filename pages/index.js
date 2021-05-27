import Head from 'next/head'
import Layout from '../components/Layout'
import Today from '../components/Today'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css"></link>
        <script src="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.js"></script>
      </Head>
      <Layout>
        <Today />
      </Layout>

    </div>
  )
}
