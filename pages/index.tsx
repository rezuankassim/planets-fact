import Head from 'next/head'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='font-spartan min-h-screen h-screen bg-theme-dark-blue'>
      <Head>
        <title>The Planets</title>
        <meta
          name='description'
          content='The facts for all the planents in our solar system'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <Header />
    </div>
  )
}
