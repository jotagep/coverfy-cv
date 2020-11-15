import { GetStaticProps } from "next"
import Head from "next/head"
import { getHome } from "lib/api"
import { Home } from "interfaces"

import SectionHero from "components/Sections/SectionHero"
import SectionRegister from "components/Sections/SectionRegister"
import SectionSlider from "components/Sections/SectionSlider"
import SectionDevice from "components/Sections/SectionDevice"
import SectionContent, { ItemList } from "components/Sections/SectionContent"
import SectionGarantias from "components/Sections/SectionGarantias"
import SectionOpinion from "components/Sections/SectionOpinion"
import SectionHalf from "components/Sections/SectionHalf"

type Props = {
  data: Home
  list1: ItemList[]
  list2: ItemList[]
  list3: ItemList[]
}

export default function HomePage({ data, list1, list2, list3 }: Props) {
  return (
    <div className="relative">
      <Head>
        <title>Coverfy | Todos tus seguros en el movil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionHalf />
      <SectionHero />
      <SectionDevice />
      <SectionSlider medios={data.medios} />
      <SectionContent
        title="Tus seguros,<br/> tan móviles como tú."
        list={list1}
        image="/png/02.png"
        imageOnMobile
        hasClipBg
      />
      <SectionContent
        className="mt-8"
        title="Optimiza tus pólizas,<br />sin hacer nada"
        list={list2}
        image="/png/05.png"
        isLeft
      />
      <SectionContent
        title="Personal, como debería ser."
        list={list3}
        image="/png/10.png"
        hasClipBg
        inversedClip
      />
      <SectionGarantias list={data.garantias} />
      <SectionOpinion list={data.opiniones} />
      <SectionRegister />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Get data sections from Prismic API
  const homeData = await getHome()

  // Mock SectionContent Lists
  const list1: ItemList[] = [
    {
      text: "Toda la información de tus pólizas, disponible 24h.",
    },
    {
      text: "Ayuda inmediata en emergencias y siniestros.",
    },
    {
      text: "Sin papeleo, sin estrés. Todo con un toque.",
    },
  ]

  const list2: ItemList[] = [
    {
      title: "Mejora tu precio",
      text:
        "Buscamos mejores precios y duplicidades, <br /> para que pagues menos sin reducir tus coberturas.",
    },
    {
      title: "Mejora tus coberturas",
      text: "Analizamos tu perfil y comprobamos tu grado de protección.",
    },
  ]

  const list3: ItemList[] = [
    {
      text: "Asesor titulado y con experiencia. Ah, ¡y gratis!",
    },
    {
      text: "Disponible por teléfono y email",
    },
    {
      text: "Entiende qué tienes contratado y sácale partido",
    },
  ]

  return {
    props: {
      data: homeData,
      list1,
      list2,
      list3,
    },
  }
}
