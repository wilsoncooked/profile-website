import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from '../layouts/BaseLayout'
import { Hero, About } from '../sections'
import Contact from '../sections/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wilsoncooked</title>
        <meta name="description" content="The life of Sarah Wilsoncook" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <Hero />
        <About />
        <Contact />
      </BaseLayout>
    </>
  )
}

export default Home
