import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Planets</title>
        <meta
          name='description'
          content='The facts for all the planents in our solar system'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
    </Layout>
  )
}
