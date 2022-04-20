import Underline from '../public/underline.svg'
import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import FastLinks from '../components/FastLinks'

export default function Home() {
  return (
    <main className="px-5 m-auto max-w-screen-sm md:p-0 xl:m-24">
      <Head>
        <title>Axel - Web Developer</title>
        <meta name="description" content="Axel Vasquez | Web Developer" />
      </Head>

      <div className="font-heading inline-flex flex-col justify-center h-[calc(100vh_-_4.5rem)] xl:h-auto">
        <h1 className="leading-tight text-3xl md:text-4xl">
          Hello!
          <br />
          I&apos;m Axel
          <br />
          <span className="relative text-brown-600 text-5xl sm:text-6xl md:text-[5rem]">
            Web Developer
            <Underline className="absolute top-full inset-x-0 mt-0.5 text-green-600" />
          </span>
        </h1>
      </div>

      <FastLinks className="mb-24 xl:fixed xl:w-96 xl:left-[840px] xl:bottom-0" />
      <About className="my-24" />
      <Projects className="my-24" />
      <Contact className="my-24" />
    </main>
  )
}
