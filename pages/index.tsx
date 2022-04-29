import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Underline from '/public/underline.svg'
import About from '/components/About'
import Projects from '/components/Projects'
import Contact from '/components/Contact'
import FastLinks from '/components/FastLinks'
import Cursor from '/components/Cursor'
import Footer from '/components/Footer'
import getData from '/lib/getData'

interface Props {
  data: PageData
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <main className="px-5 m-auto max-w-screen-sm md:p-0 xl:m-24">
      <Head>
        <title>Axel - Web Developer</title>
        <meta name="description" content="Axel Vasquez | Web Developer" />
      </Head>

      <div className="font-heading inline-flex flex-col justify-center h-[75vh] xl:h-auto">
        <h1 className="leading-tight text-3xl md:text-4xl">
          Hello!
          <br />
          I&apos;m Axel
          <br />
          <span className="relative text-brown-600 dark:text-gray-50 text-[2.6rem] sm:text-6xl md:text-[5rem]">
            Web Developer
            <Underline className="absolute top-full inset-x-0 mt-0.5 text-green-600 dark:text-rose-200" />
          </span>
        </h1>
      </div>

      <FastLinks data={data} className="mb-24 xl:fixed xl:w-96 xl:left-[840px] xl:bottom-0" />
      <About data={data} className="my-24" />
      <Projects data={data} className="my-24" />
      <Contact data={data} className="my-24" />
      <Footer data={data} className="my-24" />

      <Cursor />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      data: getData(locale || 'en'),
    },
  }
}

export default Home
