import Underline from '../public/underline.svg'
import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import FastLinks from '../components/FastLinks'

export default function Home() {
  return (
    <main className="px-5">
      <Head>
        <title>Axel - Web Developer</title>
        <meta name="description" content="Axel Vasquez | Web Developer" />
      </Head>

      <div className="inline-flex flex-col justify-center h-[calc(100vh_-_4.5rem)] ">
        <h1 className="text-3xl font-heading">
          Hello!
          <br />
          I&apos;m Axel
          <br />
          <span className="relative text-brown-600 text-5xl">
            Web Developer
            <Underline className="absolute top-full inset-x-0 mt-0.5 text-green-600" />
          </span>
        </h1>
      </div>

      <FastLinks className="mb-24" />
      <About className="my-24" />
      <Projects className="my-24" />
      <Contact className="my-24" />
    </main>
  )
}
