import { GetStaticProps } from "next"
import Head from "next/head"

import SectionRegister from "components/Sections/SectionRegister"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coverfy | Todos tus seguros en el movil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionRegister />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
