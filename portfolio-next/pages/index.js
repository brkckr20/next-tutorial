import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Developer</title>
        <meta name='description' content='Next js application' />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  )
}
