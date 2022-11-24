import Head from 'next/head'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Developer</title>
        <meta name='description' content='Next js application'/>
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}
