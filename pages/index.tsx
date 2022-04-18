import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Axel&apos;s Portfolio</title>
        <meta name="description" content="Awesome description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  )
}

export default Home
