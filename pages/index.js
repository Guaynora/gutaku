import Head from 'next/head'
import Layout from '../components/Layout'
import Today from '../components/Today'

export default function Home() {
  return (
    <div>
      <Layout>
        <Today />
      </Layout>

    </div>
  )
}
